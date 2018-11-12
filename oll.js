let ollAlgs = [
    {
        name: "Eyes",
        data: "000011100111000100101",
        formulas: [
            "R2 D (R' U2 R) D' (R' U2 R')",
            "(R U R' U R U2 R') U (R U2 R' U' R U' R')"
        ]
    }, {
        name: "Years",
        data: "100001100111000110100",
        formulas: [
            "L F R' F' L' F R F'",
            "(r U R' U') (r' F R F')"
        ]
    }, {
        name: "Sune",
        data: "100001010111001100001",
        formulas: [
            "R U R' U R U2 R'",
            "R U' L' U R' U' L",
            "U L' U2 L U L' U L"
        ]
    }, {
        name: "Anti Sune",
        data: "001101000111000110100",
        formulas: [
            "L' U' L U' L' U2 L",
            "y' R U2 R' U' R U' R'",
            "L' U R U' L U R'"
        ]
    }, {
        name: "H",
        data: "101001000111000100101",
        formulas: [
            "F (R U R' U') (R U R' U') (R U R' U') F'",
            "R U2 R' U' R U R' U' R U' R'",
            "L' U2 L U L' U' L U L' U L",
            "y R U R' U R U' R' U R U2 R'",
            "y L' U' L U' L' U L U' L' U2 L"
        ]
    }, {
        name: "H",
        data: "001101000111010100001",
        formulas: [
            "R U2 R2 U' R2 U' R2 U2 R",
            "(R U2 R' U' R U' R') U' (R U2 R' U' R U' R')",
            "(L' U2 L U L' U L) U (L' U2 L U L' U L)"
        ]
    }, {
        name: "T",
        data: "010100100111010010010",
        formulas: [
            "F R U R' U' F'"
        ]
    }, {
        name: "T",
        data: "110000100111000010110",
        formulas: [
            "(R U R' U') (R' F R F')"
        ]
    }, {
        name: "C",
        data: "010100010111001010010",
        formulas: [
            "R U R2 U' R' F R U R U' F'",
            "(R U R' U') x' U' z' U' R U M'",
            "U2 F R U R' U' R' F' L F R F' L'"
        ]
    }, {
        name: "Stealth",
        data: "000011100110101010010",
        formulas: [
            "r (U R' U') r' (R U R U') R'",
            "F (R U R' U') F2 (L' U' L U) F"
        ]
    }, {
        name: "Kite",
        data: "001101000110100010110",
        formulas: [
            "(R U R' U') R' F (R2 U R' U') F'"
        ]
    }, {
        name: "Snow Flake",
        data: "010010101010101010010",
        formulas: [
            "S (R U R' U') R' (U' R' U R) S'",
            "r' R U (R U R' U') M2 U R U' r'",
            "l L' U' (L' U' L U) M2 U' L' U l"
        ]
    }, {
        name: "L",
        data: "011010000111000001110",
        formulas: [
            "x' L' U L F L' U' L y U L' U'",
            "y2 F' U' L' U2 L U L' U' L F"
        ]
    }, {
        name: "L",
        data: "010100100111000001110",
        formulas: [
            "r U r' (R U R' U') r U' r'",
            "Y2 l U' l' (L U L' U') l U' l'"
        ]
    }, {
        name: "W",
        data: "001011001011010010010",
        formulas: [
            "L' U' L U' L' U L U (L F' L F)",
            "y2 R' U' R U' R' U R U l U' R' U"
        ]
    }, {
        name: "W",
        data: "100001100110101001010",
        formulas: [
            "R U R' U R U' R' U' (R' F R F')",
            "y2 L U L' U L U' L' U' r' U L U'"
        ]
    }, {
        name: "Fish Salad",
        data: "010010011011000110100",
        formulas: [
            "R U' R2 F R F' R U2 R'"
        ]
    }, {
        name: "Breakneck",
        data: "101001000110110001010",
        formulas: [
            "y F' (L' U' L U) (L' U' L U) F"
        ]
    }, {
        name: "Breakneck",
        data: "001101000110110000011",
        formulas: [
            "F (R U R' U') (R U R' U') F'"
        ]
    }, {
        name: "Breakneck",
        data: "100001010110100001110",
        formulas: [
            "l' U l2 U' l'2 U' l2 U l'"
        ]
    }, {
        name: "Breakneck",
        data: "000101010110100000111",
        formulas: [
            "y': l U' l'2 U l2 U L'2 U' l"
        ]
    }, {
        name: "Breakneck",
        data: "000101010110110001010",
        formulas: [
            "l' U' L U' L' U L U' L' U2 L",
            "y l' U2 L U L' U' L U L' U L"
        ]
    }, {
        name: "Breakneck",
        data: "101001000110100000111",
        formulas: [
            "y' l U L' U L U' L' U L U2 l'", 
            "y2 l U2 L' U' L U L' U' L U' l'"
        ]
    }, {
        name: "S",
        data: "100001010110101000011",
        formulas: [
            "r U R' U R U' r'",
            "r U r' (U R U' R') r U' r"
        ]
    }, {
        name: "Y",
        data: "010010100110100100101",
        formulas: [
            "R' U' R U' R' U2 F (R U R' U') F'"
        ]
    }, {
        name: "Y",
        data: "010010101011010101000",
        formulas: [
            "R U (R' U R U') (R' U R U') y R U' R' F'",
            "y2 F U (R U2 R' U') (R U2 R' U') F'"
        ]
    }, {
        name: "l",
        data: "111000000111010001010",
        formulas: [
            "F R U R' U y' R' U' R U' R'",
            "F (R U R' U') F' L' U' L U' L' U2 L"
        ]
    }, {
        name: "l",
        data: "110000010111000001110",
        formulas: [
            "F (U R U' R') (U R U' R') F'",
            "y2 f (R U R' U') (R U R' U') f'"
        ]
    }, {
        name: "l",
        data: "010100010111010001010",
        formulas: [
            "r U r' (U R U' R') (U R U' R') r U' r'"
        ]
    }, {
        name: "l",
        data: "111000000111000000111",
        formulas: [
            "r U2 R' U' R2 r' U R' U' r U' r'",
            "y R U2 R2 U' R U' R' U2 F R F'"
        ]
    }, {
        name: "Dot",
        data: "010100011010110001010",
        formulas: [
            "(r' U' R U' R' U2 r) U (r U2 R' U' R U' r')"
        ]
    }, {
        name: "H",
        data: "010010100111001010010",
        formulas: [
            "(R U R' U') M' U R U' r'"
        ]
    }, {
        name: "Diagonal",
        data: "010010011010100010110",
        formulas: [
            "(r U R' U R U2 r') U2 (r U2 R' U' R U' r')"
        ]
    }
]

