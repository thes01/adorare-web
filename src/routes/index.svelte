<Layout>
    <NavBar></NavBar>
    <header class="flex justify-center overflow-hidden">
        <Hero></Hero>
    </header>
    <main class="container mx-auto">
        <div class="w-100">
            <h2 tabindex="-1" id="o-nas" class="kanka-1">Něco málo o&nbsp;nás</h2>
            <p class="mb-14">
                Jsme křesťanská hudební skupina, která má svůj původ v obci Študlov na Valašskoklobucku.
                Poprvé jsme pod názvem Adorare (tj. klanět se, chválit...), vystoupili v roce 2006 na hudebním
                festivalu Hradní tóny. Jméno jsme si dali podle modlitby adorace, k níž jsme se v té době pravidelně
                scházeli ve študlovském kostele. Naší službou je především skládání vlastních písní. Tak se snažíme
                rozšiřovat křesťanský hudební repertoár, ale také svědčit o naší osobní víře. Také doprovázíme mše svaté,
                různá setkání mládeže, vedeme večery chval a koncertujeme.
            <p>
            <Csm></Csm>
                
            <h2 tabindex="-1" id="podporte-nas">Budeme rádi za podporu</h2>
            <p class="mb-20">
                Na potřebné vybavení a nástroje si nevyděláváme jinak než z dobrovolného vstupného a prodejem našich cédéček,
                zpěvníků (a nově i triček, magnetek a plátěnek), které si můžete objednat zde na webu v sekci <a href="#objednavka">Adorare shop</a> a my vám je zašleme poštou.
                Úsměv na tváři našemu pokladníkovi jistě vykouzlí také váš libovolně štědrý dar na účet <span class="font-monospace">2113503842/2700</span>.
                Mimo věci ohledně peněz bychom rádi zmínili, že nepopsatelnou podporou jsou pro nás vaše modlitby, díky kterým můžeme opravdu cítit a prožívat Boží požehnání
                a naším dílem o něm svědčit. Děkujeme!
            </p>

            <h2 tabindex="-1" id="nove-cd" class="leading-none">Nové cd - K&nbsp;vodám</h2>
            <NewCd></NewCd>
            
            <div class="skvrny-back-1"></div>
            <h2 tabindex="-1" class="mt-12" id="objednavka">Adorare shop</h2>
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
    import Csm from './components/organisms/Csm.svelte';
    import Footer from './components/organisms/Footer.svelte';
    import NewCd from './components/organisms/NewCd.svelte';

    import Shop from './components/organisms/Shop.svelte'
    import Gallery from './components/organisms/Gallery.svelte';
    import GalleryImages from './data/GalleryImages';

    import "vanilla-tilt";
</script>