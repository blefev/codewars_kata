const inArray = (array1,array2) => array1.filter(s => array2.some(w => w.indexOf(s) !== -1)).sort();