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
var canLicenses = [];
var prefPracType = document.getElementsByName("practiceType");
var canPrefPracType = [];
var prefGroupType = document.getElementsByName("groupType");
var canPrefGroupType = [];
var prefGroupSize = document.getElementById("prefGroupSize");
var canPrefGroupSize;
var proInts = document.getElementById("profIntInput");
var canProInts;
var hours = document.getElementsByName("hoursType");
var canHours = [];
var advPracs = document.getElementsByName("advPrac");
var canAdvPracs;
var emrs = document.getElementById("knownEMRs");
var canEMRs;
var benefits = document.getElementsByName("benefits");
var canBenefits = [];
var languages = document.getElementById("spokenLanguages");
var canLanguages;
var prefStates = document.getElementsByName("prefStates");
var canPrefStates = [];
var geoInt = document.getElementById("geoInt");
var canGeoInt;
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
var canPrefMethOfContact = [];
var cvUpToDate = document.getElementsByName("cvUpToDate");
var canCVUpToDate;
var canPronouns;

var submitButton = document.getElementById("submit");
var intro = document.getElementById("intro")
var par1 = document.getElementById("p1");
function candidateSubmit(){

  //Determines canGender
  for(var i = 0; i < gender.length; i++){
    if(gender[i].checked){
      canGender = gender[i].value;
    }
  }

  //Determines appropriate canPronouns
  if(canGender == "Male"){
    canPronouns = ["He","he","His","his"];
  }
  else{
    canPronouns = ["She","she","Her","her"];
  }

  //Determines canSalute
  if(canProfession == "Physician "){
    canSalute ="Dr. ";
  }
  else if (canGender == "Male") {
    canSalute = "Mr. ";
  }
  else{
    canSalute = "Ms. ";
  }

  //Determines canProfession
  for(var i = 0; i < profession.length; i++){
    if(profession[i].checked){
      canProfession = profession[i].value + " ";
    }
  }

  //Determines canProStatus
  for(var i = 0; i < proStatus.length; i++){
    if(proStatus[i].checked){
      canProStatus = proStatus[i].value;
    }
  }

  //Determines canBoard
  for(var i = 0; i < boardStatus.length; i++){
    if(boardStatus[i].checked){
      canBoardStatus = boardStatus[i].value + " ";
    }
  }

  //Determines canVisa
  for(var i = 0; i < visa.length; i++){
    if(visa[i].checked){
      canVisa = visa[i].value + " ";
    }
  }

  //Determines canLicenses
  for(var i = 0; i < licenses.length; i++){
    if(licenses[i].checked){
      canLicenses.push(licenses[i].value);
    }
  }

  //Determines canPrefPracType
  for(var i = 0; i < prefPracType.length; i++){
    if(prefPracType[i].checked){
      canPrefPracType.push(prefPracType[i].value);
    }
  }

  //Determines canPrefGroupType
  for(var i = 0; i < prefGroupType.length; i++){
    if(prefGroupType[i].checked){
      canPrefGroupType = canPrefGroupType.push(prefGroupType[i].value);
    }
  }

  //Determines canHours
  for(var i = 0; i < hours.length; i++){
    if(hours[i].checked){
      canHours.push(hours[i].value);
    }
  }

  //Determines canAdvPracs
  for(var i = 0; i < advPracs.length; i++){
    if(advPracs[i].checked){
      canAdvPracs = advPracs[i].value;
    }
  }

  //Determines  canBenefits
  for(var i = 0; i < benefits.length; i++){
    if(benefits[i].checked){
      canBenefits.push(benefits[i].value);
    }
  }

  //Determines canPrefStates
  for(var i = 0; i < prefStates.length; i++){
    if(prefStates[i].checked){
      canPrefStates.push(prefStates[i].value);
    }
  }
  //Determines canSigOther
  for(var i = 0; i < sigOther.length; i++){
    if(sigOther[i].checked){
      canSigOther = sigOther[i].value;
    }
  }

  //Determines canChildren
  for(var i = 0; i < children.length; i++){
    if(children[i].checked){
      canChildren = children[i].value;
    }
  }

  //Determines canInterviewing
  for(var i = 0; i < interviewing.length; i++){
    if(interviewing[i].checked){
      canInterviewing = interviewing[i].value;
    }
  }

  //Determines canVirtInterview
  for(var i = 0; i < virtualInterview.length; i++){
    if(virtualInterview[i].checked){
      canVirtInterview = virtualInterview[i].value;
    }
  }

  //Determines canPrefMethOfContact
  for(var i = 0; i < prefMethOfContact.length; i++){
    if(prefMethOfContact[i].checked){
      canPrefMethOfContact.push(prefMethOfContact[i].value);
    }
  }

  //Determines canCVUpToDate
  for(var i = 0; i < cvUpToDate.length; i++){
    if(cvUpToDate[i].checked){
      canCVUpToDate = cvUpToDate[i].value;
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
availabilityMonth.addEventListener("input",function () {
  canAvailabilityMonth = availabilityMonth.value;
})
availabilityYear.addEventListener("input",function () {
  canAvailabilityYear = availabilityYear.value;
})
trainingCompletionMonth.addEventListener("input",function () {
  canTrainingCompletionMonth = trainingCompletionMonth.value;
})
trainingCompletionYear.addEventListener("input",function () {
  canTrainingCompletionYear = trainingCompletionYear.value;
})
prefGroupSize.addEventListener("input",function () {
  canPrefGroupSize = prefGroupSize.value;
})
proInts.addEventListener("input",function () {
  canProInts = proInts.value;
})
emrs.addEventListener("input",function () {
  canEMRs = emrs.value;
})
languages.addEventListener("input",function () {
  canLanguages = languages.value;
})
geoInt.addEventListener("input",function () {
  canGeoInt = geoInt.value;
})
sigOtherName.addEventListener("input",function () {
  canSigOtherName = sigOtherName.value;
})
sigOtherCareer.addEventListener("input",function () {
  canSigOtherCareer = sigOtherCareer.value;
})
childrenNames.addEventListener("input",function () {
  canChildrenNames = childrenNames.value;
})
childrenActivities.addEventListener("input",function () {
  canChildrenActivities = childrenActivities.value;
})
leisureActivities.addEventListener("input",function () {
  canLeisureActivities = leisureActivities.value;
})
noticeTillInterview.addEventListener("input",function () {
  canNoticeTillInterview = noticeTillInterview.value;
})

//forms string from array
function arrayToString(array){
  var result;
  if(array.length == 1){
    result = array[0];
  }
  else{
    for(var i = 0; i < array.length; i++){
      if(i == array.length - 1){
        result = result + " or " + array[i];
      }
      else{
        if(i == 0){
          result = array[i];
        }
        else{
          result = result + ", " + array[i];
        }
      }
    }
  }
  return result;
}

submitButton.addEventListener("click", function(){
  console.log("run submit functions")
  candidateSubmit();
  var canHoursString = arrayToString(canHours);
  var canPrefGroupTypeString = arrayToString(canPrefGroupType);
  var canBenefitsString = arrayToString(canBenefits);


  var introString = "Initial contact with " + canSalute + canFirstName + " " + canLastName + ":";

  var canFormalName = canSalute + canLastName + " ";
  var canProStatusDescrip;
  var p1a;
  var p1b;
  var p1c;


  if(canProStatus == "Resident"){
    canProStatusDescrip = ["Resident","Residency"];
    p1a = canFormalName + "will complete " + canPronouns[3] + " " + canSpecialty  + " " + canProStatusDescrip[2] + " in " + canTrainingCompletionMonth + " of " + canTrainingCompletionYear + ". ";
    p1c = 
  }
  else if (canProStatus == "Fellow") {
    canProStatusDescrip = ["Fellow","Fellowship"];
    p1a = canFormalName + "will complete " + canPronouns[3] + " " + canSpecialty  + " " + canProStatusDescrip[2] + " in " + canTrainingCompletionMonth + " of " + canTrainingCompletionYear + ". ";

  }
  else if (canProStatus == "Military") {
    canProStatusDescrip = ["Military","Military Commitment"];
    p1a = canFormalName + "will complete " + canPronouns[3] + " " + canProStatusDescrip[2] + " in " + canTrainingCompletionMonth + " of " + canTrainingCompletionYear + ". ";

  }
  else if (canProStatus == "Graduate School"){
    canProStatusDescrip = ["Graduate School", "Graduate Student", "Master's Program"];
    p1a = canFormalName + "will complete " + canPronouns[3] + " " + canProStatusDescrip[3] + " in " + canTrainingCompletionMonth + " of " + canTrainingCompletionYear + ". ";
  }
  else if (canProStatus == "Private Practice") {
    canProStatusDescrip = ["Private Practice","Practicing"];
    p1a = canFormalName + "is a " + canProStatusDescrip[1] + " " + canProfession + " interested in " + canHoursString + " " + canSpecialty + " opportunities, beginning " + canAvailabilityMonth + ", " + canAvailabilityYear + ". ";
  }
  else if (canProStatus == "Retired") {
    canProStatusDescrip = ["Retired","Retirement"];
    p1a = canFormalName + "is a " + canProStatusDescrip[0] + " " + canProfession + " interested in " + canHoursString + " " + canSpecialty + " opportunities, beginning " + canAvailabilityMonth + ", " + canAvailabilityYear + ". ";
  }

  if(canProStatus == "Resident" || "Fellow" || "Military"|| "Graduate School"){
    if(canVisa == "US Citizen"){
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canSpecialty + " opportunities, beginning as early as " + canAvailabilityMonth + ", " + canAvailabilityYear + ". ";
    }
    else if (canVisa == "J1 Visa") {
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canSpecialty + " opportunities, that can accomodate " + canPronouns[3] + canVisa + ", beginning as early as " + canAvailabilityMonth + ", " + canAvailabilityYear + ". ";
    }
    else if (canVisa == "H1b Visa") {
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canSpecialty + " opportunities, that can sponsor " + canPronouns[3] + canVisa + ", beginning as early as " + canAvailabilityMonth + ", " + canAvailabilityYear + ". ";
    }
    else if (canVisa == "O1 Visa") {
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canSpecialty + " opportunities, beginning as early as " + canAvailabilityMonth + ", " + canAvailabilityYear + ". "
            canFormalName + " is seeking opportunities on an " + canVisa + ". ";
    }
    else{
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canSpecialty + " opportunities, beginning as early as " + canAvailabilityMonth + ", " + canAvailabilityYear + ". "
            canFormalName + " is seeking opportunities on a " + canVisa + ". ";
    }
  }
  else{
    if(canVisa == "US Citizen"){
      p1b = "";
    }
    else if (canVisa == "J1 Visa") {
      p1b = canPronouns[0] + " is interested in opportunities, that can accomodate " + canPronouns[3] + canVisa + ". ";
    }
    else if (canVisa == "H1b Visa") {
      p1b = canPronouns[0] + " is interested in opportunities, that can sponsor " + canPronouns[3] + canVisa + ". ";
    }
    else if (canVisa == "O1 Visa") {
      p1b = canFormalName + " is seeking opportunities on an " + canVisa + ". ";
    }
    else{
      p1b = canFormalName + " is seeking opportunities on a " + canVisa + ". ";
    }
  }

  intro.textContent = "Initial contact with "+canSalute +" "+canFirstName+" "+canLastName+":";
  p1.textContent = canSalute+canLastName;
})
