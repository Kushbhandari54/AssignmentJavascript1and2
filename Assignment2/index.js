function formValidation() {
    var name = document.registration.name;
    var email = document.registration.email;
    var mobile = document.registration.mobile;

    if (validName(name)) {
        if (validEmail(email)) {
            if (validPhone(mobile)) {
                storeData();
                document.getElementById("myForm").reset();
            }
        }
    }
    return false;
}
function validName(name) {
    var letters = /^[A-Za-z]|""+$/;

    if(name.value.length==0){
        alert("You have not entered the name");
        return false;
    }
    if (name.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        return false;
    }
}

function validEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(email.value.length==0){
        alert("Email Address is required");
        return false;
    }
    if (email.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have not entered a valid email address!");

        return false;
    }
}

function validPhone(mobile) {

    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if ((mobile.value.match(phoneno)) || mobile.value.length==0) {
        return true;
    }
    else {
        alert("You have not enter or entered invalid phone number ");
        return false;
    }

}

function storeData() {
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Phone = document.getElementById("mobile").value;
    let obj = { name: Name, email: Email, phone: Phone };

    if (localStorage.info) { 
        let storedData = JSON.parse(localStorage.getItem("info")); 
        storedData.push(obj);
        localStorage.setItem('info', JSON.stringify(storedData));
    } else localStorage.setItem('info', JSON.stringify([obj])); 

    updateTable();
}

function updateTable() {
    if (localStorage.info) { 
        let info = JSON.parse(localStorage.getItem("info")); 
        let table = document.getElementById("tableData");
        table.innerHTML = "";
        document.getElementById("tableCaption").innerText = info.length + " entries found."

        for (let i = 0; i < info.length; i++) {
            let tableRow = document.createElement("tr");
            let name = info[i].name;
            let email = info[i].email;
            let phone = info[i].phone;
            tableRow.innerHTML = '<td>' + (i + 1) + '</td>' + '<td>' + name + '</td>' + '<td>' + email + '</td>' + '<td>' + phone + '</td>';
            table.appendChild(tableRow);
        }
    }
}
updateTable();