<script>
    import { enhance } from "$app/forms";

    import ShopItem from "../molecules/ShopItem.svelte";
    import Button from "../atoms/Button.svelte";
    import TextField from "../atoms/TextField.svelte";
    import ReCaptchaField from "../atoms/ReCaptcha.svelte";
    import ShopItemPropsList from "../molecules/ShopItemPropsList.svelte";
    import Modal, { bind } from "svelte-simple-modal";
    import Popup from "../molecules/Popup.svelte";

    import orderItemsData from "$lib/data/OrderItems";
    import orderDataDefault from "$lib/data/OrderData";

    let showOrderDetails = false;
    let formSending = false;
    let selectedDeliveryType = "ucet";
    const deliveryPrices = {
        ucet: 70,
        dobirka: 120,
    };

    let orderData = structuredClone(orderDataDefault);
    let orderItems = structuredClone(orderItemsData);

    // data for configuration of t-shirts', bags' and magnets' variants
    $: propsResults = {
        t_shirt: "",
        bag: "",
        magnet: "",
    };
    $: {
        orderData.note_sizes = Object.values(propsResults).join("\n");
    }
    $: anyItemsWithProps = orderData.note_sizes.trim().length > 0;

    const sum = (a, b) => a + b;
    $: totalPrice = orderItems
        .map((item) => (item.price || 0) * (item.qty || 0))
        .reduce(sum);
    $: deliveryPrice =
        totalPrice === 0 ? 0 : deliveryPrices[selectedDeliveryType];

    function resetForm() {
        orderData = structuredClone(orderDataDefault);
        orderItems = structuredClone(orderItemsData);
        showOrderDetails = false;
    }

    function showModal(success) {
        const heading = document.querySelector("#objednavka");
        heading.scrollIntoView();
        modal = bind(Popup, { success });
    }

    let modal = null;
</script>

<form
    method="POST"
    on:submit={() => {
        formSending = true;
    }}
    use:enhance={() => {
        return async ({ result }) => {
            console.log(result);

            formSending = false;
            const is_success = result.type === "success";
            if (is_success) {
                resetForm();
            }
            showModal(is_success);
        };
    }}
