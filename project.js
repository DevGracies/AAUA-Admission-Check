import data from "./data";
function displaySubjects() {
  const course = document.getElementById("course").value;
  const department = data[0].Department[course];

  if (department) {
    let waecSubjects = department.waec.slice(0, 5); // Get first 4 subjects

    if (department.waec.length > 5) {
      const remainingSubjects = department.waec.slice(5).join(" or ");
      waecSubjects[4] += " or " + remainingSubjects;
    }

    let waecInputs = "";
    waecSubjects.forEach((subject, index) => {
      waecInputs += `
                <label for="waec${index + 1}">${subject}</label>
                <input type="text" id="waec${
                  index + 1
                }" placeholder="Enter WAEC result">
            `;
    });

    let jambSubjects = department.jamb.slice(0, 4); // Get first 4 JAMB subjects

    if (department.jamb.length > 4) {
      const remainingJambSubjects = department.jamb.slice(4).join(" or ");
      jambSubjects[3] += " or " + remainingJambSubjects;
    }

    let jambInputs = "";
    jambSubjects.forEach((subject, index) => {
      jambInputs += `
                <label for="jamb${index + 1}">${subject}</label>
                <input type="text" id="jamb${
                  index + 1
                }" placeholder="Enter JAMB result">
            `;
    });

    document.getElementById("waec-inputs").innerHTML = `
            <h2>WAEC Subjects and Results</h2>
            ${waecInputs}
        `;

    document.getElementById("jamb-inputs").innerHTML = `
            <h2>JAMB Subjects and Results</h2>
            ${jambInputs}
        `;
  } else {
    document.getElementById("waec-inputs").innerHTML = "";
    document.getElementById("jamb-inputs").innerHTML = "";
  }
}

function calculateWaec() {
  const gradePoints = { A1: 10, B2: 9, B3: 8, C4: 7, C5: 6, C6: 5 };
  let totalPoints = 0;

  for (let i = 1; i <= 5; i++) {
    const waecResult = document.getElementById("waec" + i).value.toUpperCase();
    totalPoints += gradePoints[waecResult] || 0; // Any invalid result gets 0 points
  }

  return totalPoints;
}

function calculateJamb() {
  let jambScore = 0;

  for (let i = 1; i <= 4; i++) {
    const jambResult = parseInt(document.getElementById("jamb" + i).value);
    jambScore += isNaN(jambResult) ? 0 : jambResult; // Ignore non-numeric inputs
  }

  return jambScore;
}

function calculateAdmission() {
  const course = document.getElementById("course").value;
  const waecScore = calculateWaec();
  const jambScore = calculateJamb();

  let resultMessage = `Your WAEC score: ${waecScore}, JAMB score: ${jambScore}. `;

  if (jambScore < 180) {
    resultMessage +=
      "Your JAMB score is below 180. You do not qualify for admission.";
  } else if (course) {
    const department = data[0].Department[course];

    if (!department) {
      resultMessage += "The selected course is not available.";
    } else {
      if (waecScore >= department.merit || waecScore >= department.catchment) {
        resultMessage += `Congratulations! You qualify for admission to ${course}.`;
      } else {
        resultMessage += `Unfortunately, you do not meet the WAEC requirements for ${course}.`;
      }
    }
  }

  document.getElementById("result").innerText = resultMessage;
}
