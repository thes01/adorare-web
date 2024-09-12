<script>
    export let href;
    import { toggleMenu } from "../organisms/NavBar.svelte";
</script>

<a
    {href}
    class="block py-2 pr-4 pl-3
    text-navy-blue md:text-navy-blue
    bg-transparent rounded md:p-0 no-underline hover:underline"
    on:click={toggleMenu}
    aria-current="page"
>
    <slot />
</a>
