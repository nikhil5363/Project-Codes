//Return the first non repeating character in a string in Javascript
l = [1,1,2,2,3,3,4,2,1];


for(let i of l){
    if(l.indexOf(i)===l.lastIndexOf(i)){
        console.log(i) 
        break;
    }
}