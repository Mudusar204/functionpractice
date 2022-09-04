// function maxNumber ( num1:number,  num2:number, num3?:number, num4?:number){
//     // var num1:number= 1
//     // var num2:number= 2
//     // var num3:number= 3
//     // var num4:number= 4
//    if( num1&&num2&&num3 && num4 ) {
// if (num1>num2&&num1>num3&&num1>num4){
// console.log( "num1 is max");
// }
// else if (num2>num1&&num2>num3&&num2>num4)
// {console.log("num2 is max" );
// }
// else if (num3>num1&&num3>num2&&num3>num4)
// {console.log( "num3 is max");
// }
// else if(num4>num1&&num4>num2&&num4>num3)
// {console.log( "num4 is max");
// }
// // else if(num1 && num2 &&num3){
// //  }
// else{
//     console.log("enter a valid nummber");
//  }
// }
// else{
//     if (num1&&num2){
//         var a:string= "num1 is max"
//         return a;
//     }
//     else{
//         var b:string ="num2 is max"
//         return b;
//     }
// }
// }
//  var store = maxNumber(9,7);
// //  console.log(store);
// // function minNumber ( num1:number,  num2:number, num3:number, num4:number,){
// // //     // var num1:number= 1
// // //     // var num2:number= 2
// // //     // var num3:number= 3
// // //     // var num4:number= 4
// // if (num1<num2&&num1<num3&&num1<num4){
// // console.log(num1, "num1 is min");
// // }
// // else if (num2<num1&&num2<num3&&num2<num4)
// // {console.log(num2 ,"num2 is min" )
// // }
// // else if (num3<num1&&num3<num2&&num3<num4)
// // {console.log(num3, "num3 is min");
// // }
// // else if(num4<num1&&num4<num2&&num4<num3)
// // {console.log(num4, "num4 is min");
// // }
// // else{
// //     console.log("enter a valid nummber");
// // }
// // }
// // minNumber(5 , 9, 2, 4)
// function cals(){
//     return 10+10
// };
// var msg= cals()
// console.log(msg);
// function testFuntion (n1:number,n2:number):number{
//     // console.log(n1 ,"this is number");
//     // console.log(n2 ,"this is string");
//     // if(n2!=undefined){
//     //     console.log(n2);
//     // }
//     if(n1>0){
//     return n1
//     }
//     else {return n2
//     }
//     // return n2? n1+n2:n1
// }
// // testFuntion(1,9)
// // var result:number|string= testFuntion(12,1)
// // console.log(result);
// console.log(testFuntion(-5,3));
//=======================> write a progaram to find max btween 4 numbers
function maxNumber(num1, num2, num3, num4) {
    if (num1 > num2 && num1 > num3 && num1 > num4) {
        return (num1);
    }
    else if (num2 > num1 && num2 > num3 && num2 > num4) {
        return num2;
    }
    else if (num3 > num1 && num3 > num2 && num3 > num4) {
        return num3;
    }
    else if (num4 > num1 && num4 > num2 && num4 > num3) {
        return num4;
    }
    else {
        return ("enter a valid nummber");
    }
}
console.log(maxNumber(9, 0, 3, 4), "is max");
function minNumber(num1, num2, num3, num4) {
    if (num1 < num2 && num1 < num3 && num1 < num4) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3 && num2 < num4) {
        return num2;
    }
    else if (num3 < num1 && num3 < num2 && num3 < num4) {
        return num3;
    }
    else if (num4 < num1 && num4 < num2 && num4 < num3) {
        return num4;
    }
    else {
        return ("enter a valid nummber");
    }
}
console.log(minNumber(5, 7, 3, 4), " is min");
// ============================write a program to find odd and even numbers 
function numberType(num) {
    if (Number(num)) {
        if (num % 2 == 0) {
            return "number is even";
        }
        else {
            return "number is odd";
        }
    }
    else {
        return ("number is not even nor odd");
    }
}
console.log(numberType(46));
