<div class="flex flex-wrap md:flex-nowrap -mb-40">
    <div class="w-full md:w-7/12 lg:w-8/12">
        <p class="mb-10 pr-48">
            V neděli 5. června 2022 ve Valašských Kloboukách jsme měli čest představit vám naše nejnovější CD autorských písní - <i>K vodám</i>.
            Titulní písní se stala stejnojmenná píseň, která vyšla online jako singl, po boku animovaného klipu <button on:click={() => tab = 'malirem-nebe'} class="underline hover:no-underline">Malířem nebe</button> ze stejného alba.
            <span class="md:hidden">Pod videm</span><span class="hidden md:inline-block">Vpravo</span> také naleznete sadu tématických tapet, které si můžete stáhnout na váš mobil.
        </p>
        <div class="mb-2 relative">
            <button on:click={() => tab = 'k-vodam'} class={`border-2 p-3 ${borders['k-vodam']}`}>K vodám</button>
            <button on:click={() => tab = 'malirem-nebe'} class={`border-2 p-3 ${borders['malirem-nebe']}`}>Malířem nebe</button>
            <button on:click={() => tab = 'poklady'} class={`border-2 p-3 ${borders['poklady']}`}>Poklady</button>
        </div>
        <div class="flex justify-center relative -top-14 -right-28 -z-10">
            <TimelineWrapper topPx={280} bottomPx={400} cls={hideBoxCls} right={true}> 
                <ColorBox title="Poklady" cls="bg-beige">
                    Máme nový videoklip!
                </ColorBox>
            </TimelineWrapper>
        </div>
        
        <YouTube cls={`w-full relative -top-20 youtube-${tab}`} videoId={videos[tab]} title="Adorare - Klip"/>
    </div>
    <div class="md:w-5/12 lg:w-4/12 md:pl-8">
        <div hidden={tab != 'k-vodam'}>
            <GalleryDownload imgItems={[...GalleryImages.BackgroundsKvodam, ...GalleryImages.BackgroundsOthers]}></GalleryDownload>
        </div>
    
        <div hidden={tab != 'malirem-nebe'}>
            <GalleryDownload imgItems={GalleryImages.BackgroundsZalm}></GalleryDownload>
        </div>

        <div hidden={tab != 'poklady'} class="text-gray-600 italic text-lg">
            <p class="mb-2">"Neukládejte si poklady na zemi, kde je ničí mol a rez a kde je zloději vykopávají a kradou. Ukládejte si poklady v nebi, kde je neničí mol ani rez a kde je zloději nevykopávají a nekradou. Neboť kde je tvůj poklad, tam bude i tvé srdce."
                </p>
                <p>Mt 6,19-21</p>

            <img src="/layout/skvrny_2.jpg" alt="">
        </div>
    </div>
</div>


<script>
    import YouTube from '../../components/atoms/YouTube.svelte';

    import GalleryDownload from './GalleryDownload.svelte';
    import GalleryImages from '../../data/GalleryImages';
    import ColorBox from '../atoms/ColorBox.svelte';
    import TimelineWrapper from '../molecules/TimelineWrapper.svelte';

    let tab = 'poklady'

    const videos = {
        'k-vodam': 'VCNvYfCBYvg',
        'malirem-nebe': 'H4dKb_MfYwk',
        'poklady': '6plW50YJBl4'
    }

    $: borders = {
        'k-vodam': tab == 'k-vodam' ? 'border-blue-200' : 'border-gray-200',
        'malirem-nebe': tab == 'malirem-nebe' ? 'border-orange-200': 'border-gray-200',
        'poklady': tab == 'poklady' ? 'border-blue-400' : 'bordery-gray-200'
    }

    let hideBoxCls = '';
</script>