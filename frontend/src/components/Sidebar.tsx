import {FiInstagram, FiMenu} from "solid-icons/fi";
import {onMount} from "solid-js";
import marble_texture from "../assets/marble_texture.jpg";
import villaliu from "../assets/villaliu.png";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollToPlugin)
const Sidebar = () => {
    onMount(() => {
        gsap.set(".sidebar", {x: "100%"})
        gsap.set(".backdrop", {opacity: 0, display: "none"})
    })

    const show_sidebar = (start: boolean) => {
        const timeline = gsap.timeline()
        if (start) gsap.set(".backdrop", {display: "block"})

        timeline.to(".sidebar", {
            x: start ? "0%" : "100%",
            duration: .5,
            ease: "power2.out"
        }, 0)

        timeline.to(".backdrop", {
            opacity: start ? 1 : 0,
            duration: .5,
            ease: "power2.out",
            onComplete: () => {
                if (!start) gsap.set(".backdrop", {display: "none"})
            }
        }, 0)
    }

    return (
        <>
            <section
                onmouseenter={() => show_sidebar(true)}
                class="fixed z-10 w-fit h-fit right-4 top-4">
                <button><FiMenu class={"size-8"}/></button>
            </section>

            <section
                onmouseleave={() => show_sidebar(false)}
                class="sidebar top-0 right-0 fixed p-4 font-[Big_Shoulders] text-right flex flex-col space-y-4 font-medium text-5xl z-20 w-fit h-screen">
                <a href="/"><img class={"w-[18rem] mx-auto"} src={villaliu} alt="villaliu logo"/></a>
                <button
                    onclick={() => {
                        if (location.pathname === "/") {
                            gsap.to(window, {duration: 1, ease: "sine.inOut", scrollTo: "#aboutus"})
                        } else {
                            location.assign("/#aboutus")
                        }
                    }}
                    class={"hover:underline text-right"}>&gt; about us</button>
                <a href="/portfolios" class={"hover:underline"}>&gt; portfolios</a>
                <a href="#" class={"hover:underline"}>&gt; business inquiry</a>
                <a href="#" class={"hover:underline"}>&gt; Q + A</a>

                <div class="absolute bottom-0 left-4 text-2xl text-left">
                    <a  class={"flex items-center gap-x-1 text-2xl hover:underline"}
                        href="https://instragram.com/media.vc" target={"_blank"}><FiInstagram/>media.vc</a>
                    <a  class={"flex items-center gap-x-1 text-2xl hover:underline"}
                        href="https://instragram.com/nathanxphoto" target={"_blank"}><FiInstagram/>nathanxphoto</a>
                </div>
                <img src={marble_texture} alt="background texture" class={"absolute top-0 left-0 w-full h-full -z-10"}/>
            </section>

            <div class="backdrop fixed z-10 backdrop-blur-sm bg-black/40 top-0 left-0 h-screen w-screen"/>
        </>
    )
}

export default Sidebar;