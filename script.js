
const contactButton = document.querySelector('.contact-button')

const form = document.querySelector('.formulario-de-contato')

const mascara = document.querySelector('.mascara-formulario')

const whatsappButton = document.querySelector('.whatsapp-image')

const mirrorImage = document.querySelector('.image-container-right')



function contactForm(){
 
    form.style.left ="50%"
    form.style.transform = "translateX(-50%)"
    form.style.transition = "0.5s"
    mascara.style.visibility = "visible"
}

contactButton.addEventListener('click', contactForm)


function hideForm(){
    form.style.left ="-300px"
    form.style.transform = "translateX(0)"
    form.style.transition = "0.5s"
    mascara.style.visibility = "hidden"
}


mascara.addEventListener('click', hideForm)

function imageMirror(){
  mirrorImage.style.transform = "scaleX(-1)" 
   
}


whatsappButton.addEventListener('mouseenter', imageMirror)


function imageReset(){
  mirrorImage.style.transform = "scaleX(1)"  
}
whatsappButton.addEventListener('mouseleave', imageReset)