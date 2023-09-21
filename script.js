//Utilisation de l'expression régulière pour vérifier le format d'une date et sa validité
const Reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/i;
let isMot = true;

function isValidDate(inputDate) {
    if (!Reg.test(inputDate)) {
        return false //"La date est erronée et/ou le format n'est pas le bon, veuillez essayer sous le format dd/mm/yyyy";
    } else {
        return true
    }
    //document.querySelector("#date").innerHTML += inputDate
}

// Cela permet de savoir si la date est un palindrome
function isPalindrome(date) {
    let remove = date.replace(/\//g, ''); // Pour enlever les slashs afin de vérifier
    let reversedStr = remove.split('').reverse().join('');
    return reversedStr === remove
}

// Cela permet de valider si la date est à la fois au bon format et un palindrome 
function isDatePalindrome(date) {
    //console.log(date)
    if (isValidDate(date) === true) {
        let replace = date.replace(/\//g, '');
        //console.log(replace);
        if (isPalindromes(replace) === true) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

//function qui permet de savoir si le mot est un palindrome
function isPalindromes(str) {
    return str === str.split('').reverse().join('');
}
//console.log(isPalindromes("kayak"))


function lancerJeu() {
    document.querySelector("#mots").addEventListener("click", function () {
        choisirMots();
    })
    document.querySelector("#dates").addEventListener("click", function () {
        choisirDates();
    })
    let btnValider = document.querySelector("#btnValider");
    let inputEcriture = document.querySelector("#inputEcriture");
    btnValider.addEventListener("click", function () {
        console.log("ok", isPalindromes(inputEcriture.value))
        if (isPalindromes(inputEcriture.value)) {
            document.querySelector("#zone_felicitation").innerHTML = "Bravo !";
        } else if (isDatePalindrome(inputEcriture.value)) {
            document.querySelector("#zone_felicitation").innerHTML = "Bravo !";
        } else {
            document.querySelector("#zone_felicitation").innerHTML = "Désolé ceci n'est pas un Palindrome !";
        }
        inputEcriture.value = ""; // vider la valeur écrite 
    });
}

function choisirMots() {
    isMot = true
    document.querySelector("#format_mots").classList.remove("hiden");
    document.querySelector("#format_dates").classList.add("hiden");
    document.querySelector("#zone_felicitation").innerHTML = "";
}


function choisirDates() {
    isMot = false
    document.querySelector("#format_dates").classList.remove("hiden");
    document.querySelector("#format_mots").classList.add("hiden");
    document.querySelector("#zone_felicitation").innerHTML = "";
}


lancerJeu();



