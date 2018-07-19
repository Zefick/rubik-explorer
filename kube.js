

let colors = ['#FF0', '#FFF', '#08F', '#0E0', '#F02', '#FA0']

class Kube {
    constructor() {
        this.U = Array(9).fill(0)
        this.D = Array(9).fill(1)
        this.L = Array(9).fill(2)
        this.R = Array(9).fill(3)
        this.F = Array(9).fill(4)
        this.B = Array(9).fill(5)
    }

    rotate(formula) {
        let exchanges = {
            x: "LLLMMMR", y: "UEDDD", z: "FSBBB",
            r: "RMMM", l: "LM", f: "FS", b: "BSSS", u: "UE", d: "DEEE",
            Rw: "RMMM", Lw: "LM", Fw: "FS", Bw: "BSSS", Uw: "UE", Dw: "DEEE"
        }
        let func = (s) => {
            let base = exchanges[s[2]] ? exchanges[s[2]] : s[2]
            if (s[3]) base = base + base
            else if (s[4]) base = base + base + base
            return base;
        }
        let regex = /(([LRFBDUMSExyzlrfbdu]w?)(2?)('?))/g
        let moves = []
        while (true) {
            let match = regex.exec(formula)
            if (!match) break
            moves += func(match)
        }
        moves.match(/[^]/g).forEach(s => rotate(this, s))
    }

    highlight(colors) {
        let sides = [this.U, this.F, this.R, this.L, this.D, this.B]
        for (let i in sides) {
            for (let j in sides[i]) {
                if (!(sides[i][j] in colors)) {
                    sides[i][j] = undefined
                }
            }
        }
    }

}

let conjoint = {
    U : ["R", "F", "L", "B", "D"],
    D : ["B", "L", "F", "R", "U"],
    L : ["D", "B", "U", "F", "R"],
    R : ["F", "U", "B", "D", "L"],
    F : ["U", "R", "D", "L", "B"],
    B : ["L", "D", "R", "U", "F"],
}

/**
 * kube - a kube to rotate
 * side - side definition as a string (R, D, F etc. but not R2 or R')
 */
function rotate(kube, side) {
    if ("UDLRFB".search(side) != -1) {
        kube[side] = rotate90(kube[side])
        let sides = conjoint[side]
        let [a, b, c, d] = conjoint[side].map(a => kube[a])
        kube[sides[3]] = [c[6], d[1], d[2], c[7], d[4], d[5], c[8], d[7], d[8]]
        kube[sides[2]] = [c[0], c[1], c[2], c[3], c[4], c[5], b[2], b[1], b[0]]
        kube[sides[1]] = [a[2], a[5], a[8], b[3], b[4], b[5], b[6], b[7], b[8]]
        kube[sides[0]] = [a[0], a[1], d[6], a[3], a[4], d[3], a[6], a[7], d[0]]
    }
    else if ("SME".search(side) != -1) {
        let sides = conjoint[{S:"F",M:"L",E:"U"}[side]]
        let [a, b, c, d] =  sides.map(a => kube[a])
        kube[sides[3]] = [d[0], c[3], d[2], d[3], c[4], d[5], d[6], c[5], d[8]]
        kube[sides[2]] = [c[0], c[1], c[2], b[5], b[4], b[3], c[6], c[7], c[8]]
        kube[sides[1]] = [b[0], b[1], b[2], a[1], a[4], a[7], b[6], b[7], b[8]]
        kube[sides[0]] = [a[0], d[7], a[2], a[3], d[4], a[5], a[6], d[1], a[8]]
    }
    else {
        throw new Error("unknown move: " + side)
    }
}


function rotate90(side) {
    return [6, 3, 0, 7, 4, 1, 8, 5, 2].map(i => side[i])
}

function rotate180(side) {
    return side.slice().reverse();
}

function rotate270(side) {
    return rotate90(side).reverse()
}

