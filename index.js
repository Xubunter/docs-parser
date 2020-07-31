var mammoth = require("mammoth");
const fs = require("fs") 

var options = {
  
    styleMap: [
        "b => b"
    ]
};

const destinationPath = 'agreement.html'

const convertPtoBr = (value) => {
  let result = value.replace(/(<\/p><p><b>)/gm, '\r\n<br><br><b>')
  result = result.replace(/(<\/p><p>)/gm, '\r\n<br>')
  result = result.replace(/(<\/p>|<p>)/gm, '')
  return result;
  return value
}

mammoth.convertToHtml({path: "./agreement.docx"}, options)
  .then(docx => {
    console.log(docx.messages)
    fs.writeFile(destinationPath, convertPtoBr(docx.value), () => console.log('done'));
  })