<script context="module">
  import { writable } from "svelte/store";
  export const menuExpanded = writable(false);
  export function toggleMenu() {
    menuExpanded.update((val) => !val);
  }
</script>

<script>
  import NavBarItems from "../molecules/NavBarItems.svelte";
  import NavBarButton from "../atoms/NavBarButton.svelte";

  let expClass = "";
  let navbarBtnWidthCls = "w-auto";
  menuExpanded.subscribe(
    (val) => (expClass = val ? "backdrop-blur-sm w-screen h-screen" : ""),
  );
  menuExpanded.subscribe(
    (val) => (navbarBtnWidthCls = val ? "w-48" : "w-auto"),
  );
</script>

<nav
  class="border-gray-200 md:px-4
    fixed
    md:relative z-10"
>
  <div
    class={`md:container md:items-center md:justify-between md:h-auto md:flex-wrap md:flex-row md:w-auto
       flex flex-col justify-start items-stretch mx-auto
        ${expClass}`}
  >
    <NavBarButton cls={`self-start ${navbarBtnWidthCls}`}></NavBarButton>
    <div class="mx-8 mt-4 hidden lg:block">
      <img src="/adologo_dark.svg" alt="adorare" class="w-32" />
    </div>
    <NavBarItems cls="grow md:grow-0 w-48"></NavBarItems>
  </div>
</nav>
