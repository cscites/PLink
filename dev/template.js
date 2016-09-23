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
var canExp;
var canExpUnit;
var canExpLength;
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
var prefGroupSizeNumber = document.getElementById("prefGroupSizeNumber");
var canPrefGroupSizeNumber;
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
var prefSchedule = document.getElementById("prefSchedule");
var canPrefSchedule;
var languages = document.getElementById("spokenLanguages");
var canLanguages;
var prefStates = document.getElementsByName("prefStates");
var canPrefStates = [];
var geoInt = document.getElementById("geoInt");
var canGeoInt;
var reasonsForGeoInt = document.getElementById("reasonsForGeoInt");
var canReasonsForGeoInt;
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
var relocation = document.getElementsByName("relocation");
var canRelocation;
var currentCity = document.getElementById("currentCity");
var canCurrentCity;
var currentState = document.getElementById("currentState");
var canCurrentState;
var currentZip = document.getElementById("currentZip");
var canCurrentZip;
var maximumCommute = document.getElementById("maximumCommute");
var canMaximumCommute;
var childrenSchoolType = document.getElementsByName("childrenSchoolType");
var canChildrenSchoolType = [];
var noticeToInterviewUnit;
var canCVUpToDate;
var canPronouns;
var canProStatusDescrip;


var submitButton = document.getElementById("submit");
var resetButton = document.getElementById("reset");
var finalID = document.getElementById("finalID");

var boardCertified = [];
var boardEligible = [];
var trainingLicenses = [];
var inactiveLicenses = [];

$( '#boardCertified a' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = boardCertified.indexOf( val ) ) > -1 ) {
      boardCertified.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      boardCertified.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();

   return false;
});

$( '#boardEligible a' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = boardEligible.indexOf( val ) ) > -1 ) {
      boardEligible.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      boardEligible.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();

   return false;
});

$( '#trainingLicenses a' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = trainingLicenses.indexOf( val ) ) > -1 ) {
      trainingLicenses.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      trainingLicenses.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();

   return false;
});

$( '#inactiveLicenses a' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = inactiveLicenses.indexOf( val ) ) > -1 ) {
      inactiveLicenses.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      inactiveLicenses.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();

   return false;
});

$("#proStatus").click(function () {
  canProStatus = $("#proStatus input:checked").val();
  if(canProStatus == "Resident" || canProStatus == "Fellow" || canProStatus == "Military" || canProStatus == "Graduate School"){
    $("#trainingCompletionData").removeClass("hidden");
    $("#practiceExperience").addClass("hidden");
  }
  else{
    $("#practiceExperience").removeClass("hidden");
    $("#trainingCompletionData").addClass("hidden");
  }
})


