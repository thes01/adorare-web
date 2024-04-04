class Img {
    constructor(uri, thumb_w = 1000) {
        this.uri = uri
        this.base_url = 'https://res.cloudinary.com/adorare/image/upload/'
        this.thumb_w = thumb_w
    }

    transformedUrl(transformation = '') {
        if (transformation.length > 0) {
            transformation += '/'
        }
        return this.base_url + transformation + this.uri
    }

    get thumbUrl() {
        return this.transformedUrl(`c_scale,q_45,w_${this.thumb_w}`)
    }
    
    get fullUrl() {
        return this.transformedUrl('c_scale,q_85,w_1920')
    }

    downloadUrl(filename) {
        return this.transformedUrl(`fl_attachment:${filename}`)
    }
}

function shuffled(arr) {
    return arr.map(function(n){ return [Math.random(), n] })
            .sort().map(function(n){ return n[1] });
}

function listOfImages(urls, thumb_w = 1000) {
    return urls.map(url => new Img(url, thumb_w))
}

export default {
    Img,
    Merch: listOfImages([
        'v1654423974/ado-merch/IMG_0402_1_sf7ebo.jpg',
        'v1654423979/ado-merch/IMG_0460_1_imhfqt.jpg',
        'v1654423980/ado-merch/IMG_0472_1_myjme9.jpg',
        'v1654423979/ado-merch/IMG_0459_1_vz5h7k.jpg',
        'v1654423976/ado-merch/IMG_0424_1_jkikmc.jpg',
        'v1654423972/ado-merch/IMG_0379_1_vjehsb.jpg',
    ]),

    BackgroundsKvodam: listOfImages([
        'v1654600885/ado-tapety/K%20vod%C3%A1m/1_jykpbp.png',
        'v1654600887/ado-tapety/K%20vod%C3%A1m/2_pjgnhm.png',
        'v1654600891/ado-tapety/K%20vod%C3%A1m/3_h7nchm.png',
        'v1654600894/ado-tapety/K%20vod%C3%A1m/4_fcut6b.png',
        'v1654600900/ado-tapety/K%20vod%C3%A1m/5_l51gzs.png',
        'v1654600912/ado-tapety/K%20vod%C3%A1m/6_vddsyo.png',
        'v1654600921/ado-tapety/K%20vod%C3%A1m/7_wwvevx.png',
        'v1654600929/ado-tapety/K%20vod%C3%A1m/8_uwyveg.png',
        'v1654600959/ado-tapety/K%20vod%C3%A1m/9_l1p8rk.png',
        'v1654600885/ado-tapety/K%20vod%C3%A1m/10_ke390p.png'
    ], 400),

    BackgroundsOthers: listOfImages([
        'v1654855362/ado-tapety/13_il3ilj.png',
        'v1654855419/ado-tapety/14_ixctss.png',
        'v1654855486/ado-tapety/15_s99mmw.png',
        'v1654855525/ado-tapety/16_df0wqr.png',
        'v1654855563/ado-tapety/17_axfwnu.png',
        'v1654855602/ado-tapety/18_m0qiu9.png',
        'v1654855645/ado-tapety/19_gkfiwi.png',
        'v1654855708/ado-tapety/20_s3t4sm.png',
        'v1654855778/ado-tapety/21_yeeql8.png',
        'v1654855827/ado-tapety/22_tk3jxm.png',
        'v1654855914/ado-tapety/23_m8ssyd.png',
        'v1654856004/ado-tapety/24_c6sdiz.png',
        'v1654856096/ado-tapety/25_cm6pjr.png',
    ], 400),

    BackgroundsZalm: listOfImages([
        'v1654692375/ado-tapety/Mal%C3%AD%C5%99em%20nebe/1_psrikk.png',
        'v1654853004/ado-tapety/Mal%C3%AD%C5%99em%20nebe/2_dw3kvl.png',
        'v1654853344/ado-tapety/Mal%C3%AD%C5%99em%20nebe/3_djwujh.png',
        'v1654853658/ado-tapety/Mal%C3%AD%C5%99em%20nebe/4_vt09wp.png',
        'v1654853716/ado-tapety/Mal%C3%AD%C5%99em%20nebe/5_rxokaj.png',
        'v1654853776/ado-tapety/Mal%C3%AD%C5%99em%20nebe/6_nak9ed.png',
        'v1654853838/ado-tapety/Mal%C3%AD%C5%99em%20nebe/7_t1ng7q.png',
        'v1654853902/ado-tapety/Mal%C3%AD%C5%99em%20nebe/8_uo1rky.png',
        'v1654854744/ado-tapety/Mal%C3%AD%C5%99em%20nebe/9_zdu8ua.png',
        'v1654852925/ado-tapety/Mal%C3%AD%C5%99em%20nebe/10_kdsnin.png',
        'v1654852926/ado-tapety/Mal%C3%AD%C5%99em%20nebe/11_juiknt.png',
        'v1654852928/ado-tapety/Mal%C3%AD%C5%99em%20nebe/12_l0yxh0.png',
        'v1654852931/ado-tapety/Mal%C3%AD%C5%99em%20nebe/13_ewxuwj.png',
        'v1654852935/ado-tapety/Mal%C3%AD%C5%99em%20nebe/14_tpct4f.png',
        'v1654852940/ado-tapety/Mal%C3%AD%C5%99em%20nebe/15_swnzct.png',
        'v1654852946/ado-tapety/Mal%C3%AD%C5%99em%20nebe/16_f1houd.png',
        'v1654852954/ado-tapety/Mal%C3%AD%C5%99em%20nebe/17_wvduql.png',
        'v1654852970/ado-tapety/Mal%C3%AD%C5%99em%20nebe/18_qxzkpt.png',
        'v1654852984/ado-tapety/Mal%C3%AD%C5%99em%20nebe/19_yt7flk.png',
        'v1654853026/ado-tapety/Mal%C3%AD%C5%99em%20nebe/20_kwjiyb.png',
        'v1654853050/ado-tapety/Mal%C3%AD%C5%99em%20nebe/21_luayr3.png',
        'v1654853076/ado-tapety/Mal%C3%AD%C5%99em%20nebe/22_qaprvf.png',
        'v1654853097/ado-tapety/Mal%C3%AD%C5%99em%20nebe/23_zbcypp.png',
        'v1654853127/ado-tapety/Mal%C3%AD%C5%99em%20nebe/24_wkz8f5.png',
        'v1654853159/ado-tapety/Mal%C3%AD%C5%99em%20nebe/25_po8pcm.png',
    ], 400)
}