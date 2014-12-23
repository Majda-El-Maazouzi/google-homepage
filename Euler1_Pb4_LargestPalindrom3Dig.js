var number1 = 999;
var number2 = 999;
var result = -1;
var reversed = -1;
var done = false;
var current_palindrom = -1;
var largest_palindrom = -1;
var flag = 0;
while (number2>=100){
    done = false;
    while (number1>=100 && done == false ){
        result = number1*number2;
        reversed = result.toString().split("").reverse().join("");
        if( result != reversed ){
            number1--;
        }else{
            done = true;
        }
    }
    if(done == true){
        current_palindrom = result;
        if( flag == 0 ){
            largest_palindrom = current_palindrom;            
            flag = 1;
        }else if ( current_palindrom > largest_palindrom){
            largest_palindrom = current_palindrom;
        }
    }
    number2--;
    number1 = number2;
}
console.log("Largest Palindrom: " + largest_palindrom);
