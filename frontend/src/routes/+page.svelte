<script>
    import Sidebar from "../components/Sidebar.svelte";
    import {onMount} from "svelte";

    onMount(() => {
        document.title = "Villaliu"
    })
</script>

<Sidebar/>

<main class="relative w-full h-screen flex flex-col items-start">
    <div class="flex-1"></div>
    <hr class="border-2 mb-4 w-full">
    <img class="w-full lg:w-[70%] px-4 mb-4 object-contain" src="/villaliu.png" alt="Logo">
</main>

<main class="relative w-full h-screen">

</main>