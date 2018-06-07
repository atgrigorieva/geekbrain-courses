var mArrRus = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
var mArrEng = ["January", "February", "марта", "March", "May", "June", "July", "August", "September", "October", "November", "December"];

var remaining = new Date("December 31 2018") -  new Date(process.argv[2] + " " + mArrEng[mArrRus.indexOf(process.argv[3])] + " " + process.argv[4]); // миллисекунды до даты

console.log(remaining/(1000 * 60 * 60 * 24));
