





function colors() {
    var r = document.getElementById("r").value;
    var g = document.getElementById('g').value;
    var b = document.getElementById('b').value;
    let box = document.querySelector('.main')
    box.style.backgroundColor = `rgb(${+r},${+g},${+b})`;
    document.querySelector('.main p').innerHTML = `rgb(${+r},${+g},${+b})`;

    let rb = document.querySelector('.columnR')
    let gb = document.querySelector('.columnG')
    let bb = document.querySelector('.columnB')
    rb.style.backgroundColor = `rgb(${r},0,0)`;
    gb.style.backgroundColor = `rgb(0,${g},0)`;
    bb.style.backgroundColor = `rgb(0,0,${b})`;
    document.querySelector('.columnR p').innerHTML = `${+r}`;
    document.querySelector('.columnG p').innerHTML = `${+g}`;
    document.querySelector('.columnB p').innerHTML = `${+b}`;
}