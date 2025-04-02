import {Draggable} from "gsap/Draggable";
import {gsap} from 'gsap';
import {onMount} from "solid-js";

gsap.registerPlugin(Draggable)
const Carousel = () => {
    // const item_width = 100

    onMount(() => {
        const gallery_container_left = document.querySelector(".gallery-container")!.getBoundingClientRect().left
        const gallery_container_right = document.querySelector(".gallery-container")!.getBoundingClientRect().right

        Draggable.create(".gallery-item"!, {
            type: "x",
            bounds: ".gallery-container"!,
            onDrag: (event) => {
                const object_left = event.target.getBoundingClientRect().left
                const object_right = event.target.getBoundingClientRect().right
                console.log(object_left - gallery_container_left)
            }
        })
    })

    return (
        <div class={"gallery-container relative w-[300px] h-[100px] border-black border-2 mx-auto"}>
            <div class={`absolute gallery-item w-[100px] h-[100px] bg-black/50`}></div>
        </div>
    )
}

export default Carousel