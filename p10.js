//Find the sum of all the primes below two million.
var sum=0;
for(var i=2;i<2000000; i++){
	var isPrime = true
	for(var j=2; j<= Math.sqrt(i); j++){
		if(i%j==0){
			isPrime = false;
			break;

		}
           
	}
	 if(isPrime == true){
        	sum+=i;
            //console.log(i);
            }
}
console.log(sum);