function setText(idx) {
    let html = ""
    ollAlgs[idx].formulas.forEach(f => {
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
    for (let alg of ollAlgs) {
        let n = 0;
        html += "<div style='padding: 10px 10px; margin: 10px 10px; display: inline-block;'>"
         //   + "<div style='font: bold 16pt Arial; padding: 0 10px;'>" + alg.name + "</div>"
            + "<div style='width:120px; height: 120px; position: relative; display: table-cell;' onmouseover=setText(\"" + idx + "\") onmouseleave=hidePopup()>"
        for (i=0; i<5; ++i) {
            for (j=0; j<5; ++j) {
                if ((i==0 || i==4) && (j==0 || j==4)) continue;
                let style = "height:" + ((i==0 || i==4) ? "5" : "25") + "%; "
                style += "width:" + ((j==0 || j==4) ? "5" : "25") + "%; "
                style += "top: " + ((i==0) ? 3 : (10 + (i-1)*27)) + "%; left: " + ((j==0) ? 3 : (10 + (j-1)*27)) + "%;"
                style += "border-radius: 5px; border: 0.5px solid gray;"
                style += "background-color: " + ((alg.data.charAt(n) == 1) ? colors[0] : "#DDD") + ";"
                style += "position: absolute;"
                html += "<div style='" + style + "'></div>"
                n++
            }
        }
        html += "</div></div>"
        idx++
    }
    element.innerHTML += html
}

