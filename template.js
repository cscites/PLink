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
var visa = document.getElementsByName("visa");
var canVisa;
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
//Determines canGender
function candidateGender(){
  for(var i = 0; i < gender.length; i++){
    if(gender[i].checked){
      canGender = gender[i].value;
    }
  }
}
//Determines canSalute, must be run after candidateGender()
function candidateSalute() {
  if(profession.value = "Physician"){
    canSalute ="Dr. ";
  }
  else if (canGender = "Male") {
    canSalute = "Mr. ";
  }
  else{
    canSalute = "Ms. ";
  }
}
//Determines canProfession (Physician, NP, PA)
function candidateProfession(){
  for(var i = 0; i < profession.length; i++){
    if(profession[i].checked){
      canProfession = profession[i].value + " ";
    }
  }
}
//Determines canProStatus
function candidateProStatus() {
  for(var i = 0; i < proStatus.length; i++){
    if(proStatus[i].checked){
      canProStatus = proStatus[i].value;
    }
  }
}
//Determines canBoard
function candidateBoard() {
  for(var i = 0; i < board.length; i++){
    if(board[i].checked){
      canBoard = board[i].value + " ";
    }
  }
}
//Determines canVisa
function candidateVisa() {
  for(var i = 0; i < visa.length; i++){
    if(visa[i].checked){
      canVisa = visa[i].value + " ";
    }
  }
}
//Determines canLicenses
function candidateLicenses() {
  for(var i = 0; i < licenses.length; i++){
    if(licenses[i].checked){
      canLicenses = canLicenses.push(licenses[i].value);
    }
  }
}
//Determines canPrefPracType
function candidatePrefPracType() {
  for(var i = 0; i < prefPracType.length; i++){
    if(prefPracType[i].checked){
      canPrefPracType = canPrefPracType.push(prefPracType[i].value);
    }
  }
}
//Determines canPrefGroupType
function candidatePrefGroupType() {
  for(var i = 0; i < prefGroupType.length; i++){
    if(prefGroupType[i].checked){
      canPrefGroupType = canPrefGroupType.push(prefGroupType[i].value);
    }
  }
}
//Determines canHours
function candidateHours() {
  for(var i = 0; i < hours.length; i++){
    if(hours[i].checked){
      canHours = canHours.push(hours[i].value);
    }
  }
}
//Determines canAdvPracs
function candidateAdvPracs() {
  for(var i = 0; i < advPracs.length; i++){
    if(advPracs[i].checked){
      canAdvPracs = advPracs[i].value;
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
