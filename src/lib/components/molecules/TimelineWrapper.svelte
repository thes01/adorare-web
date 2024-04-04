<script>
    export let topPx = 200;
    export let bottomPx = 200;
    export let cls = "";

    export let right = false;

    $: transformStyle = right ? "transform: translateX(50%);" : "";
</script>

<div class={`relative ${cls}`}>
    <div
        class="timeline-line timeline-fader-top right-10"
        style={`height: ${topPx}px; top: -${topPx}px;`}
    ></div>
    <div
        class="timeline-line timeline-fader-bottom right-10"
        style={`height: ${bottomPx}px; bottom: -${bottomPx}px;`}
    ></div>
    <div class="timeline-dot -top-16"></div>

    <div style={transformStyle}>
        <slot />
    </div>
</div>
