<script>
    export let value;
    export let type = "text";
    export let placehold = "";
    export let required = false;
    export let name;

    let randomStrFor = (Math.random() + 1).toString(36).substring(7);
</script>

<div class="flex flex-col pr-4 pb-2">
    <label for="input-{randomStrFor}"><slot /></label>
    {#if type === "textarea"}
        <textarea
            {name}
            {required}
            id="input-{randomStrFor}"
            rows="4"
            {value}
            placeholder={placehold}
        ></textarea>
    {:else}
        <input
            {name}
            {required}
            class="focus:border-navy-blue w-full"
            {type}
            id="input-{randomStrFor}"
            placeholder={placehold}
            {value}
        />
    {/if}
</div>
