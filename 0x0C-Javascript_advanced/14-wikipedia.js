function createElement(data) {
    let para = document.createElement("p");
    para.innerText = data;
    document.body.appendChild(para);
}

function queryWikipedia(callback) {
    let content = new XMLHttpRequest();

    content.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*")
    
}