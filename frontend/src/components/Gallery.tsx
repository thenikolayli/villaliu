import {Draggable} from "gsap/Draggable";
import {gsap} from 'gsap';
import horizontalLoop from "../utils/HorizontalLoop.tsx";
import {onMount} from "solid-js";

gsap.registerPlugin(Draggable)
const Gallery = (images: any[]) => {
    onMount(() => {
        let activeElement: any;
        const items = gsap.utils.toArray(".gallery-item")
        horizontalLoop(items, {
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
        <div class={"gallery-container w-[80%] h-[80%] flex m-auto overflow-hidden"}>
            {Object.values(images["images"]).map((image: any) => (
                <div class="gallery-item cursor-pointer aspect-square bg-black/50">
                    <img class={"object-fill"} src={image.default} alt="image"/>
                </div>
            ))}
        </div>
    )
}

export default Gallery