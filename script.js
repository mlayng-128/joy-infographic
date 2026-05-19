let currentText = "";

function openPanel(title, text, link){

  document.getElementById("panelTitle").innerText = title;
  document.getElementById("panelText").innerText = text;

  document.getElementById("panel")
    .classList.remove("hidden");

  currentText = title + ". " + text;

  const learnBtn = document.getElementById("learnMoreBtn");

  if(link && link !== ""){
    learnBtn.style.display = "inline-block";

    learnBtn.onclick = function(){
      window.location.href = link;
    };

  }else{
    learnBtn.style.display = "none";
  }
}

function closePanel(){

  document.getElementById("panel")
    .classList.add("hidden");

  speechSynthesis.cancel();
}

function speakText(){

  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(currentText);

  speech.rate = 0.95;
  speech.pitch = 1;
  speech.volume = 1;

  speechSynthesis.speak(speech);
}

let coreText = "";

function openCorePanel(title, text){

  document.getElementById("corePanelTitle").innerText = title;
  document.getElementById("corePanelText").innerText = text;

  document.getElementById("corePanel")
    .classList.remove("hidden");

  coreText = title + ". " + text;
}

function closeCorePanel(){

  document.getElementById("corePanel")
    .classList.add("hidden");

  speechSynthesis.cancel();
}

function speakCoreText(){

  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(coreText);

  speech.rate = 0.95;
  speech.pitch = 1;
  speech.volume = 1;

  speechSynthesis.speak(speech);
}