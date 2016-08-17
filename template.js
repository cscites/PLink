console.log("connected");
var salute = document.getElementsByName("salute");
var proStatus = document.getElementsByName("proStatus");
var board = document.getElementsByName("board");
var canSalute;
var canProStatus;
var canBoard;
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var specialty = document.getElementById("specialty");
var availability = document.getElementById("availability");
var license = document.getElementById("license");
var canFirstName;
var canLastName;
var canSpecialty;
var canAvailability;
var canLicense
var submitButton = document.getElementById("submit");
var intro = document.getElementById("intro")
var par1 = document.getElementById("p1");


function candidateSalute() {
  for(var i = 0; i < salute.length; i++){
    if(salute[i].checked){
      canSalute = salute[i].value;
    }
  }
}
function candidateProStatus() {
  for(var i = 0; i < proStatus.length; i++){
    if(proStatus[i].checked){
      canProStatus = proStatus[i].value;
    }
  }
}
function candidateBoard() {
  for(var i = 0; i < board.length; i++){
    if(board[i].checked){
      canBoard = board[i].value;
    }
  }
}
firstName.addEventListener("input",function () {
  canFirstName = firstName.value;
})
lastName.addEventListener("input",function () {
  canLastName = lastName.value;
})
specialty.addEventListener("input",function () {
  canSpecialty = specialty.value;
})
availability.addEventListener("input",function () {
  canAvailability = availability.value;
})
license.addEventListener("input",function () {
  canLicense = license.value;
})

submitButton.addEventListener("click", function(){
  candidateSalute();
  candidateProStatus();
  candidateBoard();
  intro.textContent = "Initial contact with "+canSalute +" "+canFirstName+" "+canLastName+":";
  p1.textContent = canSalute+canLastName;
})
