<script>
    import {onMount} from "svelte";
    import Sidebar from "$lib/Sidebar.svelte";

    let width = $state(640)

    onMount(() => {
        document.title = "Business Inquiry"

        if (innerWidth <= 640) {
            width = 400
        }
    })
</script>

<Sidebar/>

<main class="relative w-full min-h-screen p-8 overflow-x-hidden">
    <h1 class="tracking-[1rem] lg:tracking-[2rem] text-6xl lg:text-8xl font-light">business inquiry.</h1>
    <hr class="w-full mt-4 border-2 mx-auto">

    <div class={`w-[${width}px] mx-auto mt-8 flex flex-col items-center justify-center`}>
        <h1 class="text-3xl lg:text-5xl text-center text-text-muted">
            Interested in our business?
            <br>
            Fill this Google form out and we'll reach out to you as soon as possible!
        </h1>

        <iframe class="mt-8" src="https://docs.google.com/forms/d/e/1FAIpQLSctn14b1qu-atVIb61DtEGlqGsZxTKYM-umDKF1SU-12i6NxQ/viewform?embedded=true" width={width} height="1200">
            Loading...
        </iframe>
    </div>

    <img class="absolute top-0 left-0 -z-10 w-full h-full object-cover" src="/tiling.jpg" alt="tiling background">
</main>