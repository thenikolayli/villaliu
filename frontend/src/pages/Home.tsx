import Sidebar from "../components/Sidebar.tsx";
import {FiInstagram} from "solid-icons/fi";
import stone_texture from "../assets/stone_texture.jpg"
import villaliu_aboutus from "../assets/villaliu_aboutus.jpg"
import villaliu from "../assets/villaliu.png"
import {onMount} from "solid-js";

const Home = () => {
    onMount(() => document.title = "Villaliu")

    return (
        <>
            <Sidebar/>
            <section class={"relative flex h-screen w-full font-[Big_Shoulders]"}>
                <div class={"absolute bottom-0 w-full p-4"}>
                    <hr class={"border-2 mb-[2rem]"}/>
                    <img class={"bottom-4 left-4 h-[65%]"} src={villaliu} alt="villaliu logo"/>
                </div>


                <img class={"absolute w-full h-full top-0 left-0 object-cover w-full h-full -z-10"} src={stone_texture} alt="background texture"/>
            </section>

            <section class={"relative h-screen flex w-full font-[Big_Shoulders]"}>
                <div class="p-8 w-1/3 h-screen">
                    <img class={"object-cover w-full h-full"} src={villaliu_aboutus} alt="leo and nathan"/>
                </div>
                <section id={"aboutus"} class={"flex w-2/3 flex-col h-full p-4"}>
                    <header class={"mx-auto font-medium text-7xl tracking-wide"}>a b o u t&nbsp;&nbsp;u s .</header>
                    <hr class={"my-4 border-2 w-full mx-auto"}/>

                    <div class="grid grid-rows-2 h-full">
                        <div>
                            <header class="text-5xl font-medium">Leo</header>
                            <a  class={"flex items-center gap-x-1 text-2xl hover:underline"}
                                href="https://instagram.com/media.vc" target={"_blank"}><FiInstagram/>media.vc</a>
                            <h1 class="text-4xl mt-4">
                                Description
                            </h1>
                        </div>

                        <div>
                            <header class="text-5xl font-medium">Nathan</header>
                            <a  class={"flex items-center gap-x-1 text-2xl hover:underline"}
                                href="https://instagram.com/nathanxphotos" target={"_blank"}><FiInstagram/>nathanxphotos</a>
                            <h1 class="text-4xl mt-4">
                                Description
                            </h1>
                        </div>
                    </div>
                </section>
                <img class={"absolute w-full h-full top-0 left-0 object-cover w-full h-full -z-10"} src={stone_texture} alt="background texture"/>
            </section>

            <section class={"relative h-screen w-full p-4 font-[Big_Shoulders]"}>
                <header class={"mx-auto font-medium text-7xl tracking-wide"}> o u r&nbsp;&nbsp;m i s s i o n .</header>
                <hr class={"border-2 my-4"}/>
                <h1 class="text-4xl">
                    Description
                </h1>
                <hr class={"border-2 my-4"}/>

                <header class={"mx-auto font-medium text-7xl tracking-wide"}> r e v i e w s .</header>

                <img class={"absolute w-full h-full top-0 left-0 object-cover w-full h-full -z-10"} src={stone_texture} alt="background texture"/>
            </section>
        </>
    );
}

export default Home;