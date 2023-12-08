
// URL Structure = http://via.placeholder.com/200x200(size_of_Placeholder)/bg_color_in_Hex/txtColor_in_Hex?text=text_to_Display_in_Placeholder
//sample URL = http://via.placeholder.com/650x350/e6e633/e1aa6b?text=Apoorva+Raj
//In URL, both background color and Text color should be in Hex Value without "#" sign.


const select = document.querySelector("select")
const inputAll = document.querySelectorAll("input")

const myImg = document.querySelector("img")
const textArea = document.querySelector("textarea")




function removeHashtag(str){
    return str.replace("#","")
}
let addPlus = (str)=>{
    return  str.split(" ").join("+")
}

let obj = {}

let urlPath

function createImagePath() {


    obj.size = select.value
    obj.bgColor = removeHashtag(inputAll[1].value)
    obj.textColor = removeHashtag(inputAll[2].value)
    obj.input = addPlus(inputAll[0].value)

    urlPath = `http://via.placeholder.com/${obj.size}/${obj.bgColor}/${obj.textColor}?text=${obj.input}`
    myImg.src = urlPath
    textArea.value = urlPath

    textArea.focus()
    textArea.select()

    //Copying the Selected text to the clipboard
    navigator.clipboard.writeText(textArea.value)
        .then(()=>{
            console.log("Text copied to clipboard")
        })
        .catch(err => {
            console.log("Error copying the text: ", err)
        })
}


select.addEventListener('change',createImagePath)
inputAll.forEach((elem)=> elem.addEventListener('change',createImagePath))
