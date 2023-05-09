function main4() {
    var radionhadan = document.getElementById("nhadan")
    var radiodoanhnghiep = document.getElementById("doanhnghiep")
    var kenhcaocap = document.getElementById("kenhcaocap").value
    var soketnoi = document.getElementById("ketnoi").value
    var hoten = document.getElementById("hovatenb4")
    var tiencap = 0
    if (radionhadan.checked) {
        if (kenhcaocap != null) {
            tiencap = Number(kenhcaocap) * 7.5 + 25
        } else {
            tiencap = 25
        }
    } else if (radiodoanhnghiep.checked) {
        if (kenhcaocap != null) {
            if (soketnoi > 10) {
                tiencap = (Number(soketnoi) - 10) * 5 + Number(kenhcaocap) * 50 + 100
            } else {
                tiencap = Number(soketnoi) * 7.5 + Number(kenhcaocap) * 50 + 15
            }
        } else {
            tiencap = 90
        }
    } else {
        alert("Hãy chọn loại khách hàng")
    }
    document.getElementById("btnResult4").onclick = document.getElementById("txtResult4").innerHTML = ("Mã Khách Hàng: " + hoten + ";Tiền cáp: " + tiencap + "$")
}