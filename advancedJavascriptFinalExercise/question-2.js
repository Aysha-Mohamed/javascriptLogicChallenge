/*Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together,
 give the target number. For example: answer([1,2,3], 4)should return [1,3]*/


const addsTo = (arr,target) =>{
	let resultArray =[];
	let count;
	for(let i = 0; i< arr.length - 1; i++){ 
		 count = 0; 
		do{
			let sum = arr[i] + arr[count+1];
			if(sum === target){
				resultArray.push([arr[i],arr[count+1]]);
			}
			count++;
		}while(count < arr.length -1 && arr[count+1] !== arr[count+2])
		
	}
	resultArray.forEach((item,index)=> item.sort())
	resultArray = resultArray.sort();
	console.log("resultArray",resultUnique(resultArray));


// to remove duplicates

	function resultUnique(arr) {
    var uniques = [];
    var itemsFound = {};
    for(var i = 0, l = arr.length; i < l; i++) {
        var stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
   return uniques;
}

}

addsTo([1,2,3,1,2,3,4,5,6,4,7], 8);