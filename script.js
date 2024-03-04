let calcInput = document.querySelector("#input-text-height");
let weightInput = document.querySelector("#input-text-weight");
let reset = document.querySelector("#reset-input");
let calcButton = document.querySelector("#button-input");
let resultIMC = document.querySelector("#result");
let obs0 = document.querySelector(".obs-0")
let obs1 = document.querySelector(".obs-1")
let obs2 = document.querySelector(".obs-2")
let obs3 = document.querySelector(".obs-3")
let obs4 = document.querySelector(".obs-4")


calcInput.addEventListener("input", function(e) {
    let value = e.target.value;

    value = value.replace(/[,.]/g, "");

    if (value.length === 3) {
        e.target.value = value.substr(0, 1) + "." + value.substr(1);
    }
});

calcButton.addEventListener("click", function(e) {
    obs0.classList.remove("obs-0", "active");
    obs1.classList.remove("obs-1", "active");
    obs2.classList.remove("obs-2", "active");
    obs3.classList.remove("obs-3", "active");
    obs4.classList.remove("obs-4", "active");

    
    let calcValue = parseFloat(calcInput.value.replace(/,/g, "."));
    let weightValue = parseFloat(weightInput.value.replace(/,/g, "."));

    if (!isNaN(calcValue) && !isNaN(weightValue) && calcValue > 0 && weightValue > 0) {
        if (calcValue >= 1) {
            calcValue = calcValue.toFixed(2);
            calcInput.value = calcValue;
        }

        let calcIMC = weightValue / (calcValue * calcValue);
        resultIMC.textContent = "Seu IMC: " + calcIMC.toFixed(2);


        if (calcIMC <= 18.5) {
            obs0.classList.add("obs-0", "active");
        } else if (calcIMC >= 18.5 && calcIMC <= 24.9) {
            obs1.classList.add("obs-1", "active");
        }else if (calcIMC >= 25 && calcIMC <= 29.9) {
            obs2.classList.add("obs-2", "active");
        }
        else if (calcIMC >= 30 && calcIMC <=  39.9) {
            obs3.classList.add("obs-3", "active");
        } else {
            obs4.classList.add("obs-4", "active");
        }

    } else {
        resultIMC.textContent = "Por favor, insira valores numéricos válidos para altura e peso.";
    }

    calcInput.value = "";
    weightInput.value = "";

});


reset.addEventListener("click", function(btn){ ///RESET//
    calcInput.value = "";
    weightInput.value = "";
    resultIMC.textContent = "Seu IMC: "

    obs0.classList.remove("obs-0", "active");
    obs1.classList.remove("obs-1", "active");
    obs2.classList.remove("obs-2", "active");
    obs3.classList.remove("obs-3", "active");
    obs4.classList.remove("obs-4", "active");
})
