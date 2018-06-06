var chislo1 = process.argv[2],
    chislo2 = process.argv[3];

var sumSeconds = +chislo1 + +chislo2;

var h = sumSeconds/3600 ^ 0 ;
var m = (sumSeconds-h*3600)/60 ^ 0;
var s = sumSeconds-h*3600-m*60;

var time = ""

var timeH = ["час", "часа", "часов"];
var timeM = ["минута", "минуты", "минут"];
var timeS = ["секунда", "секунды", "секунд"];


if(h > 0 && m > 0 && s > 0){
  console.log(h + " " + TimeN(h, timeH) + " " + m + " " + TimeN(m, timeM) + " " + s + " " + TimeN(s, timeS));
}
else{
  if(h < 1 && (m > 0 && s > 0)){
    console.log(m + " " + TimeN(m, timeM) + " " + s + " " + TimeN(s, timeS));
  }
  else{
    console.log(s + " " + TimeN(s, timeS));
  }
}


function TimeN (timeN, Arr){

  var endingS, i;

  timeN = timeN % 100;

  if (timeN >= 11 && timeN <= 19){
    endingS = Arr[2];
  }
  else{
    i = timeN % 10;
    switch(i){
      case (1): endingS = Arr[0]; break;
      case (2):
      case (3):
      case (4): endingS = Arr[1]; break;
      default: endingS = Arr[2]; break;
    }
  }

 return endingS;
}
