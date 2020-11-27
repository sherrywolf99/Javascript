function Selection_Sort(arr, compare_Function) {

      function compare(a, b) {
       return a - b;
       } 
      var min = 0;
      var index = 0;
      var temp = 0;
    
     //{Function} compare_Function Compare function
      compare_Function = compare_Function || compare;
    
      for (var i = 0; i < arr.length; i += 1) {
        index = i;
        min = arr[i];
    
        for (var j = i + 1; j < arr.length; j += 1) {
          if (compare_Function(min, arr[j]) > 0) {
            min = arr[j];
            index = j;
          }
        }
    
        temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
      }
    
      //return sorted arr
      return arr;
    }
    
    console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return a - b; })); 
    console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return b - a; }));

    function quick_Sort(origArray) {
        if (origArray.length <= 1) { 
        return origArray;
        } else {
        
        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = origArray.length;
        
        for (var i = 0; i < length; i++) {
        if (origArray[i] <= pivot) {
        left.push(origArray[i]);
        } else {
        right.push(origArray[i]);
        }
        }
        
        return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
        }
        }
        
        var myArray = [3, 0, 2, 5, -1, 4, 1 ];
        
        console.log("Original array: " + myArray);
        var sortedArray = quick_Sort(myArray);
        console.log("Sorted array: " + sortedArray);