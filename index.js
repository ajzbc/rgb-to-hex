function convert() {
    var r = parseInt(document.getElementById("r").value);
    var g = parseInt(document.getElementById("g").value);
    var b = parseInt(document.getElementById("b").value);

    rHex = r.toString(16);
    if (rHex.length % 2) {
    rHex = '0' + rHex;
    }
    gHex = g.toString(16);
    if (gHex.length % 2) {
    gHex = '0' + gHex;
    }
    bHex = b.toString(16);
    if (bHex.length % 2) {
    bHex = '0' + bHex;
    }

    var final = "#" + rHex + gHex + bHex;

    var text = document.createElement("p");
    text.innerHTML = final;

    var box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = final;

    var add =  document.getElementById("new");
    add.innerHTML = ""
    add.appendChild(text);
    add.appendChild(box);

}