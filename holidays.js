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

    if (currentDate.getMonth() === 1 && currentDate.getDate() === 14) {
        var ul = document.getElementById("collapseMe");
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.textContent = "❤️❤️❤️❤️❤️";
        link.addEventListener("click", function() {
            setTimeout(function() {
                alert("Happy Valentine's Day!");
            }, 100);
        });
        li.appendChild(link);
        ul.appendChild(li);
    }
	
	if (currentDate.getMonth() === 6 && currentDate.getDate() === 1) {
        var ul = document.getElementById("collapseMe");
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.textContent = "🍁🍁🍁🍁🍁️";
        link.addEventListener("click", function() {
            setTimeout(function() {
                alert("Happy Canada Day!");
            }, 100);
        });
        li.appendChild(link);
        ul.appendChild(li);
    }
	
    if (currentDate.getMonth() === 9 && currentDate.getDate() === 31) {
        var ul = document.getElementById("collapseMe");
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.textContent = "🎃🎃🎃🎃🎃";
        link.addEventListener("click", function() {
            setTimeout(function() {
                alert("Happy Halloween!");
            }, 100);
        });
        li.appendChild(link);
        ul.appendChild(li);
    }
	
    if (currentDate.getMonth() === 11 && currentDate.getDate() === 25) {
        var ul = document.getElementById("collapseMe");
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.textContent = "🎄🎄🎄🎄🎄";
        link.addEventListener("click", function() {
            setTimeout(function() {
                alert("Merry Christmas!");
            }, 100);
        });
        li.appendChild(link);
        ul.appendChild(li);
    }
});
