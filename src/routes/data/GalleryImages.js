class Img {
    constructor(url) {
        this.url = url
    }

    get thumbUrl() {
        return this.url
    }

    get fullUrl() {
        return this.url
    }
}

export default {
    Img,
    ImageList: [
        new Img('https://res.cloudinary.com/adorare/image/upload/v1654423974/ado-merch/IMG_0402_1_sf7ebo.jpg'),
        new Img('https://res.cloudinary.com/adorare/image/upload/v1654423979/ado-merch/IMG_0460_1_imhfqt.jpg'),
        new Img('https://res.cloudinary.com/adorare/image/upload/v1654423980/ado-merch/IMG_0472_1_myjme9.jpg'),
        new Img('https://res.cloudinary.com/adorare/image/upload/v1654423979/ado-merch/IMG_0459_1_vz5h7k.jpg'),
        new Img('https://res.cloudinary.com/adorare/image/upload/v1654423976/ado-merch/IMG_0424_1_jkikmc.jpg'),
        new Img('https://res.cloudinary.com/adorare/image/upload/v1654423972/ado-merch/IMG_0379_1_vjehsb.jpg'),
    ]
}