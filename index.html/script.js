
var text = prompt("write your article post ?");

document.write( "<h1>your article is : <br> </h1>" + text.slice(0,20).toLocaleUpperCase());




// Get the theme toggle icon
var icon = document.getElementById("icon");

// Add click event listener
icon.onclick = function () {
    // Toggle dark theme
    document.body.classList.toggle("dark-theme");

    // Change icon based on the theme
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "https://github.com/Hamassaaa/dark-white/blob/main/index.html/image/moon.png"; // Icon for light mode
    } else {
        icon.src = "https://github.com/Hamassaaa/dark-white/blob/main/index.html/image/sun.webp"; // Icon for dark mode
    }
};

