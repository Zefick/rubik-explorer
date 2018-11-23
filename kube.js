

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
        moves.split("").forEach(s => rotate(this, s))
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

    /**
     * Calculates the "fingerprint" of the kube's last layer orientation.
     * Permutations not counted.
     */
    ollFingerprint() {
        return [this.B[0], this.B[3], this.B[6],
            this.L[8], this.U[6], this.U[3], this.U[0], this.R[8],
            this.L[7], this.U[7], this.U[4], this.U[1], this.R[5],
            this.L[6], this.U[8], this.U[5], this.U[2], this.R[2],
            this.F[0], this.F[1], this.F[2]]
                .map(x => (x == this.U[4]) ? "1" : "0").join("")
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
        let [a, b, c, d] = conjoint[side].map(x => kube[x]);
        [a[2], a[5], a[8], b[0], b[1], b[2], c[6], c[7], c[8], d[0], d[3], d[6]]
                = [d[6], d[3], d[0], a[2], a[5], a[8], b[2], b[1], b[0], c[6], c[7], c[8]]
    }
    else if ("SME".search(side) != -1) {
        let [a, b, c, d] =  conjoint[{S:"F",M:"L",E:"U"}[side]].map(a => kube[a]);
        [a[1], a[4], a[7], b[3], b[4], b[5], c[3], c[4], c[5], d[1], d[4], d[7]]
                = [d[7], d[4], d[1], a[1], a[4], a[7], b[5], b[4], b[3], c[3], c[4], c[5]]
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

