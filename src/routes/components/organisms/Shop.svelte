<div>
    <div class="flex flex-wrap shop-items">
        <div class="xs:w-full xl:w-2/3 2xl:w-1/2 my-16">        
            {#each orderItems.filter(item => ['CD', 'Zpěvník'].includes(item.type)) as item}
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
        <div class="xs:w-full xl:w-2/3 2xl:w-1/2">   
            <div class="my-16">
                {#each orderItems.filter(item => ['Merch'].includes(item.type)) as item}
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
            <div class="pl-16">
                <p class="text-navy-blue opacity-60">Celková cena: {totalPrice} Kč</p>
                <Button>Pokračovat v objednávce</Button>
            </div>  
        </div>
        
    </div>
    <h3>Objednávka</h3>
    <div class="flex">
        <div class="w-full xl:w-1/2">
            <TextField bind:value={orderData.name}>Jméno a příjmení:</TextField>
            <TextField bind:value={orderData.email} type="email" placehold="nekdo@neco.cz">Email:</TextField>
            <TextField bind:value={orderData.city}>Město:</TextField>
            <TextField bind:value={orderData.psc}>PSČ:</TextField>
            <TextField bind:value={orderData.address}>Adresa (Ulice, č.p.):</TextField>
            <TextField bind:value={orderData.phone}>Telefon: </TextField>
            <TextField bind:value={orderData.note} type="textarea">Poznámka: </TextField>
    
            <ReCaptchaField bind:value={orderData.recaptcha_response}></ReCaptchaField>
        </div>
        <div class="w-full xl:w-1/2">
            <ShopItemPropsList items={orderItems.filter(item => item.id == 't_shirt')} item_id="t_shirt" item_name="Tričko"
                bind:resultString={propsResults.t_shirt}/>
            <ShopItemPropsList items={orderItems.filter(item => item.id == 'bag')} item_id="bag" item_name="Plátěnka"
                bind:resultString={propsResults.bag}/>
        </div>
    </div>

    <!-- todo: add Splide or some other carousely-thing for images -->
    <!-- https://splidejs.com/integration/svelte-splide/ -->
</div>

<script>
    import ShopItem from '../molecules/ShopItem.svelte'
    import Button from '../atoms/Button.svelte'
    import TextField from '../atoms/TextField.svelte'
    import ReCaptchaField from '../atoms/ReCaptcha.svelte'
    import ShopItemPropsList from '../molecules/ShopItemPropsList.svelte'

    import orderItemsData from '../../data/OrderItems'
    import orderDataDefault from '../../data/OrderData'

    $: orderItems = orderItemsData
    $: orderData = orderDataDefault

    $: propsResults = {
        t_shirt: '',
        bag: ''
    }
    $: {
        orderData.note_sizes = Object.values(propsResults).join('\n')
    }
    
    const sum = (a, b) => a + b
    $: totalPrice = orderItems.map(item => (item.price || 0) * (item.qty || 0)).reduce(sum)
</script>