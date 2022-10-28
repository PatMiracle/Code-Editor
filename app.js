// Get Local Storage
function getLocalStorage(){
    return localStorage.getItem("codeFromCodeIt")?JSON.parse(localStorage.getItem("codeFromCodeIt")):[]
}

// Add to Local Storage
function addToLocalStorage(html, css, js){
    let codes = getLocalStorage()

    if(codes.length < 1){
        codes.push({html, css, js}) 
    }

    codes.map((code)=>{
        code.html = html 
        code.css = css
        code.js = js
    })
    localStorage.setItem("codeFromCodeIt", JSON.stringify(codes))
}

// Select Element
const codeBoxes = [...document.querySelectorAll("textarea")]
const btnContainer = document.querySelector(".btn-container")
const tabBtn = document.querySelectorAll(".tab-btn")



const [htmlDOM, cssDOM, jsDOM] = codeBoxes
codeBoxes.forEach((box)=>{
    box.addEventListener("keyup", ()=>{
        addToLocalStorage(htmlDOM.value, cssDOM.value, jsDOM.value)
    })
})

window.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("codeFromCodeIt")){
        const codes = JSON.parse(localStorage.getItem("codeFromCodeIt"))
        const  [{html, css, js}] = codes
    
        htmlDOM.value = html
        cssDOM.value = css
        jsDOM.textContent = js        
    }
})