{#each itemsResults as item, i}
    <ShopItemProps type={item_id} item_name={`${item_name} ${i + 1}`} bind:result={item.result}/>
{/each}

<script>
    import ShopItemProps from "../molecules/ShopItemProps.svelte";
    export let items;
    export let item_id;
    export let item_name;

    const sum = (a, b) => a + b
    $: itemsCount = items
        .map(item => item.qty)
        .reduce(sum)

    $: itemsResults = [];

    export let resultString;
    $: {
        let delta = itemsCount - itemsResults.length;
        for (let i = 0; i < delta; i++) { // items added from outside
            itemsResults.push({result: ''})
        }
        itemsResults = itemsResults.slice(0, itemsCount) // items removed from outside

        resultString = itemsResults.map(item => item.result).join('\n')
    }
</script>