function getELE(id) {
    return document.getElementById(id);
}
function main2() {
    var hoten = getELE("hovaten")
    var soKw = getELE("soKw").value
    var tiendien = 0;
    if (soKw > 0 && soKw <= 50) { tiendien = soKw * 500 }
    else if (soKw >50 && soKw <= 100) { tiendien = 50 * 500 + (soKw - 50) * 650 }
    else if (soKw >100 && soKw <= 200) { tiendien = 50 * 500 + 50 * 650 + (soKw - 100) * 850 }
    else if (soKw >200 && soKw <= 350) { tiendien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 150) * 1100 }
    else if (350 < soKw) { tiendien = (50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300) }
    else { alert("Nhập lại số Kw"); return 0 }
    getELE("btnResult2").onclick = getELE("txtResult2").innerHTML= ("Họ Tên: " + hoten + ";Tiền Điện: " + tiendien +"VND")
}




