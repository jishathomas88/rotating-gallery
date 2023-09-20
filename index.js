const imageContainer=document.querySelector(".image-container")
const buttonPrev=document.getElementById('prev')
const buttonNext=document.getElementById('next')

let x=0;
let timer;

buttonPrev.addEventListener("click", ()=>{
    x=x+45;
    clearTimeout(timer)
    updateGallery()    
});

buttonNext.addEventListener("click", ()=>{
    x=x-45;
    clearTimeout(timer)
    updateGallery()    
});
console.log(x)

function updateGallery(){
        imageContainer.style.transform=
       `perspective(1000px) rotateY(${x}deg)`
    timer=setTimeout(()=>{
        x=x-45;
        updateGallery()
       },3000)
}
updateGallery()