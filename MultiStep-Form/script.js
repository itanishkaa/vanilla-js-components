let currStep = 0;

const steps = document.querySelectorAll(".form-step");
const stepIndicator = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

function updateForm() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currStep);
  });
  stepIndicator.forEach((indicator, index) => {
    indicator.classList.remove("active", "completed");
    if (index === currStep) {
      indicator.classList.add("active");
    } else if (index < currStep) {
      indicator.classList.add("completed");
    }
  });
  lines.forEach((line, index) => {
    line.classList.toggle("active", index < currStep);
  });
  prevBtn.disabled = currStep === 0;
  if (currStep === steps.length - 1) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    populateSummary();
  } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }
}

function validateCurrentStep() {
  const currInputs = steps[currStep].querySelectorAll("input");
  for (let input of currInputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      return false;
    }
  }
  return true;
}

function changeStep(direction) {
  if (direction === 1 && !validateCurrentStep()) return;
  currStep += direction;
  if (currStep < 0) currStep = 0;
  if (currStep >= steps.length) currStep = steps.length - 1;
  updateForm();
}

function navigateToStep(targetStep) {
  if (targetStep < currStep) {
    currStep = targetStep;
    updateForm();
  } else if (targetStep > currStep) {
    if (validateCurrentStep()) {
      currStep = targetStep;
      updateForm();
    }
  }
}

function populateSummary() {
  document.getElementById("summaryEmail").textContent =
    document.getElementById("email").value || "N/A";
  document.getElementById("summaryName").textContent =
    document.getElementById("fullName").value || "N/A";
  document.getElementById("summaryPhone").textContent =
    document.getElementById("phone").value || "N/A";
}

function handleSubmit(event) {
  event.preventDefault();
  if (!validateCurrentStep()) return;
  const formData = {
    email: document.getElementById("email").value,
    fullName: document.getElementById("fullName").value,
    phone: document.getElementById("phone").value,
    agreedToTerms: document.getElementById("terms").checked,
  };
  alert("Form Submitted Successfully!\n\n" + JSON.stringify(formData, null, 2));
}
