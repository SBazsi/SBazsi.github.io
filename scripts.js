let kezdoterv = ["Saját testsúlyos guggolás", "4", "12", "",
    "Dobozra guggolás", "4", "10", "Kanapéra vagy székre guggolás",
    "Kitörés hátra", "4", "10/10", "Súllyal vagy anélkül",
    "Homorítás", "4", "15", "Hasonfekvésből mellkas megemelése, lábak maradnak a talajon",
    "Mellúszás", "4", "15", "Hasonfekvésből mellkas megemelkedik és a karjaidat magad mellé behúzod majd kinyújtod",
    "Pillangó úszás", "4", "15", "Hasonfekvésből pillangó úszás, nyújtott karral",
    "Fekvőtámasz", "4", "10", "Térdek a talajon",
    "Robbanó fekvőtámasz", "4", "10", "Lassan engeded le, majd a lehető leggyorsabban nyújtod ki a karjaidat",
    "Fekvőtámasz dobozon", "4", "10", "Kanapén vagy széken támaszkodsz a kezeiddel és úgy hajtod végre",
    "Plank", "4", "40 mp", "",
    "Side Plank", "4", "30 mp / oldal", "",
    "Side plank csípőemeléssel", "4", "8 / oldal", "Felül lévő lábadat kanapéra vagy székre rakod és azzal a lábbal emeled fel és engeded le a csípőd",
    "Csípőemelés", "4", "20", "",
    "Sarokemelés", "4", "20", "A kedvenc vádli gyakorlatotok :)",
    "Hegymászó lábak keresztbe behúzással", "4", "10 / láb", "Lassan, élvezd ki a mozgást",
    "Hernyó", "4", "10", "",
    "Íjász fekvőtámasz", "4", "8 / oldal", "Térdek a talajon",
    "Fekvőtámasz", "4", "10", "Térdek a talajon",
    "Ollózás", "4", "10 / láb", "Hátonfekvésben felváltva emeled a lábaidat. Sarok nem érinti a talajt",
    "V sit tartás", "4", "40 mp", "https://www.youtube.com/watch?v=3tQuBuZLma4",
    "Lábemelés tartás", "4", "40 mp", "Hátonfekvésben lábaidat nyújtva és talaj felett tartod",
    "Spiderman", "4", "10 / láb", "Fekvőtámasz tartásban térdeiddel felváltva próbálod megérinteni a könyököd.",
    "Páros lábemelés", "4", "15", "Mint a tartásnál csak most függőlegesig emeled és ha tudod csípődet is megemeled, majd vissza",
    "Hasprés", "4", "20", ""];
let haladoterv = ["Goblet guggolás", "5", "12", "",
    "Egylábas dobozra guggolás", "5", "10", "Kanapéra vagy székre guggolás",
    "Bolgár guggolás", "5", "10/10", "Kanapén vagy széken",
    "Teljes testes homorítás", "5", "15", "Hasonfekvésből mellkas megemelése, lábak is elemelkednek",
    "Mellúszás", "5", "15", "Hasonfekvésből mellkas megemelkedik és a karjaidat magad mellé behúzod majd kinyújtod",
    "Pillangó úszás", "5", "15", "Hasonfekvésből pillangó úszás, nyújtott karral",
    "Gyémánt fekvőtámasz", "5", "10", "",
    "Lassú fekvőtámasz", "5", "10", "Lassan engeded le, majd lassan is emelkedsz.",
    "Fekvőtámasz dobozon", "5", "10", "Lábaidat kanapéra vagy székre rakod és így csinálod.",
    "Plank", "5", "50 mp", "",
    "Side Plank", "5", "45 mp / oldal", "",
    "Side plank csípőemeléssel", "5", "10 / oldal", "Felül lévő lábadat kanapéra vagy székre rakod és azzal a lábbal emeled fel és engeded le a csípőd",
    "Egylábas csípőemelés", "5", "15 / láb", "",
    "Egylábas sarokemelés", "5", "20 / láb", "A kedvenc vádli gyakorlatotok :)",
    "Hegymászó lábak keresztbe behúzással dobozon", "5", "10 / láb", "Lassan, élvezd ki a mozgást",
    "Hernyó + fekvőtámasz", "5", "10", "",
    "Íjász fekvőtámasz", "5", "8 / oldal", "",
    "Gyémánt fekvőtámasz", "5", "10", "",
    "Ollózás", "5", "15 / láb", "Hátonfekvésben felváltva emeled a lábaidat. Sarok nem érinti a talajt",
    "V sit tartás", "5", "50 mp", "https://www.youtube.com/watch?v=3tQuBuZLma4",
    "Lábemelés tartás", "5", "50 mp", "Hátonfekvésben lábaidat nyújtva és talaj felett tartod",
    "Spiderman + fekvőtámasz", "5", "10 / láb", "Fekvőtámasz közben térdeiddel felváltva próbálod megérinteni a könyököd.",
    "Páros lábemelés és fordulás", "5", "10 / oldal", "Mint a tartásnál csak most függőlegesig emeled és ha tudod csípődet is megemeled és oldalra csavarod a csípődet, majd vissza",
    "Fordított hasprés", "5", "20", "Most a hátad marad a talajon és csak az alsótest mozog."];
let elsonap = [];
let table = document.getElementById('myTable');
let btntorles = document.getElementById('torles');
let btnkezdo = document.getElementById('kezdo');
let btnhalado = document.getElementById('halado');
btntorles.disabled = true;



function kezdoedzes() {
    table.style.visibility = "visible";
    elsonap = document.getElementsByClassName('kezdo');
    for (let i = 0; i < elsonap.length; i++) {
        const element = elsonap[i];

        elsonap[i].innerHTML = kezdoterv[i];
    }
    btntorles.disabled = false;
    $('#torles').css('opacity', '1');
    $('#torles').css('cursor', 'pointer');
    btnkezdo.disabled = true;
    $('#kezdo').css('opacity', '0.2');
    $('#kezdo').css('cursor', 'none');
    btnhalado.disabled = true;
    $('#halado').css('opacity', '0.2');
    $('#halado').css('cursor', 'none');
}

function haladoedzes() {
    table.style.visibility = "visible";
    elsonap = document.getElementsByClassName('halado');
    for (let i = 0; i < elsonap.length; i++) {
        const element = elsonap[i];
        elsonap[i].innerHTML = haladoterv[i];
    }
    btntorles.disabled = false;
    $('#torles').css('opacity', '1');
    $('#torles').css('cursor', 'pointer');
    btnkezdo.disabled = true;
    $('#kezdo').css('opacity', '0.2');
    $('#kezdo').css('cursor', 'none');
    btnhalado.disabled = true;
    $('#halado').css('opacity', '0.2');
    $('#halado').css('cursor', 'none');
}

function torles() {
    table.style.visibility = "hidden";
    for (let i = 0; i < elsonap.length; i++) {
        const element = elsonap[i];
        elsonap[i].innerHTML = "";
    }
    btntorles.disabled = true;
    $('#torles').css('opacity', '0.2');
    $('#torles').css('cursor', 'none');
    btnkezdo.disabled = false;
    $('#kezdo').css('opacity', '1');
    $('#kezdo').css('cursor', 'pointer');
    btnhalado.disabled = false;
    $('#halado').css('opacity', '1');
    $('#halado').css('cursor', 'pointer');
}

