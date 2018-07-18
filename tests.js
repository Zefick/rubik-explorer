
function runTests() {
    try {
        let t = performance.now()
        testCucles()
        console.log(performance.now() - t)
    } catch (err) {
        console.log(err)
    }
}

function assertKube(testName, expected, actual) {
    let str1 = stringify(expected)
    let str2 = stringify(actual)
    console.log(testName + ": " + (str1 == str2 ? "passed" : "failed"))
}

function stringify(kube) {
    return "" + kube.U.concat(kube.L, kube.F, kube.R, kube.B, kube.D)
}

function testCucles() {
    let cucles = [
        ["F", 4],
        ["U R U R'", 5],
        ["R U R' U'", 6],
        ["R U'", 63],
        ["R U", 105],
        ["R U R' U' R' F R2 U' R' U' R U R' F'", 2],       // T-perm
        ["R' U2 R' D' R U' R' D R U R U' R' U' R U'", 2],  // R-perm
        ["y2 R2 Uw' R U' R U R' Uw R2 y R U' R' y", 3],     // G-perm
        ["U R L D F B x U' R' L' D' F' B' y u r l d f b z S M E S' M' E' x' U2 R2 L2 D2 F2 B2", 168]
    ]
    for (i in cucles) {
        let cucle = cucles[i]
        let kube = new Kube()
        for (j=0; j<cucle[1]; j++) {
            kube.rotate(cucle[0])
        }
        assertKube(cucle[0] + " cycle", new Kube(), kube)
    }
}

(function findCucle(formula) {
    let kube = new Kube()
    let identity = stringify(kube)
    for (j=1; j<1000000; j++) {
        kube.rotate(formula)
        if (stringify(kube) == identity) break;
    }
    console.log(j)
}) ("U2 L2")
