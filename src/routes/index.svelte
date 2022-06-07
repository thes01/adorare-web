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
            <p class="mb-20">
                Jsme křesťanská hudební skupina, která má svůj původ v obci Študlov na Valašskoklobucku.
                Poprvé jsme pod názvem Adorare (tj. klanět se, chválit...), vystoupili v roce 2006 na hudebním
                festivalu Hradní tóny. Jméno jsme si dali podle modlitby adorace, k níž jsme se v té době pravidelně
                scházeli ve študlovském kostele. Naší službou je především skládání vlastních písní. Tak se snažíme
                rozšiřovat křesťanský hudební repertoár, ale také svědčit o naší osobní víře. Také doprovázíme mše svaté,
                různá setkání mládeže, vedeme večery chval a koncertujeme.
            <p>
                
            <h2 class="text-right">Budeme rádi za podporu</h2>
            <p class="mb-20">
                Na potřebné vybavení a nástroje si nevyděláváme jinak než z dobrovolného vstupného a prodejem našich cédéček,
                zpěvníků (a nově i triček, magnetek a plátěnek), které si můžete objednat zde na webu v sekci <a href="#shop">Adorare shop</a> a my vám je zašleme poštou.
                Úsměv na tváři našemu pokladníkovi jistě vykouzlí také váš libovolně štědrý dar na účet <span class="font-monospace">2113503842/2700</span>.
                Mimo věci ohledně peněz bychom rádi zmínili, že nepopsatelnou podporou jsou pro nás vaše modlitby, díky kterým můžeme opravdu cítit a prožívat Boží požehnání
                a naším dílem o něm svědčit. Děkujeme! 💙
            </p>

            <h2 class="leading-none">Nové cd - K&nbsp;vodám</h2>
            <p class="mb-10">
                V neděli 5. června 2022 ve Valašských Kloboukách jsme měli čest představit vám naše nejnovější CD autorských písní - <i>K vodám</i>.
                Titulní písní se stala stejnojmenná píseň, která vyšla online jako singl, po boku animovaného klipu <a href="https://www.youtube.com/watch?v=H4dKb_MfYwk">Malířem nebe</a> ze stejného alba.
            </p>
            <div class="flex justify-center">
                <YouTube cls="mobile-full" src="https://www.youtube.com/embed/VCNvYfCBYvg" title="Adorare - K vodám"/>
            </div>
            
            <div class="skvrny-back-1"></div>
            <h2 class="mt-12" id="shop">Adorare shop</h2>
            <Shop></Shop>
            <div class="mt-6 mb-12 mobile-full">
                <Gallery imgItems={GalleryImages.ImageList}></Gallery>
                <p><a target="_blank" href="https://eu.zonerama.com/KaterinaHolbova/Album/8480142?secret=6650xgJ2gIl7D7CtIjf39Bg0T">Všechny propagační fotky najdete zde</a></p>
            </div>

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
    import YouTube from './components/atoms/YouTube.svelte';

    import Shop from './components/organisms/Shop.svelte'
    import Gallery from './components/organisms/Gallery.svelte';
    import GalleryImages from './data/GalleryImages';

    import "vanilla-tilt"
</script>