var fib = new Array();
var total_sum = 0;
var i = 1;
fib[1]=1;
while(fib[i]<4000000){
    i++;
    if(i<=2){
        fib[i] = i;
    }else{
        fib[i] = fib[i-1]+fib[i-2];
    }
    if(fib[i]%2==0 && fib[i]<4000000){
        total_sum+= fib[i];
    }
    console.log("Inside the loop: "+fib[i]);
}
console.log("Outside the loop: "+total_sum + " "+ fib[i]);
