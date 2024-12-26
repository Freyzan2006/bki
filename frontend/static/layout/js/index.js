const adminGUIform = document.getElementById("Admin_GUI_form");
const login = adminGUIform.querySelector("#Admin_GUI_form_Name");
const password = adminGUIform.querySelector("#Admin_GUI_form_password");



const isValidateForm = (e) => {
    e.preventDefault();
    if ( login.value === "admin" && password.value === "dro32yo12") 
        window.location.href = "/admin";
    
}

adminGUIform.addEventListener("submit", isValidateForm);

