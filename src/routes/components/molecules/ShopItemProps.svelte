<div class="flex mb-2">
    <span class="mr-2">{item_name} -</span>
    {#each Object.entries(variants[type]) as [label, options]}
        <label for="">{label}: </label>
        <select 
            class="block appearance-none border border-gray-200 py-1 pr-8 pl-3 mx-3 focus:outline-none focus:bg-white focus:border-gray-500"
            bind:value={selected[label]}>
            {#each options as option}
                <option>{option}</option>
            {/each}
        </select>
    {/each}
</div>

<script>
    export let type;
    export let item_name;

    const variants = {
        't_shirt': {
            'Velikost': ['XS','S','M','L','XL','XXL'],
            'Barva': ['bílé', 'modré']
        },
        'bag': {
            'Barva': ['bílá', 'modrá']
        }
    }

    $: selected = type === 'bag' ? {
        'Barva': 'bílá'
    } : {
        'Velikost': 'XS',
        'Barva': 'bílé'
    }

    export let result;
    $: {
        result = `${item_name}: ${Object.values(selected).join(', ')}`
    }
</script>