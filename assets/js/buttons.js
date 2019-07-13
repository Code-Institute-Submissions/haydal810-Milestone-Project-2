// This is the onclick function, when action button is click on, it makes welcome text div disappear and and other div appear instead


function buttonQuestion() { 
	document.getElementById("game-title").style.display="none"; 
	document.getElementById("question").style.display="block"; 
}

function buttonRestart() {
    window.location.reload();
} 