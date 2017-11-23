window.onload = function() {
    var text = document.getElementById("text");
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    text.innerHTML = xhr.responseText;
                } else {
                    alert("error" + xhr.status);
                }
            }
        };
        xhr.open("GET", "demo.php", true);
        xhr.send();
    });
};