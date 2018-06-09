var mArrRus = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

console.log((new Date(Number(process.argv[4]), 11, 31) -  new Date(Number(process.argv[4]), mArrRus.indexOf(process.argv[3]), Number(process.argv[2])))/(1000 * 60 * 60 * 24));
