const textCode = document.querySelector(".text-code")
const preview = document.querySelector(".preview")

const getLocalStorage = () => {
    return localStorage.getItem("codes")?JSON.parse(localStorage.getItem("codes")):[]
}

window.addEventListener("DOMContentLoaded", () =>{
if(localStorage.getItem("codes")){
    let codes = getLocalStorage()

    textCode.value = codes[0]
    preview.innerHTML = codes[0]
}
})


const addToLocalStorage = (item) => {
    let codes = getLocalStorage()
    
    codes[0] = item
    localStorage.setItem("codes", JSON.stringify(codes))
}
textCode.addEventListener("input", ()=> {
    const value = textCode.value
    addToLocalStorage(value)
    preview.innerHTML = value 
})
