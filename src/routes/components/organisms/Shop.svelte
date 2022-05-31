<div>
    <div class="w-1/2 my-16">
        <ShopItem
            iconSrc="/shop/k-vodam.png"
            iconAlt="CD K vodám"
            bind:qty={orderQties.k_vodam}
            price={250}
            topOffset={17}>
            K vodám
        </ShopItem>
        <ShopItem
            iconSrc="/shop/new-generation.png"
            iconAlt="CD New generation"
            bind:qty={orderQties.new_generation}
            price={200}
            topOffset={-8}>
            New generation
        </ShopItem>
        <ShopItem
            iconSrc="/shop/nech-se-vest.png"
            iconAlt="CD Nech se vést"
            bind:qty={orderQties.nech_se_vest}
            price={200}
            topOffset={2}>
            Nech se vést
        </ShopItem>
        <ShopItem
            iconSrc="/shop/v-otazkach.png"
            iconAlt="CD V otázkách"
            bind:qty={orderQties.v_otazkach}
            price={200}
            topOffset={-2}>
            V otázkách
        </ShopItem>
        <ShopItem
            unavailable="volně ke stažení"
            iconSrc="/shop/volame-k-tobe.png"
            iconAlt="CD Voláme k Tobě"
            topOffset={8}
            leftOffset={7}>
            Voláme k tobě
        </ShopItem>
    </div>

    <!-- todo: add Splide or some other carousely-thing for images -->
    <!-- https://splidejs.com/integration/svelte-splide/ -->
</div>

<script>
    import ShopItem from '../molecules/ShopItem.svelte'

    $: orderQties = {
        k_vodam: 0,
        new_generation: 0,
        nech_se_vest: 0,
        v_otazkach: 0
    }
</script>