function sortByLength(arr) {
	let newArr = arr.sort(function(a,b){
		return a.length - b.length;
	});
	return newArr;
}