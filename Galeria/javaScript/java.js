var fotos = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10']
var alet = []
var pos = 0

function init() {
    pos = 0
    iniciar()
    show()
    loc()
}

function loc() {
    if (pos == 0) {
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = true;
    } else if (pos == 4) {
        document.getElementById("siguiente").disabled = true;
        document.getElementById("anterior").disabled = false;
    } else {
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = false;
    }
}

function anterior() {
    pos--
    loc()
    show()
}

function iniciar() {
    pos = 0
    loc()
    for (var i = 0; i < 5; i++) {
        var al = Math.round(Math.random() * 9)
        while (alet.includes(fotos[al])) {
            var al = Math.round(Math.random() * 9)
        }
        alet[i] = fotos[al]
    }
    show()
}

function show() {
    var url = 'images/' + alet[pos] + '.png'
    document.getElementById('imagen').src = url
}

function siguiente() {
    pos++
    loc()
    show()
}