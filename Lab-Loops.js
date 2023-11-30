// Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



// Prime Number
function isPrime(number) {
    if (number <= 1) {
        return false; // 1 is not a prime number
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; // Found a number that divides evenly, not prime
        }
    }

    return true; // It's a prime number!
}

function findNextPrime(n) {
    while (true) {
        if (isPrime(n)) {
            console.log("Next prime number is:", n);
            break; // Found the next prime, exit the loop
        }
        n++; // Move to the next number and check again
    }
}

// Test with different values of n
findNextPrime(4);
findNextPrime(5);
findNextPrime(9);


// #Part 3 Feeling Loopy

