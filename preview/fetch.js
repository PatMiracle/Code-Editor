const styles = document.querySelector("style")
const javaScript = document.querySelector("script")

// get local storage
if(localStorage.getItem("codeFromCodeIt")){
    let codes = JSON.parse(localStorage.getItem("codeFromCodeIt"))
    const [{html, css, js}] = codes
    document.body.innerHTML = html
    styles.innerHTML = css
    javaScript.innerHTML = js
}

