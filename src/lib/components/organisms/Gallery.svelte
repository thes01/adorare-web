<script>
    export let galleryName = "gallery1";
    export let imgItems;

    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";
</script>

<Splide aria-label="Galerie">
    {#each imgItems as imgItem}
        <SplideSlide>
            <a
                href={imgItem.fullUrl}
                class="glightbox"
                data-gallery={galleryName}
            >
                <img src={imgItem.thumbUrl} class="w-full" alt="Fotka" />
            </a>
        </SplideSlide>
    {/each}
</Splide>
