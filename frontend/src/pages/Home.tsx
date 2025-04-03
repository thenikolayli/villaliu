import Sidebar from "../components/Sidebar.tsx";
import {FiInstagram} from "solid-icons/fi";

const Home = () => {
    return (
        <>
            <Sidebar/>
            <section class={"relative h-screen w-full bg-amber-50 font-[Big_Shoulders]"}>
                {/*<Gallery/>*/}
            </section>
            <section class={"relative h-screen flex w-full font-[Big_Shoulders]"}>
                <div class="w-1/3 h-screen bg-amber-800"></div>
                <section class={"flex w-2/3 flex-col h-full p-4"}>
                    <h1 class="mx-auto text-7xl">about us.</h1>
                    <hr class={"my-2 border-2 w-full mx-auto"}/>

                    <div class="grid grid-rows-2 h-full">
                        <div>
                            <h1 class="text-5xl">Leo</h1>
                            <a  class={"flex items-center gap-x-1 text-xl underline"}
                                href="https://instagram.com/media.vc" target={"_blank"}><FiInstagram/>media.vc</a>
                            {/*<hr class={"my-2 border-1 w-[90%]"}/>*/}
                            <h1 class="text-3xl">
                                Description
                            </h1>
                        </div>

                        <div>
                            <h1 class="text-5xl">Nathan</h1>
                            <a  class={"flex items-center gap-x-1 text-xl underline"}
                                href="https://instagram.com/nathanxphotos" target={"_blank"}><FiInstagram/>nathanxphotos</a>
                            {/*<hr class={"my-2 border-1 w-[90%]"}/>*/}
                            <h1 class="text-3xl">
                                Description
                            </h1>
                        </div>
                    </div>
                </section>
            </section>
            <section class={"relative h-screen w-full bg-amber-100 p-4 font-[Big_Shoulders]"}>
                <h1 class="text-7xl">our mission.</h1>
                <hr class={"border-2 my-2"}/>
                <h1 class="text-3xl">
                    Description
                </h1>
                <hr class={"border-2 my-2"}/>
                <h1 class="text-7xl">reviews.</h1>
            </section>
        </>
    );
}

export default Home;