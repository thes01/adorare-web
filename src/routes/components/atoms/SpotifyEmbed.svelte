<iframe
  style="border-radius:12px;"
  src={`https://open.spotify.com/embed/${uri_list[type]}`}
  width={width}
  height={height}
  frameBorder="0"
  allowfullscreen
  title="Adorare na Spotify"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
/>

<script>
  export let height = "400px";
  export let width = "310px";
  export let type = "adorare";

  let uri_list = {
    "k-vodam": "album/0OSLIDK8y0M7II2hVn7f5f",
    "adorare": "artist/3vnsh4Z8eBN0AD6iTiITn3"
  }
</script>