<script lang="ts">
    export let qty: number;
    export let inputName: string | null = null;
    import { fly } from "svelte/transition";

    let animate_toggler = false;
    let animate_y = -20;

    $: qtyHelper = {
        get qtyStr() {
            return `${qty}`;
        },
        set qtyStr(val: string) {
            // we don't want to animate when the user is typing
            qty = parseInt(val) || 0;
        },
        add() {
            qty += 1;
            animate_y = -20;
            animate_toggler = !animate_toggler;
        },
        sub() {
            if (qty > 0) {
                qty -= 1;
                animate_y = 20;
                animate_toggler = !animate_toggler;
            }
        },
    };

    // pass only digits (and <del> etc. also)
    const digitPass = (event: KeyboardEvent) => {
        const is_n = /\d/.test(String.fromCharCode(event.which));
        if (!is_n) {
            event.preventDefault();
        }
    };
</script>

<span
    role={qty > 0 ? "button" : ""}
    on:click={qtyHelper.sub}
    class="select-none">-</span
>
{#key animate_toggler}
    <span
        contenteditable
        class="shop-item-input px-1 mx-2 border-none text-right focus:outline-navy-blue"
        role="textbox"
        bind:innerHTML={qtyHelper.qtyStr}
        on:keypress={digitPass}
        in:fly={{ y: animate_y }}
    >
    </span>
{/key}

<!-- for FORM -->
{#if inputName}
    <input type="hidden" value={qty} name={`orderItem.${inputName}`} />
{/if}
<span class="-ml-1 mr-2">ks</span>
<span role="button" on:click={qtyHelper.add} class="select-none">+</span>
