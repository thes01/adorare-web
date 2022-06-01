<button on:click="{qtyHelper.sub}" class="select-none">-</button>
<span contenteditable 
    class="shop-item-input px-1 mx-2 border-none text-right focus:outline-navy-blue"
    role="textbox"
    bind:innerHTML="{qtyHelper.qtyStr}"
    on:keypress="{digitPass}">
</span>
<span class="-ml-1 mr-2">ks</span>
<button on:click="{qtyHelper.add}" class="select-none">+</button>

<script lang="ts">
    export let qty: number;

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

    // pass only digits (and <del> etc. also)
    const digitPass = (event) => {
        const is_n = (/\d/.test(String.fromCharCode(event.which) ));
        if (!is_n) {
            event.preventDefault();
        }
    }
</script>