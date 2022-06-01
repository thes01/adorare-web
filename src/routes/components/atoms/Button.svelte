<button 
    class="bg-navy-blue text-white py-2 px-4 uppercase font-work-sans text-sm tracking-wider"
    type={type}
    disabled={disabled}
    on:click>
    <slot></slot>
</button>

<script>
    export let type = ''
    export let disabled = false
</script>