>
    <div>
        <div class="flex flex-wrap -ml-20">
            <div class="xs:w-full xl:w-2/3 2xl:w-1/2 mb-16">
                <h3 class="ml-20 mb-16">Cd a zpěvníky</h3>
                {#each orderItems.filter((item) => item.type === "CD") as item}
                    <ShopItem
                        itemId={item.id}
                        unavailable={item.unavailable}
                        unavailableLink={item.unavailableLink}
                        iconSrc={item.iconSrc}
                        iconAlt={`${item.type} ${item.name}`}
                        topOffset={item.iconTopOffset}
                        leftOffset={item.iconLeftOffset || 0}
                        price={item.price}
                        bind:qty={item.qty}
                    >
                        {item.name}
                    </ShopItem>
                {/each}
                {#each orderItems.filter((item) => item.type === "Zpěvník") as item}
                    <ShopItem
                        itemId={item.id}
                        unavailable={item.unavailable}
                        unavailableLink={item.unavailableLink}
                        iconSrc={item.iconSrc}
                        iconAlt={`${item.type} ${item.name}`}
                        topOffset={item.iconTopOffset}
                        leftOffset={item.iconLeftOffset || 0}
                        price={item.price}
                        bind:qty={item.qty}
                    >
                        {item.name}
                    </ShopItem>
                {/each}
            </div>
            <div class="xs:w-full xl:w-2/3 2xl:w-1/2">
                <h3 class="ml-20 mb-10">Merch</h3>
                <div class="my-16">
                    {#each orderItems.filter((item) => item.type === "Merch") as item}
                        <ShopItem
                            itemId={item.id}
                            unavailable={item.unavailable}
                            unavailableLink={item.unavailableLink}
                            iconSrc={item.iconSrc}
                            iconAlt={`${item.type} ${item.name}`}
                            topOffset={item.iconTopOffset}
                            leftOffset={item.iconLeftOffset || 0}
                            price={item.price}
                            bind:qty={item.qty}
                        >
                            {item.name}
                        </ShopItem>
                    {/each}
                </div>
                <div class="pl-16">
                    <p class="text-navy-blue opacity-60">
                        Celková cena: {totalPrice} Kč
                        {deliveryPrice > 0 ? `+ doprava` : ""}
                    </p>
                    {#if !showOrderDetails}
                        <Button
                            disabled={totalPrice === 0}
                            on:click={() => {
                                showOrderDetails = true;
                            }}>Pokračovat v objednávce</Button
                        >
                    {/if}
                </div>
            </div>
        </div>
        {#if showOrderDetails}
            <div
                class="flex flex-wrap md:flex-nowrap
                    -mx-6 md:mx-0"
            >
                <div class="xs:w-full md:w-1/2 md:order-last pl-2">
                    <h3>Způsob dopravy a platby</h3>
                    <select
                        bind:value={selectedDeliveryType}
                        class="block appearance-none border py-1 pr-8 pl-3 mr-3 mb-2 focus:outline-none focus:bg-white border-navy-blue"
                    >
                        <option value="ucet"
                            >Česká pošta - převodem na účet (+ 70 Kč)</option
                        >
                        <option value="dobirka"
                            >Česká pošta - dobírkou (+ 120 Kč)</option
                        >
                    </select>
                    <p>Dodací doba: 5-14 dní</p>

                    {#if anyItemsWithProps}
                        <h3>Výběr variant</h3>
                    {/if}
                    <ShopItemPropsList
                        items={orderItems.filter(
                            (item) => item.id == "t_shirt",
                        )}
                        item_id="t_shirt"
                        item_name="Tričko"
                        bind:resultString={propsResults.t_shirt}
                    />
                    <ShopItemPropsList
                        items={orderItems.filter((item) => item.id == "bag")}
                        item_id="bag"
                        item_name="Plátěnka"
                        bind:resultString={propsResults.bag}
                    />
                    <ShopItemPropsList
                        items={orderItems.filter((item) => item.id == "magnet")}
                        item_id="magnet"
                        item_name="Magnetka"
                        bind:resultString={propsResults.magnet}
                    />
                </div>
                <div class="xs:w-full md:w-1/2 md:order-first">
                    <h3>Osobní údaje</h3>
                    <div class="flex">
                        <TextField
                            name="name"
                            required
                            bind:value={orderData.name}
                            >Jméno a příjmení:</TextField
                        >
                        <TextField
                            name="email"
                            required
                            bind:value={orderData.email}
                            type="email"
                            placehold="nekdo@neco.cz">Email:</TextField
                        >
                    </div>
                    <div class="flex">
                        <TextField
                            name="city"
                            required
                            bind:value={orderData.city}>Město:</TextField
                        >
                        <TextField
                            name="psc"
                            required
                            bind:value={orderData.psc}>PSČ:</TextField
                        >
                    </div>
                    <div class="2xl:w-4/5">
                        <TextField
                            name="address"
                            required
                            bind:value={orderData.address}
                            >Adresa (Ulice, č.p.):</TextField
                        >
                        <TextField name="phone" bind:value={orderData.phone}
                            >Telefon:
                        </TextField>
                        <TextField
                            name="note"
                            bind:value={orderData.note}
                            type="textarea"
                            >Poznámka:
                        </TextField>

                        <input
                            type="hidden"
                            name="note_sizes"
                            value={orderData.note_sizes}
                        />
                        <input type="hidden" name="route" value="submit" />
                        <input
                            type="hidden"
                            name="orderItem.dobirka"
                            value={selectedDeliveryType == "dobirka" ? 1 : 0}
                        />
                        <input
                            type="hidden"
                            name="orderItem.ucet"
                            value={selectedDeliveryType == "ucet" ? 1 : 0}
                        />

                        <ReCaptchaField
                            bind:value={orderData.recaptcha_response}
                        ></ReCaptchaField>

                        {#if formSending}
                            <Button disabled={true}>Odesílání...</Button>
                        {:else}
                            <Button disabled={totalPrice === 0} type="submit"
                                >Odeslat objednávku v celkové hodnotě {totalPrice +
                                    deliveryPrice} Kč</Button
                            >
                        {/if}
                    </div>
                </div>
            </div>
        {/if}
    </div>
</form>

<Modal show={modal}></Modal>
