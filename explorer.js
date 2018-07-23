
let stickers;
let kube;

function fillExplorer() {
    let sides = document.querySelectorAll("#kube tr td div")
    for (i in sides) {
        let html = "<table border=1>"
        for (let y=0; y<3; ++y) {
            html += "<tr><td class='sticker'><td class='sticker'><td class='sticker'>"
        }
        sides[i].innerHTML = html + "</table>"
    }

    let letters = ["U", "L", "F", "R", "B", "D"]
    stickers = document.querySelectorAll("td.sticker")
    for (i=0; i<6; i++) {
        stickers[i*9+4].innerHTML = letters[i]
    }

    let moves = [
        ["R", "L", "U", "D", "F", "B"],
        ["R&#39;", "L&#39;", "U&#39;", "D&#39;", "F&#39;", "B&#39;"],
        ["M", "S", "E", "M&#39;", "S&#39;", "E&#39;"],
        ["x", "y", "z", "x&#39;", "y&#39;", "z&#39;"],
    ]
    let movesTable = document.getElementById("moves")
    for (let m1 of moves) {
        let html = "<br>"
        for (let m2 of m1) {
            html += "<input type='button' class='flat move' value=\"" + m2 + "\" onclick='move(\"" + m2 + "\")'>"
        }
        movesTable.innerHTML += html
    }
    reset()
}

function reset() {
    kube = new Kube()
    //kube.highlight([0, 1, 2])
    drawKube()
}

function move(direction) {
    kube.rotate(direction)
    drawKube()
}

function apply() {
    kube.rotate(document.getElementById("formula").value)
    drawKube()
}

function drawKube() {
    drawStickers(kube, stickers)
}

function drawStickers(kube, cells) {
    cls = [].concat(rotate90(kube.U), rotate180(kube.L), kube.F,
            rotate270(kube.R), rotate90(kube.B), rotate180(kube.D))
    for (i=0; i<54; i++) {
        cells[i].style.backgroundColor = (cls[i] != undefined) ? colors[cls[i]] : "#DDD"
    }
}

function reverse() {
    let input = document.getElementById("formula")
    input.value = input.value.split(/\s+/)
            .reverse()
            .map(s => s.replace(/(\w+)'|(\w+)/g, (match, p1, p2) => p1 ? p1 : p2 + "'"))
            .join(" ")
}