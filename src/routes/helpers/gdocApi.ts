// import axios from 'axios'

// todo: move somewhere to config or whatever
const GDOC_URL = 'https://script.google.com/macros/s/AKfycbyXjrnYw1MjohVhDnw-88Acy2zfwokYsI3s2iqAZ3xE4VTy7AMzsGN3sIk32xHJPWVhPg/exec'

async function makePostRequest(route: string, payload: object) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    // const headers = {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    // }

    const resp = await fetch(GDOC_URL, {
        method: 'POST',
        headers,
        mode: 'no-cors',
        redirect: 'follow',
        body: JSON.stringify({route, payload})
    })
    const data = await resp.json()
    return data
}

export default {
    submitOrderForm: (items, orderData) => makePostRequest('submit', {items, orderData})
}