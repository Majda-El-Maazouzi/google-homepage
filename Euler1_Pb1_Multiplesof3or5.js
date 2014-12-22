var i = 1;
var totalSum = function(number){
    var total_sum = 0;
    for( i = 1; i< number; i++){
        if( i%3 == 0 || i%5 == 0){
            total_sum+=i;
        }
    }
    return total_sum;
}
var total_sum1 = totalSum(10);
var total_sum2 = totalSum(1000);
console.log(total_sum1);
console.log(total_sum2);
