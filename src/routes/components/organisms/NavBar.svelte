<nav class="border-gray-200 md:px-4 fixed md:relative z-10">
    <div class="md:container flex flex-wrap justify-between items-center mx-auto">
      <NavBarButton></NavBarButton>
      <NavBarItems></NavBarItems>
    </div>
</nav>

<script>
  import NavBarItems from '../molecules/NavBarItems.svelte';
  import NavBarButton from "../atoms/NavBarButton.svelte";
</script>

<script context="module">
  import { writable } from 'svelte/store';
  export const menuExpanded = writable(false);
  export function toggleMenu() { menuExpanded.update(val => !val) }
</script>