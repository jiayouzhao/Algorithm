
let qucikSort = arr => {
	if (arr.length === 0) { return arr; }
	if (arr.length === 1) { return arr; }
	let pivotIndex = Math.floor(arr.length / 2);
	let pivot = arr.splice(pivotIndex,1)[0];
	let left = [];
	let right = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return qucikSort(left).concat(pivot,qucikSort(right));
};

let result = qucikSort([ 4,9,2,1,4,2,5,7,6 ]);

console.log(result);

