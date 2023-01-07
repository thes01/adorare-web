<div class="flex flex-wrap md:flex-nowrap">
    <div class="w-full md:w-7/12 lg:w-8/12 md:pr-10">
        <p class="mb-10">
            V neděli 5. června 2022 ve Valašských Kloboukách jsme měli čest představit vám naše nejnovější CD autorských písní - <i>K vodám</i>.
            Titulní písní se stala stejnojmenná píseň, která vyšla online jako singl, po boku animovaného klipu <button on:click={() => tab = 'malirem-nebe'} class="underline hover:no-underline">Malířem nebe</button> ze stejného alba.
            <span class="md:hidden">Pod videm</span><span class="hidden md:inline-block">Vpravo</span> také naleznete sadu tématických tapet, které si můžete stáhnout na váš mobil.
        </p>
        <div class="mb-2 relative">
            <button on:click={() => tab = 'k-vodam'} class={`border-2 p-3 mb-1 ${borders['k-vodam']}`}>K vodám</button>
            <button on:click={() => tab = 'malirem-nebe'} class={`border-2 p-3 mb-1 ${borders['malirem-nebe']}`}>Malířem nebe</button>
            <button on:click={() => tab = 'poklady'} class={`border-2 p-3 mb-1 ${borders['poklady']}`}>Poklady</button>
            <button on:click={() => tab = 'dalsi'} class={`border-2 p-3 mb-1 ${borders['dalsi']}`}>Další skladby...</button>
        </div>

        {#if tab != 'dalsi'}
            <YouTube cls={`w-full relative youtube-${tab} mb-4`} videoId={videos[tab]} title="Adorare - Klip"/>
        {/if}
    </div>
    <div class="md:w-5/12 lg:w-4/12 relative">
        <div hidden={tab != 'k-vodam'}>
            <GalleryDownload imgItems={[...GalleryImages.BackgroundsKvodam, ...GalleryImages.BackgroundsOthers]}></GalleryDownload>
        </div>
    
        <div hidden={tab != 'malirem-nebe'}>
            <GalleryDownload imgItems={GalleryImages.BackgroundsZalm}></GalleryDownload>
        </div>

        <div hidden={tab != 'poklady'} class="text-gray-600 italic">
            <p class="mb-2">"Neukládejte si poklady na zemi, kde je ničí mol a rez a kde je zloději vykopávají a kradou. Ukládejte si poklady v nebi, kde je neničí mol ani rez a kde je zloději nevykopávají a nekradou. Neboť kde je tvůj poklad, tam bude i tvé srdce."
                </p>
                <p>Mt 6,19-21</p>
        </div>

        <div hidden={tab != 'dalsi'}>
            <SpotifyEmbed type="k-vodam" height="500"></SpotifyEmbed>
        </div>
    </div>
</div>


<script>
    import YouTube from '../../components/atoms/YouTube.svelte';
    import GalleryDownload from './GalleryDownload.svelte';
    import GalleryImages from '../../data/GalleryImages';
    import SpotifyEmbed from '../atoms/SpotifyEmbed.svelte';

    let tab = 'poklady'

    const videos = {
        'k-vodam': 'VCNvYfCBYvg',
        'malirem-nebe': 'H4dKb_MfYwk',
        'poklady': '6plW50YJBl4'
    }

    $: borders = {
        'k-vodam': tab == 'k-vodam' ? 'border-blue-200' : 'border-gray-200',
        'malirem-nebe': tab == 'malirem-nebe' ? 'border-orange-200': 'border-gray-200',
        'poklady': tab == 'poklady' ? 'border-blue-400' : 'bordery-gray-200',
        'dalsi': tab == 'dalsi' ? 'border-navy-blue' : 'bordery-gray-200'
    }

    let hideBoxCls = '';
</script>