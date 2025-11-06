const PI = 3.1415

function ariecerc(raza) {
    return raza ** 2  *PI
}
function diametruCerc(raza) {
    return 2 * raza *PI
}

// 4) Module Scope

export default {PI, ariecerc, diametruCerc}