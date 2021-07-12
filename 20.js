// function maxDigit(n){
//         if(n == 0){ return 0;}
//         else{
//           var remainder = n % 100
//           return Math.max(remainder, maxDigit((n-remainder)*1e-2));
//         }
//       }
//       console.log(maxDigit(16984));


function maxDigit(nu){
      var n=nu.toString().length
      max=nu%100
      nu=Math.floor(nu/10)     
      for(i=0;i<n-1;i++){
              
                var mx=nu%100
                console.log(mx);
                var nu=Math.floor(nu/10)
                if(mx>max && mx.toString().length==2)
                max=mx;
      }
return max; 
}
console.log(maxDigit(12599487598));
