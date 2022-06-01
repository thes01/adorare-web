<div class="flex items-center w-full -my-14">
    <div class="h-32 shrink-0 shop-item-icon overflow-hidden">
        <img src="{iconSrc}" alt="{iconAlt}" class="relative w-48 mr-6 max-w-none select-none" style="top: {topOffset}px; left: {leftOffset}px;">
    </div>
    <div class="grow shrink-0">
        <h3 class="mr-6 my-6"><slot></slot></h3>
    </div>
    {#if price}
        <div class="text-navy-blue opacity-60 text-center mr-4 pt-2">{price} Kč</div>
    {/if}
    <div>
        <div class="inline-flex pt-2">
            {#if !unavailable}
                <ShopItemQty bind:qty></ShopItemQty>
            {:else}
                <a class="text-navy-blue opacity-60 no-underline hover:underline" href="{unavailableLink}">{unavailable}</a>
            {/if}
        </div>
    </div>
</div>

<script lang="ts">
    import ShopItemQty from "../atoms/ShopItemQty.svelte";

    export let iconSrc: string;
    export let iconAlt: string;
    export let price: number|null = null;
    export let qty: number = 0;
    export let topOffset: number = 0;
    export let leftOffset: number = 0;
    export let unavailable: string = "";
    export let unavailableLink: string = "#";
</script>