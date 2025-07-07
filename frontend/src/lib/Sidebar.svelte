<script lang="ts">
    import {onDestroy, onMount} from "svelte";
    import Icon from "@iconify/svelte";
    import {gsap} from "gsap";
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
    import {goto} from "$app/navigation";

    let menu_open = $state(false);
    let button: HTMLElement;
    let sidebar: HTMLElement;
    let backdrop: HTMLElement;

    gsap.registerPlugin(ScrollToPlugin)
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

    const about_click = () => {
        if (location.pathname !== "/") {
            goto("/#aboutus")
        } else {
            gsap.to(window, {
                scrollTo: "#aboutus",
                duration: 1,
                ease: "power2.out",
            })
        }
        menu_open = false;
    }

    const home_click = () => {
        if (location.pathname !== "/") {
            goto("/")
        } else {
            gsap.to(window, {
                scrollTo: 0,
                duration: 1,
                ease: "power2.out",
            })
        }
        menu_open = false;
    }
</script>


<button bind:this={button} class="fixed top-4 right-4 z-30 backdrop-blur-xs"
        onclick={() => menu_open = !menu_open}
>
    <Icon class="size-12" icon="material-symbols:menu-rounded" />
</button>

<section bind:this={sidebar} class="fixed w-fit h-screen top-0 right-0 p-8 z-20 bg-[#f9f9f9]">
    <button onclick={home_click}><img class="mt-12 object-cover w-[20vw]" src="/villaliu.png" alt="logo"></button>
    <ul class="mt-4 text-right text-5xl space-y-6">
        <li><button class="hover:underline" onclick={about_click}>> about us</button></li>
        <li><a class="hover:underline" href="/portfolios">> portfolios</a></li>
        <li><a class="hover:underline" href="/business">> business inquiry</a></li>
    </ul>
</section>

<div bind:this={backdrop} class="fixed w-screen h-screen z-10 bg-black/30"></div>