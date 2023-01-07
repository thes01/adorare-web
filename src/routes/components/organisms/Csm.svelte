<div class="flex flex-wrap md:flex-nowrap">
    <div class="w-full md:w-1/2 mb-4 md:mb-0">
        <YouTube cls={`mb-2 relative ${ytbCls} flex youtube-normal`} 
                videoId="jKpT_KpyC-I"
                title="Adorare - Představení na CSM Hradec Králové"
                on:play={hideBox}
                playerVars={{color: 'white', modestbranding: 1}}/>
        <div class="justify-center relative -top-20
            -right-32 md:-right-20 lg:-right-24 xl:-right-28 2xl:-right-40
            hidden sm:flex">
            <!-- desktop (with wrapper) -->
            <TimelineWrapper topPx={280} bottomPx={100} cls={hideBoxCls}> 
                <ColorBox title="CSM Hradec Králové" cls="bg-gray-blue">
                    Děkujeme TV Noe za natočení<br>krátkého klipu o naší skupině. 💙
                </ColorBox>
            </TimelineWrapper>
        </div>

        <!-- mobile -->
        <ColorBox title="CSM Hradec Králové" cls="sm:hidden bg-gray-blue">
            Děkujeme TV Noe za natočení<br>krátkého klipu o naší skupině. 💙
        </ColorBox>
    </div>
    <div class="w-full md:w-1/2 md:pl-28
                mb-8 md:mb-0">
        <h2 class="leading-none mb-4 md:text-5xl">Záznamy z&nbsp;celostátního&nbsp;setkání</h2>
        <p class="mb-2">Ze záznamů TV Noe jsme připravili <a href="https://www.youtube.com/watch?v=r55CuOvJ5WI&list=PLvClrOgp4U7kqP1mU8c2q5bJK7UoO4tIN">playlist
            všech sestříhaných písní</a> z hlavního programu, který jsme doprovázeli.</p>
        <p>Během setkání v našem podání zazněly jak písně z našeho nejnovějšího CD <a href="#nove-cd">K vodám</a>,
            tak překlady zahraničních chválových písní a další písně, které jsme zvyklí hrávat během večerů chval.</p>
    </div>
</div>

<script>
    import YouTube from "../atoms/YouTube.svelte";
    import TimelineWrapper from "../molecules/TimelineWrapper.svelte";
    import ColorBox from "../atoms/ColorBox.svelte";
    
    $: hideBoxCls = '';
    $: ytbCls = '';

    function hideBox() {
        hideBoxCls = '-z-10'
        ytbCls = 'shadow-sm z-10'
    }
</script>
