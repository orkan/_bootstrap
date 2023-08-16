window.onload = () => {
  const form = document.forms[0];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity()) {
      alert("Validation: OK")
    } else {
      alert("Validation: Failed")
    }
    
    form.classList.add("was-validated");
  });
};

// WARNING
// This event is not fired on page load thus [el.validationMessage] is initially empty
// causing validate to pass! 
// Solution: make sure the input has "required" and is empty on page load/refresh.
function handleChange(e) {
  const 
    el = e.target, 
    val = el.value, 
    invalid = el.parentNode.querySelector('.invalid-feedback');
  
  el.setCustomValidity("orkan" !== val ? `Type "orkan" instead of "${val}"` : "");
  invalid.innerText = "Feedback: " + el.validationMessage;
}
