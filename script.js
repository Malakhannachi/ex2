const boite =document.querySelector(".boite")
const carre = document.createElement("div")
carre.classList.add("carre")
for (let i = 1; i <= 4; i++) {
    let newcarre = carre.cloneNode();
    newcarre.innerText= i
    boite.appendChild(newcarre)
    newcarre.addEventListener("click",function(){
        newcarre.classList.toggle("carre-click")
    })
}

