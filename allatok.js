var afrikai_allatok = [
    {
        "nev": "Oroszlán",
        "tudomanyos_nev": "Panthera leo",
        "leiras": "Az oroszlán az egyik legnagyobb macskaféle ragadozó, főként Afrikában található.",
        "kep": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/800px-Lion_waiting_in_Namibia.jpg"
    },
    {
        "nev": "Elefánt",
        "tudomanyos_nev": "Loxodonta africana",
        "leiras": "Az afrikai elefánt a legnagyobb szárazföldi állat, hosszú ormánnyal és nagy fülekkel.",
        "kep": "https://hamuesgyemant.hu/media-library/elefant-a-vadonban.jpg?id=34280159&width=1200&height=800&quality=85&coordinates=2%2C0%2C2%2C0"
    },
    {
        "nev": "Zsiráf",
        "tudomanyos_nev": "Giraffa camelopardalis",
        "leiras": "A zsiráf a legmagasabb szárazföldi állat, hosszú nyakáról és foltos bundájáról ismert.",
        "kep": "https://www.erdekesvilag.hu/kepek2/zsiraf-genek/zsirafok-12.jpg"
    },
    {
        "nev": "Zebra",
        "tudomanyos_nev": "Equus quagga",
        "leiras": "A zebra fekete-fehér csíkos bundájáról ismert, és Afrikában él vadon.",
        "kep": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Zebra_standing_alone_crop.jpg/640px-Zebra_standing_alone_crop.jpg"
    }
];
  
var azsiai_allatok = [
    {
        "nev": "Tigris",
        "tudomanyos_nev": "Panthera tigris",
        "leiras": "A tigris az egyik legnagyobb macskaféle, Ázsia sűrű erdeiben él, és csíkos bundájáról híres.",
        "kep": "https://upload.wikimedia.org/wikipedia/commons/6/66/Adult_male_Royal_Bengal_tiger.jpg"
    },
    {
        "nev": "Panda",
        "tudomanyos_nev": "Ailuropoda melanoleuca",
        "leiras": "A panda, más néven óriáspanda, bambusszal táplálkozik, és Kína hegyeiben él.",
        "kep": "https://cdn.shopify.com/s/files/1/0555/7698/5664/articles/pandabeer-scaled.jpg?v=1668091796&width=1500"
    },
    {
        "nev": "Japán makákó",
        "tudomanyos_nev": "Macaca fuscata",
        "leiras": "A japán makákó vagy hómakákó Ázsia egyik legismertebb majma, és Japánban őshonos.",
        "kep": "https://cdn.cms.mtv.hu/wp-content/uploads/sites/7/2023/01/GettyImages-1460243903.jpg"
    },
    {
        "nev": "Orángután",
        "tudomanyos_nev": "Pongo pygmaeus",
        "leiras": "Az orángután nagytestű majom, amely főként Borneó és Szumátra esőerdeiben él.",
        "kep": "https://stories.sandiegozoo.org/wp-content/uploads/2021/05/Orangutan1.jpg"
    }
];

var ausztral_allatok = [
    {
        "nev": "Kenguru",
        "tudomanyos_nev": "Macropus",
        "leiras": "A kenguru az egyik legismertebb ausztrál erszényes, nagy ugrásairól híres.",
        "kep": "https://nepszava.hu/i/12/8/1/506953.jpg"
    },
    {
        "nev": "Koala",
        "tudomanyos_nev": "Phascolarctos cinereus",
        "leiras": "A koala faágakon élő, eukaliptuszlevelekkel táplálkozó erszényes.",
        "kep": "https://www.wwf.org.uk/sites/default/files/styles/max_650x650/public/2022-05/_WW236934.jpg?itok=JlG-1l9V"
    },
    {
        "nev": "Emu",
        "tudomanyos_nev": "Dromaius novaehollandiae",
        "leiras": "Az emu egy nagy, röpképtelen madár, amely Ausztrália síkságain él.",
        "kep": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Emu_1_-_Tidbinbilla.jpg"
    },
    {
        "nev": "Kacsacsőrű emlős",
        "tudomanyos_nev": "Ornithorhynchus anatinus",
        "leiras": "A kacsacsőrű emlős egy egyedülálló, tojásrakó emlős, amely csak Ausztráliában található.",
        "kep": "https://img.hvg.hu/Img/7fcefbf8-ac48-4ee6-aef5-32203afa118c/6579b8f6-b3d6-43dd-881c-56a83ee77701.jpg"
    }
];

