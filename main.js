window.onload = onloadstuff;

function playChords() {
	var c1 = document.getElementById("chord1").value;
	if (c1 == "C") {
		var audio = new Audio("audio/C/Major.mp3");
		audio.play();
	} else if (c1 == "Cm") {
		var audio = new Audio("audio/C/Minor.mp3");
		audio.play();
	} else if (c1 == "CM7") {
		var audio = new Audio("audio/C/Major-Seventh.mp3");
		audio.play();
	} else if (c1 == "Cm7") {
		var audio = new Audio("audio/C/Minor-Seventh.mp3");
		audio.play();
	} else if (c1 == "C7") {
		var audio = new Audio("audio/C/Dominant-Seventh.mp3");
		audio.play();
	} else if (c1 == "C6") {
		var audio = new Audio("audio/C/Major-Sixth.mp3");
		audio.play();
	} else if (c1 == "Cm6") {
		var audio = new Audio("audio/C/Minor-Sixth.mp3");
		audio.play();
	} else if (c1 == "Csus4") {
		var audio = new Audio("audio/C/Suspended-Fourth.mp3");
		audio.play();
	} else if (c1 == "C9") {
		var audio = new Audio("audio/C/Ninth.mp3");
		audio.play();
	} else if (c1 == "Cdim") {
		var audio = new Audio("audio/C/Diminished.mp3");
		audio.play();
	} else if (c1 == "Caug") {
		var audio = new Audio("audio/C/Augmented.mp3");
		audio.play();
	}

	audio.addEventListener("loadedmetadata", function(_event) {
    var delayInMilliseconds = (audio.duration+1)*1000;
	console.log(delayInMilliseconds);
	
	setTimeout(function() {
	var c2 = document.getElementById("chord2").value;
	if (c2 == "C") {
		var audio = new Audio("audio/C/Major.mp3");
		audio.play();
	} else if (c2 == "Cm") {
		var audio = new Audio("audio/C/Minor.mp3");
		audio.play();
	} else if (c2 == "CM7") {
		var audio = new Audio("audio/C/Major-Seventh.mp3");
		audio.play();
	} else if (c2 == "Cm7") {
		var audio = new Audio("audio/C/Minor-Seventh.mp3");
		audio.play();
	} else if (c2 == "C7") {
		var audio = new Audio("audio/C/Dominant-Seventh.mp3");
		audio.play();
	} else if (c2 == "C6") {
		var audio = new Audio("audio/C/Major-Sixth.mp3");
		audio.play();
	} else if (c2 == "Cm6") {
		var audio = new Audio("audio/C/Minor-Sixth.mp3");
		audio.play();
	} else if (c2 == "Csus4") {
		var audio = new Audio("audio/C/Suspended-Fourth.mp3");
		audio.play();
	} else if (c2 == "C9") {
		var audio = new Audio("audio/C/Ninth.mp3");
		audio.play();
	} else if (c2 == "Cdim") {
		var audio = new Audio("audio/C/Diminished.mp3");
		audio.play();
	} else if (c2 == "Caug") {
		var audio = new Audio("audio/C/Augmented.mp3");
		audio.play();
	}
	}, delayInMilliseconds);

	});
	
	
}
function onloadstuff() {
button.onclick = playChords;
}
