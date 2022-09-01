<div class={`${cls} w-full md:block md:w-auto bg-white`} id="mobile-menu">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md">
      <li>
        <NavBarItem href="#o-nas">O nás</NavBarItem>
      </li>
      <li>
        <NavBarItem href="#podporte-nas">Podpořte nás</NavBarItem>
      </li>
      <li>
        <NavBarItem href="#nove-cd">Nové CD</NavBarItem>
      </li>
      <li>
        <NavBarItem href="#objednavka">Objednávka</NavBarItem>
      </li>
      <li>
        <NavBarItem href="#kontakt">Kontakt</NavBarItem>
      </li>
      <!-- <li>
        <NavBarItem href="#clenove">Členové</NavBarItem>
      </li> -->
      <!-- <li>
        <NavBarItem href="#noty">Noty</NavBarItem>
      </li> -->
    </ul>
  </div>

  <script>
    import NavBarItem from "../atoms/NavBarItem.svelte";
    import { menuExpanded } from "../organisms/NavBar.svelte";

    let cls;
    menuExpanded.subscribe(val => cls = val ? '' : 'hidden');
  </script>