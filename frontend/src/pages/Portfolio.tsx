import Sidebar from "../components/Sidebar.tsx";
import stone_texture from "../assets/stone_texture.jpg";
import leo_pfp from "../assets/leo_pfp.jpg"
import nathan_pfp from "../assets/nathan_pfp.jpg"
import {gsap} from "gsap";
import {onMount} from "solid-js";

const Portfolios = () => {
    onMount(() => {
        document.title = "Portfolios"
        gsap.set(".leo-backdrop", {opacity: 0})
        gsap.set(".leo-text", {opacity: 0})

        gsap.set(".nathan-backdrop", {opacity: 0})
        gsap.set(".nathan-text", {opacity: 0})
    })


    const hover_animation = (backdrop: string, text: string, start: boolean) => {
        const timeline = gsap.timeline({defaults: {ease: "power2.out", duration: .25}})

        timeline.to(backdrop, {
            opacity: start ? 1 : 0
        }, 0)
        timeline.to(text, {
            opacity: start ? 1 : 0
        }, .4)
    }

    return (
        <>
            <Sidebar/>
            <section class={"relative flex flex-col p-4 w-full h-screen font-[Big_Shoulders]  text-7xl"}>
                <header class={"mx-auto w-fit font-medium tracking-wide"}>p o r t f o l i o s .</header>
                <hr class={"border-2 my-4"}/>

                <section class="flex mx-auto my-auto h-[70%] overflow-hidden tracking-widest text-white/60">
                    <div onmouseenter={() => hover_animation(".leo-backdrop", ".leo-text", true)}
                         onmouseleave={() => hover_animation(".leo-backdrop", ".leo-text", false)}
                         class={"relative aspect-square overflow-hidden w-fit"}>
                        <img src={leo_pfp} alt="leo pfp"/>
                        <a href={"/portfolios/leo"} class={"leo-backdrop absolute flex items-center justify-center top-0 left-0 w-full h-full bg-black/50 backdrop-blur"}>
                            <h1 class={"leo-text"}>Leo</h1>
                        </a>
                    </div>
                    <div onmouseenter={() => hover_animation(".nathan-backdrop", ".nathan-text", true)}
                         onmouseleave={() => hover_animation(".nathan-backdrop", ".nathan-text", false)}
                         class={"relative aspect-square overflow-hidden w-fit"}>
                        <img src={nathan_pfp} alt="nathan pfp"/>
                        <a href={"/portfolios/nathan"} class={"nathan-backdrop absolute flex items-center justify-center top-0 left-0 w-full h-full bg-black/50 backdrop-blur"}>
                            <h1 class={"nathan-text"}>Nathan</h1>
                        </a>
                    </div>
                </section>

                <img class={"absolute w-full h-full top-0 left-0 object-cover w-full h-full -z-10"} src={stone_texture} alt="background texture"/>
            </section>
        </>
    )
}

export default Portfolios;