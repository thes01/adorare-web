class Img {
    constructor(uri) {
        this.uri = uri
        this.base_url = 'https://res.cloudinary.com/adorare/image/upload/'
    }

    transformedUrl(transformation = '') {
        if (transformation.length > 0) {
            transformation += '/'
        }
        return this.base_url + transformation + this.uri
    }

    get thumbUrl() {
        return this.transformedUrl('c_scale,q_45,w_1000')
    }
    
    get fullUrl() {
        return this.transformedUrl('c_scale,q_85,w_1920')
    }
}

export default {
    Img,
    ImageList: [
        new Img('v1654423974/ado-merch/IMG_0402_1_sf7ebo.jpg'),
        new Img('v1654423979/ado-merch/IMG_0460_1_imhfqt.jpg'),
        new Img('v1654423980/ado-merch/IMG_0472_1_myjme9.jpg'),
        new Img('v1654423979/ado-merch/IMG_0459_1_vz5h7k.jpg'),
        new Img('v1654423976/ado-merch/IMG_0424_1_jkikmc.jpg'),
        new Img('v1654423972/ado-merch/IMG_0379_1_vjehsb.jpg'),
    ]
}