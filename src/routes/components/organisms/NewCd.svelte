<div class="flex flex-wrap md:flex-nowrap">
    <div class="w-full md:w-7/12 lg:w-8/12">
        <p class="mb-10">
            V neděli 5. června 2022 ve Valašských Kloboukách jsme měli čest představit vám naše nejnovější CD autorských písní - <i>K vodám</i>.
            Titulní písní se stala stejnojmenná píseň, která vyšla online jako singl, po boku animovaného klipu <button on:click={() => tab = 'malirem-nebe'} class="underline hover:no-underline">Malířem nebe</button> ze stejného alba.
            <span class="md:hidden">Pod videm</span><span class="hidden md:inline-block">Vpravo</span> také naleznete sadu tématických tapet, které si můžete stáhnout na váš mobil.
        </p>
        <div class="mb-2">
            <button on:click={() => tab = 'k-vodam'} class={`border-2 p-3 ${borders['k-vodam']}`}>K vodám</button>
            <button on:click={() => tab = 'malirem-nebe'} class={`border-2 p-3 ${borders['malirem-nebe']}`}>Malířem nebe</button>
        </div>
        <YouTube cls={`w-full mb-2 youtube-${tab}`} src={videos[tab]} title="Adorare - Klip"/>
    </div>
    <div class="md:w-5/12 lg:w-4/12 md:pl-8">
        <div hidden={tab != 'k-vodam'}>
            <GalleryDownload imgItems={[...GalleryImages.BackgroundsKvodam, ...GalleryImages.BackgroundsOthers]}></GalleryDownload>
        </div>
    
        <div hidden={tab != 'malirem-nebe'}>
            <GalleryDownload imgItems={GalleryImages.BackgroundsZalm}></GalleryDownload>
        </div>
    </div>
</div>


<script>
    import YouTube from '../../components/atoms/YouTube.svelte';

    import GalleryDownload from './GalleryDownload.svelte';
    import GalleryImages from '../../data/GalleryImages';

    let tab = 'k-vodam'

    const videos = {
        'k-vodam': 'https://www.youtube.com/embed/VCNvYfCBYvg',
        'malirem-nebe': 'https://www.youtube.com/embed/H4dKb_MfYwk'
    }

    $: borders = {
        'k-vodam': tab == 'k-vodam' ? 'border-blue-200' : 'border-gray-200',
        'malirem-nebe': tab == 'malirem-nebe' ? 'border-orange-200': 'border-gray-200'
    }
</script>