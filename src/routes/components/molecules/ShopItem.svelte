<div class="flex items-center w-full -my-14">
    <div class="h-32 overflow-visible shrink-0">
        <img src="{iconSrc}" alt="{iconAlt}" class="relative w-48 mr-6" style="top: {topOffset}px; left: {leftOffset}px;">
    </div>
    <div class="grow shrink-0">
        <h3 class="mr-6"><slot></slot></h3>
    </div>
    {#if price}
        <div class="text-navy-blue opacity-60 text-center mr-4 pt-2">{price} Kč</div>
    {/if}
    <div>
        <div class="inline-flex pt-2">
            {#if !unavailable}
                <button on:click="{qtyHelper.sub}" class="select-none">-</button>
                <span contenteditable 
                    class="input px-1 mx-2 border-none text-right focus:outline-navy-blue"
                    role="textbox"
                    bind:innerHTML="{qtyHelper.qtyStr}"
                    on:keypress="{digitPass}">
                </span>
                <span class="-ml-1 mr-2">ks</span>
                <button on:click="{qtyHelper.add}" class="select-none">+</button>
            {:else}
                <a class="text-navy-blue opacity-60 no-underline hover:underline" href="{unavailableLink}">{unavailable}</a>
            {/if}
        </div>
    </div>
</div>

<style>
    .input {
        min-width: 1rem;
        width: auto;
    }
</style>

<script lang="ts">
    export let iconSrc: string;
    export let iconAlt: string;
    export let price: number|null = null;
    export let qty: number = 0;
    export let topOffset: number = 0;
    export let leftOffset: number = 0;
    export let unavailable: string = "";
    export let unavailableLink: string = "#";
    
    $: qtyHelper = {
        get qtyStr() {
            return `${qty}`
        },
        set qtyStr(val: string) {
            qty = parseInt(val) || 0
        },
        add() {
            qty += 1;
        },
        sub() {
            qty = Math.max(0, qty - 1);
        }
    }

    // pass only digits (and delete also)
    const digitPass = (event) => {
        const is_n = (/\d/.test(String.fromCharCode(event.which) ));
        if (!is_n) {
            event.preventDefault();
        }
    }
</script>