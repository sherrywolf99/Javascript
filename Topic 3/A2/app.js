var name=prompt('write something');
var lst=name.split(' ')
console.log(lst)
var lst2=[];
for (let i = 0; i < lst.length; i++) {
    lst[i]=lst[i][0].toUpperCase()+lst[i].substring(1); 
    //lst[i]=lst[i][0].toUpperCase()+lst[i].substring(1);
    
}; 
let uppcase=lst.join(' ');
console.log(uppcase);