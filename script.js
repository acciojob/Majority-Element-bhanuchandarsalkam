//your code here
let arr=[2,1,2];
let a=arr.length;

for(let i=0;i<arr.length;i++){
	let count=0;
for(let j=i+1;j<arr.length;j++){
	if(arr[i]==arr[j]){
		count++;
	}
	if(count>floor(a/2)){
		console.log(arr[i]);
		break;
	}
}
}