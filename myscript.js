function getjson() {
    fetch('https://raw.githubusercontent.com/TimmyGozali/FirstProject/main/test.json')
    .then(response => response.json())
    .then(data => console.log(data));
}

function add(a, b) {
    return a+b
}
