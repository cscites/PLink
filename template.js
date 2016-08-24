console.log("connected");
var firstName = document.getElementById("firstName");
var canFirstName;
var lastName = document.getElementById("lastName");
var canLastName;
var canSalute;
var gender = document.getElementsByName("gender");
var canGender;
var specialty = document.getElementById("specialty");
var canSpecialty;
var profession = document.getElementsByName("profession");
var canProfession;
var proStatus = document.getElementsByName("proStatus");
var canProStatus;
var boardStatus = document.getElementsByName("board");
var canBoardStatus;
var availabilityMonth = document.getElementById("availabilityMonth");
var canAvailabilityMonth;
var availabilityYear = document.getElementById("availabilityYear");
var canAvailabilityYear;
var trainingCompletionMonth = document.getElementById("completionMonth");
var canTrainingCompletionMonth;
var trainingCompletionYear = document.getElementById("completionYear");
var canTrainingCompletionYear;
var licenses = document.getElementsByName("stateLic");
var canLicenses;
var prefPracType = document.getElementsByName("practiceType");
var canPrefPracType;
var prefGroupType = document.getElementsByName("groupType");
var canPrefGroupType;
var prefGroupSize = document.getElementById("prefGroupSize");
var canPrefGroupSize;
var proInts = document.getElementById("profIntInput");
var canProInts;
var hours = document.getElementsByName("hoursType");
var canHours;
var advPracs = document.getElementsByName("advPracs");
var canAdvPracs;
var emrs = document.getElementById("knownEMRs");
var canEMRs;
var benefits = document.getElementsByName("benefits");
var canBenefits;
var languages = document.getElementById("spokenLanguages");
var canLanguages;
var prefStates = document.getElementsByName("prefStates");
var canPrefStates;
var sigOther = document.getElementsByName("sigOthers");
var canSigOther;
var sigOtherName = document.getElementById("sigOtherName")
var canSigOtherName;
var sigOtherCareer = document.getElementById("sigOtherCareer")
var canSigOtherCareer;
var children = document.getElementsByName("children");
var canChildren;
var childrenNames = document.getElementById("childrenNames");
var canChildrenNames;
var childrenActivities = document.getElementById("childrenActivities");
var canChildrenActivities;
var leisureActivities = document.getElementById("leisureActivities");
var canLeisureActivities;
var begunInterviewing = document.getElementsByName("interviewing");
var canInterviewing;
var noticeTillInterview = document.getElementById("noticeToInterview");
var canNoticeTillInterview;
var virtInterview = document.getElementsByName("virtualInterview");
var canVirtInterview;
var virtInterviewMethod = document.getElementById("virtualInterviewMethod");
var canVirtInterviewMethod;
var prefMethOfContact = document.getElementsByName("prefMethOfContact");
var canPrefMethOfContact;
var cvUpToDate = document.getElementsByName("cvUpToDate");
var canCVUpToDate;

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


submitButton.addEventListener("click", function(){
  candidateSalute();
  candidateProStatus();
  candidateBoard();
  intro.textContent = "Initial contact with "+canSalute +" "+canFirstName+" "+canLastName+":";
  p1.textContent = canSalute+canLastName;
})
