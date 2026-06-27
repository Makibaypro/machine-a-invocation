// Crapi — Crapaud démoniaque baignant dans sa propre toxine acide. Tapi dans les marais corrompus, il dissout ses proies avant même de les toucher. Son sourire permanent cache une patience mortelle.
// Dragono — Dragon des abysses né d'un volcan éteint réanimé par une magie maudite. Ses écailles noires canalisent un venin ardent qu'il crache comme un souffle de destruction pure. Il ne chasse pas — il annihile.
// Licorna — Licorne corrompue arrachée à un royaume de lumière par une malédiction ancienne. Sa crinière de flammes violettes brûle d'une rage qui ne s'éteindra qu'avec la destruction de celui qui l'a maudite. Derrière les dents, il reste un vestige d'innocence — le plus dangereux des mensonges.
// Poulpos — Entité abyssale remontée des profondeurs avec une seule obsession : étendre son emprise. Ses tentacules portent des lanternes volées à des âmes défuntes. Il négocie. Il obtient toujours ce qu'il veut.
// Renardo — Renard démoniaque à l'intelligence froide et aux griffes tachées de vieux sang. Il collectionne les crânes non par cruauté — mais par comptabilité. Chaque os représente une dette réglée.


const name = document.querySelector("#prenom");
const creature = document.querySelector("#creature");
const nameResult = document.querySelector("#nameResult");
const btnRestart = document.querySelector("#btnRestart");
const form = document.querySelector("#invocation"); 
const formPage = document.querySelector("#formPage");
const resultPage = document.querySelector("#resultat");
const img = document.querySelector("#img");
const message = document.querySelector("#message");
const bodyIMG = document.querySelector("#BG");

const submitForm = () => {
    if (name.value === "" && creature.value === "") {
        alert("Tu lancerais un sort sans connaître ni son nom ni sa forme toi !?");

    } else {
        nameResult.textContent = name.value;
        formPage.classList.add("cache");
        resultPage.classList.remove("cache");
        bodyIMG.style.filter = "blur(15px)";
        checkValue();
    }

};

const checkValue = () => {

    if(name.value === ""){
        img.src ="./img/AllAttack.png";
        img.style.width = "700px";
        img.style.height = "auto";
        message.textContent = "Voila ce qui arrive quand on ne donne pas de nom à ses créations !."
    
    } else if (name.value !== "") {
        switch(creature.value) {
            case"octo" :
                img.src = "./img/Poulpos.png";
                message.textContent = "Entité abyssale remontée des profondeurs avec une seule obsession : étendre son emprise. Ses tentacules portent des lanternes volées à des âmes défuntes. Il négocie. Il obtient toujours ce qu'il veut.";
                break;
            case"dragon" :
                img.src = "./img/Dragono.png";
                message.textContent = "Dragon des abysses né d'un volcan éteint réanimé par une magie maudite. Ses écailles noires canalisent un venin ardent qu'il crache comme un souffle de destruction pure. Il ne chasse pas — il annihile.";
                break;
            case"licorn" :
                img.src = "./img/Licorna.png";
                message.textContent = "Licorne corrompue arrachée à un royaume de lumière par une malédiction ancienne. Sa crinière de flammes violettes brûle d'une rage qui ne s'éteindra qu'avec la destruction de celui qui l'a maudite. Derrière les dents, il reste un vestige d'innocence — le plus dangereux des mensonges.";
                break;
            case"fox" :
                img.src = "./img/Renardo.png";
                message.textContent = "Renard démoniaque à l'intelligence froide et aux griffes tachées de vieux sang. Il collectionne les crânes non par cruauté — mais par comptabilité. Chaque os représente une dette réglée.";
                break;
            case"frog" :
                img.src = "./img/Crapi.png";
                message.textContent = "Crapaud démoniaque baignant dans sa propre toxine acide. Tapi dans les marais corrompus, il dissout ses proies avant même de les toucher. Son sourire permanent cache une patience mortelle.";
                break;
            default :
                img.src = "./img/FailedSummoning.png"
                message.textContent = "Ton invocation n'a pas abouti ! Bien trop pleutre pour ce genre de pratique !"
        }
    }

};



form.addEventListener("submit", function(e) {
    e.preventDefault();
    submitForm();
})

btnRestart.addEventListener("click", () => {

    formPage.classList.remove("cache");
    resultPage.classList.add("cache");
    name.value = "";
    creature.value = "";
    bodyIMG.style.filter = "blur(0px)";
})

