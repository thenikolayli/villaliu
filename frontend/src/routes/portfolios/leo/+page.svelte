<script lang="ts">
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import {Draggable} from "gsap/dist/Draggable";
    import Sidebar from "$lib/Sidebar.svelte";
    import {horizontalLoop} from "$lib/HorizontalLoop";

    let active_element: HTMLElement;
    let wrapper: HTMLElement;
    let boxes: HTMLElement[];

    onMount(() => {
        document.title = "leo's Porfolio";
        gsap.registerPlugin(Draggable)

        boxes = gsap.utils.toArray(".box");
        wrapper = document.querySelector(".wrapper")!;

        const loop = horizontalLoop(boxes, {
            paused: true,
            draggable: true,
            center: true,
            onChange: (element: HTMLElement, index: number): void => {
                active_element && active_element.classList.remove("active");
                element.classList.add("active");
                active_element = element;
            }
        })

        boxes.forEach((box: HTMLElement, index: number): void => {
            box.addEventListener("click", (): void => {
                loop.toIndex(index, {duration: .8, ease: "power2.inOut"});
            })
        })
    })
</script>

<main class="relative w-full h-screen p-8">
    <h1 class="tracking-[1rem] lg:tracking-[2rem] text-6xl lg:text-8xl font-light">leo's portfolio.</h1>
    <hr class="w-full mt-4 border-2 mx-auto">

    <div class="wrapper h-[80vh] w-full mt-4 flex overflow-hidden bg-black">
        <img class="box object-contain h-full" src="/leo/pic1.jpg" alt="picture 1">
        <img class="box object-contain h-full" src="/leo/pic2.jpg" alt="picture 2">
        <img class="box object-contain h-full" src="/leo/pic3.jpg" alt="picture 3">
        <img class="box object-contain h-full" src="/leo/pic4.jpg" alt="picture 4">
        <img class="box object-contain h-full" src="/leo/pic5.jpg" alt="picture 5">
        <img class="box object-contain h-full" src="/leo/pic6.jpg" alt="picture 6">
        <img class="box object-contain h-full" src="/leo/pic7.jpg" alt="picture 7">
        <img class="box object-contain h-full" src="/leo/pic8.jpg" alt="picture 8">
        <img class="box object-contain h-full" src="/leo/pic9.jpg" alt="picture 9">
    </div>

    <img class="absolute top-0 left-0 -z-10 w-full h-full object-cover" src="/tiling.jpg" alt="tiling background">
</main>

<Sidebar/>