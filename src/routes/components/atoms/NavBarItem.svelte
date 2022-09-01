<a href={href} class="block py-2 pr-4 pl-3
    text-navy-blue md:text-navy-blue 
    bg-transparent rounded md:p-0 no-underline" on:click={toggleMenu} aria-current="page">
   <slot></slot>
</a>

<script>
    export let href;
    import { toggleMenu } from "../organisms/NavBar.svelte";
</script>