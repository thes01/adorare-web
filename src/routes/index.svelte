<Layout>
    <h1 class="text-xl font-bold">Welcome to SvelteKit</h1>
    <p>
        Visit to read the documentation
    </p>

    <p>Kde budou koncerty</p>
    <p>Přímo okno - napište nám, kde chcete koncert</p>

    <input type="text" class="bg-blue-100">

    <div data-tilt class="tilt-layer-base w-32 h-32 bg-blue-500 flex justify-center items-center">
        <div class="tilt-layer-1 w-24 h-24 bg-blue-300 absolute"></div>
        <div class="tilt-layer-2 w-16 h-16 bg-blue-100 absolute"></div>
        <div class="tilt-layer-3 w-8 h-8 bg-white absolute"></div>
    </div>
</Layout>

<script>
    import Layout from './__layout.svelte'
    import "vanilla-tilt"
</script>