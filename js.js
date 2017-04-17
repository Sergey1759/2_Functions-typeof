array = new Array(' ', 1, true, false, 'aaa');
array1 = new Array(4, 1,' ', false, 'aaa',' ', false, 'aaa');

function MasTypeOf(arr){
    for(var i = 0; i < arr.length; i++){
        alert(i+' элемент = ' + typeof(arr[i]));
    }
}