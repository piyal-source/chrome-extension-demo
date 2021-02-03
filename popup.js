var nameEl = document.getElementById("name");
if(nameEl) {
    nameEl.addEventListener("keyup", function()
        {
            document.getElementById("greet").innerHTML = "";
            document.getElementById("greet").innerHTML = "Hello " + nameEl.value;
        }
    );
}
    