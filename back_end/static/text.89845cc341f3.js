dtext();
console.log("entering text.js");
function dtext(){
    var text = [
        "As Sommerlüftle, ganz as lichts, duat Gloggablüemle biaga zart dür 'Zittergresle stricht's, will Halm ond Blättle wiaga. Ds Edelwiß verzuslet's fascht, z'högscht ondraem Silbermona, zücht uber Alparosa, Seidlbascht Bergnaegele ond Anemona. Es flüscht'ret, wischp'ret düra Wald, zücht uber ds Baechle ganz versonna vom Schärtele har an Juhzer hallt, dia erschta Sternele chomma. Bim Hüttle still im Monaschi leihnet dr Buab bim Maike, ds Lüftle stricht ganz licht vorbi,",
        "Kumm inar schnell is Gundele, mir fahrond uf-o See und luogand d'Wealt vo dussa-n-a, döt fröüt-se üs vil meh! Mir stoßond ab und ruodorand. ganz lau a Lüftle goht; dr See ischt glatt und spieglat alls, was ummo-n-umme stoht. Der Obod ischt hüt wundrschü, vor Fröda juckond d'Fisch; as nachtat langsam, d'Sunno röt und wirt bald a klä frisch. Mir stürand widr inarwerts dr Hardar Kircho zuo, und mit deam letschto Schwanopaar gund mir dinn o zur Ruoh",
        "Oobad am Rhi. D'Zeha im iskalta Wasser, uf ama Vorgrunder hocka und luaga, wia d'Sunna im Appazeallerloch verschlüft. As schwimmt verbi, an Brocka schwarzas Grundholz, a paar Taucherle und rhiuf flügt a ganze Hab Möfa vom See. Und dazwüschad kunt an alta Schuah, und an läära Kanischter, a verräckts Kalb. Und wänn d' ganz gnau luagascht, siachscht am Wasser a was d'Schtoffabrika färbend. Oobad am Rhi, D'Zeha i Gummischtifel, uf am Plaschtikkübel hocka, und frooga, wia lang as am Wasser oder wia ma der Brüha noch säga ma, noch zum ushalta ischt.",
        "Mi Leabtag hon i gschafft und gschunde, Vu frieh bis spät zu alla Stunda. Mi Pflicht, so guet as goht, erfillt. Bi sparsam gsi und trei und ehrle. Und flißig allad und reacht wehrle. Und jetzt, so hon i alls verspielt! Mi liebe Frou, die ist mer gstorbe, und d'Kraft und d'Gsundheit sind verdorbe. Drei Buebe liegend tot im Feald. Mi Glick und gär alls ist verrunne, as wie de Butter a der Sunne. As ist an Elend uf der Wealt. Des bizle, wo-n-i ho versparet, um des hot mi de Staat no gnarret. Jetzt bin i alt und arm und krank. Und bar mi Geald und o mi Sächle, bi ibrig wie a Krottedächle. O Wealt, du gist an bittre Dank!",
        "Wär bin i? Was bin i? Was kaani? Was hôn i? I hôn nüüt. I kaa nüüt. I bin nüüt. I bin il",
        "‚Jetz langts mr abr, dees gôôt numma so witr. Jetz isch endle Schluß, du vrdammta Krüppl du. I könnt vôr Wuat platza, abr i wärr dr da Hosaboda scho no schtramm züüha. I wärr dr ds Füdla scho no vrsolna, du Siach du elendiga. Kaasch net aa Môôl rächt tua. Jetz hôsch dia neu Hosa o no vrschrenza müasa, da aana Tag hocksch di uusgrächnat id Wisa wenn frisch bschüttnat isch. Und hösch dia ganz Hosa volla Bschütte. Hüt widr machsch an Schranz i dia neu Hosa inni, wia söll dees witr gôò? I tät am liabschta schpööza vôr Wuat. I wärr di no amôôl ghörig härawixa, du würsch scho no saha. Es kunnt no so wiit, und i hau di amôôl ghörig hära. Wart nu.’ , - Dees alls seet dr Vattr zum Bua. bi dr neua Arzühig seetrs vilicht nu im Schtilla, odr no bessr. Är seets gär net, sôndrn denkt ses nu, und am beschta wäär übrhaupt, är tät ses net amôôl denka.",
        "‚Du, Muottr’, frôgat letscht der Buob, ‚han ich kon Vatr g'ha?‘ ‚An Vatr’ -,seyt sie vör si heo. ‚wuoll, wuoll, - gad ich kon Maa. Din Vatr ist a richa Häorr, vor ihm lupft alls do Huot, ar heät Fabrika doüt am Bäorg und Huus und Wald und Guot.’ ‚Riich’ , seyt der Buob, ‚und meor so arm, jô, ist ar dänn ko Christ? Worum sind meor nid döüt dohuom, wänn er min Vatr ist?’ ‚Kind, Lieb' und Geäld sind zwôiarlôi, das kascht no nid vrstau, i säg dr's dänn a-n-andrsmôl, jetz muoscht ga schlôfo gau’",
        "Vor vielna Johr sen Menner ko, hon grodat, schweri Arbat to und Bühel grommt vo Stöck und Ste. Deweg hot's Güter, Maisas ge. Und oftrölt hon sie Stall und Hus, wo Lüt und Vech gohn i und us. Viel Gschlechter sen dahemat gsi of dena Bühel, groß und kli. Hon burnat, gmärschat, Wib und Ma, Verlit und Arbat hangat dra Und menger ist johr us, johr i i d'Fröndi ga verdiana gsi Hüt ist mengs Bühel-Hemat öd. Da Junga fehlt zom Burna d'Fröd. Und Maisas sen noch meh verlo, stohn halb verkeit, verfulat do. Dia Ställ und Hüsli sen kaputt. Noch öbrig bliebt vom Gmür der Schutt. Verlora gohn a lengri meh. A trurigs Bild. As tuat em weh. Dia Büntana wer'n nömma gfretzt. I vielna hot ma Tennli gsetzt. Do git's drom weder, boda bald, as wia vor Johra gschlossna Wald.",
        "Rund umma Kumma ummi bin i ganga ha Luft und Liacht und Wolka gfanga, ha all's, was trüab ischt, ganz v'rsteckt und all's, was weh toa heat, v'rdeckt. Rund umma Kumma ummi bin i ganga rund umma Kumma. Hoch uf am Kumma domma bin i gseassa ha ummi ummi all's v'rgeassa. Ha gluagat, glosat und ha tromt und all's, was schöa gsi, füarakromt. Hoch uf am Kumma domma bin i gseassa hoch uf am Kumma Rund umma Kumma ummi bin i ganga ha Hoamat gschpürt - a schtills V'rlanga. I ha m'r vorgno, wid'r z'ko und mi vum Kumma fanga z'lo! Rund umma Kumma ummi bin i ganga rund umma Kumma",
        "Dr Vattr vo mim Maa, kunnt vo Lôôz aha. Letschthii bin i mitm ge Lôôz ufi, und ufm Wääg döt ufi simr zuanara Wisa kôô, wor gseet hôt, dô haaßt mas Lutafaz. Vo Lutafaz hôt ma uf an Waal umigsaha, und mitta dinna im Waal isch a Wisa gsi. Dô hôtr gseet, luag döt umi, dees dò dötta isch Gampeledianscht. Lôôz, Lutafaz und Gampeledianscht dees giit a Dreieck, net bim Euklid, abr bim Vattr vo mim Maa. Löôz, Lutafaz und Gampeledianscht, ma waaß net, wia mas schriba söll, wil jedr schriibts andrsch. Abr Lôôz, Lutafaz und Gampeledianscht dees isch a Dreieck, net us Örtr odr Böm, net us Tüpfle idr Kaarta. Es isch a Dreieck. I waaß net wo, vilicht im Härz, vom Vattr, vom Maa.",
        "Hütztag macht ma Werbung mit vil Prozent. Do kommond d’Lüt grad scharawiis grennt, wil Giz ischt gail, und kluppig Si, däs muoß ma doch, däs sioht jeda i. Do Trick bi deom Angebot mit Prozent, däs ischt, dass do Köüfar ko Moß meh kennt. Do wird do Giz all meh zur Gior, und ar rafft alls zämm wio a hungrigs Tior. So bringond d’Konzern vil meh War untor d’Lüt, as wänn ma na Informaziona büt, wio nochhaltig as dio Produkzion ischt, ob do Handl fär odr a Schpekulazion ischt. Heot ‘s Qualität und arfüllt‘s an Zweock? Odr würft ma’s eh bald weok? Vo wela Herschtellar as as kut, däs intressiort doch d’Schnäpplar kon Tut, wil sä’s do as wio d’Schnäpslar händ, wil sä uofach an Ikoufsruusch wänd. Ko Wundor, dass däs niomand juckt, weon der Rabattpriis abetruckt, siochor nid do Konzern, deon riicho, der künnt all no uf a Insl uswiicho, wänn iom do Schtaat eoppas weoknio wett, der kriogt doch nio, was ar gern hett. Nei, nei, dio Varluschtgschäftor schluckond natürlä all dio Klänschto, dio armo Bürlä, d’Schaffar, wo vil hämmorand und schrufand, dass sä’s fascht numma darschnufand. „Geobond’s billig her!“ – der Trick ischt nid nöü – „Odr mior neomond halt nünt meh vo öü.“ So ka üsorä Wirtschaft funkzionioro, und ‘s Rabattgio ka sä rentioro. Do werond dio Schwächschto voll abetecklat, und do Köüfar mirkt gär nid, wio ma’n varsecklat.",
        "Mir heat tromt, der Bodensee ischt verschwunda. Über Nacht ischt er versickert und etz nur noch an wißa Fleack uf der Karte. Buchschtäblich Neu-Land. Die Dütscha sind die Erschta. Sie schtond am Oschtrand vo deam Kessel und luagan wiss- und begierig uf das Relief usBergundTal.Landnahmeischtagset.Geometerund Vermessungsingineurjuschtierenallsneuundmarkieran desschwarz-rot-goldeneTerritoriummitGrenzschtöa. Wer zerscht kunnt, mahlt zerscht. Am Weschtufer versammeln sich d‘ Oschtschwyzer. Dia machansichsofortadaAbschtiegindesehemaligeUnter- wassergebirg, untersuachan Klamma und Schluchta, kleatteran uf Zinka und Zinna und hissen uf jedem Buckel d‘ Schwyzerfahna. Nidig luagen sie über d’Grenz uf die höchschta Gipfel, die geschtern noch die Insla gsi sind, Mainau, Lindau und Reichenau. Und scho am nögschta Sunntig wird abgschtimmt:ErschtensobwegatdeamneuaTiefgebirgeder Rütli-Schwur erneuert wöra muass. Zweitens über da Isatz von Putzkolonna zweacks Aglichig a die subere Schwyz. Drit- tens über d‘ Widmung as Baugrund für Chalets und Hotels.",
        "Dar Munsgaglospitzar mit dom Gaglospitzarmeässr deina heät mr dôletscht gseyt, dass ar Tag und Nacht am liebschto Gagla spitzo tät. Druuf achi han i zöü-om gseyt, ar sey an altä Däpp, weil a Munsgaglospitzar mit dom Gaglospitzarmeässr nömmas andrs macha könnt. Dar Kläntüpflischiißar und dar Hampfsôômobiigar dio hônd an Bôm omtau und siend dänn wägs-om Biiga von Schittr z‘ strittit kau. Kuona machat ‚s diesom reächt, und zmôl tuot as an Tatsch - und dar Kläntüpflischiißar und dar Hampfsôômobiigar härand: „Biiga ischt a Quatsch!“ Dar Zinzdowanzdoboilar und dar Wondrnundlosüdar hockand uf-om Bänkli duss, dô fallt dom ouono uf-o Kopf a grouoßi, schüoni Nuss. „Jetz, luog, beigott, was ischt jetz das, a Wondr donkt as miich!“ Muont dar Zinzdowanzdoboilar und dar Wondrnundlosüdar, däor seyt: „Hauptsach, as triefft diich!“",
        "Wiiß leuchtand Kerza im Kaschtanialob, drüber dr Himml i zartem Blau. Uf am Tischle liegt dick dr Blüataschtob und d’Luft ischt lind und lau. I Truba henkt Fliedr übrn Zu, tüf schnuf i dia Duftwolka i, am Tischle bi miar do sitzischt Du und sescht: i mag nu di. Lär und nachkig stoht hüt dr Bom, dia Liab mit Diar isch vorbei. I sitz am Tischle und i trom Dass es widr so würd wia im Mai."
        ,"i hob mi vor dir usgnomma d milz, d leaba, d lunga, d gräta am kuchatisch. sie liegan boga so dünn so heall du ordnasch se da größe noch die klennschte ganz links dass des nett usluagt sesch du seg i i bin koan fisch meh etz näh mine kiema zua näh se zua und denn hosch d nodl gholt da fada blau isch er gsi so so blau so wassa woasch no wo ma am meer gsi sin döt in san remo und d palma und di klenne schala mit da salziga nüssle din wia etz wia etz am kuchatisch und i muass kle lacha wal da fada net ins nadel- loch inekriagsch i muass lacha und du luagsch mi a luagsch ufan kuche- tisch mine milz mine leaba mine lunga i bin ma num sicha obs übahaupt wettasch wia so döta stosch in da oana hand da fada in da andra d nodl"
        
    ];
    var name = [
        "Ds Abedlüftle",
        "Z'Obod uf-om See",
        "Oobad am Rhi",
        "Klage eines alten Arbeiters",
        "Wär bin i?",
        "Dr Vattr zum Bua",
        "A böosi Frög",
        "Die alt und die neu Zit",
        "Rund umma Kumma ummi",
        "Lôôz, Lutafaz und Gampeledianscht",
        "Rabatt, Rabatt",
        "An Troom",
        "Dar Munsgaglospitzar",
        "Im Mai",
        "i hob mi vor dir usgnomma"

    ]
    var author = [
        "Hedi Fontain",
        "Eugen Stadelmann",
        "Adolf Vallaster",
        "Georg Hämmerle",
        "Inge Dapunt",
        "Inge bapunt",
        "Hannes Grabher",
        "Otto Borger",
        "Rudi Kurzemann",
        "Inge Dapunt",
        "Werner Hagen",
        "Margit Heumann ",
        "Veronika Hofer.",
        "Irma Hirschauer. ",
        "Linda Achberger."
    ]

    var quelle = [
        "O Hoamatle! - O Hoamatle? Gedichte In Vorarlberger Mundart 1955-1985. Edith und Klaus Lutz",
        "O Hoamatle! - O Hoamatle? Gedichte In Vorarlberger Mundart 1955-1985. Edith und Klaus Lutz",
        "O Hoamatle! - O Hoamatle? Gedichte In Vorarlberger Mundart 1955-1985. Edith und Klaus Lutz",
        "O Hoamatle! - O Hoamatle? Gedichte In Vorarlberger Mundart 1955-1985. Edith und Klaus Lutz",
        "O Hoamatle! - O Hoamatle? Gedichte In Vorarlberger Mundart 1955-1985. Edith und Klaus Lutz",
        "O Hoamatle! - O Hoamatle? Gedichte In Vorarlberger Mundart 1955-1985. Edith und Klaus Lutz",
        "O Hoamatle! - O Hoamatle? Gedichte In Vorarlberger Mundart 1955-1985. Edith und Klaus Lutz",
        "O Hoamatle! - O Hoamatle? Gedichte In Vorarlberger Mundart 1955-1985. Edith und Klaus Lutz",
        "O Hoamatle! - O Hoamatle? Gedichte In Vorarlberger Mundart 1955-1985. Edith und Klaus Lutz",
        "O Hoamatle! - O Hoamatle? Gedichte In Vorarlberger Mundart 1955-1985. Edith und Klaus Lutz",
        "30 Sekunden Mundart. Unartproduktion.",
        "30 Sekunden Mundart. Unartproduktion.",
        "30 Sekunden Mundart. Unartproduktion.",
        "30 Sekunden Mundart. Unartproduktion.",
        "30 Sekunden Mundart. Unartproduktion."
    ]

    var rand_num = Math.floor(Math.random() * (text.length - 0) + 0);

    var NAME = '<h1>' + name[rand_num] + '</h1>';
    var AUTHOR = '<h2>' + author[rand_num] + '</h2>';
    var TEXT = '<p1>' + text[rand_num] + '</p1>';
    var SOURCE = '<i>'+quelle[rand_num]+'</i>';
    localStorage.setItem('text_num', rand_num);
    $('#name').html(NAME);
    $('#author').html(AUTHOR);
    $('#text').html(TEXT);
    $('#source').html(SOURCE);
}


