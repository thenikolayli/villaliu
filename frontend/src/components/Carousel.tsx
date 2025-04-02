import {Draggable} from "gsap/Draggable";
import {gsap} from 'gsap';
import {onMount} from "solid-js";

gsap.registerPlugin(Draggable)
const Carousel = () => {
    // const item_width = 100

    onMount(() => {
        const gallery_container_left = document.querySelector(".gallery-inner-container")!.getBoundingClientRect().left
        const left_bound = gallery_container_left - 100 // when the element is fully outside of the inner container
        const right_bound = document.querySelector(".gallery-inner-container")!.getBoundingClientRect().right

        Draggable.create(".gallery-item"!, {
            type: "x",
            bounds: ".gallery-container"!,
            onDrag: (self) => {
                let element_left = self.target.getBoundingClientRect().left;
                let element_x = element_left;

                console.log(element_x, left_bound, right_bound);
                gsap.set(self.target, {x: element_x})
            }
        })
    })

    return (
        <div class={"gallery-container relative w-[600px] h-[100px] border-black border-2 mx-auto"}>
            <div class={"gallery-inner-container relative w-[300px] h-[100px] border-black border-2 mx-auto"}>
                <div class={`absolute gallery-item w-[100px] h-[100px] bg-black/50`}></div>
            </div>
        </div>
    )
}

export default Carousel