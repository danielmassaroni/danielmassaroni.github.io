let menu = 0;
function menuBtn(){
    let divBtns = document.getElementById("divBtns");
    let header = document.getElementsByTagName("header")[0];
    if (menu == 0){
        header.style.height = "100vh";
        divBtns.style.display = "flex";
        menu = 1;
    } else {
        header.style.height = "auto";
        divBtns.style.display = "none";
        menu = 0;
    }
}