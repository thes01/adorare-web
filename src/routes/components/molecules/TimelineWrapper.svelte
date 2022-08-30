<div class={`relative ${cls}`}>
    <div class="timeline-line timeline-fader-top right-10"
        style={`height: ${topPx}px; top: -${topPx}px;`}></div>
    <div class="timeline-line timeline-fader-bottom right-10"
        style={`height: ${bottomPx}px; bottom: -${bottomPx}px;`}></div>
    <div class="timeline-dot -top-16"></div>

    <slot></slot>
</div>


<script>
    export let topPx = 200;
    export let bottomPx = 200;
    export let cls = '';
</script>