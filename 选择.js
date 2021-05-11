let minIndex = (arr) => {
	let index = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[index] > arr[i]) {
			index = i;
		}
	}
	return index;
};

let swap = (array,index,i) => {
	let temp = array[index];
	array[index] = array[i];
	array[i] = temp;
};

let sort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		let index = minIndex(arr.slice(i)) + i;
		if (index !== i) {
			swap(arr,index,i);
		}
	}
	return arr;
};

console.log(sort([ 4,2,5,1,7,4,4 ]));
