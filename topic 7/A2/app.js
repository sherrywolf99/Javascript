function merge_array(array1, array2) {
        const result_array = [];
        const arr = array1.concat(array2);
        let len = arr.length;
        const assoc = {};
    
        while(len--) {
            const item = arr[len];
    
            if(!assoc[item]) 
            { 
                result_array.unshift(item);
                assoc[item] = true;
            }
        }
    
        return result_array;
    }
    
    
    const array1 = [1, 2, 3];
    
    const array2 = [2, 30, 1];
    
    console.log(merge_array(array1, array2));