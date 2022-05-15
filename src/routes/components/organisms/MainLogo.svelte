<div data-tilt class="tilt-layer-base sizing-box flex justify-center items-center">
    <img src="/design/3.min.png" alt="" class="tilt-layer-1 sizing-box">
    <img src="/design/2.min.png" alt="" class="tilt-layer-2 sizing-box">
    <img src="/design/4.min.png" alt="" class="tilt-layer-3 sizing-box">
    <img src="/design/5.min.png" alt="" class="tilt-layer-3 sizing-box">
    <img src="/design/7.min.png" alt="" class="tilt-layer-4 sizing-box">
    <img src="/design/1.min.png" alt="" class="tilt-layer-5 sizing-box">
    <img src="/adologo_newgen.svg" alt="" class="tilt-layer-6 w-2/5">
</div>

<!-- <img src="../static/design/static.png" alt="static logo"> -->

<style>
/* works with data-tilt */
.tilt-layer-base {
    transform-style: preserve-3d;
}

.tilt-layer-base * {
    @apply absolute;
}

.sizing-box {
    width: 800px;
    height: 800px;
}

.tilt-layer-1 { transform: translateZ(theme('spacing.1')); }
.tilt-layer-2 { transform: translateZ(theme('spacing.2')); }
.tilt-layer-3 { transform: translateZ(theme('spacing.4')); }
.tilt-layer-4 { transform: translateZ(theme('spacing.6')); }
.tilt-layer-5 { transform: translateZ(theme('spacing.8')); }
.tilt-layer-6 { transform: translateZ(theme('spacing.10')); }
</style>