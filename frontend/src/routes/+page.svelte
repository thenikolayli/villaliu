<script>
    import Sidebar from "$lib/Sidebar.svelte";
    import {onMount} from "svelte";
    import Icon from "@iconify/svelte";

    onMount(() => {
        document.title = "Villaliu"
    })
</script>

<Sidebar/>

<main class="relative w-full h-screen flex flex-col items-start">
    <div class="flex-1"></div>
    <hr class="border-2 mb-4 w-full">
    <img class="w-full lg:w-[70%] px-4 mb-4 object-contain" src="/villaliu.png" alt="Logo">

    <img class="absolute top-0 left-0 -z-10 w-full h-full object-cover" src="/tiling.jpg" alt="tiling background">
</main>

<main id="aboutus" class="relative w-full lg:h-screen min-h-screen p-8">
    <h1 class="tracking-[1rem] lg:tracking-[2rem] text-6xl lg:text-8xl font-light">contact us.</h1>
    <hr class="w-full mt-4 border-2 mx-auto">

    <div class="mx-auto w-full lg:pl-8 lg:flex">
        <img class="block mt-4 w-full lg:w-auto h-[80vh] object-cover" src="/aboutus.jpg" alt="About us photo">

        <div class="lg:p-8">
            <div class="w-full 2xl:w-fit">
                <h1 class="text-7xl 2xl:text-8xl mb-4">Nathan</h1>
                <ul class="space-y-4 text-3xl lg:text-5xl text-text-muted">
                    <li class="flex items-center">
                        <Icon icon="solar:phone-bold"/>
                        <a href="tel:+6692789992" class="hover:underline ml-2 font-light">(669) 278-9992</a>
                    </li>
                    <li class="flex items-center">
                        <Icon icon="material-symbols:mail-rounded"/>
                        <a href="mailto:Nathanmliu826@gmail.com" class="hover:underline ml-2 font-light">Nathanmliu826@gmail.com</a>
                    </li>
                    <li class="flex items-center">
                        <Icon icon="mdi:instagram"/>
                        <a href="https://instagram.com/nathanxphotos" target="_blank" class="ml-2 hover:underline font-light">@nathanxphotos</a>
                    </li>
                </ul>
            </div>

            <div class="w-full 2xl:w-fit mt-8">
                <h1 class="text-7xl 2xl:text-8xl mb-4">Leo</h1>
                <ul class="space-y-4 text-3xl lg:text-5xl text-text-muted">
                    <li class="flex items-center">
                        <Icon icon="solar:phone-bold"/>
                        <a href="tel:+4254198568" class="hover:underline ml-2 font-light">(425) 419-8568</a>
                    </li>
                    <li class="flex items-center">
                        <Icon icon="material-symbols:mail-rounded"/>
                        <a href="mailto:leovillarrealcarriedo@gmail.com" class="hover:underline ml-2 font-light">leovillarrealcarriedo@gmail.com</a>
                    </li>
                    <li class="flex items-center">
                        <Icon icon="mdi:instagram"/>
                        <a href="https://instagram.com/media.vc" target="_blank" class="ml-2 hover:underline font-light">@media.vc</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <img class="absolute top-0 left-0 -z-10 w-full h-full object-cover" src="/tiling.jpg" alt="tiling background">
</main>

<main class="relative w-full h-fit lg:h-screen p-8">
    <h1 class="tracking-[1rem] lg:tracking-[2rem] text-6xl lg:text-8xl font-light">our mission.</h1>
    <hr class="w-full mt-4 border-2 mx-auto">
    <h1 class="text-2xl lg:text-5xl mt-4 leading-[2rem] lg:leading-[1.2em] text-text-muted">
        Our mission is to provide our clients with quality pictures that will leave them in awe.
        We hope to bring smiles to the photographed and their families as
        we take pictures for their special events.
    </h1>
    <h1 class="tracking-[1rem] lg:tracking-[2rem] text-6xl lg:text-8xl font-light mt-4">reviews.</h1>
    <hr class="w-full mt-4 border-2 mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 p-8 gap-8 text-text-muted">

        <div class="w-full flex flex-col items-center">
            <h1 class="text-3xl md:text-4xl xl:5xl">
                “So well done! Instructions are well
                understood. I love the style of pictures”
            </h1>
            <ul class="flex mt-2 space-x-2 text-text">
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star" icon="ic:baseline-star" /></li>
            </ul>
        </div>

        <div class="w-full flex flex-col items-center">
            <h1 class="text-3xl md:text-4xl lg:5xl">
                “High Quality Photography”
            </h1>
            <ul class="flex mt-2 space-x-2 text-text">
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star text-bg-dark" icon="ic:baseline-star" /></li>
            </ul>
        </div>

        <div class="lg:col-span-2 w-full flex flex-col items-center">
            <h1 class="text-3xl md:text-4xl xl:5xl">
                “Good Pics”
            </h1>
            <ul class="flex mt-2 space-x-2 text-text">
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star" icon="ic:baseline-star" /></li>
                <li><Icon class="star text-bg-dark" icon="ic:baseline-star" /></li>
            </ul>
        </div>

    </div>

    <img class="absolute top-0 left-0 -z-10 w-full h-full object-cover" src="/tiling.jpg" alt="tiling background">
</main>