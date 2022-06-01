<div class="flex flex-col pr-4 pb-2">
    <label for="input-{randomStrFor}"><slot></slot></label>
    {#if type === 'textarea'}
        <textarea required={required} id="input-{randomStrFor}" rows="4" value={value} placeholder={placehold}></textarea>
    {:else}
        <input required={required} class="focus:border-navy-blue w-full" type={type} id="input-{randomStrFor}" placeholder={placehold} value={value} />
    {/if}
</div>

<script>
    export let value;
    export let type = 'text'
    export let placehold = ''
    export let required = false

    let randomStrFor = (Math.random() + 1).toString(36).substring(7);
</script>