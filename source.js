let imgSorce = [
    "https://www.sas.am/upload/Sh/imageCache/345/536/5364863501981357.jpg",
    "https://www.sas.am/upload/Sh/imageCache/235/624/624260666230390.png",
    "https://www.sas.am/upload/Sh/imageCache/303/593/5933993784175770.png",
    "https://www.sas.am/upload/Sh/imageCache/388/259/2591801242075491.jpg",
    "https://www.sas.am/upload/Sh/imageCache/136/833/8334374253074056.png",
    "https://www.sas.am/upload/Sh/imageCache/232/020/0203901611239535.jpg",
    "https://www.sas.am/upload/Sh/imageCache/245/810/810294427933425.png",
    "https://www.sas.am/upload/Sh/imageCache/190/706/7068282354313095.png",
    "https://www.sas.am/upload/Sh/imageCache/246/161/16136124938958.png",
    "https://www.sas.am/upload/Sh/imageCache/312/876/8763573532989973.png",
];
let priceSorce = [
    "450 դր.",
    "690 դր.",
    "420 դր.",
    "950 դր.",
    "470 դր.",
    "490 դր.",
    "250 դր.",
    "270 դր.",
    "310 դր.",
    "350 դր.",
];
let nameSorce = [
    "Հաց տարեկանի «Պումպեռնիկել» 300g",
    "Հաց տարեկանի «Պումպեռնիկել» 300գ",
    "Լավաշ խաշի 550գ",
    "Լավաշ խաշի 550գ",
    "Հաց արևածաղկի սերմերով «Օլիմպիա» 210գ ",
    "Հաց արևածաղկի սերմերով «Օլիմպիա» 210գ ",
    "Հաց բագետ՝ Դեսերտ «SAS Bakery» ",
    "Հաց բագետ՝ Դեսերտ «SAS Bakery» ",
    "Հաց քարի բագետ սերմերով «SAS Bakery Mama Mia» ",
    "Հաց քարի բագետ սերմերով «SAS Bakery Mama Mia» ",
];
let dataId = 0
let data = JSON.stringify(
 imgSorce.map((item, i) => ({
    id: ++dataId,
    imageSrc: item,
    itemName: nameSorce[i],
    itemPrice: priceSorce[i],
})));
// console.log(JSON.parse(data));

let x =[]
JSON.parse(data).map((item,i) => {
    x.push(+item.itemPrice.slice(0,item.itemPrice.indexOf(" ")))
})

// console.log(x);
