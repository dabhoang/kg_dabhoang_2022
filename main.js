function numToString(num) {//converts num into its phonetic equivalent
	var numstr = ""; //string to accumulate the phonetic equivalent of each digit
	while(num>0){
		var digit = num % 10;//get ones digit
		numstr = numbers[digit].concat(numstr);//obtain phonetic equivalent from array and concatenate to accumulating string
		num = Math.trunc(num/10);//shift the number right by 1 digit
	}
	return numstr;//returns the accumulated string
}

//array where each element is its index's phonetic equivalent
numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];


var phonetics = [];//array to store phonetic string for each element in the input array
var i;//loop through argument array 
for(i = 2; i < process.argv.length; i++){//in argument array, index 0 is node and index 1 is main.js so start looping at index 2
	phonetics.push(numToString(process.argv[i]));//convert element into phonetic string then add to output array
}

console.log(phonetics.toString())//print the output array to terminal