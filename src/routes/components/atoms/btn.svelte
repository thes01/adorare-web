<div class="btn-hand">
    <button>
        <slot></slot>
    </button>
    <svg bind:this={svgElement}>
    </svg>
</div>

<script>
    import { onMount } from 'svelte'
    import roughjs from 'roughjs'

    let svgElement

    onMount(() => {
        let roughSvg = roughjs.svg(svgElement)

        document.fonts.ready.then(() => {
            const off = 5;
            const w = svgElement.clientWidth
            const h = svgElement.clientHeight
    
            const lines = [
                roughSvg.line(-off, 0, w + off, 0), // -----------
                roughSvg.line(0, -off, 0, h + off), // |
                roughSvg.line(w, -off, w, h + off), //           |
                roughSvg.line(-off, h, w + off, h)  // -----------
            ]
            lines.forEach(line => svgElement.appendChild(line))
        })
    });
</script>

<style>
    .btn-hand {
        position: relative;
        display: inline-flex;
        margin: 0 0.5rem;
        background-color: transparent;
        color: black;
        transition: 100ms;
    }

    .btn-hand:hover {
        background-color: #1c354b; /* navy blue */
        color: white;
    }

    .btn-hand button {
        padding: 0.3rem 0.5rem;
        font-family: RetroSignature;
        font-size: 3rem;
        margin: -1rem 0.5rem;
    }

    .btn-hand svg {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: visible;
        z-index: -1;
    }
</style>