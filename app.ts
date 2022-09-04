function maxNumber ( num1:number,  num2:number, num3?:number, num4?:number){
    // var num1:number= 1
    // var num2:number= 2
    // var num3:number= 3
    // var num4:number= 4

   if(num3 && num4) {


if (num1>num2&&num1>num3&&num1>num4){
console.log( "num1 is max");
}

else if (num2>num1&&num2>num3&&num2>num4)
{console.log("num2 is max" );
}

else if (num3>num1&&num3>num2&&num3>num4)
{console.log( "num3 is max");
}
else if(num4>num1&&num4>num2&&num4>num3)
{console.log( "num4 is max");
}

// else if(num1 && num2 &&num3){





//  }

else{
    console.log("enter a valid nummber");
    
 }
}
else{
    if (num1>num2){

        var a:string= "num1 is max"
        return a;
    }
    else{
        var b:string ="num2 is max"
        return b;

    }
}

}
 var store = maxNumber(4,7);

 console.log(store);
 



function minNumber ( num1:number,  num2:number, num3:number, num4:number,){
//     // var num1:number= 1
//     // var num2:number= 2
//     // var num3:number= 3
//     // var num4:number= 4

    
if (num1<num2&&num1<num3&&num1<num4){
console.log(num1, "num1 is min");
}

else if (num2<num1&&num2<num3&&num2<num4)
{console.log(num2 ,"num2 is min" )
}

else if (num3<num1&&num3<num2&&num3<num4)
{console.log(num3, "num3 is min");
}
else if(num4<num1&&num4<num2&&num4<num3)
{console.log(num4, "num4 is min");
}

else{
    console.log("enter a valid nummber");
    
}
}

maxNumber(5 , 7, 9, 4)


