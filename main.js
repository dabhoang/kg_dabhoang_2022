function numToString(num) { //converts num into phonetic eqivalent

	var x = num;
	var numstr = "";
	while(x>0){
		var digit = x % 10;
		numstr = numbers[digit].concat(numstr);
		x = Math.trunc(x/10);
	}
	return numstr;  
}

numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
