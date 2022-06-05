const prefilled = {
    name: 'Mira',
    email: 'a@a.cz',
    city: 'city',
    address: 'address',
    psc: '23455',
    phone: '22222222',
    note: 'dafaf',
    note_sizes: '',
    recaptcha_response: ''
}

const empty = {
    name: '',
    email: '',
    city: '',
    address: '',
    psc: '',
    phone: '',
    note: '',
    note_sizes: '',
    recaptcha_response: ''
}

export default import.meta.env.DEV ? prefilled : empty