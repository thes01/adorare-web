<div
    data-tilt
    class="tilt-layer-base sizing-box flex justify-center items-center"
>
    <img src="/hero/3.min.png" alt="" class="tilt-layer-1 sizing-box" />
    <img src="/hero/2.min.png" alt="" class="tilt-layer-3 sizing-box" />
    <img src="/hero/4.min.png" alt="" class="tilt-layer-4 sizing-box" />
    <img src="/hero/7.min.png" alt="" class="tilt-layer-4 sizing-box" />
    <img src="/hero/5.min.png" alt="" class="tilt-layer-4 sizing-box" />
    <img src="/hero/1.min.png" alt="" class="tilt-layer-5 sizing-box" />
    <img src="/adologo_newgen.svg" alt="" class="tilt-layer-6 w-2/5" />
</div>

<!-- <img src="../static/design/static.png" alt="static logo"> -->

<style lang="postcss">
    /* works with data-tilt */
    .tilt-layer-base {
        transform-style: preserve-3d;
    }

    .tilt-layer-base * {
        @apply absolute;
    }

    .sizing-box {
        width: 100vw;
        height: 100vw;

        @screen sm {
            width: 380px;
            height: 380px;
        }

        @screen md {
            width: 600px;
            height: 600px;
        }

        @screen lg {
            width: 800px;
            height: 800px;
        }
    }

    .sizing-box img {
        max-width: unset;
    }

    .tilt-layer-1 {
        transform: translateZ(theme("spacing.1"));
    }
    /* .tilt-layer-2 {
        transform: translateZ(theme("spacing.2"));
    } */
    .tilt-layer-3 {
        transform: translateZ(theme("spacing.6"));
    }
    .tilt-layer-4 {
        transform: translateZ(theme("spacing.8"));
    }
    .tilt-layer-5 {
        transform: translateZ(theme("spacing.12"));
    }
    .tilt-layer-6 {
        transform: translateZ(theme("spacing.14"));
    }
</style>
