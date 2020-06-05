var fs = require('fs');
/*
fs.writeFile('myCode.txt','this is my code record',function(err){
    if(err) throw err;
    console.log('File written')
})

fs.appendFile('myData.txt','this is my code record\n',function(err){
    if(err) throw err;
    console.log('File written')
})


fs.readFile('myData.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})

fs.rename('myCode.txt','myDatas.txt',function(err){
    if(err) throw err;
    console.log('file renamed')
})
*/

//Sync
fs.appendFile('myData.txt','this is my code record\n',function(err){
    if(err) throw err;
    fs.readFile('myData.txt','utf-8',function(err,data){
        if(err) throw err;
        console.log(data)
    })
})

//Delete
fs.unlink('myDatas.txt',function(err){
    if(err) throw err;
    console.log('File Deleted')
})