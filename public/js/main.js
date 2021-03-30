// penampung data live view nya

let data_lv = {
    mempelai_pria : "",
    mempelai_wanita : "",
    tanggal_akad : "",
    tanggal_resepsi : "",
    lokasi : "",
    gmaps : "",
    pesan : "",
    font : "",
    font_size : "",
    background : ""
}

const handleChange = (event) => {

    // membersihkan layar console
    console.clear();

    data_lv = {
        // POPULATE prev Property and value
        // menampilkan kembali data sebelumnya
        ...data_lv,

        // edit / tambah data baru
        [event.target.name] : event.target.value
    };

    console.log(data_lv);

    // tangkap dan inner html content data
    let lv_mempelai = document.querySelector(".lv_mempelai")
    let lv_akad = document.querySelector(".lv_akad")
    let lv_resepsi_time = document.querySelector(".lv_resepsi_time")
    let lv_resepsi_lokasi = document.querySelector(".lv_resepsi_lokasi")
    let lv_pesan = document.querySelector(".lv_pesan")

    // inner HTML
    lv_mempelai.innerHTML = `${data_lv.mempelai_pria} & ${data_lv.mempelai_wanita}`;
    lv_akad.innerHTML = data_lv.tanggal_akad.replace("T", " / ");
    lv_resepsi_time.innerHTML = data_lv.tanggal_resepsi.replace("T", " / ");
    lv_resepsi_lokasi.innerHTML = data_lv.lokasi;
    lv_pesan.innerHTML = data_lv.pesan;



};

// fungsi untuk mengubah font pada class lv_mempelai
const ubahFont = (event) => {

    // tangkap component class lv_mempelai
    let lv_mempelai = document.querySelector(".lv_mempelai");

    // ubah font
    lv_mempelai.style.fontFamily = event.target.value;
}

const ubahFontSize = (event) => {
    // tangkap component class lv_mempelai
    let lv_mempelai = document.querySelector(".lv_mempelai");

    // ubah font
    lv_mempelai.style.fontSize = event.target.value + "px";
}


const getPexelImage = () => {
    let mib = document.querySelector(".modal-image-body")

    fetch('https://api.pexels.com/v1/search?query=background&per_page=27', {
        method : 'GET',
        mode : 'cors',
        headers : {
            "Content-Type" : "application/json",
            Authorization : "563492ad6f91700001000001b2b0deafaff5448482f8eedf2ec8bdb7"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.photos.map((e)=>{
            mib.innerHTML += `
                <img src="${e.src.tiny}" width="32.5%" >
            `
        })
    })
    .catch(err => console.log(err))
}

getPexelImage();