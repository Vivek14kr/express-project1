const express = require("express")

const app = express()

app.get("/", (req, res) =>{
    res.send("Welcome to Home Page")
})

app.get("/users", (req,res) =>{
    const a = [{
            "id": 1,
            "first_name": "Donalt",
            "last_name": "Thing",
            "email": "dthing0@hubpages.com",
            "gender": "Agender"
        },
        {
            "id": 2,
            "first_name": "Cynthie",
            "last_name": "Godsal",
            "email": "cgodsal1@google.nl",
            "gender": "Non-binary"
        },
        {
            "id": 3,
            "first_name": "Rob",
            "last_name": "Farans",
            "email": "rfarans2@cam.ac.uk",
            "gender": "Non-binary"
        },
        {
            "id": 4,
            "first_name": "Zaccaria",
            "last_name": "Readitt",
            "email": "zreaditt3@spiegel.de",
            "gender": "Non-binary"
        },
        {
            "id": 5,
            "first_name": "Aime",
            "last_name": "Fillan",
            "email": "afillan4@theatlantic.com",
            "gender": "Polygender"
        },
        {
            "id": 6,
            "first_name": "Osmund",
            "last_name": "Shorbrook",
            "email": "oshorbrook5@unicef.org",
            "gender": "Male"
        },
        {
            "id": 7,
            "first_name": "Halley",
            "last_name": "Antal",
            "email": "hantal6@nyu.edu",
            "gender": "Agender"
        },
        {
            "id": 8,
            "first_name": "Daphne",
            "last_name": "Binley",
            "email": "dbinley7@home.pl",
            "gender": "Genderfluid"
        },
        {
            "id": 9,
            "first_name": "Christen",
            "last_name": "Grzegorecki",
            "email": "cgrzegorecki8@cpanel.net",
            "gender": "Genderfluid"
        },
        {
            "id": 10,
            "first_name": "Antonina",
            "last_name": "Brewis",
            "email": "abrewis9@home.pl",
            "gender": "Female"
        },
        {
            "id": 11,
            "first_name": "Noel",
            "last_name": "Booi",
            "email": "nbooia@chronoengine.com",
            "gender": "Female"
        },
        {
            "id": 12,
            "first_name": "Konstance",
            "last_name": "Crafts",
            "email": "kcraftsb@google.ru",
            "gender": "Bigender"
        },
        {
            "id": 13,
            "first_name": "Martita",
            "last_name": "Konert",
            "email": "mkonertc@diigo.com",
            "gender": "Bigender"
        },
        {
            "id": 14,
            "first_name": "Kimberli",
            "last_name": "Bittany",
            "email": "kbittanyd@is.gd",
            "gender": "Genderfluid"
        },
        {
            "id": 15,
            "first_name": "Aurie",
            "last_name": "Gayler",
            "email": "agaylere@slashdot.org",
            "gender": "Polygender"
        },
        {
            "id": 16,
            "first_name": "Nickolai",
            "last_name": "McTaggart",
            "email": "nmctaggartf@unc.edu",
            "gender": "Agender"
        },
        {
            "id": 17,
            "first_name": "Babara",
            "last_name": "Ondrak",
            "email": "bondrakg@e-recht24.de",
            "gender": "Genderfluid"
        },
        {
            "id": 18,
            "first_name": "Tonye",
            "last_name": "Mountlow",
            "email": "tmountlowh@google.com",
            "gender": "Female"
        },
        {
            "id": 19,
            "first_name": "Joly",
            "last_name": "Toffetto",
            "email": "jtoffettoi@fastcompany.com",
            "gender": "Female"
        },
        {
            "id": 20,
            "first_name": "Salomi",
            "last_name": "Gritsunov",
            "email": "sgritsunovj@ted.com",
            "gender": "Agender"
        },
        {
            "id": 21,
            "first_name": "Dilly",
            "last_name": "Timoney",
            "email": "dtimoneyk@smugmug.com",
            "gender": "Non-binary"
        },
        {
            "id": 22,
            "first_name": "Noella",
            "last_name": "Daldry",
            "email": "ndaldryl@hao123.com",
            "gender": "Male"
        },
        {
            "id": 23,
            "first_name": "Kirby",
            "last_name": "Billows",
            "email": "kbillowsm@wiley.com",
            "gender": "Polygender"
        },
        {
            "id": 24,
            "first_name": "Xylina",
            "last_name": "Finlayson",
            "email": "xfinlaysonn@washington.edu",
            "gender": "Male"
        },
        {
            "id": 25,
            "first_name": "Buckie",
            "last_name": "Shyres",
            "email": "bshyreso@flickr.com",
            "gender": "Polygender"
        },
        {
            "id": 26,
            "first_name": "Paulie",
            "last_name": "Leyninye",
            "email": "pleyninyep@slashdot.org",
            "gender": "Genderqueer"
        },
        {
            "id": 27,
            "first_name": "Dulcia",
            "last_name": "Giacoboni",
            "email": "dgiacoboniq@jiathis.com",
            "gender": "Agender"
        },
        {
            "id": 28,
            "first_name": "Galvin",
            "last_name": "Chalker",
            "email": "gchalkerr@infoseek.co.jp",
            "gender": "Non-binary"
        },
        {
            "id": 29,
            "first_name": "Maribelle",
            "last_name": "Elflain",
            "email": "melflains@usatoday.com",
            "gender": "Genderfluid"
        },
        {
            "id": 30,
            "first_name": "Camila",
            "last_name": "Hunnable",
            "email": "chunnablet@gravatar.com",
            "gender": "Bigender"
        },
        {
            "id": 31,
            "first_name": "Stavros",
            "last_name": "Bingle",
            "email": "sbingleu@spotify.com",
            "gender": "Bigender"
        },
        {
            "id": 32,
            "first_name": "Maryellen",
            "last_name": "Mateescu",
            "email": "mmateescuv@acquirethisname.com",
            "gender": "Polygender"
        },
        {
            "id": 33,
            "first_name": "Tiphani",
            "last_name": "Simoes",
            "email": "tsimoesw@over-blog.com",
            "gender": "Bigender"
        },
        {
            "id": 34,
            "first_name": "Kile",
            "last_name": "Buckner",
            "email": "kbucknerx@google.nl",
            "gender": "Agender"
        },
        {
            "id": 35,
            "first_name": "Rory",
            "last_name": "Theobalds",
            "email": "rtheobaldsy@scribd.com",
            "gender": "Female"
        },
        {
            "id": 36,
            "first_name": "Fairleigh",
            "last_name": "Horning",
            "email": "fhorningz@edublogs.org",
            "gender": "Polygender"
        },
        {
            "id": 37,
            "first_name": "Etty",
            "last_name": "Hitchens",
            "email": "ehitchens10@t-online.de",
            "gender": "Polygender"
        },
        {
            "id": 38,
            "first_name": "Ursa",
            "last_name": "Peto",
            "email": "upeto11@mysql.com",
            "gender": "Agender"
        },
        {
            "id": 39,
            "first_name": "Wald",
            "last_name": "Valentinuzzi",
            "email": "wvalentinuzzi12@miibeian.gov.cn",
            "gender": "Polygender"
        },
        {
            "id": 40,
            "first_name": "Kain",
            "last_name": "Gavozzi",
            "email": "kgavozzi13@zdnet.com",
            "gender": "Non-binary"
        },
        {
            "id": 41,
            "first_name": "Ahmad",
            "last_name": "De Mattia",
            "email": "ademattia14@nationalgeographic.com",
            "gender": "Genderfluid"
        },
        {
            "id": 42,
            "first_name": "Aggie",
            "last_name": "Carnachen",
            "email": "acarnachen15@dion.ne.jp",
            "gender": "Genderfluid"
        },
        {
            "id": 43,
            "first_name": "Sybyl",
            "last_name": "Carvilla",
            "email": "scarvilla16@pinterest.com",
            "gender": "Genderfluid"
        },
        {
            "id": 44,
            "first_name": "Erick",
            "last_name": "Pasquale",
            "email": "epasquale17@eepurl.com",
            "gender": "Polygender"
        },
        {
            "id": 45,
            "first_name": "Lorinda",
            "last_name": "Ridout",
            "email": "lridout18@e-recht24.de",
            "gender": "Polygender"
        },
        {
            "id": 46,
            "first_name": "Mari",
            "last_name": "Langdale",
            "email": "mlangdale19@oracle.com",
            "gender": "Agender"
        },
        {
            "id": 47,
            "first_name": "Keri",
            "last_name": "Gepp",
            "email": "kgepp1a@e-recht24.de",
            "gender": "Bigender"
        },
        {
            "id": 48,
            "first_name": "Herby",
            "last_name": "Dove",
            "email": "hdove1b@tiny.cc",
            "gender": "Male"
        },
        {
            "id": 49,
            "first_name": "Emlynn",
            "last_name": "Gercken",
            "email": "egercken1c@clickbank.net",
            "gender": "Non-binary"
        },
        {
            "id": 50,
            "first_name": "Costanza",
            "last_name": "McIlwrick",
            "email": "cmcilwrick1d@simplemachines.org",
            "gender": "Bigender"
        },
        {
            "id": 51,
            "first_name": "Correna",
            "last_name": "Cammiemile",
            "email": "ccammiemile1e@blinklist.com",
            "gender": "Genderqueer"
        },
        {
            "id": 52,
            "first_name": "Towney",
            "last_name": "Dusting",
            "email": "tdusting1f@ox.ac.uk",
            "gender": "Agender"
        },
        {
            "id": 53,
            "first_name": "Yvette",
            "last_name": "Fynes",
            "email": "yfynes1g@github.com",
            "gender": "Male"
        },
        {
            "id": 54,
            "first_name": "Lannie",
            "last_name": "Kohtler",
            "email": "lkohtler1h@jiathis.com",
            "gender": "Polygender"
        },
        {
            "id": 55,
            "first_name": "Hardy",
            "last_name": "Fishe",
            "email": "hfishe1i@boston.com",
            "gender": "Female"
        },
        {
            "id": 56,
            "first_name": "Sonnie",
            "last_name": "McBain",
            "email": "smcbain1j@domainmarket.com",
            "gender": "Male"
        },
        {
            "id": 57,
            "first_name": "Sella",
            "last_name": "Woller",
            "email": "swoller1k@slate.com",
            "gender": "Genderfluid"
        },
        {
            "id": 58,
            "first_name": "Beverie",
            "last_name": "Yoselevitch",
            "email": "byoselevitch1l@slideshare.net",
            "gender": "Genderqueer"
        },
        {
            "id": 59,
            "first_name": "Felisha",
            "last_name": "Munt",
            "email": "fmunt1m@bing.com",
            "gender": "Genderfluid"
        },
        {
            "id": 60,
            "first_name": "Starr",
            "last_name": "Maliphant",
            "email": "smaliphant1n@tiny.cc",
            "gender": "Male"
        },
        {
            "id": 61,
            "first_name": "Wilhelmine",
            "last_name": "Hathwood",
            "email": "whathwood1o@goo.ne.jp",
            "gender": "Male"
        },
        {
            "id": 62,
            "first_name": "Katusha",
            "last_name": "Dykins",
            "email": "kdykins1p@google.fr",
            "gender": "Genderqueer"
        },
        {
            "id": 63,
            "first_name": "Susana",
            "last_name": "Bragg",
            "email": "sbragg1q@cornell.edu",
            "gender": "Female"
        },
        {
            "id": 64,
            "first_name": "Karlan",
            "last_name": "Chetham",
            "email": "kchetham1r@forbes.com",
            "gender": "Agender"
        },
        {
            "id": 65,
            "first_name": "Llewellyn",
            "last_name": "Barnbrook",
            "email": "lbarnbrook1s@utexas.edu",
            "gender": "Male"
        },
        {
            "id": 66,
            "first_name": "Felicle",
            "last_name": "Bodleigh",
            "email": "fbodleigh1t@netscape.com",
            "gender": "Genderqueer"
        },
        {
            "id": 67,
            "first_name": "Ignatius",
            "last_name": "Haylor",
            "email": "ihaylor1u@fotki.com",
            "gender": "Male"
        },
        {
            "id": 68,
            "first_name": "Lorenzo",
            "last_name": "Boanas",
            "email": "lboanas1v@nydailynews.com",
            "gender": "Polygender"
        },
        {
            "id": 69,
            "first_name": "Jenine",
            "last_name": "Semered",
            "email": "jsemered1w@home.pl",
            "gender": "Female"
        },
        {
            "id": 70,
            "first_name": "Doyle",
            "last_name": "Ezele",
            "email": "dezele1x@macromedia.com",
            "gender": "Polygender"
        },
        {
            "id": 71,
            "first_name": "Monica",
            "last_name": "Troak",
            "email": "mtroak1y@dion.ne.jp",
            "gender": "Female"
        },
        {
            "id": 72,
            "first_name": "Rolph",
            "last_name": "Meller",
            "email": "rmeller1z@dailymail.co.uk",
            "gender": "Genderqueer"
        },
        {
            "id": 73,
            "first_name": "Gaby",
            "last_name": "Tillett",
            "email": "gtillett20@mediafire.com",
            "gender": "Non-binary"
        },
        {
            "id": 74,
            "first_name": "Arlin",
            "last_name": "Verling",
            "email": "averling21@squidoo.com",
            "gender": "Male"
        },
        {
            "id": 75,
            "first_name": "Jonathan",
            "last_name": "Godbert",
            "email": "jgodbert22@alibaba.com",
            "gender": "Polygender"
        },
        {
            "id": 76,
            "first_name": "Rickard",
            "last_name": "Bellringer",
            "email": "rbellringer23@ameblo.jp",
            "gender": "Agender"
        },
        {
            "id": 77,
            "first_name": "Garey",
            "last_name": "Farlham",
            "email": "gfarlham24@typepad.com",
            "gender": "Agender"
        },
        {
            "id": 78,
            "first_name": "Marcella",
            "last_name": "Mulvagh",
            "email": "mmulvagh25@icq.com",
            "gender": "Female"
        },
        {
            "id": 79,
            "first_name": "Griffith",
            "last_name": "Valente",
            "email": "gvalente26@columbia.edu",
            "gender": "Non-binary"
        },
        {
            "id": 80,
            "first_name": "Chery",
            "last_name": "Brownsword",
            "email": "cbrownsword27@barnesandnoble.com",
            "gender": "Bigender"
        },
        {
            "id": 81,
            "first_name": "Francisca",
            "last_name": "O'Ruane",
            "email": "foruane28@e-recht24.de",
            "gender": "Genderfluid"
        },
        {
            "id": 82,
            "first_name": "Bennie",
            "last_name": "East",
            "email": "beast29@webeden.co.uk",
            "gender": "Genderqueer"
        },
        {
            "id": 83,
            "first_name": "Paton",
            "last_name": "Coalburn",
            "email": "pcoalburn2a@people.com.cn",
            "gender": "Genderqueer"
        },
        {
            "id": 84,
            "first_name": "Karee",
            "last_name": "Hilhouse",
            "email": "khilhouse2b@blinklist.com",
            "gender": "Agender"
        },
        {
            "id": 85,
            "first_name": "Babbette",
            "last_name": "Shasnan",
            "email": "bshasnan2c@discovery.com",
            "gender": "Genderfluid"
        },
        {
            "id": 86,
            "first_name": "Blondell",
            "last_name": "Robyns",
            "email": "brobyns2d@samsung.com",
            "gender": "Male"
        },
        {
            "id": 87,
            "first_name": "Andrea",
            "last_name": "Dudgeon",
            "email": "adudgeon2e@blogspot.com",
            "gender": "Female"
        },
        {
            "id": 88,
            "first_name": "Sinclare",
            "last_name": "Dumphrey",
            "email": "sdumphrey2f@nhs.uk",
            "gender": "Genderfluid"
        },
        {
            "id": 89,
            "first_name": "Maiga",
            "last_name": "Ybarra",
            "email": "mybarra2g@icq.com",
            "gender": "Bigender"
        },
        {
            "id": 90,
            "first_name": "Kylynn",
            "last_name": "Dannel",
            "email": "kdannel2h@xinhuanet.com",
            "gender": "Non-binary"
        },
        {
            "id": 91,
            "first_name": "Camala",
            "last_name": "Varnam",
            "email": "cvarnam2i@columbia.edu",
            "gender": "Female"
        },
        {
            "id": 92,
            "first_name": "Rose",
            "last_name": "Durrance",
            "email": "rdurrance2j@ocn.ne.jp",
            "gender": "Agender"
        },
        {
            "id": 93,
            "first_name": "Torr",
            "last_name": "Ferrero",
            "email": "tferrero2k@taobao.com",
            "gender": "Genderqueer"
        },
        {
            "id": 94,
            "first_name": "Celestine",
            "last_name": "Gristwood",
            "email": "cgristwood2l@cnbc.com",
            "gender": "Agender"
        },
        {
            "id": 95,
            "first_name": "Willard",
            "last_name": "Moyse",
            "email": "wmoyse2m@cbsnews.com",
            "gender": "Polygender"
        },
        {
            "id": 96,
            "first_name": "Candice",
            "last_name": "Michie",
            "email": "cmichie2n@blogtalkradio.com",
            "gender": "Male"
        },
        {
            "id": 97,
            "first_name": "Saudra",
            "last_name": "Keizman",
            "email": "skeizman2o@cornell.edu",
            "gender": "Bigender"
        },
        {
            "id": 98,
            "first_name": "Dene",
            "last_name": "Lumsdaine",
            "email": "dlumsdaine2p@wordpress.com",
            "gender": "Genderqueer"
        },
        {
            "id": 99,
            "first_name": "Aaron",
            "last_name": "Dohms",
            "email": "adohms2q@theglobeandmail.com",
            "gender": "Genderfluid"
        },
        {
            "id": 100,
            "first_name": "Casandra",
            "last_name": "Navein",
            "email": "cnavein2r@netlog.com",
            "gender": "Agender"
        }
    ]
    res.send(a)
})
app.listen(2345, function(){
    console.log("listening on port 2345")
})