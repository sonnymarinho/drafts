const candidateContainer = document.getElementById("candidates-container");
const card = document.querySelector(".card");
const btnAddCandidate = document.querySelector("#form button");
const txtCandidateName = document.querySelector("#form input");

function addCandidate(e) {
  e.preventDefault();

  const name = document.querySelector("#txtCandidateName").value;
  // const votes = document.querySelector("#form #txtCandidateVotes").value;

  var clonnedCard = card.cloneNode(true);
  clonnedCard.querySelector("#name").innerText = name;

  candidateContainer.appendChild(clonnedCard)

  document.querySelector("#form input").value = '';
  return false;
}

btnAddCandidate.addEventListener("click", addCandidate(e));
txtCandidateName.addEventListener("keyup", function(e) {
  if (e.key === 'Enter') {
   addCandidate();  
  }
});