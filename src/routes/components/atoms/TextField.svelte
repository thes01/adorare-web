
<label for="input-{randomStrFor}"><slot></slot></label>
{#if type === 'textarea'}
    <textarea id="input-{randomStrFor}" cols="30" rows="10" value={value} placeholder={placehold}></textarea>
{:else}
    <input type={type} id="input-{randomStrFor}" placeholder={placehold} value={value} />
{/if}

<script>
    export let value;
    export let type = 'text'
    export let placehold = ''

    let randomStrFor = (Math.random() + 1).toString(36).substring(7);
</script>