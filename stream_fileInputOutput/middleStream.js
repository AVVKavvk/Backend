const fs=require('fs');
const transfromStream=require('stream')
const fileStream=fs.createReadStream(__dirname+'/input.txt');
const outputStream=process.stdout;
const middleStream= new transfromStream.Transform({
    transform(chunk,encoding,callback){
        const changeChunk=chunk.toString().toUpperCase();
        this.push(changeChunk)
        setTimeout(() => {
            callback;
        }, 2000);
    }
})
fileStream.pipe(middleStream).pipe(outputStream)