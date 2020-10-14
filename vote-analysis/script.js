let totalVotes = 0;
let nullVotes = 0;

const candidateContainer = document.getElementById("candidates-container");
const card = document.querySelector(".card");
const btnAddCandidate = document.querySelector("[name=btn-add-candidate]");
const txtCandidateName = document.querySelector('[name=candidate-name-txt-field]');
const txtCandidateVotes = document.querySelector('[name=candidate-votes-txt-field]');
const txtNullVotes = document.querySelector('[name=null-votes-txt-field]');

// Info
const lblTotalVotes = document.querySelector('#total-votes-info-field');
const lblTotalNullVotes = document.querySelector('#total-null-info-field');
lblTotalVotes.innerText = 0;
lblTotalNullVotes.innerText = 0;


function updateVotesState() {
  let currentTotal = 0;
  document.querySelectorAll('[name=candidate-votes]')
  .forEach((inputField)=>{
    currentTotal += Number(inputField.value);
  })
  
  totalVotes = currentTotal + nullVotes;
  lblTotalVotes.innerHTML = totalVotes;
}

function addCandidateHandler() {
  const name = txtCandidateName.value
  const votes = txtCandidateVotes.value

  var clonnedCard = card.cloneNode(true);
  clonnedCard.querySelector('[name=candidate-name]').innerText = name;
  clonnedCard.querySelector('[name=candidate-votes]').value = votes;
  clonnedCard.addEventListener('focusout', ()=>{updateVotesState()});

  candidateContainer.appendChild(clonnedCard)

  document.querySelectorAll(".candidate #form input").forEach(element => {
    element.value = '';
  });

  txtCandidateName.focus();

  updateVotesState();
}

function updateNullVotes() {
  const total = txtNullVotes.value;
  lblTotalNullVotes.innerText = (total === ''? 0 : total);
  nullVotes = Number(total);

  updateVotesState();
}

// Event Listeners
txtCandidateName.addEventListener("keypress", (e)=>{
  if (e.key === 'Enter') {
    addCandidateHandler();
  }
});

txtCandidateVotes.addEventListener("keypress", (e)=>{
  if (e.key === 'Enter') {
    addCandidateHandler();
  }
});

btnAddCandidate.addEventListener("click", (e)=>{
  addCandidateHandler();  
});


txtNullVotes.addEventListener("keypress", (e)=>{
  if (e.key === 'Enter') {
    updateNullVotes();
  }
});

txtNullVotes.addEventListener('focusout', (e)=>{
  updateNullVotes();
})

document.querySelectorAll('[name=candidate-votes]').forEach(inputVotes => {
  inputVotes.addEventListener('focusout', ()=>{
    updateVotesState();
  })
})