var fs = require('fs');
var textByLine = fs.readFileSync('data.txt').toString().replace(/ *\([^)]*\) */g, "").split("\n")

textByLine = textByLine.map(x => {
   return x.substring(3, x.length - 1);
})
    
textByLine = textByLine.map(x =>{
    return {
        'fact': x,
    }
})

console.log(textByLine)

// const metaSchema = new Schema({
//     votesUp: {type: Number, default: 0},
//     votesDown: {type: Number, default: 0},
//     date: {type: Date, default: Date.now},
//     hidden:{ type: Boolean, default: false}
// })

// const commentSchema = new Schema ({
// body:String,
// date: {type: Date, default: Date.now},
// meta: metaSchema,
// hidden: { type: Boolean, default: false}
// })

// const factSchema = new Schema({
// fact:  {type:String, required: true},
// comments: [commentSchema],
// meta: metaSchema,
// hidden:{ type: Boolean, default: false}
// });


fs.writeFile("data2.txt", JSON.stringify(textByLine), function (err){
    if (err) {
        console.log(err);
    } else {
        console.log("File saved");
    }
});


