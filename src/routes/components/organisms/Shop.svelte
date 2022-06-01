<div>
    <div class="xs:w-full xl:w-2/3 2xl:w-1/2 my-16">        
        {#each orderItems as item}
            <ShopItem
                unavailable="{item.unavailable}"
                iconSrc="{item.iconSrc}"
                iconAlt={`${item.type} ${item.name}`}
                topOffset={item.iconTopOffset}
                leftOffset={item.iconLeftOffset || 0}
                price={item.price}
                bind:qty={item.qty}>
                {item.name}
            </ShopItem>
        {/each}
    </div>

    <Button>Pokračovat v objednávce</Button>

    <div>
        <p>Celková cena: {totalPrice} Kč</p>

        <p>Sdělte nám prosím vaše kontaktní informace, ať víme, kam objednávku poslat.</p>
        <TextField bind:value={orderData.name}>Jméno a příjmení:</TextField>
        <TextField bind:value={orderData.email} type="email" placehold="nekdo@neco.cz">Email:</TextField>
        <TextField bind:value={orderData.city}>Město:</TextField>
        <TextField bind:value={orderData.psc}>PSČ:</TextField>
        <TextField bind:value={orderData.address}>Adresa (Ulice, č.p.):</TextField>
        <TextField bind:value={orderData.phone}>Telefon: </TextField>

        {#if shirtsCount > 0}
            <p>Přidejte prosím do objednávky konkrétní velikosti (XS, S, M, L, XL, XXL) pro {shirtsCase[0]} {shirtsCount} {shirtsCase[1]} 🙏🏻.</p>
        {/if}
        <TextField bind:value={orderData.note} type="textarea">Poznámka: </TextField>

        <ReCaptchaField bind:value={orderData.recaptcha_response}></ReCaptchaField>
    </div>

    <!-- todo: add Splide or some other carousely-thing for images -->
    <!-- https://splidejs.com/integration/svelte-splide/ -->
</div>

<script>
    import ShopItem from '../molecules/ShopItem.svelte'
    import Button from '../atoms/Button.svelte'
    import TextField from '../atoms/TextField.svelte'
    import ReCaptchaField from '../atoms/ReCaptcha.svelte';
    import orderItemsData from '../../data/OrderItems'
    import orderDataDefault from '../../data/OrderData'

    $: orderItems = orderItemsData
    $: orderData = orderDataDefault
    
    const sum = (a, b) => a + b
    $: totalPrice = orderItems.map(item => (item.price || 0) * (item.qty || 0)).reduce(sum)
    $: shirtsCount = orderItems
        .filter(item => ['t_shirt'].includes(item.id))
        .map(item => item.qty)
        .reduce(sum)
    $: shirtsCase = shirtsCount == 1 ? ['vaše','objednané tričko'] : (
        (shirtsCount >= 2 && shirtsCount <= 4) ? ['všechna vaše', 'objednaná trička'] :
        ['všech vašich', 'objednaných triček']
    )
</script>