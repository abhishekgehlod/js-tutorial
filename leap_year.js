let a = 2004;
if ((a % 4 == 0) && (a % 100 != 0)){
    console.log("leap year")

}else if (a % 400 == 0){
    console.log("leap year")
}else{
    console.log("not a leap year")
}