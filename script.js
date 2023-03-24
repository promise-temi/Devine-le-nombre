// Génère un nombre aléatoire entre 1 et 100
var number = Math.floor(Math.random() * 100) + 1;

// Fonction qui gère le clic sur le bouton Devine
function guess() {
  // Récupère la valeur saisie dans l'input
  var guess = document.getElementById("guessInput").value;
  // Vérifie si le nombre deviné est plus grand ou plus petit que le nombre aléatoire
  if (guess < number) {
    document.getElementById("result").innerHTML = "Perdu! Le nombre deviné est top petit";
  } else if (guess > number) {
    document.getElementById("result").innerHTML = "Perdu! Le nombre deviné est trop grand";
  } else {
    document.getElementById("result").innerHTML = "Bravo, vous avez deviné le nombre !";
  }
}
