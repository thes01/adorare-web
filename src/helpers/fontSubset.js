import subsetFont from 'subset-font'
import fs from 'fs'
import base64 from 'base-64'
import path from 'path'

async function main() {
    const subsetStrings = "Chvály únor/březen Tříkrálový koncert Něco málo o nás Budeme rádi za podporu Nové cd - K vodám Adorare shop Cd a zpěvníky K vodám New generation Nech se vést V otázkách Voláme k Tobě 1. Zpěvník 2. Zpěvník Tričko Plátěnka Magnetka"
    
    const fontBuffer = fs.readFileSync(path.resolve('static/fonts/RetroSignature.woff2'))
    const subsetBuffer = await subsetFont(fontBuffer, subsetStrings, {
        targetFormat: 'woff2',
    });
    
    const fontBase64 = base64.encode(String.fromCharCode(...subsetBuffer))

    fs.writeFileSync(path.resolve('src/styles/fontRetro.css'), getCss('RetroSignature', fontBase64))
}

function getCss(fontName, fontBase64) {
    return `@font-face { font-family: ${fontName}; src: url("data:application/x-font-woff2;charset=utf-8;base64,${fontBase64}") format('woff2'); }`
}

main()