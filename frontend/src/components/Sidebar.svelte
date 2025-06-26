<script lang="ts">
    import {onDestroy, onMount} from "svelte";
    import Icon from "@iconify/svelte";
    import {gsap} from "gsap";

    let menu_open = $state(false);
    let button: HTMLElement;
    let sidebar: HTMLElement;
    let backdrop: HTMLElement;

    onMount(() => {
        gsap.set(backdrop, {
            display: "none",
            backdropFilter: "blur(0px)",
            opacity: 0
        })
        gsap.set(sidebar, {
            xPercent: 100
        })

        document.addEventListener("click", handle_click_off)

        onDestroy(() => {
            document.removeEventListener("click", handle_click_off)
        })
    })

    $effect(() => {
        if (menu_open) {
            const timeline = gsap.timeline()
            gsap.set(backdrop, {display: "block"})

            timeline.to(sidebar, {
                xPercent: 0,
                duration: .4,
                ease: "power2.out"
            }, 0)
            timeline.to(backdrop, {
                opacity: 1,
                backdropFilter: "blur(10px)",
                duration: .4,
                ease: "power2.out"
            }, 0)
        } else {
            const timeline = gsap.timeline()

            timeline.to(sidebar, {
                xPercent: 100,
                duration: .4,
                ease: "power2.out"
            }, 0)
            timeline.to(backdrop, {
                opacity: 0,
                backdropFilter: "blur(0px)",
                duration: .4,
                ease: "power2.out",
                onComplete: () => {gsap.set(backdrop, {display: "none"})}
            }, .2)
        }
    })

    const handle_click_off = (event: Event) => {
        const target = event.target as Node;

        if (menu_open && !sidebar.contains(target) && !button.contains(target)) {
            menu_open = false;
        }
    }
</script>


<button bind:this={button} class="fixed top-4 right-4 z-30"
        onclick={() => menu_open = !menu_open}
>
    <Icon class="size-12" icon="material-symbols:menu-rounded" />
</button>

<section bind:this={sidebar} class="fixed w-fit h-screen top-0 right-0 p-8 z-20 bg-[#f9f9f9]">
    <ul class="mt-12 text-right text-5xl space-y-6">
        <li><a href="/about">> about us</a></li>
        <li><a href="/portfolios">> portfolios</a></li>
        <li><a href="/business">> business inquiry</a></li>
    </ul>
</section>

<div bind:this={backdrop} class="fixed w-screen h-screen z-10 bg-black/30"></div>