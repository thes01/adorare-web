<script lang="ts">
    import ShopItemQty from "../atoms/ShopItemQty.svelte";

    export let itemId: string;
    export let iconSrc: string;
    export let iconAlt: string;
    export let price: number | null = null;
    export let qty: number = 0;
    export let topOffset: number = 0;
    export let leftOffset: number = 0;
    export let unavailable: string = "";
    export let unavailableLink: string | null = null;
</script>

<div class="flex items-center w-full -my-10 md:-my-14">
    <div class="h-32 shrink-0 shop-item-icon overflow-hidden">
        <img
            src={iconSrc}
            alt={iconAlt}
            class="relative w-48 mr-6 max-w-none select-none"
            style="top: {topOffset}px; left: {leftOffset}px;"
        />
    </div>
    <div
        class="flex items-center w-full flex-wrap
            xs:my-12 md:my-6"
    >
        <div class="grow shrink-0">
            <h3 class="mr-6 leading-10"><slot /></h3>
        </div>
        <div class="flex">
            {#if price}
                <div
                    class="text-navy-blue sm:opacity-60 text-center mr-4 pt-2 shrink-0"
                >
                    {price} Kč
                </div>
            {/if}
            <div class="inline-flex pt-2">
                {#if !unavailable}
                    <ShopItemQty
                        inputName={unavailable ? null : itemId}
                        bind:qty
                    ></ShopItemQty>
                {:else if (unavailableLink || "").length > 0}
                    <a
                        target="_blank"
                        class="text-navy-blue sm:opacity-60 no-underline hover:underline"
                        href={unavailableLink}>{unavailable}</a
                    >
                {:else}
                    <span class="text-navy-blue sm:opacity-60"
                        >{unavailable}</span
                    >
                {/if}
            </div>
        </div>
    </div>
</div>
