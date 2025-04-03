import {Draggable} from "gsap/Draggable";
import {gsap} from 'gsap';
import horizontalLoop from "../utils/HorizontalLoop.tsx";
import {onMount} from "solid-js";

gsap.registerPlugin(Draggable)
const Gallery = () => {
    const item_width = 10
    const item_height = 12

    onMount(() => {
        let activeElement: any;
        const items = gsap.utils.toArray(".gallery-item")
        const loop = horizontalLoop(items, {
            paused: true,
            draggable: true,
            center: true,
            onChange: (element: any) => {
                activeElement && activeElement.classList.remove("active");
                element.classList.add("active");
                activeElement = element;
            }
        })
    })

    return (
        <div class={"gallery-container w-1/2 flex h-fit mx-auto border-black border-2"}>
            <div class={"gallery-item cursor-pointer w-[1rem] h-[1rem] border-2 bg-black/50"}>3</div>
            <div class={"gallery-item cursor-pointer w-[24rem] h-[20rem] bg-black/50"}>2</div>
            <div class={"gallery-item cursor-pointer w-[24rem] h-[20rem] bg-black/50"}>3</div>
            <div class={"gallery-item cursor-pointer w-[24rem] h-[20rem] bg-black/50"}>4</div>
            <div class={"gallery-item cursor-pointer w-[24rem] h-[20rem] bg-black/50"}>5</div>
        </div>
    )
}

export default Gallery