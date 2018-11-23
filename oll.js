
let ollFingerprints = [
    ["000011100111000100101", "Eyes"],
    ["100001100111000110100", "Ears"],
    ["100001010111001100001", "Sune"],
    ["001101000111000110100", "Anti Sune"],
    ["101001000111000100101", "H"],
    ["001101000111010100001", "H"],
    ["010100100111010010010", "T"],
    ["110000100111000010110", "T"],
    ["010100010111001010010", "C"],
    ["000011100110101010010", "Stealth"],
    ["001101000110100010110", "Kite"],
    ["010010101010101010010", "Snow Flake"],
    ["011010000111000001110", "L"],
    ["010100100111000001110", "L"],
    ["001011001011010010010", "W"],
    ["100001100110101001010", "W"],
    ["010010011011000110100", "Fish Salad"],
    ["101001000110110001010", "Breakneck"],
    ["001101000110110000011", "Breakneck"],
    ["100001010110100001110", "Breakneck"],
    ["000101010110100000111", "Breakneck"],
    ["000101010110110001010", "Breakneck"],
    ["101001000110100000111", "Breakneck"],
    ["100001010110101000011", "S"],
    ["001101001011000010110", "S"],
    ["010010100110100100101", "Y"],
    ["010010101011010101000", "Y"],
    ["111000000111010001010", "l"],
    ["110000010111000001110", "l"],
    ["010100010111010001010", "l"],
    ["111000000111000000111", "l"],
    ["010100011010110001010", "Dot"],
    ["010010100111001010010", "H"],
    ["010010011010100010110", "Diagonal"],
    ["010010101010100000111", "V"],
    ["010010101010110001010", "V"]
]

let algs = [
    // Eyes
    "R2 D (R' U2 R) D' (R' U2 R')",
    "(R U R' U R U2 R') U (R U2 R' U' R U' R')",
    // Ears
    "L F R' F' L' F R F'",
    "(r U R' U') (r' F R F')",
    "(R U R' U R U2 R') U' (R U2 R' U' R U' R')",
    // Sune
    "R U R' U R U2 R'",
    "R U' L' U R' U' L",
    "U L' U2 L U L' U L",
    "L' U' L U' L' U2 L",
    "y' R U2 R' U' R U' R'",
    "L' U R U' L U R'",
    // H1
    "F (R U R' U') (R U R' U') (R U R' U') F'",
    "R U2 R' U' R U R' U' R U' R'",
    "L' U2 L U L' U' L U L' U L",
    "y R U R' U R U' R' U R U2 R'",
    "y L' U' L U' L' U L U' L' U2 L",
    // H2
    "R U2 R2 U' R2 U' R2 U2 R",
    "(R U2 R' U' R U' R') U' (R U2 R' U' R U' R')",
    "y2 (L' U2 L U L' U L) U (L' U2 L U L' U L)",
    // T
    "F R U R' U' F'",
    "(R U R' U') (R' F R F')",
    // C
    "R U R2 U' R' F R U R U' F'",
    "(R U R' U') x' U' z' U' R U M'",
    "U2 F R U R' U' R' F' L F R F' L'",
    // Stealth
    "r (U R' U') r' (R U R U') R'",
    "F (R U R' U') F2 (L' U' L U) F",
    // Kite
    "(R U R' U') R' F (R2 U R' U') F'",
    // *
    "S (R U R' U') R' (U' R' U R) S'",
    "r' R U (R U R' U') M2 U R U' r'",
    "l L' U' (L' U' L U) M2 U' L' U l",
    // L
    "x' L' U L F L' U' L y U L' U'",
    "y2 F' U' L' U2 L U L' U' L F",
    "r U r' (R U R' U') r U' r'",
    "y2 l U l' (L U L' U') l U' l'",
    // W
    "L' U' L U' L' U L U (L F' L' F)",
    "y2 R' U' R U' R' U R U l U' R' U",
    "R U R' U R U' R' U' (R' F R F')",
    "y2 L U L' U L U' L' U' r' U L U'",
    // Fish Salad
    "R U2 R2 F R F' R U2 R'",
    // Breakneck
    "y F' (L' U' L U) (L' U' L U) F",
    "F (R U R' U') (R U R' U') F'",
    "l' U l2 U' l'2 U' l2 U l'",
    "l' U' L U' L' U L U' L' U2 l",
    "y l' U2 L U L' U' L U L' U l",
    "y' l U L' U L U' L' U L U2 l'", 
    "y2 l U2 L' U' L U L' U' L U' l'",
    // S
    "r U R' U R U2 r'",
    "r U r' (U R U' R') r U' r'",
    "l' U' L U' L' U2 l",
    "y2 r' U' R U' R' U2 r",
    // Y
    "R' U' R U' R' U2 R F (R U R' U') F'",
    "R U (R' U R U') (R' U R U') y R U' R' F'",
    "y2 F U (R U2 R' U') (R U2 R' U') F'",
    // l
    "F R U R' U y' R' U' R U' R'",
    "F (R U R' U') F' L' U' L U' L' U2 L",
    "F (U R U' R') (U R U' R') F'",
    "y2 f (R U R' U') (R U R' U') f'",
    "r U r' (U R U' R') (U R U' R') r U' r'",
    "r U2 R' U' R2 r' U R' U' r U' r'",
    "y R U2 R2 U' R U' R' U2 F R F'",
    // Dot
    "(r' U' R U' R' U2 r) U (r U2 R' U' R U' r')",
    // H
    "(R U R' U') M' U R U' r'",
    // Diagonal
    "(r U R' U R U2 r') U2 (r U2 R' U' R U' r')",
    // V
    "r U R' U R U2 r2 U' R U' R' U2 r",
    "r' U2 R U R' U r2 U2 R' U' R U' r'",
    "R' U2 F R U R' U' F2 U2 F R",
]

