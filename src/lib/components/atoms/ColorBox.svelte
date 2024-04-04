<script>
    export let title;
    export let cls;
</script>

<div class={`text-center px-12 py-12 ${cls}`}>
    <h4 class="text-white uppercase text-2xl mb-1 font-extralight">{title}</h4>
    <h5 class="text-navy-blue text-xl"><slot /></h5>
</div>
