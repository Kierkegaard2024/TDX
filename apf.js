document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    if (currentDate.getMonth() === 3 && currentDate.getDate() === 1) {
        var ul = document.getElementById("collapseMe");
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.textContent = "Don't Click Me";
        link.addEventListener("click", function() {
            document.body.style.transform = "rotate(4deg)";
            setTimeout(function() {
                alert("Happy April Fool's Day!");
            }, 1000);
        });
        li.appendChild(link);
        ul.appendChild(li);
    }
});
