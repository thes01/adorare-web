<div class="flex flex-wrap md:flex-nowrap">
    <div class="w-full md:w-1/2">
        <YouTube cls={`mb-2 relative ${ytbCls} flex`} 
                videoId="jKpT_KpyC-I"
                title="Adorare - Představení na CSM Hradec Králové"
                on:play={hideBox}
                playerVars={{color: 'white', modestbranding: 1}}/>
        <div class="justify-center relative -top-20
            -right-32 md:-right-20 lg:-right-24 xl:-right-28 2xl:-right-40
            hidden sm:flex">
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
        <h3 class="leading-none mb-4">Záznamy z&nbsp;celostátního setkání</h3>
        <p class="mb-2">Na Youtube si můžete pustit záznamy z programu, který jsme doprovázeli.</p>
        <ul>
            <li><a href="https://youtu.be/U4Cd-Vr4QYM?t=34">Sobotní vigílie</a></li>
            <li><a href="https://youtu.be/Uh24LYwC1gA?t=29">Nedělní mše</a></li>
        </ul>
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