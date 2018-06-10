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
	flag = 0;
	audio.addEventListener("loadedmetadata", function(_event) {
	if(flag == 1)
		return;
	var delayInMilliseconds = audio.duration*1000;
	console.log(delayInMilliseconds);
	
	setTimeout(function() {
	var c2 = document.getElementById("chord2").value;
	if (c2 == "C") {
		audio.src="audio/C/Major.mp3";
		audio.play();
	} else if (c2 == "Cm") {
		audio.src="audio/C/Minor.mp3";
		audio.play();
	} else if (c2 == "CM7") {
		audio.src="audio/C/Major-Seventh.mp3";
		audio.play();
	} else if (c2 == "Cm7") {
		audio.src="audio/C/Minor-Seventh.mp3";
		audio.play();
	} else if (c2 == "C7") {
		audio.src="audio/C/Dominant-Seventh.mp3";
		audio.play();
	} else if (c2 == "C6") {
		audio.src="audio/C/Major-Sixth.mp3";
		audio.play();
	} else if (c2 == "Cm6") {
		audio.src="audio/C/Minor-Sixth.mp3";
		audio.play();
	} else if (c2 == "Csus4") {
		audio.src="audio/C/Suspended-Fourth.mp3";
		audio.play();
	} else if (c2 == "C9") {
		audio.src="audio/C/Ninth.mp3";
		audio.play();
	} else if (c2 == "Cdim") {
		audio.src="audio/C/Diminished.mp3";
		audio.play();
	} else if (c2 == "Caug") {
		audio.src="audio/C/Augmented.mp3";
		audio.play();
	}
	flag = 1;
	}, delayInMilliseconds-800);

	});
	
	
}
function onloadstuff() {
button.onclick = playChords;
}
