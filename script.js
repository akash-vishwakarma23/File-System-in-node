const fs = require('fs');

fs.writeFile("xyz.txt", "nice theme" ,function( err ){
         if(err) console.log('err');
         
        else  console.log("file created");
              
})

fs.readFile("xyz.txt", "utf8" , function( err, data){
    if(err) console.log('err');
    else console.log(data);
})

fs.appendFile("xyz.txt", " you made it this way" , function( err){
    if(err) console.log('err');
    else console.log("appended");
    
})

fs.rename("xyz.txt", "makeit.txt", function( err){
    if(err) console.log('err');
    else console.log("renamed");
})

fs.unlink("makeit.txt" , function( err ) {
    if(err) console.log('err');
    else console.log("file deleted");
});

fs.mkdir("solo", function( err ) {
    if(err) console.log('err');
    else console.log("folder created");
})

fs.readdir("solo", {withFileTypes : true}, function( err , files) {
    if(err) console.log('err');
    else console.log(files);
})

fs.rm("solo", {recursive : true}, function( err ) {
    if(err) console.log(err);
    else console.log("folder deleted");
}

