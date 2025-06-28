let numbers=[];
function getArray(){
    const input=document.getElementById("arrayinput").value;
    numbers=input.split(",")
    .map((num)=>parseFloat(num.trim()))
    .filter((num)=>!isNaN(num));
}
function displayResult(text){
    document.getElementById("result").innerText=text;
}
function sortArray(){
    getArray();
    displayResult("Ascending Sorted: "+numbers.sort((a,b)=>a-b));
}
//== compares only value
// === compares value as well as type
function findEven(){
    getArray();
    displayResult("Evens: "+numbers.filter((num)=>num%2===0));
}
function findPrimes(){
    getArray();
    function isPrime(num){
        if(num<2) return false;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i == 0) return false;
        }
        return true;
    }
    displayResult("Primes: "+numbers.filter(isPrime));
}
function findMax(){
    getArray();
    let max=Math.max(...numbers);
    displayResult("Maximum: "+max);
}
function findMin(){
    getArray();
    let min=Math.min(...numbers);
    displayResult("Maximum: "+min);
}
function findSum(){
    getArray();
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    displayResult("Sum: "+sum);
}
function findAverage(){
    getArray();
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    let average=sum/numbers.length;
    displayResult("Average: "+average);
}
function findDuplicate(){
    getArray();
    let dupliactes=[];
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]==numbers[j] && !dupliactes.includes(numbers[i])){
                dupliactes.push(numbers[i]);
            }
        }
    }
    if(dupliactes.length>0){
        displayResult("Duplicate Elements: "+dupliactes.join(","));
    }else{
        displayResult("No duplicates found");
    }
}
function RemoveDuplicate(){
    getArray();
    const unique=[...new Set(numbers)];
    displayResult("Without Duplicate: "+unique.join(", "));
}
function Reverse(){
    getArray();
    let reverse=[];
    let j=0;
    for(let i=numbers.length-1;i>=0;i--){
        reverse[j]=numbers[i];
        j++;
    }
    displayResult("Reverse: "+reverse);
}
function findMedian(){
    getArray();
    const sorted = numbers.slice().sort((a, b) => a - b); // sort 
  const mid = Math.floor(sorted.length / 2);
if (sorted.length % 2 !== 0) {
    //odd length
    displayResult("Median: "+sorted[mid]);
  } else {
    // even length
    displayResult("Median: " +sorted[mid - 1] + sorted[mid]) / 2;
  }
}
function findMode() {
    getArray();
    const frequency = {};
    let maxFreq = 0;

    // Count the frequency of each number
    for (const num of numbers) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    }

    // Get all numbers with the maximum frequency
    const modes = [];
    for (const key in frequency) {
        if (frequency[key] === maxFreq) {
            modes.push(Number(key));
        }
    }

    displayResult("Modes: " + modes.join(", "));
}
function findSquareNumbers() {
    getArray();
    const squares = numbers.filter(num => Number.isInteger(Math.sqrt(num)));
    displayResult("Square Numbers: " + squares.join(", "));
}
function findFactorial(){
    getArray();
    function factorial(n) {
        if (n < 0) return "NaN"; // Factorial not defined for negative numbers
        let fact = 1;
        for (let i = 2; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }

    const factorials = numbers.map(num => `${num}! = ${factorial(num)}`);
    displayResult("Factorials:\n" + factorials.join(", "));
}
function filter(){
    getArray();
    let val = parseFloat(document.getElementById("filterinput").value); // Use parseFloat to allow decimals

    if (isNaN(val)) {
        displayResult("Please enter a valid number to filter.");
        return;
    }

    const greaterNumbers = numbers.filter(num => num > val);
    displayResult("Numbers greater than " + val + ": " + greaterNumbers.join(", "));
}

