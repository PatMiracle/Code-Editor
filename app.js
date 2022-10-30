import {getLocalStorage, addToLocalStorage} from './utils/local_storage.js'

// Select Element
const editor = document.querySelector(".editor")
const codeBoxes = [...document.querySelectorAll("textarea")]
const tabBtn = document.querySelectorAll(".tab-btn")
const preview = document.querySelector(".preview")


// Switch Tabs
editor.addEventListener("click", (e)=>{
    const id = e.target.dataset.id
    if(id){
        // remove active class from other buttons
        tabBtn.forEach((btn)=>{
            btn.classList.remove("active")
            e.target.classList.add("active")
        })
        
        // remove active class from other buttons
        codeBoxes.forEach((box)=>{
            box.classList.remove("active")
        })

        const element = document.getElementById(id)
        element.classList.add("active")
    }
})

// Add CodeBox Values to Local Storage
const [htmlDOM, cssDOM, jsDOM] = codeBoxes
codeBoxes.forEach((box)=>{
    box.addEventListener("keyup", ()=>{
        addToLocalStorage(htmlDOM.value, cssDOM.value, jsDOM.value)
        preview.src = './preview/preview.html'
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

