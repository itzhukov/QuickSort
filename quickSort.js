function quickSort(arr){
	// console.log('-> quickSort', arguments);

	var arr = arr || [];

	if (arr.length <= 1) return arr;

	var arrLen = arr.length || 0;
	var pivotPos = Math.floor( arrLen/2 );
	var pivotVal = arr[pivotPos];

	var less = [];
	var more = [];
	var same = [];

	for (var x = 0; x < arrLen; x++){
		var el = arr[x];

		if (el === pivotVal){
			same.push(el);
		} else if (el < pivotVal){
			less.push(el);
		} else {
			more.push(el);
		}
	}

	// console.log('------------------------------------------------------------');
	// console.log('arr', arr);
	// console.log('same', same);
	// console.log('less', less);
	// console.log('more', more);

	return quickSort(less).concat( same, quickSort(more) );
}

function getRandomInt(min, max) {
	return parseInt(Math.random() * (max - min)) + min;
}

for (var i = 5, testArray = []; i >= 0; i--) {
	testArray.push( getRandomInt(0, 500) );
};

console.log( 'testArray', testArray );
console.log( 'sortedArray', quickSort(testArray) );