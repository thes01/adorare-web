<svelte:head>
    <meta name="recaptcha-site-key" content={sitekey}>
    <script type="text/javascript">
        function onRecaptchaLoad() {   
            grecaptcha.execute(document.querySelector('meta[name=recaptcha-site-key]').content, { action: "submit" })
                    .then(token =>
                        document.querySelectorAll('.recaptchaResponse').forEach(elem => {
                                elem.value = token;
                                elem.dispatchEvent(new Event('input'));
                            }
                        )
                    )
        }
      </script>
    <script src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render={sitekey}" async defer></script>
</svelte:head>

<input type="hidden" class="recaptchaResponse" bind:value={value}>

<script>
    const sitekey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

    export let value;
</script>