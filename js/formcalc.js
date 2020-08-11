function calcSum() {
    let baseprice = 1200;
    let osszetevokdb = document.querySelector("input[name='osszetevok']");
    let osszegszam = document.querySelector('span.osszeg');

    let dbszam = parseInt(osszetevokdb.value);

    if
        (dbszam > 10) {
        alert('Legfeljebb 10 db vasarolhato');
        }
    else if (dbszam < 1) {
        alert('Legalabb 1et venni kell');
    }
    else {
// ha nem lehet átalakítani számmá, akkor 
        let osszeg = parseInt(osszetevokdb.value * baseprice);
        osszegszam.innerHTML = osszeg;
    }
}