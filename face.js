
let algs = [
    {
        name: "Sune",
        type: "oll",
        data: "100001010111001100001",
        formulas: [
            "R U R' U R U2 R'",
            "R U' L' U R' U' L",
            "U L' U2 L U L' U L"
        ]
    },
    {
        name: "Anti Sune",
        type: "oll",
        data: "001101000111000110100",
        formulas: [
            "L' U' L U' L' U2 L",
            "y' R U2 R' U' R U' R'",
            "L' U R U' L U R'"
        ]
    },
    {
        name: "H",
        type: "oll",
        data: "101001000111000100101",
        formulas: [
            "F (R U R' U') (R U R' U') (R U R' U') F'",
            "R U2 R' U' R U R' U' R U' R'",
            "L' U2 L U L' U' L U L' U L",
            "y R U R' U R U' R' U R U2 R'",
            "y L' U' L U' L' U L U' L' U2 L"
        ]
    },
    {
        name: "T",
        type: "oll",
        data: "010100100111010010010",
        formulas: [
            "F R U R' U' F'"
        ]
    },
    {
        name: "C",
        type: "oll",
        data: "010100010111001010010",
        formulas: [
            "R U R2 U' R' F R U R U' F'",
            "(R U R' U') x' U' z' U' R U M'",
            "U2 F R U R' U' R' F' L F R F' L'"
        ]
    },
    {
        name: "Stealth",
        type: "oll",
        data: "000011100110101010010",
        formulas: [
            "r (U R' U') r' (R U R U') R'",
            "F (R U R' U') F2 (L' U' L U) F"
        ]
    },
    {
        name: "Kite",
        type: "oll",
        data: "001101000110100010110",
        formulas: [
            "(R U R' U') R' F (R2 U R' U') F'"
        ]
    },
    {
        name: "Snow Flake",
        type: "oll",
        data: "010010101010101010010",
        formulas: [
            "S (R U R' U') R' (U' R' U R) S'",
            "r' R U (R U R' U') M2 U R U' r'",
            "l L' U' (L' U' L U) M2 U' L' U l"
        ]
    },
    {
        name: "L",
        type: "oll",
        data: "011010000111000001110",
        formulas: [
            "x' L' U L F L' U' L y U L' U'",
            "y2 F' U' L' U2 L U L' U' L F"
        ]
    },
    {
        name: "L",
        type: "oll",
        data: "010100100111000001110",
        formulas: [
            "r U r' (R U R' U') r U' r'",
            "Y2 l U' l' (L U L' U') l U' l'"
        ]
    },
    {
        name: "W",
        type: "oll",
        data: "001011001011010010010",
        formulas: [
            "L' U' L U' L' U L U (L F' L F)",
            "y2 R' U' R U' R' U R U l U' R' U"
        ]
    },
    {
        name: "W",
        type: "oll",
        data: "100001100110101001010",
        formulas: [
            "R U R' U R U' R' U' (R' F R F')",
            "y2 L U L' U L U' L' U' r' U L U'"
        ]
    },
    {
        name: "Fish Salad",
        type: "oll",
        data: "010010011011000110100",
        formulas: [
            "R U' R2 F R F' R U2 R'"
        ]
    },
    {
        name: "Breakneck",
        type: "oll",
        data: "100001011011000001110",
        formulas: [
            "F' (L' U' L U) (L' U' L U) F"
        ]
    },
    {
        name: "Breakneck",
        type: "oll",
        data: "001101000110110000011",
        formulas: [
            "F (R U R' U') (R U R' U') F'"
        ]
    },
    {
        name: "S",
        type: "oll",
        data: "100001010110101000011",
        formulas: [
            "r U R' U R U' r'",
            "r U r' (U R U' R') r U' r"
        ]
    },
    {
        name: "Y",
        type: "oll",
        data: "010010100110100100101",
        formulas: [
            "R' U' R U' R' U2 F (R U R' U') F'"
        ]
    },
    {
        name: "Y",
        type: "oll",
        data: "010010101011010101000",
        formulas: [
            "R U (R' U R U') (R' U R U') y R U' R' F'",
            "y2 F U (R U2 R' U') (R U2 R' U') F'"
        ]
    },
    {
        name: "l",
        type: "oll",
        data: "111000000111010001010",
        formulas: [
            "F R U R' U y' R' U' R U' R'",
            "F (R U R' U') F' L' U' L U' L' U2 L"
        ]
    },
    {
        name: "l",
        type: "oll",
        data: "110000010111000001110",
        formulas: [
            "F (U R U' R') (U R U' R') F'",
            "y2 f (R U R' U') (R U R' U') f'"
        ]
    },
    {
        name: "l",
        type: "oll",
        data: "010100010111010001010",
        formulas: [
            "r U r' (U R U' R') (U R U' R') r U' r'"
        ]
    },
    {
        name: "l",
        type: "oll",
        data: "111000000111000000111",
        formulas: [
            "r U2 R' U' R2 r' U R' U' r U' r'",
            "y R U2 R2 U' R U' R' U2 F R F'"
        ]
    },
    {
        name: "Dot",
        type: "oll",
        data: "010100011010110001010",
        formulas: [
            "(r' U' R U' R' U2 r) U (r U2 R' U' R U' r')"
        ]
    },
    {
        name: "H",
        type: "oll",
        data: "010010100111001010010",
        formulas: [
            "(R U R' U') M' U R U' r'"
        ]
    },
    {
        name: "Diagonal",
        type: "oll",
        data: "010010011010100010110",
        formulas: [
            "(r U R' U R U2 r') U2 (r U2 R' U' R U' r')"
        ]
    }
]

class Face {

    constructor(alg) {
        this.alg = alg;
    }

    renderOn(element) {
        let n = 0;
        let html = "<div style='padding: 10px 10px; margin: 10px 10px; display: block; border: 1px solid #CCC; border-radius: 10px;'>"
            + "<div style='font: bold 16pt Arial; padding: 0 10px;'>" + this.alg.name + "</div>"
            + "<div style='width:120px; height: 120px; position: relative; display: table-cell;'>"
        for (i=0; i<5; ++i) {
            for (j=0; j<5; ++j) {
                if ((i==0 || i==4) && (j==0 || j==4)) continue;
                let style = "height:" + ((i==0 || i==4) ? "5" : "25") + "%; "
                style += "width:" + ((j==0 || j==4) ? "5" : "25") + "%; "
                style += "top: " + ((i==0) ? 3 : (10 + (i-1)*27)) + "%; left: " + ((j==0) ? 3 : (10 + (j-1)*27)) + "%;"
                style += "border-radius: 5px; border: 0.5px solid gray;"
                style += "background-color: " + ((this.alg.data.charAt(n) == 1) ? colors[0] : "#DDD") + ";"
                style += "position: absolute;"
                html += "<div style='" + style + "'></div>"
                n++
            }
        }
        html += "</div>"
            + "<div style='padding: 10px 20px; position: relative; display: table-cell; font: 14pt Consolas'>"
        this.alg.formulas.forEach(f => {
            html += "<div>" + f + "</div>"
        })
        html += "</div></div>"
        element.innerHTML += html
    }
}
