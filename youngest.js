let first = 50;
let second = 20;
let third = 30;
if ((first > second) && (first > third)){
    console.log("first is oldest" ,first)
}else if ((second > first) && (second > third)){
    console.log("second is oldest",second)
}else{
    console.log("third is oldest",third)
}if ((first < second) && (first < third)){
    console.log("first is youngest",first)
}else if ((second < first) && (second < third)){
    console.log("second is youngest",second)
}else{
    console.log("third is youngest",third)
}
