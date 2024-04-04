<script context="module">
  /**
   * Expose PlayerState constants for convenience. These constants can also be
   * accessed through the global YT object after the YouTube IFrame API is instantiated.
   * https://developers.google.com/youtube/iframe_api_reference#onStateChange
   */
  export const PlayerState = {
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5,
  };
</script>

<script>
  import { onMount, createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import YoutubePlayer from "youtube-player";

  export let videoId;
  export let cls;
  export let title;
  export let playerVars = {};
  let player;
  let loadedVideoId = "";

  onMount(() => {
    player = YoutubePlayer(player, {
      videoId,
      playerVars,
    });
    player.on("stateChange", onPlayerStateChange);
    loadedVideoId = videoId;
  });

  $: {
    if (loadedVideoId != "" && videoId != loadedVideoId) {
      player.loadVideoById(videoId);
      loadedVideoId = videoId;
    }
  }

  function onPlayerStateChange(event) {
    dispatch("stateChange", event);

    switch (event.data) {
      case PlayerState.ENDED:
        dispatch("end", event);
        break;

      case PlayerState.PLAYING:
        dispatch("play", event);
        break;

      case PlayerState.PAUSED:
        dispatch("pause", event);
        break;

      default:
    }
  }
</script>

<div class={`${cls} youtube-wrapper`}>
  <div bind:this={player} {title} />
</div>
