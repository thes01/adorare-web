<div class="flex mb-2">
    <span class="mr-2" style="white-space: nowrap;">{item_name} -</span>
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
            'Velikost': ['XS-M','L-XXL'],
            'Barva': ['bílé', 'černé']
        },
        'bag': {
            'Barva': ['přírodní', 'modrá']
        },
        'magnet': {
            'Nápis': [
                'Všechno mé je tvé',
                'Ty znáš ten správný čas',
                'Nech ať mé srdce rytmem tančí',
                'Měníš to, co nemožné se zdá',
                'Milostí obklop duši mou',
                'Vryl sis do dlaní mé jméno',
                'Za úsvitu, při stmívání, provázej nás svým požehnáním',
                'nebe k zemi sniž',
                'Láska tvá je melodií',
                'K vodám',
                'Vracíš mi dech',
                'V tvém náručí chci si odpočinout',
                'Zítřek jsi stvořil pro mě',
                'Adonai',
                'Já ti naslouchám',
                'Adorare'
            ]
        }
    }

    $: selected = {
        'bag': { 'Barva': 'přírodní' },
        't_shirt': {
            'Velikost': 'XS-M',
            'Barva': 'bílé'
        },
        'magnet': {
            'Nápis': 'Všechno mé je tvé'
        }
    }[type]

    export let result;
    $: {
        result = `${item_name}: ${Object.values(selected).join(', ')}`
    }
</script>