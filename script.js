var container = document.getElementById("containerPai");

function mudaAcor() {
if (container.style.background == "pink" ){

    container.style.background = "red"
}else {

    container.style.background = "pink"

}

}

function mudarDirect (){

    if (container.style.flexDirection == "row"){

        container.style.flexDirection = "column"

    }else {

        container.style.flexDirection = "row"
    }

}

container.addEventListener("click", function (){
    mudarDirect()
    mudaAcor()    
} )
