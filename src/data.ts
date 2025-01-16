export const GoodvibesIds = [
    '7GD91esrJv8',
    '6VMFfIS8AsE',
    'X2E5NRZ7YMs',
    'TtKzENzJdUs',
    'T7DNeYpG4pY',
    'Rc8_-ifnRV4',
    'VAIeubbl8HA',
    'ML20vihZ1KI',
    'FPNk2ui6OkE',
    'i7dREPa20PI',
    '8Tja4a4y4fk'
];

export const OtherIds = [
    'eWzOGm241po',
    'fCcjngycS68',
    '_nKDRXcj3Xk',
    'ykSpvHA3b6o',
    '5Ktgnj98OpM',
    'u3PpfNJv9K8',
];

export const GenshinIds = [
    '9H9dMYOLvio',
    'LouznAaioKI',
    'rzHC71iPLUM',
    'CaPZ0Q_zJMA',
    'HoU608ATfuU',
    'vm0GYyaTfaE',
    'iEZC0M46z7g',
    '7MGnE2fjGSI',
    'KoCpFQLKm2A',
    'CmNr_qr03Go',
    'xfEvWGTM-CQ',
    'j6PJpbTTL5Y',
    'fgNfhFKvX0I',
    '2SoOLeiKmuE',
    'aVuEEkQ-DGY',
    'ZK5HcHGRXJE',
    'ommQJGzRgLk',
    'bWJ3DFFlJy0',
    'LHQWO4SXKUI', //нахида, а там еще 25 ааааа...
];

export interface CardData {
    title: string;
    imageUrl: string;
}

export const cardsData: CardData[] = [
    {
        title: 'Good Vibes Of Таверна',
        imageUrl: require('./images/goodvibes/goodvibes-goodvibes.jpg')
    },
    {
        title: 'Laugh, Cry, Repeat',
        imageUrl: require('./images/goodvibes/goodvibes-lcr.jpg')
    },
    {
        title: 'Genshin Impact',
        imageUrl: require('./images/goodvibes/goodvibes-gi.jpg')
    },
];

export const guideCardData: CardData[] = [
    {
        title: 'Mass Effect',
        imageUrl: require('./images/guides/masseffect.jpg')
    },
    {
        title: 'Dragon Age',
        imageUrl: require('./images/guides/dragonage.jpg')
    },
    {
        title: 'Long Dark',
        imageUrl: require('./images/guides/longdark.jpg')
    },
];

export const massEffectList = [
    { id: 1, title: 'Карты планет в ME1', link: '/guides/masseffect/planets' },
];

export const dragonAgeList = [
    { id: 1, title: 'Одобрение спутников в Inquisition', link: '/guides/dragonage/dai' },
    { id: 2, title: 'Одобрение спутников в DA2', link: '/guides/dragonage/da2' },
    { id: 3, title: 'Одобрение спутников в DAO', link: '/guides/dragonage/dao' },
];

export const longDarkList = [
    { id: 1, title: 'Карты локаций', link: '/guides/longdark/map' },
];

