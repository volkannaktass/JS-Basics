sum = (a, b, callback) => {
    return callback(a+b);
}

sum(3,2,r =>  console.log(r*2))

//==========================
//'a,s' => ['a','s']
split = (str,callback) =>{
    return callback(str.split(','));
}
split('a,s',arr => {
    console.log(arr);
    console.log(arr[1]);
    console.log(arr[0]);
      
})
