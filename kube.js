

let colors = ['#FF0', '#FFF', '#08F', '#0E0', '#F02', '#FA0']

let moveRegExp = "(([LRFBDUMSExyzlrfbdu]w?)(2?)('?))"


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
            "x" : "LLLMMMR", "y" : "UEDDD", "z" : "FSBBB",
            "r" : "RMMM", "l" : "LM", "f" : "FS", "b" : "BSSS", "u" : "UE", "d" : "DEEE",
            "Rw" : "RMMM", "Lw" : "LM", "Fw" : "FS", "Bw" : "BSSS", "Uw" : "UE", "Dw" : "DEEE"
        }
        let func = (s) => {
            let base = exchanges[s[2]] ? exchanges[s[2]] : [s[2]]
            if (s[3]) base = base + base
            else if (s[4]) base = base + base + base
            return base;
        }
        let regex = new RegExp(moveRegExp, "g")
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

let reg = new RegExp(moveRegExp)

/**
 * kube - a kube to rotate
 * side - side definition as a string (R, D, F etc. but not R2 or R')
 */
function rotate(kube, side) {
    with (kube) {
        if (side == "R") {
            R = rotate90(R)
            let buf = [U[0], U[1], F[2], U[3], U[4], F[5], U[6], U[7], F[8]]
            F = [F[0], F[1], D[2], F[3], F[4], D[5], F[6], F[7], D[8]]
            D = [D[0], D[1], B[6], D[3], D[4], B[3], D[6], D[7], B[0]]
            B = [U[8], B[1], B[2], U[5], B[4], B[5], U[2], B[7], B[8]]
            U = buf
        }
        else if (side == "L") {
            L = rotate90(L)
            let buf = [B[8], U[1], U[2], B[5], U[4], U[5], B[2], U[7], U[8]]
            B = [B[0], B[1], D[6], B[3], B[4], D[3], B[6], B[7], D[0]]
            D = [F[0], D[1], D[2], F[3], D[4], D[5], F[6], D[7], D[8]]
            F = [U[0], F[1], F[2], U[3], F[4], F[5], U[6], F[7], F[8]]
            U = buf
        }
        else if (side == "F") {
            F = rotate90(F)
            let buf = [U[0], U[1], U[2], U[3], U[4], U[5], L[8], L[5], L[2]]
            L = [L[0], L[1], D[0], L[3], L[4], D[1], L[6], L[7], D[2]]
            D = [R[6], R[3], R[0], D[3], D[4], D[5], D[6], D[7], D[8]]
            R = [U[6], R[1], R[2], U[7], R[4], R[5], U[8], R[7], R[8]]
            U = buf
        }
        else if (side == "U") {
            U = rotate90(U)
            let buf = [R[0], R[1], R[2], F[3], F[4], F[5], F[6], F[7], F[8]]
            R = [B[0], B[1], B[2], R[3], R[4], R[5], R[6], R[7], R[8]]
            B = [L[0], L[1], L[2], B[3], B[4], B[5], B[6], B[7], B[8]]
            L = [F[0], F[1], F[2], L[3], L[4], L[5], L[6], L[7], L[8]]
            F = buf
        }
        else if (side == "D") {
            D = rotate90(D)
            let buf = [F[0], F[1], F[2], F[3], F[4], F[5], L[6], L[7], L[8]]
            L = [L[0], L[1], L[2], L[3], L[4], L[5], B[6], B[7], B[8]]
            B = [B[0], B[1], B[2], B[3], B[4], B[5], R[6], R[7], R[8]]
            R = [R[0], R[1], R[2], R[3], R[4], R[5], F[6], F[7], F[8]]
            F = buf
        }
        else if (side == "B") {
            B = rotate90(B)
            let buf = [R[2], R[5], R[8], U[3], U[4], U[5], U[6], U[7], U[8]]
            R = [R[0], R[1], D[8], R[3], R[4], D[7], R[6], R[7], D[6]]
            D = [D[0], D[1], D[2], D[3], D[4], D[5], L[0], L[3], L[6]]
            L = [U[2], L[1], L[2], U[1], L[4], L[5], U[0], L[7], L[8]]
            U = buf
        }
        else if (side == "M") {
            let buf = [U[0], B[7], U[2], U[3], B[4], U[5], U[6], B[1], U[8]]
            B = [B[0], D[7], B[2], B[3], D[4], B[5], B[6], D[1], B[8]]
            D = [D[0], F[1], D[2], D[3], F[4], D[5], D[6], F[7], D[8]]
            F = [F[0], U[1], F[2], F[3], U[4], F[5], F[6], U[7], F[8]]
            U = buf
        }
        else if (side == "S") {
            let buf = [U[0], U[1], U[2], L[7], L[4], L[1], U[6], U[7], U[8]]
            L = [L[0], D[3], L[2], L[3], D[4], L[5], L[6], D[5], L[8]]
            D = [D[0], D[1], D[2], R[7], R[4], R[1], D[6], D[7], D[8]]
            R = [R[0], U[3], R[2], R[3], U[4], R[5], R[6], U[5], R[8]]
            U = buf
        }
        else if (side == "E") {
            let buf = [F[0], F[1], F[2], R[3], R[4], R[5], F[6], F[7], F[8]]
            R = [R[0], R[1], R[2], B[3], B[4], B[5], R[6], R[7], R[8]]
            B = [B[0], B[1], B[2], L[3], L[4], L[5], B[6], B[7], B[8]]
            L = [L[0], L[1], L[2], F[3], F[4], F[5], L[6], L[7], L[8]]
            F = buf
        }
        else {
            throw new Error("unknown move: " + side)
        }
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

