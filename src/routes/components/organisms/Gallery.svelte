<!-- todo: add Splide or some other carousely-thing for images -->
<!-- https://splidejs.com/integration/svelte-splide/ -->
<Splide aria-label="My Favorite Images">
    <SplideSlide>
        <a href="https://adorare.cz/images/thumbs/360--back_new.jpg" class="glightbox" data-gallery={galleryName}>
            <img src="https://adorare.cz/images/thumbs/360--back_new.jpg" alt="My"/>
        </a>
    </SplideSlide>
    <SplideSlide>
        <a href="https://adorare.cz/images/thumbs/360--about-2.jpg" class="glightbox" data-gallery={galleryName}>
            <img src="https://adorare.cz/images/thumbs/360--about-2.jpg" alt="Jsme"/>
        </a>
    </SplideSlide>
</Splide>

<script>
    export let galleryName = 'gallery1'

    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import "@splidejs/svelte-splide/css";
</script>