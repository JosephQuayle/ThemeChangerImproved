let button = document.getElementById('toggle');

button.addEventListener('click', themeChange);

function themeChange(){
    let element = document.body;
    element.classList.toggle("dark-mode");
    if (button.innerHTML=== "Dark Theme") {
        button.innerHTML = "Light Theme";
    }else{
        button.innerHTML = "Dark Theme";
    }
}