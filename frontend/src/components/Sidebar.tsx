import {FiInstagram, FiMenu} from "solid-icons/fi";
import {createEffect, createSignal, onMount} from "solid-js";
import {gsap} from "gsap";

const Sidebar = () => {
    const [menu, set_menu] = createSignal(false)

    onMount(() => {
        gsap.set(".sidebar", {x: "100%"})
        gsap.set(".backdrop", {opacity: 0, display: "none"})
    })

    createEffect(() => {
        const timeline = gsap.timeline()
        if (menu()) gsap.set(".backdrop", {display: "block"})

        timeline.to(".sidebar", {
            x: menu() ? "0%" : "100%",
            duration: .5,
            ease: "power2.out"
        }, 0)

        timeline.to(".backdrop", {
            opacity: menu() ? 1 : 0,
            duration: .5,
            ease: "power2.out",
            onComplete: () => {
                if (!menu()) gsap.set(".backdrop", {display: "none"})
            }
        }, 0)
    })

    return (
        <>
            <div
                onmouseenter={() => set_menu(true)}
                class="absolute z-10 w-fit h-fit right-4 top-4">
                <button><FiMenu class={"size-8"}/></button>
            </div>

            <div
                onmouseleave={() => set_menu(false)}
                class="sidebar fixed font-[Big_Shoulders] text-right p-4 flex flex-col space-y-4 font-medium text-5xl z-20 w-fit h-screen right-0 bg-white">
                <a href="#">&gt; about us</a>
                <a href="#">&gt; portfolios</a>
                <a href="#">&gt; business inquiry</a>
                <a href="#">&gt; Q + A</a>

                <div class="absolute bottom-4 left-4 text-2xl text-left">
                    <a  class={"flex items-center gap-x-1 text-2xl underline"}
                        href="https://instragram.com/media.vc" target={"_blank"}><FiInstagram/>media.vc</a>
                    <a  class={"flex items-center gap-x-1 text-2xl underline"}
                        href="https://instragram.com/nathanxphoto" target={"_blank"}><FiInstagram/>nathanxphoto</a>
                </div>
            </div>

            <div class="backdrop fixed z-10 backdrop-blur-sm bg-black/40 top-0 left-0 h-screen w-screen"/>
        </>
    )
}

export default Sidebar;