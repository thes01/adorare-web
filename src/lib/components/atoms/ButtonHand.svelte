<script>
    import { onMount } from "svelte";
    import roughjs from "roughjs";

    let svgElement;

    onMount(() => {
        let roughSvg = roughjs.svg(svgElement);

        const generateLines = (off, w, h) => [
            roughSvg.line(-off, 0, w + off, 0), // -----------
            roughSvg.line(0, -off, 0, h + off), // |
            roughSvg.line(w, -off, w, h + off), //           |
            roughSvg.line(-off, h, w + off, h), // -----------
        ];

        document.fonts.ready.then(() => {
            const off = 5;
            const w = svgElement.clientWidth;
            const h = svgElement.clientHeight;

            var lines = generateLines(off, w, h);
            lines.forEach((line) => svgElement.appendChild(line));

            svgElement.classList.remove("opacity-0");

            // window.setInterval(() => {
            //     lines.forEach(line => svgElement.removeChild(line))
            //     lines = generateLines(off, w, h)
            //     lines.forEach(line => svgElement.appendChild(line))
            // }, 200)
        });
    });
</script>

<div
    class="relative inline-flex bg-transparent text-black duration-100 mx-2
    hover:bg-navy-blue hover:text-white"
>
    <button class="font-retro py-1 px-2 -my-4 mx-2">
        <slot />
    </button>
    <!-- SVG is used for (hand)drawing the border -->
    <svg
        class="absolute w-full h-full overflow-visible -z-10
            opacity-0 duration-300 delay-300"
        bind:this={svgElement}
    >
    </svg>
</div>
