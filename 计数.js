let countSort = (arr) => {
	let hashTable = {}, max = 0, result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] in hashTable) {
			hashTable[arr[i]] += 1;
		} else {
			hashTable[arr[i]] = 1;
		}
		if (arr[i] > max) { max = arr[i]; }
	}
	for (let j = 0; j <= max; j++) {
		if (j in hashTable) {
			for (let i = 0; i < hashTable[j]; i++) {
				result.push(j);
			}
		}
	}
	return result;
};

console.log(countSort([ 5, 2, 6, 2, 1 ]));