function candidateSubmit(){

  //Determines canSpecialty
  canSpecialty = $("#specialty option:selected").val();

  //Determines canAvailabilityMonth
  canAvailabilityMonth = $("#availabilityMonth option:selected").val();

  //Determines noticeToInterviewUnit
  noticeToInterviewUnit = $("#noticeToInterviewUnit option:selected").val();

  //Determines canTrainingCompletionMonth
  canTrainingCompletionMonth = $("#completionMonth option:selected").val();
  //Determines canGender
  for(var i = 0; i < gender.length; i++){
    if(gender[i].checked){
      canGender = gender[i].value;
    }
  }

  //Determines appropriate canPronouns
  if(canGender == "Male"){
    canPronouns = ["He","he","His","his","him"];
  }
  else{
    canPronouns = ["She","she","Her","her"];
  }

  //Determines canProfession
  for(var i = 0; i < profession.length; i++){
    if(profession[i].checked){
      canProfession = profession[i].value;
    }
  }

  //Determines canSalute
  if(canProfession == "Physician"){
    canSalute ="Dr. ";
  }
  else if (canGender == "Male") {
    canSalute = "Mr. ";
  }
  else{
    canSalute = "Ms. ";
  }


  //Determines canExperience
  canExpUnit = $("#expUnits").val();
  canExpLength = $("#expLength").val();
  canExp = canExpLength + " " + canExpUnit;
  if (canExpLength < 2) {
    canExp = canExp.replace(/s/,"");
  }

  //Determines canBoard == N/A
  for(var i = 0; i < boardStatus.length; i++){
    if(boardStatus[i].checked){
      canBoardStatus = boardStatus[i].value;
    }
  }

  //Determines canVisa
  for(var i = 0; i < visa.length; i++){
    if(visa[i].checked){
      canVisa = visa[i].value;
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
      canPrefGroupType.push(prefGroupType[i].value);
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

  //Determines relocation
  for(var i = 0; i < relocation.length; i++){
    if(relocation[i].checked){
      canRelocation = relocation[i].value;
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

  //Determines canChildrenSchoolType
  for(var i = 0; i < childrenSchoolType.length; i++){
    if(childrenSchoolType[i].checked){
      canChildrenSchoolType.push(childrenSchoolType[i].value);
    }
  }

  //Determines canInterviewing
  for(var i = 0; i < interviewing.length; i++){
    if(interviewing[i].checked){
      canInterviewing = interviewing[i].value;
    }
  }

  //Determines canVirtInterview
  for(var i = 0; i < virtInterview.length; i++){
    if(virtInterview[i].checked){
      canVirtInterview = virtInterview[i].value;
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
//specialty.addEventListener("input",function () {
//  canSpecialty = specialty.value;
//})
//availabilityMonth.addEventListener("input",function () {
//  canAvailabilityMonth = availabilityMonth.value;
//})
availabilityYear.addEventListener("input",function () {
  canAvailabilityYear = availabilityYear.value;
})
//trainingCompletionMonth.addEventListener("input",function () {
//  canTrainingCompletionMonth = trainingCompletionMonth.value;
//})
trainingCompletionYear.addEventListener("input",function () {
  canTrainingCompletionYear = trainingCompletionYear.value;
})
prefGroupSize.addEventListener("input",function () {
  canPrefGroupSize = prefGroupSize.value;
})
prefGroupSizeNumber.addEventListener("input",function () {
  canPrefGroupSizeNumber = prefGroupSizeNumber.value;
})
proInts.addEventListener("input",function () {
  canProInts = proInts.value;
})
emrs.addEventListener("input",function () {
  canEMRs = emrs.value;
})
prefSchedule.addEventListener("input",function () {
  canPrefSchedule = prefSchedule.value;
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
virtInterviewMethod.addEventListener("input",function () {
  canVirtInterviewMethod = virtInterviewMethod.value;
})
currentCity.addEventListener("input",function () {
  canCurrentCity = currentCity.value;
})
currentState.addEventListener("input",function () {
  canCurrentState = currentState.value;
})
currentZip.addEventListener("input",function () {
  canCurrentZip = currentZip.value;
})
maximumCommute.addEventListener("input",function () {
  canMaximumCommute = maximumCommute.value;
})
reasonsForGeoInt.addEventListener("input",function () {
  canReasonsForGeoInt = reasonsForGeoInt.value;
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

//forms list from array
function arrayToList(array){
  for(var i = 0; i < array.length; i++){
    if(i == 0){
      result = " \u2022 " + array[i];
    }
    else{
      result = result + "\n \u2022 " + array[i];
    }
  }
  return result;
}

//forms list from string
function stringToList(string){
  array = string.split(";");
  for(var i = 0; i < array.length; i++){
    array[i] = array[i].trim();
  }
  result = arrayToList(array);
  return result;
}

//forms formatted string from input
function inputToString(input) {
  array = input.split(";");
  for(var i = 0; i < array.length; i++){
    array[i] = array[i].trim();
  }
  result = arrayToString(array);
  return result;
}
var canPrefRegion;
$(".prefRegion").on("click",function () {
  var tempArray = [];
  for(var i = 0; i < $(".prefRegion:checked").length; i++){
    tempArray.push($(".prefRegion:checked")[i].value);
  }
  canPrefRegion = tempArray;
  for(var i = 0; i < canPrefRegion.length; i++){
    if(canPrefRegion[i] == "New England"){
      for(var n = 0; n < prefStates.length; n++){
        if(prefStates[n].value == "Maine" || prefStates[n].value == "Vermont"){
          prefStates[n].checked = true;
        }
      }
    }
  }
  console.log(canPrefRegion);
  //canPrefRegion.push($("#prefRegion:checked").value);
})



resetButton.addEventListener("click", function(){
  location.reload();
})

submitButton.addEventListener("click", function(){
  console.log("run submit functions")
  candidateSubmit();
  var canHoursString = arrayToString(canHours);
  var canPrefGroupTypeString = arrayToString(canPrefGroupType);
  var canBenefitsString;
  var canLicensesList;
  var canPrefPracTypeString = arrayToString(canPrefPracType);
  var canPrefGroupTypeString = arrayToString(canPrefGroupType);
  var canProIntsString;
  var canEMRsString;
  var canLanguagesString;
  var canPrefStatesList;
  var canGeoIntString;
  var canReasonsForGeoIntString;
  var canChildrenNamesString;

  var introString = "Initial contact with " + canSalute + canFirstName + " " + canLastName + ": ";

  var canFormalName = canSalute + canLastName + " ";
  var p1a;
  var p1b;
  var p1c;
  var p1d;
  var p2a = "At this point in " + canPronouns[3] + " job search, " + canFormalName +
            "is interested in " + canPrefPracTypeString + " opportunities. ";
  var p2b1;
  var p2b2;
  var p2c;
  var p2d1;
  var p2d2;
  var p2e;
  var p2f;

  var p3a;
  var p3b;
  var p3c;
  var p3d;
  var p3e;
  var p3f;

  var p4a;
  var p4b;
  var p4c;



  if(canProStatus == "Resident"){
    canProStatusDescrip = ["Resident","Residency"];
    p1a = canFormalName + "will complete " + canPronouns[3] + " " + canSpecialty  + " " + canProStatusDescrip[1] + " in " + canTrainingCompletionMonth + " of " + canTrainingCompletionYear + ". ";
  }
  else if (canProStatus == "Fellow") {
    canProStatusDescrip = ["Fellow","Fellowship"];
    p1a = canFormalName + "will complete " + canPronouns[3] + " " + canSpecialty  + " " + canProStatusDescrip[1] + " in " + canTrainingCompletionMonth + " of " + canTrainingCompletionYear + ". ";

  }
  else if (canProStatus == "Military") {
    canProStatusDescrip = ["Military","Military Commitment"];
    p1a = canFormalName + "will complete " + canPronouns[3] + " " + canProStatusDescrip[1] + " in " + canTrainingCompletionMonth + " of " + canTrainingCompletionYear + ". ";

  }
  else if (canProStatus == "Graduate School"){
    canProStatusDescrip = ["Graduate School", "Graduate Student", "Master's Program"];
    p1a = canFormalName + "will complete " + canPronouns[3] + " " + canProStatusDescrip[2] + " in " + canTrainingCompletionMonth + " of " + canTrainingCompletionYear + ". ";
  }
  else if (canProStatus == "Private Practice") {
    canProStatusDescrip = ["Private Practice","Practicing"];
    if(canProfession == "Physician"){
      p1a = canFormalName + "is a " + canProStatusDescrip[1] + " " + canProfession + " interested in " + canHoursString + ", " + canSpecialty + " opportunities, beginning " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
    else{
      p1a = canFormalName + "is a " + canProStatusDescrip[1] + " " + canProfession + " interested in " + canHoursString + " opportunities, beginning " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
  }
  else if (canProStatus == "Retired") {
    canProStatusDescrip = ["Retired","Retirement"];
    if(canProfession == "Physician"){
      p1a = canFormalName + "is a " + canProStatusDescrip[0] + " " + canProfession + " interested in " + canHoursString + " " + canSpecialty + " opportunities, beginning " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
    else{
      p1a = canFormalName + "is a " + canProStatusDescrip[0] + " " + canProfession + " interested in " + canHoursString + " opportunities, beginning " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
  }
  else {
    if(canProfession == "Physician"){
      p1a = canFormalName + "is a " + canProfession + " interested in " + canHoursString + " " + canSpecialty + " opportunities, beginning " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
    else{
      p1a = canFormalName + "is a " + canProfession + " interested in " + canHoursString + " opportunities, beginning " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
  }

  //Determines p1b string
  if(canProStatus == "Resident" ||canProStatus ==  "Fellow" ||canProStatus ==  "Military"){
    if(canVisa == "US Citizen"){
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canSpecialty + " opportunities, beginning as early as " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
    else if (canVisa == "J1 Visa") {
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canSpecialty + " opportunities, that can accomodate " + canPronouns[3] + " " + canVisa + ", beginning as early as " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
    else if (canVisa == "H1b Visa") {
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canSpecialty + " opportunities, that can sponsor " + canPronouns[3] + " " + canVisa + ", beginning as early as " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
    else if (canVisa == "O1 Visa") {
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canSpecialty + " opportunities, beginning as early as " + canAvailabilityMonth + " " + canAvailabilityYear + ". "
            + canFormalName + " is seeking opportunities on an " + canVisa + ". ";
    }
    else{
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canSpecialty + " opportunities, beginning as early as " + canAvailabilityMonth + " " + canAvailabilityYear + ". "
            + canFormalName + " is seeking opportunities on a " + canVisa + ". ";
    }
  }
  else if (canProStatus ==  "Graduate School") {
    if(canVisa == "US Citizen"){
      p1b = canPronouns[0] + " is interested in " + canHoursString + " " + canProfession + " opportunities, beginning as early as " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
    else if (canVisa == "J1 Visa") {
      p1b = canPronouns[0] + " is interested in " + canHoursString + " opportunities, that can accomodate " + canPronouns[3] + " " + canVisa + ", beginning as early as " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
    else if (canVisa == "H1b Visa") {
      p1b = canPronouns[0] + " is interested in " + canHoursString + " opportunities, that can sponsor " + canPronouns[3] + canVisa + ", beginning as early as " + canAvailabilityMonth + " " + canAvailabilityYear + ". ";
    }
    else if (canVisa == "O1 Visa") {
      p1b = canPronouns[0] + " is interested in " + canHoursString + " opportunities, beginning as early as " + canAvailabilityMonth + " " + canAvailabilityYear + ". "
            canFormalName + " is seeking opportunities on an " + canVisa + ". ";
    }
    else{
      p1b = canPronouns[0] + " is interested in " + canHoursString + " opportunities, beginning as early as " + canAvailabilityMonth + " " + canAvailabilityYear + ". "
            canFormalName + " is seeking opportunities on a " + canVisa + ". ";
    }
  }
  else{
    if(canVisa == "US Citizen"){
      p1b = "";
    }
    else if (canVisa == "J1 Visa") {
      p1b = canPronouns[0] + " is interested in opportunities, that can accomodate " + canPronouns[3] + " " + canVisa + ". ";
    }
    else if (canVisa == "H1b Visa") {
      p1b = canPronouns[0] + " is interested in opportunities, that can sponsor " + canPronouns[3] + " " + canVisa + ". ";
    }
    else if (canVisa == "O1 Visa") {
      p1b = canFormalName + " is seeking opportunities on an " + canVisa + ". ";
    }
    else{
      p1b = canFormalName + " is seeking opportunities on a " + canVisa + ". ";
    }
  }

  //Determines canBoardStatus String
  if(canBoardStatus == "N/A"){
    p1c = "";
  }
  else{
    if(canProfession == "Physician"){
      if(boardCertified.length > 0){
        var boardCertList = arrayToList(boardCertified);
        p1c = canFormalName + "is currently Board Certified in: \n" + boardCertList + "\n";
        if(boardEligible.length > 0){
          var boardEligList = arrayToList(boardEligible);
          p1c = p1c + "and Board Eligible in: \n" + boardEligList + "\n";
        }
      }
      else if (boardEligible.length > 0) {
        var boardEligList = arrayToList(boardEligible);
        p1c = canFormalName + "is currently Board Eligible in: \n" + boardEligList + "\n";
      }
    }
    else {
      if(boardEligible.length == 0){
        p1c = canFormalName + "is currently a Board Certified " + canProfession + ". ";
      }
      else{
        p1c = canFormalName + "is currently a Board Eligible " + canProfession + ". ";
      }
    }
  }

  if (canProStatus == "Private Practice" || canProStatus == "Retired" || canProStatus == "Other") {
    if(canExpLength.length > 0){
      if(p1c.length == 0){
        p1c = canFormalName + "has " + canExp + " of practice experience. ";
      }
      else{
        p1c = p1c + "and has " + canExp + " of practice experience. "
      }
    }
  }


  if(canLicenses.length == 0){
    p1d = ""
    if (trainingLicenses.length > 0) {
      var trainingLicensesList = arrayToList(trainingLicenses);
      p1d = canPronouns[0] + " has training licenses in: \n" + trainingLicensesList + "\n";
      if (inactiveLicenses.length > 0) {
        var inactiveLicensesList = arrayToList(inactiveLicenses);
        p1d = p1d + "and inactive licenses in: \n" + inactiveLicensesList + "\n";
      }
    }
    if (inactiveLicenses.length > 0 && trainingLicenses.length == 0) {
      var inactiveLicensesList = arrayToList(inactiveLicenses);
      p1d = canPronouns[0] + " has inactive licenses in: \n" + inactiveLicensesList + "\n";
    }
  }
  else{
    canLicensesList = arrayToList(canLicenses);
    p1d = canPronouns[0] + " is currently licensed in: \n" + canLicensesList + "\n";
    if (trainingLicenses.length > 0) {
      var trainingLicensesList = arrayToList(trainingLicenses);
      p1d = p1d + "and has training licenses in: \n" + trainingLicensesList + "\n";
    }

    if (inactiveLicenses.length > 0) {
      var inactiveLicensesList = arrayToList(inactiveLicenses);
      p1d = p1d + "and inactive licenses in: \n" + inactiveLicensesList + "\n";
    }
  }



  //Determines p2b1 and p2b2 strings
  if(canPrefGroupType.length == 0){
    p2b1 = "";
    if(canPrefGroupSize == undefined && canPrefGroupSizeNumber == undefined){
      p2b2 = canPronouns[0] + " is flexible in terms of Group size. ";
    }
    else if(canPrefGroupSize == undefined){
      p2b2 = canPronouns[0] + " would prefer to be in a Group of " + canPrefGroupSizeNumber + ". ";
    }
    else if (canPrefGroupSize == "flexible") {
      p2b2 = canPronouns[0] + " is flexible in terms of Group size. ";
    }
    else{
      p2b2 = canPronouns[0] + " would prefer to be in a " + canPrefGroupSize + " Group. ";
    }
  }
  else if (canPrefGroupType.length == 1) {
    p2b1 = canPronouns[0] + " would prefer a " + canPrefGroupTypeString;
    if(canPrefGroupSize == undefined && canPrefGroupSizeNumber == undefined){
      p2b2 = " and " + canPronouns[1] + " is flexible in terms of Group size. ";
    }
    else if(canPrefGroupSize == undefined){
      p2b2 = " and would prefer to be in a Group of " + canPrefGroupSizeNumber + ". ";
    }
    else if (canPrefGroupSize == "flexible") {
      p2b2 = " and is flexible in terms of Group size. ";
    }
    else{
      p2b2 = " and would prefer to be in a " + canPrefGroupSize + " Group. ";
    }
  }
  else{
    p2b1 = canPronouns[0] + " is open to a " + canPrefGroupTypeString + " and ";
    if(canPrefGroupSize == undefined && canPrefGroupSizeNumber == undefined){
      p2b2 = canPronouns[1] + " is flexible in terms of Group size. ";
    }
    else if(canPrefGroupSize == undefined){
      p2b2 = " and would prefer to be in a Group of " + canPrefGroupSizeNumber + ". ";
    }
    else if (canPrefGroupSize == "flexible") {
      p2b2 = " and is flexible in terms of Group size. ";
    }
    else{
      p2b2 = " and would prefer to be in a " + canPrefGroupSize + " Group. ";
    }
  }


  //Determines p2c string
  if(canProInts == undefined){
    p2c = canFormalName + "enjoys all aspects of " + canSpecialty + " and will be looking for a General, Bread and Butter " + canSpecialty + " Practice. ";
  }
  else{
    canProIntsString = stringToList(canProInts);
    if(canProfession == "Physician"){
      p2c = canFormalName + "enjoys all aspects of " + canSpecialty + " and is interested in: \n" + canProIntsString + "\n";
    }
    else{
      p2c = canFormalName + " is particularly interested in: \n \u2022 " + canSpecialty + "\n" + canProIntsString + "\n";
    }
  }

  //Determines p2d1 string
  if(canAdvPracs == "yes"){
    p2d1 = canPronouns[0] + " welcomes the opportunity to work with Advanced Practitioners";
  }
  else if (canAdvPracs == "no") {
    p2d1 = canPronouns[0] + " prefers not to work with Advanced Practitioners";
  }
  else{
    p2d1 = "";
  }

  //determines canEMRsString and p2d2
  if(canEMRs == undefined){
    if(canAdvPracs == undefined){
      p2d2 = "";
    }
    else{
      p2d2 = ". ";
    }
  }
  else if (canAdvPracs == undefined) {
    if(canEMRs == undefined){
      p2d2 = "";
    }
    else{
      canEMRsString = stringToList(canEMRs);
      p2d2 = canPronouns[0] + " is experienced with the following EMRs: \n" + canEMRsString + "\n";
    }
  }
  else{
    canEMRsString = stringToList(canEMRs);
    p2d2 = " and is experienced with the following EMRs: \n" + canEMRsString + "\n";
  }

  //determines p2d3
  if($("#flexibleSchedule").is(':checked')){
    p2d3 = canPronouns[0] + " is flexible in terms of schedule. ";
  }
  else if(canPrefSchedule != undefined){
    p2d3 = canPronouns[0] + " would prefer to work a schedule of " + canPrefSchedule + ". ";
  }
  else{
    p2d3 = "";
  }
  //determines p2e
  if(canBenefits.length == 0){
    p2e = "";
  }
  else{
    canBenefitsString = arrayToString(canBenefits);
    p2e = canFormalName + "is particularly interested in opportunities that provide " + canBenefitsString + ". ";
  }

  //determines p2f and canLanguagesString
  if(canLanguages == undefined){
    p2f = "";
  }
  else{
    canLanguagesString = inputToString(canLanguages);
    canLanguagesString = canLanguagesString.replace(/\bor\b/g, "and");
    p2f = "In addition to English, " + canFormalName + "speaks " + canLanguagesString + ". "
  }

  //determines p3a
  if(canPrefStates.length > 1){
    canPrefStatesList = arrayToList(canPrefStates);
    p3a = "Geographically, " + canFormalName + "is interested in opportunities in the following states: \n" + canPrefStatesList + "\n";
  }
  else{
    canPrefStatesList = arrayToString(canPrefStates);
    if(canPrefStatesList == "Open-US"){
      p3a = "Geographically, " + canFormalName + "is interested in opportunities in nationwide. ";
    }
    else{
      p3a = "Geographically, " + canFormalName + "is interested in opportunities in " + canPrefStatesList + ". ";
    }
  }

  //determines p3b,c,d.
  if(canRelocation == "no"){
    p3b = canPronouns[0] + " is well settled in " + canPronouns[3] + " home in "
    + canCurrentCity + ", " + canCurrentState + ", and is looking for opportunities that are within "
    + canMaximumCommute + " of " + canPronouns[3] + " current zip code of " + canCurrentZip + ". ";
    p3c = "";
    p3d = "";
  }
  else{
    if(canGeoInt != undefined){
      canGeoIntString = inputToString(canGeoInt);
      p3b = canPronouns[0] + " is specifically interested in opportunities near "
      + canGeoIntString + ". ";
      if(canReasonsForGeoInt != undefined){
        canReasonsForGeoIntString = inputToString(canReasonsForGeoInt);
        canReasonsForGeoIntString = canReasonsForGeoIntString.replace(/\bor\b/g, "and");
        p3c = canFormalName + "is interested in these areas because " + canReasonsForGeoIntString +". ";
      }
      else{
        p3c = "";
      }
    }
    else{
      p3b = "";
      if(canReasonsForGeoInt != undefined){
        canReasonsForGeoIntString = inputToString(canReasonsForGeoInt);
        canReasonsForGeoIntString = canReasonsForGeoIntString.replace(/\bor\b/g, "and");
        p3c = canFormalName + "is interested in these states because " + canReasonsForGeoIntString + ". ";
      }
      else{
        p3c = "";
      }
    }
    if(canSigOther == "N/A" || canSigOther == undefined){
      p3d = "";
    }
    else{
      p3d = canFormalName + "has a " + canSigOther;
      if(canSigOtherName != undefined){
        p3d = p3d + ", " + canSigOtherName;
      }
      if(canSigOtherCareer != undefined){
        p3d = p3d + ", who will be looking for " + canSigOtherCareer + " opportunities";
      }
      p3d = p3d + ". ";
    }
  }

  //determines p3e
  if(canChildren == "no" || canChildren == undefined){
    p3e = "";
  }
  else{
    var numChildren;
    p3e = canFormalName + "does have children";
    if(canChildrenNames != undefined){
      numChildren = canChildrenNames.split(";");
      numChildren = numChildren.length;
      if(numChildren < 2){
        p3e = canFormalName + "does have a child";
      }
      else{
        p3e = canFormalName + "does have children";
      }
      canChildrenNamesString = inputToString(canChildrenNames);
      p3e = p3e + " named " + canChildrenNamesString;
    }
    if(canChildrenActivities != undefined){
      var canChildrenActivitiesString = inputToString(canChildrenActivities);
      canChildrenActivitiesString = canChildrenActivitiesString.replace(/\bor\b/g, "and");
      p3e = p3e + ", involved in " + canChildrenActivitiesString;
    }
    p3e = p3e + ", and will be looking for a safe, family friendly community"
    if(canChildrenSchoolType.length != 0){
      var canChildrenSchoolTypeString = arrayToString(canChildrenSchoolType);
      p3e = p3e + " near a good " + canChildrenSchoolTypeString + " school";
    }
    p3e = p3e + ". ";
  }

  //determines p3f
  if(canLeisureActivities != undefined){
    var canLeisureActivitiesList = stringToList(canLeisureActivities);
    p3f = "In " + canPronouns[3] + " free time, " + canFormalName + "enjoys: \n"
          + canLeisureActivitiesList;
  }
  else {
    p3f = "In " + canPronouns[3] + " free time, " + canFormalName + "enjoys outdoor activities and spending time with family and friends.";
  }

  //determines p4a
  if(canInterviewing == "yes"){
    p4a = canFormalName + "has begun interviewing with employers and currently needs "
          + canNoticeTillInterview + " " + noticeToInterviewUnit + "\' notice prior to a formal interview to adjust "
          + canPronouns[3] + " schedule. ";
          if(canNoticeTillInterview == 1){
            p4a = p4a.replace(/s'/, "'s");
          }
  }
  else{
    p4a = canFormalName + "is ready to begin interviewing with employers and currently needs "
          + canNoticeTillInterview + " " + noticeToInterviewUnit + "\'\ notice prior to a formal interview to adjust "
          + canPronouns[3] + " schedule. ";
          if(canNoticeTillInterview == 1){
            p4a = p4a.replace(/s'/, "'s");
          }
  }

  //determines p4b
  if(canVirtInterview == "yes"){
    if(canVirtInterviewMethod == undefined){
      p4b = canPronouns[0] + " is available for preliminary interviews via Skype, FaceTime, or another web conferencing service";
    }
    else{
      var canVirtInterviewMethodString = inputToString(canVirtInterviewMethod);
      p4b = canPronouns[0] + " is available for preliminary interviews via " + canVirtInterviewMethodString;
    }
  }
  else{
    p4b = canPronouns[0] + " is available for preliminary interviews via phone";
  }
  if(canPrefMethOfContact.length > 0){
    var canPrefMethOfContactString = arrayToString(canPrefMethOfContact);
    p4b = p4b + " and welcomes contact from potential employers via " + canPrefMethOfContactString + ". ";
  }
  else{
    p4b = p4b + ". ";
  }


  //determines p4c
  var p4cPronoun;
  if(canCVUpToDate == "yes"){
    if(canGender == "Male"){
      p4cPronoun = "him";
    }
    else{
      p4cPronoun = "her";
    }
    p4c = canFormalName + "does have " + canPronouns[3] + " formal CV up to date and it is available from "
          + p4cPronoun + " upon request."
  }
  else{
    p4c = canFormalName + "is in the process of updating " + canPronouns[3] + " formal CV.";
  }

  var p1 = p1a + p1b + p1c + p1d;
  var p2 = p2a + p2b1 + p2b2 + p2c + p2d1 + p2d2 + p2d3 + p2e + p2f;
  var p3 = p3a + p3b + p3c + p3d + p3e + p3f;
  var p4 = p4a + p4b + p4c;

  finalID.value = introString + "\n \n" + p1 + "\n \n" + p2 + "\n \n" + p3 + "\n \n" + p4;



})
