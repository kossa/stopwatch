var min = 0
var sec = 0
var mil = 0
var chrono = null
var $chrono = document.querySelector('#chrono')


function showChrono() {
    var _min = ('0' + min).slice(-2)
    var _sec = ('0' + sec).slice(-2)
    var _mil = ('0' + mil).slice(-2)
    $chrono.innerHTML = _min + ':' + _sec + ':' + _mil
}

function start() {
    if (chrono) return
    chrono = setInterval(() => {
        mil++

        if (mil == 10) {
            mil = 0
            sec++
        }
        
        if (sec == 60) {
            sec = 0
            min++
        }
        
        showChrono()

    }, 100)
}

function stop() {
    clearInterval(chrono)
    chrono = null
}

function reset() {
    stop()
    min = sec = mil = 0
    chrono = null
    showChrono()
}