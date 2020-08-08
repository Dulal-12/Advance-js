function getDiscounts(nums, d) {
	const newNum = [];
	d = parseInt(d.substr(0,d.length-1));
	for(let value of nums){
		value = value*(d/100);
		newNum.push(value);
	}
	return newNum;
}