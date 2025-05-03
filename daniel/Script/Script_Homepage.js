//resume button:
document.getElementById("btn_resume").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "Resume.pdf";
    link.download = "Resume.pdf";
    link.click();
});

//submit from button:
document.getElementById("from-contact").addEventListener("submit", function(event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phoneNum = document.getElementById("phoneNum");
    //const message = document.getElementById("message");

    if (name.value.length < name.minLength || name.value.length > name.maxLength) {
        alert("Name must be between 1 and 15 characters long.");
        event.preventDefault();
    }

    if (email.value.length < email.minLength || email.value.length > email.maxLength) {
        alert("Message must be between 5 and 20 characters long.");
        event.preventDefault();
    }

    if (phoneNum.value.length < phoneNum.minLength || phoneNum.value.length > phoneNum.maxLength) {
        alert("The phone number must be 10 number long.");
        event.preventDefault();
    }
});

//gallert bottons
document.getElementById("gallery").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const buttonId = event.target.id;

        switch (buttonId) {
            case "btn_P1":
                window.location.href = "Projects/project1/preview.html";
                break;
            case "btn_P2":
                window.location.href = "Projects/project2/preview.html";
                break;
            case "btn_P3":
                window.location.href = "Projects/project3/preview.html";
                break;
            case "btn_P4":
                window.location.href = "Projects/project4/preview.html";
                break;
            case "btn_P5":
                window.location.href = "Projects/project5/preview.html";
                break;
            case "btn_P6":
                window.location.href = "Projects/project6/preview.html";
                break;
                
            default:
                projectId = -1;
        }
    }
});