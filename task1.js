var stringPalindrom = process.argv[2];

if(stringPalindrom.replace(/[^a-zA-Z]/g, "").toLowerCase() === (stringPalindrom.split("").reverse().join("").replace(/[^a-zA-Z]/g, "")).toLowerCase()){
    console.log("YES")
}
else{
    console.log("NO")
}

