import Sidebar from "../components/Sidebar.tsx";
import stone_texture from "../assets/stone_texture.jpg";
import {onMount} from "solid-js";
import Gallery from "../components/Gallery.tsx";

const NathanPortfolio = () => {
    const images = import.meta.glob("../assets/nathan_gallery_images/*.{jpg, png}", {eager: true})

    onMount(() => document.title = "Villaliu - Nathan");

    return (
        <>
            <Sidebar/>
            <section class={"relative w-full h-screen p-4 flex flex-col font-[Big_Shoulders]"}>
                <header class="text-7xl mx-auto w-fit">Nathan</header>
                <hr class="border-2 my-2"/>
                <Gallery images={images}/>

                <img class={"absolute w-full h-full top-0 left-0 object-cover w-full h-full -z-10"} src={stone_texture} alt="background texture"/>
            </section>
        </>
    )
}

export default NathanPortfolio;