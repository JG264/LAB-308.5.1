// // for( let i =10; i >0; i--){
// //     console.log(i)
// // }

// // for(let i= 0; i < 10; i++){
// //     if( i%2 !==0){
// //         console.log(i)
// //     }
// // }


// // loop that iterates from 1 to 20. The loop should:
// // Print “prime” for all prime numbers.
// // Print “even” for all even numbers.
// // Print “odd” for all odd numbers.
// // Treat 2 as an even number and 1 & 3 as odd, rather than prime.

// // for ( let i=0; i <20; i++){
// //     if( i){}
// // }

// // let x =30;
// // while(x > 0){
// //     x /= 2;
// //     x--;
// //     if(x % 1 !=0){
// //         break;
// //     }
// //     console.log(x);
// // }

// // Count down to 0 from a given number.
// let x =30;
// while(x > 0){
//     x /=2;
//     x--;
//     if( x % 1 !=0){
//         break;
//     }
//     console.log(x);
// }


// // Log integers in multiples of 3 as long as they are less than 35.
// let b = 3;

// while(b <35){
//     console.log( b);
//     b +=3;
//     }




// // Print integers in multiples of 5 as long as they are less than 100.
// // Print integers between 0 and 20 with the following conditions:

// // All numbers divisible by 2 should be multiplied by 3 before they are output.
// // All other integers should not be output.
// // Print all prime numbers between 0 and 20.


let sum = 0;

for (let i = 0; i < 5; i++) {

   if (i % 2 === 0) continue;

   sum += i;

}
console.log(sum);