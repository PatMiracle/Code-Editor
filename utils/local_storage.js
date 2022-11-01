// Get Local Storage
export function getLocalStorage(){
    return localStorage.getItem("codeFromCodeIt")?JSON.parse(localStorage.getItem("codeFromCodeIt")):[]
}

// Add to Local Storage
export function addToLocalStorage(html, css, js, getLocalStorage){
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
