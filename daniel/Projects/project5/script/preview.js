
document.getElementById("btn_link").addEventListener("click", function () {
    window.location.href = "Page.html"; 
});

document.getElementById("btn_download").addEventListener("click", function () {
    const fileUrl = "Page.html";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Page.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});