// mapping fingerprint -> [algorithms]
let mapping = {}

function setText(fp) {
    let html = ""
    mapping[fp].forEach(f => {
        html += "<div>" + f + "</div>"
    })
    let element = document.getElementById("ollList");
    element.innerHTML = html;
    element.style.display = "block";
}

function hidePopup() {
    document.getElementById("ollList").style.display = "none"
}

function renderOlls(element) {

    document.addEventListener('mousemove', onMouseUpdate, false);
    document.addEventListener('mouseenter', onMouseUpdate, false);

    function onMouseUpdate(e) {
        let popup = document.getElementById("ollList");
        popup.style.top = (e.clientY + 20)+ "px"
        popup.style.left = (e.clientX - popup.offsetWidth/2)+ "px"
    }

    let html = "<div id='ollList' style='padding: 15px 20px; display: none; "
        + "border: 1px solid #888; border-radius: 5px; font: 14pt Consolas;"
        + "position: fixed; z-index:100; background-color: #EEE;'></div>"
    let idx = 0;
    for (let alg of ollFingerprints) {
        mapping[alg[0]] = []
        let n = 0;
        html += "<div style='padding: 10px 10px; margin: 10px 10px; display: inline-block;'>"
         //   + "<div style='font: bold 16pt Arial; padding: 0 10px;'>" + alg.name + "</div>"
            + "<div style='width:120px; height: 120px; position: relative; display: table-cell;' onmouseover=setText(\"" + alg[0] + "\") onmouseleave=hidePopup()>"
        for (i=0; i<5; ++i) {
            for (j=0; j<5; ++j) {
                if ((i==0 || i==4) && (j==0 || j==4)) continue;
                let style = "height:" + ((i==0 || i==4) ? "5" : "25") + "%; "
                style += "width:" + ((j==0 || j==4) ? "5" : "25") + "%; "
                style += "top: " + ((i==0) ? 3 : (10 + (i-1)*27)) + "%; left: " + ((j==0) ? 3 : (10 + (j-1)*27)) + "%;"
                style += "border-radius: 5px; border: 0.5px solid gray;"
                style += "background-color: " + ((alg[0].charAt(n) == 1) ? colors[0] : "#DDD") + ";"
                style += "position: absolute;"
                html += "<div style='" + style + "'></div>"
                n++
            }
        }
        html += "</div></div>"
        idx++
    }
    element.innerHTML += html

    for (alg of algs) {
        formula = reverse(alg)
        let k = new Kube()
        k.rotate(formula)
        let fp = k.ollFingerprint()
        if (!mapping[fp]) {
            console.error("Unknown formula: " + alg)
            console.error(formula)
            console.error(fp)
        } else {
            mapping[fp].push(alg)
        }
    }
}

