<script lang="ts">
    import {onMount} from "svelte";
    import {gsap} from "gsap";
    import Sidebar from "$lib/Sidebar.svelte";

    let leobg: HTMLElement;
    let leotext: HTMLElement;
    let nathanbg: HTMLElement;
    let nathantext: HTMLElement;

    onMount(() => {
        document.title = "Portfolios"
    })

    const hover_animation = (bg: HTMLElement, text: HTMLElement, start: boolean) => {
        if (start) {
            gsap.to(bg, {
                filter: "blur(10px)",
                duration: .5,
                ease: "power2.out"
            })
            gsap.to(text, {
                opacity: .5,
                duration: .5,
                ease: "power2.out"
            })
        } else {
            gsap.to(bg, {
                filter: "blur(0px)",
                duration: .5,
                ease: "power2.out"
            })
            gsap.to(text, {
                opacity: 1,
                duration: .5,
                ease: "power2.out"
            })
        }
    }
</script>

<main class="w-full min-h-screen p-8">
    <h1 class="tracking-[1rem] lg:tracking-[2rem] text-6xl lg:text-8xl font-light">portfolios.</h1>
    <hr class="w-full mt-4 border-2 mx-auto">

    <div class="relative grid grid-cols-1 xl:grid-cols-2 mt-4 h-[160vh] xl:h-[80vh] text-white container w-fit mx-auto">
        <a href="/portfolios/leo" class="relative h-full flex items-center justify-center bg-black overflow-hidden container"
             on:mouseenter={() => hover_animation(leobg, leotext, true)}
             on:mouseleave={() => hover_animation(leobg, leotext, false)}
        >
            <div class="absolute z-10 w-full h-full bg-transparent"></div>
            <img bind:this={leobg} class="relative z-0 object-cover h-full w-full" src="/leo/leopfp.jpg" alt="leo">
            <h1 bind:this={leotext} class="absolute z-20 text-6xl w-fit text-bg-light">leo</h1>
        </a>

        <a href="/portfolios/nathan" class="relative h-full flex items-center justify-center bg-black overflow-hidden container"
           on:mouseenter={() => hover_animation(nathanbg, nathantext, true)}
           on:mouseleave={() => hover_animation(nathanbg, nathantext, false)}
        >
            <div class="absolute z-10 w-full h-full bg-transparent"></div>
            <img bind:this={nathanbg} class="relative z-0 object-cover h-full w-full" src="/nathan/nathanpfp.jpg" alt="nathan">
            <h1 bind:this={nathantext} class="absolute z-20 text-6xl w-fit text-bg-light">nathan</h1>
        </a>
    </div>

    <img class="absolute top-0 left-0 -z-10 w-full h-full object-cover" src="/tiling.jpg" alt="tiling background">
</main>

<Sidebar/>