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
                <p class="text-navy-blue opacity-60">Celková cena: {totalPrice} Kč 
                    {deliveryPrice > 0 ? `+ doprava ${deliveryPrice} Kč` : ''}</p>
                {#if !showOrderDetails}
                    <Button disabled={totalPrice === 0} on:click={() => showOrderDetails = true}>Pokračovat v objednávce</Button>
                {/if}
            </div>  
        </div>
        
    </div>
    {#if showOrderDetails}
        <form on:submit={submitForm}>
            <div class="flex flex-wrap md:flex-nowrap">
                <div class="xs:w-full md:w-1/2 md:order-last pl-2">
                    {#if anyItemsWithProps}
                        <h3>Výběr variant</h3>
                    {/if}
                    <ShopItemPropsList items={orderItems.filter(item => item.id == 't_shirt')} item_id="t_shirt" item_name="Tričko"
                        bind:resultString={propsResults.t_shirt}/>
                    <ShopItemPropsList items={orderItems.filter(item => item.id == 'bag')} item_id="bag" item_name="Plátěnka"
                        bind:resultString={propsResults.bag}/>
                </div> 
                <div class="xs:w-full md:w-1/2 md:order-first">
                    <h3>Osobní údaje</h3>
                    <div class="flex">
                        <TextField required bind:value={orderData.name}>Jméno a příjmení:</TextField>
                        <TextField required bind:value={orderData.email} type="email" placehold="nekdo@neco.cz">Email:</TextField>
                    </div>
                    <div class="flex">
                        <TextField required bind:value={orderData.city}>Město:</TextField>
                        <TextField required bind:value={orderData.psc}>PSČ:</TextField>
                    </div>
                    <div class="2xl:w-4/5">
                        <TextField required bind:value={orderData.address}>Adresa (Ulice, č.p.):</TextField>
                        <TextField bind:value={orderData.phone}>Telefon: </TextField>
                        <TextField bind:value={orderData.note} type="textarea">Poznámka: </TextField>
                
                        <ReCaptchaField bind:value={orderData.recaptcha_response}></ReCaptchaField>
    
                        <Button disabled={totalPrice === 0} type="submit">Odeslat objednávku v celkové hodnotě {totalPrice + deliveryPrice} Kč</Button>
                    </div>
                </div>
            </div>
        </form>
    {/if}

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

    let showOrderDetails = false;

    $: orderItems = orderItemsData
    $: orderData = orderDataDefault

    // data for configuration of t-shirts' and bags' variants
    $: propsResults = {
        t_shirt: '',
        bag: ''
    }
    $: {
        orderData.note_sizes = Object.values(propsResults).join('\n')
    }
    $: anyItemsWithProps = orderData.note_sizes.trim().length > 0
    
    const sum = (a, b) => a + b
    $: totalPrice = orderItems.map(item => (item.price || 0) * (item.qty || 0)).reduce(sum)
    $: deliveryPrice = totalPrice === 0 ? 0 : 80

    // submit form
    function submitForm(event) {
        event.preventDefault()
        console.log('form submitted')
    }
</script>