//even fibinnici numbers

/*function fib(a){
	if(a==1){
		return 0;
	}
	else if (a==2){
		return 1;
	}
	else {
		return fib(a-1) + fib(a-2);
	}

}
console.log(fib(10));*/

/*var previous = 0;
var current = 1;
var sum = 0;
var next;

   for(i = 1; i < 100; i++){
        next = current + previous;
        previous = current;
        current = next; 
        if(current % 2 === 0 && current < 4000000) {
            sum += current;
        
        }
   }
   console.log(sum);*/


function fib(n){
	var sum=0;
	if(n==0){
		return 0;
	}
	else{
		var x=0, y=1,z;
		for(var i=1 ; i<n; i++){
			z=x+y;
			x=y;
			y=z
			if(x%2 == 0 && x<4000000){
				sum+=x;
			}
		}
		return sum,y;
	}
  
}
//console.log(fib(100));
for(var j=0;j<100;j++){
	console.log(fib(j));
	}