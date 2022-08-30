<script>
    import "../styles/app.css";
    // import "flowbite/dist/flowbite.css";
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;600&family=Work+Sans:wght@500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
    <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>

    <meta property="og:image" content="/hero/static.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="926">
    <meta property="og:image:height" content="661">
</svelte:head>
  

<slot />