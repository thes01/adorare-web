<Splide aria-label="Galerie tapet" on:move={onMove}>
    {#each imgItems as imgItem}
        <SplideSlide>
            <img src={imgItem.thumbUrl} class="w-full" alt="Tapeta"/>
        </SplideSlide>
    {/each}
</Splide>

{#if imgItems.length}
    <a href={imgItems[index].downloadUrl(`adotapeta${index + 1}`)}>
        Stáhnout tapetu v plném rozlišení
    </a>    
{/if}

<script>
    export let imgItems
    export let index = 0;

    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import "@splidejs/svelte-splide/css";

    function onMove(event) {
        index = event.detail.index
    }

</script>