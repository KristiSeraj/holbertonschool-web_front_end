function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.setProperty("font-size", size);
        document.body.style.setProperty("font-weight", weight);
        document.body.style.setProperty("text-transform", transform);
        document.body.style.setProperty("background-color", background);
        document.body.style.setProperty("color", color);
    }
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "normal", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let para = document.createElement("p");
    para.innerText = "Welcome Holberton!"
    document.body.appendChild(para);

    let btn1 = document.createElement("button");
    btn1.innerText = "Spooky";
    document.body.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.innerText = "Dark mode";
    document.body.appendChild(btn2);

    let btn3 = document.createElement("button");
    btn3.innerText = "Scream mode";
    document.body.appendChild(btn3);

    btn1.onclick = function() {
        spooky();
    }

    btn2.onclick = function() {
        darkMode();
    }

    btn3.onclick = function() {
        screamMode();
    }
}


main();