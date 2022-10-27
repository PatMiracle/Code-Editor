if(localStorage.getItem("codes")){
    let codes = JSON.parse(localStorage.getItem("codes"))
    document.body.innerHTML = codes[0]
}