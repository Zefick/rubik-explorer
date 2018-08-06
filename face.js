
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
            "y R U R' U R U' R' U R U2 R'"
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
        name: "l",
        type: "oll",
        data: "111000000111010001010",
        formulas: [
            "F R U R' U y' R' U' R U' R'",
            "F (R U R' U') F' L' U' L U' L' U2 L"
        ]
    },
    {
        name: "Snow Flake",
        type: "oll",
        data: "010010101010101010010",
        formulas: [
            "S (R U R' U') R' U' R' U R S'",
            "r' R U (R U R' U') r2 R2 U R U' r'"
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
    }
]

class Face {

    constructor(alg) {
        this.alg = alg;
    }

    renderOn(element) {
        let n = 0;
        let html = "<div style='padding: 5px 5px; margin: 10px 10px; display: block; border: 1px solid #CCC; border-radius: 10px;'>"
            + "<div style='font: bold 16pt Arial; padding: 5px 20px;'>" + this.alg.name + "</div>"
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
            + "<div style='padding: 10px 20px; position: relative; display: table-cell; font: 14pt Arial'>"
        this.alg.formulas.forEach(f => {
            html += "<div>" + f + "</div>"
        })
        html += "</div></div>"
        element.innerHTML += html
    }
}