export const planetsData = [
    {
        id: 1,
        name: 'Агебиний',
        location: 'Скопление Вояджера / Амазонка',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961289750/FC4540E951F44DAF7D88A4E6006EA1AA032DED44/',
        hasReaper: false,
    },
    {
        id: 2,
        name: 'Альтаэ',
        location: 'Тета Стикса / Ахерон',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961369189/A5A62A1940B62D0DE9A21513EF560C01992ED65D/',
        hasReaper: false,
    },
    {
        id: 3,
        name: 'Амарант',
        location: 'Туманность Конская голова / Фортуна',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961404562/A299CBB14764B7E14630587FD94F32769B486871/',
        hasReaper: false,
    },
    {
        id: 4,
        name: 'Антибар',
        location: 'Туманность Армстронга / Терешкова',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961431087/005244C26C82B6A597BDEB694B790472388ADD60/',
        hasReaper: true,
    },
    {
        id: 5,
        name: 'Астероид X57',
        location: 'Скопление Исхода / Асгард',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961457626/8BDC6ADE0C171BD91020AEA5ECD6F49CB69D715D/',
        hasReaper: false,
    },
    {
        id: 6,
        name: 'Бинту',
        location: 'Скопление Вояджера / Янцзы',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961505506/6FD74F17BA8C2A6E7394261F54DC578DE0797E64/',
        hasReaper: false,
    },
    {
        id: 7,
        name: 'Завин',
        location: 'Туманность Конская голова / Отвага',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961523120/609F18B6A75B853147E30F6570EAC0137E43AB1D/',
        hasReaper: true,
    },
    {
        id: 8,
        name: 'Касбин',
        location: 'Туманность Армстронга / Гонг',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961544387/978B7F5EC628B82D479C5933B8EE7DA717ABA6FF/',
        hasReaper: false,
    },
    {
        id: 9,
        name: 'Кленсаль',
        location: 'Гамма Аида / Дис',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961560194/FE7B71926944010AE2B07566DBD9645E1854C27A/',
        hasReaper: false,
    },
    {
        id: 10,
        name: 'Луна',
        location: 'Местное Скопление / Солнце',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961571886/DBDD5CFE8CDCADC9BD7D6FED1F806305D676E478/',
        hasReaper: false,
    },
    {
        id: 11,
        name: 'Мавигон',
        location: 'Сигма Близнецов / Хан',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961581160/5BB9E50D856B61D7CAAA15A29A5300B579E574C4/',
        hasReaper: false,
    },
    {
        id: 12,
        name: 'Маджи',
        location: 'Туманность Армстронга / Вамши',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961592331/8CBE0AEFC05F703A5B059DB39D74F1ABDA8E7A2B/',
        hasReaper: false,
    },
    {
        id: 13,
        name: 'Метгос',
        location: 'Ро Аргоса / Гидра',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961603715/1B67BC8CE0522129658748AFBC3CFD63FDB0365E/',
        hasReaper: false,
    },
    {
        id: 14,
        name: 'Непмос',
        location: 'Тета Стикса / Эреб',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961616051/64CABF564B4F4E915CEDC4288D9ED634A953D3CC/',
        hasReaper: false,
    },
    {
        id: 15,
        name: 'Неферон',
        location: 'Скопление Вояджера / Колумбия',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961628775/31E1675900D5713521F0A78EE1949D97D5539A99/',
        hasReaper: true,
    },
    {
        id: 16,
        name: 'Нодакрус',
        location: 'Коричневое Море / Восток',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961640997/881C158F986342EC2524925634FD7D7B765B66F5/',
        hasReaper: false,
    },
    {
        id: 17,
        name: 'Нонуэль',
        location: 'Гамма Аида / Плутос',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961653261/050E541E7AF883D0FDE29A09337AC8D1BFDA2B05/',
        hasReaper: true,
    },
    {
        id: 18,
        name: 'Онтаром',
        location: 'Предел Кеплера / Ньютон',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961669065/8BE3069ACDE0988B531A55CFFEE3E22819A7564E/',
        hasReaper: false,
    },
    {
        id: 19,
        name: 'Пресроп',
        location: 'Эта Хокинга / Центурия',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961678541/AA58C7C4A4258B6D1A44D7179B329EB0308FE179/',
        hasReaper: false,
    },
    {
        id: 20,
        name: 'Райнгри',
        location: 'Туманность Армстронга / Гагарин',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961692841/2E7C870C885CAB4F85958294471F7DCA508CA08D/',
        hasReaper: false,
    },
    {
        id: 21,
        name: 'Солкрум',
        location: 'Туманность Армстронга / Гриссом',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961705743/6311F22309819D30644C039BA0718C708A55816C/',
        hasReaper: false,
    },
    {
        id: 22,
        name: 'Требин',
        location: 'Гамма Аида / Антей',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961719729/B835BA9AB694D137DDE23510EE1ACC496D7CB652/',
        hasReaper: true,
    },
    {
        id: 23,
        name: 'Тунтау',
        location: 'Ро Аргоса / Феникс',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961731974/995686166EE27276807B474F46357A47C91E9B9A/',
        hasReaper: false,
    },
    {
        id: 24,
        name: 'Часка',
        location: 'Туманность Коричневое Море / Матано',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961744805/80A988716218E9A85AA35644F5ABB70B350766C3/',
        hasReaper: false,
    },
    {
        id: 25,
        name: 'Чохе',
        location: 'Гамма Аида / Какус',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961757842/089CC2C64C22C3F6576B880C0F4AC04FA8549E51/',
        hasReaper: true,
    },
    {
        id: 26,
        name: 'Шардзила',
        location: 'Тау Артемиды / Македония',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961768225/F75ECB0339B468C456848496C64316D8F48A5599/',
        hasReaper: false,
    },
    {
        id: 27,
        name: 'Эдол',
        location: 'Тау Артемиды / Спарта',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961779195/36A3891FDC38CBCE776CB12DCC4FC3F86BC287DB/',
        hasReaper: true,
    },
    {
        id: 28,
        name: 'Элетания',
        location: 'Бета Аттики / Геркулес',
        mapImage: 'https://steamuserimages-a.akamaihd.net/ugc/1801982165961789476/CF1FB2DC7DA631DA7FDDFE77B0D648135F8C496F/',
        hasReaper: false,
    },
];