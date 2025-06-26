<script lang="ts">
    import '../app.css';
    import {onMount} from "svelte";
    import type Lenis from "lenis";

    let { children } = $props();
    let lenis: Lenis;

    onMount(async () => {
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;
        const ScrollTriggerModule = await import("gsap/ScrollTrigger");
        const ScrollTrigger = ScrollTriggerModule.default;
        const LenisModule = await import("lenis");
        const Lenis = LenisModule.default;

        lenis = new Lenis();
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })
        gsap.ticker.lagSmoothing(0);
    })
</script>

{@render children()}