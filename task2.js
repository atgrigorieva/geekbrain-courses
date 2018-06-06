var d = process.argv[2];
var m = process.argv[3];
var y = process.argv[4];

var mArrRus = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
var mArrEng = ["January", "February", "марта", "March", "May", "June", "July", "August", "September", "October", "November", "December"];

var newYear = new Date("December 31 2018");

var monthM = mArrRus.indexOf(m);

var newDate = new Date(d + " " + mArrEng[monthM] + " " + y);

var remaining = newYear - newDate; // миллисекунды до даты


remaining /= 1000; // секунды до даты
remaining /= 60;    // минуты до даты
remaining /= 60;    // часы до даты
remaining /= 24;    // дни до даты

console.log(remaining);


