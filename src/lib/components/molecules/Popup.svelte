<script lang="ts">
    export let success: boolean;
</script>

<div class="mx-2 mt-8 mb-2 hyphens-auto">
    {#if success}
        <p>
            Děkujeme za Vaši objednávku! Na email by Vám mělo přijít automaticky
            vygenerované shrnutí objednávky. Až nám dorazí peníze na účet, tak
            objednávku odešleme.
            <br />
            <br />
            V případě problémů nebo dotazů se prosíme ozvěte na náš email
            <b>objednavka@adorare.cz</b>.
        </p>
    {:else}
        <p>
            Bohužel se objevila chyba při zpracování formuláře, prosím
            kontaktujte nás přímo na email: <b>objednavka@adorare.cz</b>
        </p>
    {/if}
</div>
