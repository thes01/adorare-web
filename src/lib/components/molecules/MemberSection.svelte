<script>
    export let name;
    export let members;
</script>

<h2>{name}</h2>
<ul class="mb-12">
    {#each members as member}
        <li>{member}</li>
    {/each}
</ul>
