# Adorare web

Tento kód představuje frontend webových stránek [www.adorare.cz](https://www.adorare.cz). Použité frameworky: Svelte (SvelteKit), Tailwind + modulární dělení komponent podle principu [Atomic design](https://atomicdesign.bradfrost.com/).

## Spuštění v localhostu

Pro úspěšný běh je potřeba nainstalovat `NodeJS` spolu s package managerem `npm` (resp. `yarn`). 

### První spuštění

```bash
npm install
# nebo
yarn
```

### Spuštění serveru

```bash
# buď
npm run dev
# nebo
yarn dev
```
Stránky by měly být dostupné na `http://localhost:3000/`

Pro produkční build slouží následující příkaz:

```bash
npm run build
# nebo
yarn build
```
