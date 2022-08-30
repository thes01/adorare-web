<Layout>
    <div class="mx-8 mt-4">
        <!-- <img src="/adologo_dark.svg" alt="adorare" class="w-32"> -->
    </div>
    <!-- <NavBar></NavBar> -->
    <header class="flex justify-center">
        <Hero></Hero>
    </header>
    <main class="container mx-auto">
        <div class="w-100">
            <h2 class="kanka-1">Něco málo o&nbsp;nás</h2>
            <p class="mb-14">
                Jsme křesťanská hudební skupina, která má svůj původ v obci Študlov na Valašskoklobucku.
                Poprvé jsme pod názvem Adorare (tj. klanět se, chválit...), vystoupili v roce 2006 na hudebním
                festivalu Hradní tóny. Jméno jsme si dali podle modlitby adorace, k níž jsme se v té době pravidelně
                scházeli ve študlovském kostele. Naší službou je především skládání vlastních písní. Tak se snažíme
                rozšiřovat křesťanský hudební repertoár, ale také svědčit o naší osobní víře. Také doprovázíme mše svaté,
                různá setkání mládeže, vedeme večery chval a koncertujeme.
            <p>

            <div class="flex">
                <div class="w-1/2">
                    <YouTube cls={`mb-2 relative ${ytbCls}`} 
                            videoId="jKpT_KpyC-I"
                            title="Adorare - Představení na CSM Hradec Králové"
                            on:play={hideBox}
                            playerVars={{color: 'white', modestbranding: 1}}/>
                    <div class="flex justify-center relative -top-20 -right-40">
                        <TimelineWrapper topPx={280} bottomPx={100} cls={hideBoxCls}> 
                            <ColorBox title="CSM Hradec Králové" cls="bg-gray-blue">
                                Děkujeme TV Noe za natočení<br>krátkého klipu o naší skupině. 💙
                            </ColorBox>
                        </TimelineWrapper>
                    </div>
                </div>
                <div class="w-1/2 pl-28">
                    <h3>Záznamy z celostátního setkání</h3>
                    <p class="mb-2">Na Youtube si můžete pustit záznamy ze sobotní vigílie a nedělní mše, které jsme doprovázeli.</p>
                    <ul>
                        <li on:click={() => changeVideo('aaa', 0)} class="underline hover:no-underline cursor-pointer">Řeknu všem</li>
                    </ul>
                </div>
            </div>

                
            <h2 class="text-right">Budeme rádi za podporu</h2>
            <p class="mb-20">
                Na potřebné vybavení a nástroje si nevyděláváme jinak než z dobrovolného vstupného a prodejem našich cédéček,
                zpěvníků (a nově i triček, magnetek a plátěnek), které si můžete objednat zde na webu v sekci <a href="#shop">Adorare shop</a> a my vám je zašleme poštou.
                Úsměv na tváři našemu pokladníkovi jistě vykouzlí také váš libovolně štědrý dar na účet <span class="font-monospace">2113503842/2700</span>.
                Mimo věci ohledně peněz bychom rádi zmínili, že nepopsatelnou podporou jsou pro nás vaše modlitby, díky kterým můžeme opravdu cítit a prožívat Boží požehnání
                a naším dílem o něm svědčit. Děkujeme!
            </p>

            <h2 class="leading-none">Nové cd - K&nbsp;vodám</h2>
            <NewCd></NewCd>
            
            <div class="skvrny-back-1"></div>
            <h2 class="mt-12" id="shop">Adorare shop</h2>
            <Shop></Shop>
            <div class="mt-6 mb-12 mobile-full">
                <Gallery imgItems={GalleryImages.Merch}></Gallery>
                <p><a target="_blank" href="https://eu.zonerama.com/KaterinaHolbova/Album/8480142?secret=6650xgJ2gIl7D7CtIjf39Bg0T">Všechny propagační fotky najdete zde</a></p>
            </div>

            <!-- <h2 class="mt-12 text-right" id="noty">Noty</h2>
            <p>Blablabla</p> -->

            <!-- <Members></Members> -->
    </main>

    <Footer></Footer>
</Layout>

<script>
    import Layout from './__layout.svelte'
    import Hero from './components/organisms/Hero.svelte'
    import NavBar from './components/organisms/NavBar.svelte'
    import Members from './components/organisms/Members.svelte';
    import Footer from './components/organisms/Footer.svelte';
    import NewCd from './components/organisms/NewCd.svelte';
    import YouTube from './components/atoms/YouTube.svelte';
    import ColorBox from './components/atoms/ColorBox.svelte';
    import TimelineWrapper from './components/molecules/TimelineWrapper.svelte';

    import Shop from './components/organisms/Shop.svelte'
    import Gallery from './components/organisms/Gallery.svelte';
    import GalleryImages from './data/GalleryImages';

    import "vanilla-tilt";

    $: hideBoxCls = '';
    $: ytbCls = '';

    function hideBox() {
        hideBoxCls = '-z-10'
        ytbCls = 'shadow-sm z-10'
    }
</script>