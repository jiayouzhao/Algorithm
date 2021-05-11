let mergeSort = (arr) => {
	
	if (arr.length === 1) {
		return arr;
	}
	
	let l = arr.length / 2;

	let left = arr.slice(0,Math.floor(l));
	let right = arr.slice(Math.floor(l));
	
	return merge(mergeSort(left),mergeSort(right));
	
};

let merge = (a, b) => {
	
	if (a.length === 0) return b;
	if (b.length === 0) return a;

	return a[0] > b[0] ?
		[ b[0] ].concat(merge(a, b.slice(1))) :
		[ a[0] ].concat(merge(a.slice(1), b));
};

console.log(mergeSort([ 3,4,7,1,3 ]));