var europai_allatok = [
    {
        "nev": "Barna medve",
        "tudomanyos_nev": "Ursus arctos",
        "leiras": "A barna medve Európa nagy erdeiben és hegyvidékein él, és mindenevő.",
        "kep": "https://ujszo.com/sites/default/files/styles/image_16_10_w600/public/lead_image/2023-04/shutterstock_1725069664.jpg.jpg?itok=upPsMfEb"
    },
    {
        "nev": "Szarvas",
        "tudomanyos_nev": "Cervus elaphus",
        "leiras": "A szarvas nagytestű növényevő, amely Európa erdeiben és mezőin található.",
        "kep": "https://kep.cdn.indexvas.hu/1/0/5462/54627/546277/54627791_4036379_f50d9cb1dec1a3d3f77c2503aa5561b3_wm.jpg"
    },
    {
        "nev": "Vörös róka",
        "tudomanyos_nev": "Vulpes vulpes",
        "leiras": "A vörös róka alkalmazkodó ragadozó, amely szinte minden élőhelyen megtalálható Európában.",
        "kep": "https://9bdc368acb.clvaw-cdnwnd.com/b74c702a7a50c340dbab3c1f1557eabb/200000857-6be096ccab/R%C3%B3ka.jpg?ph=9bdc368acb"
    },
    {
        "nev": "Borz",
        "tudomanyos_nev": "Meles meles",
        "leiras": "A borz erős, ásó karmairól és éjszakai életmódjáról ismert, és Európa erdeiben él.",
        "kep": "https://upload.wikimedia.org/wikipedia/commons/a/a1/%27Honey%27_-_geograph.org.uk_-_2642786.jpg"
    }
];

var del_amerikai_allatok = [
    {
        "nev": "Jaguár",
        "tudomanyos_nev": "Panthera onca",
        "leiras": "A jaguár a legnagyobb macskaféle Amerikában, és erős, izmos testéről ismert.",
        "kep": "https://allatokorszaga.hu/wp-content/uploads/2023/03/panthera-onca1.jpg"
    },
    {
        "nev": "Lajhár",
        "tudomanyos_nev": "Bradypus",
        "leiras": "A lajhár lassú mozgásáról ismert, és Dél-Amerika esőerdeiben él.",
        "kep": "https://www.agraroldal.hu/kep/730x400/1023842.jpg"
    },
    {
        "nev": "Kapucinus majom",
        "tudomanyos_nev": "Cebinae",
        "leiras": "A kapucinus majom intelligens és társas lény, amely Dél-Amerika erdeiben él.",
        "kep": "https://upload.wikimedia.org/wikipedia/commons/1/18/Cebus_capucinus_at_the_Bronx_Zoo_002.jpg"
    },
    {
        "nev": "Láma",
        "tudomanyos_nev": "Lama glama",
        "leiras": "A láma a Dél-Amerikai Andok hegységeiben élő háziasított teveféle.",
        "kep": "https://www.zoogyor.com/images/documents/64/lama_profile.jpg"
    }
];

var vizi_allatok = [
    {
        "nev": "Delfin",
        "tudomanyos_nev": "Delphinidae",
        "leiras": "A delfin intelligens és játékos tengeri emlős, amely a világ óceánjaiban él.",
        "kep": "https://ng.24.hu/uploads/2023/12/original.jpeg"
    },
    {
        "nev": "Cápa",
        "tudomanyos_nev": "Selachimorpha",
        "leiras": "A cápa különböző fajtái a tengerek csúcsragadozói, éles fogaikról és gyors úszásukról híresek.",
        "kep": "https://upload.wikimedia.org/wikipedia/commons/3/31/Great_white_shark_south_africa.jpg"
    },
    {
        "nev": "Polip",
        "tudomanyos_nev": "Octopus",
        "leiras": "A polip intelligens puhatestű, amely a világ óceánjainak mélyén él, és nyolc karjáról ismert.",
        "kep": "https://ocdn.eu/pulscms-transforms/1/eeIktkpTURBXy9jMjg5N2QyZmU2ZTBlM2IxYTBmMmU4NDBlNzNhZDc0NS5qcGeSlQMAH80D6M0CMpUCzQNSAMLD"
    },
    {
        "nev": "Tengeri teknős",
        "tudomanyos_nev": "Chelonioidea",
        "leiras": "A tengeri teknősök hosszú életűek, és a világ óceánjainak trópusi és szubtrópusi vizeiben élnek.",
        "kep": "https://felfedezomagazin.hu/wp-content/uploads/2018/01/tengeri-tekn%C5%91s.jpg"
    }
];