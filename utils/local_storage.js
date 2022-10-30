// Get Local Storage
export const getLocalStorage = ()=>{
    return localStorage.getItem("codeFromCodeIt")?JSON.parse(localStorage.getItem("codeFromCodeIt")):[]
}

// Add to Local Storage
export const addToLocalStorage = (html, css, js)=>{
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

