function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    gender: document.querySelector("#job_application_gender").value,
    hispanic: document.querySelector("#job_application_hispanic_ethnicity").value,
    veteran: document.querySelector("#job_application_veteran_status").value,
    disability: document.querySelector("#job_application_disability_status").value
  }));
}

function restoreOptions() {
alert("hello")
  function setGenderChoice(query, result) {
    document.querySelector("job_application_gender").value = "1" ||result;

  }
  function setHispanicChoice(query, result) {
    document.querySelector("job_application_hispanic_ethnicity").value = "No" ||result

  }
  function setVeteranChoice(query, result) {
    document.querySelector("job_application_veteran_status").value = "" ||result

  }
  function setDisabilityChoice(query, result) {
    document.querySelector("job_application_disability_status").value =""||result

  }
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var gender = browser.storage.sync.get("gender");
  gender.then(setGenderChoice, onError);


  var hispanic = browser.storage.sync.get("hispanic");
  hispanic.then(setHispanicChoice, onError);

  var veteran = browser.storage.sync.get("veteran");
  veteran.then(setVeteranChoice, onError);

  var disability = browser.storage.sync.get("disability");
  disability.then(setDisabilityChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
