function main3() {
    var hoten = document.getElementById("hovatenb3")
    var tongThuNhapNam = document.getElementById("tongthunhap").value
    var soNguoiPhuThuoc = document.getElementById("songuoiphuthuoc").value
    var thuNhapChiuThue = (Number(tongThuNhapNam) - 4000000) - (Number(soNguoiPhuThuoc) * 1600000)

    if(thuNhapChiuThue > 0 && thuNhapChiuThue <= 60 ) { thuNhapChiuThue * 0,05 }
    else if(thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6 ) { thuNhapChiuThue * 0.1 }
    else if(thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6 ) { thuNhapChiuThue * 0.15}
    else if(thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6 ) { thuNhapChiuThue * 0.2}
    else if(thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6 ) {thuNhapChiuThue * 0.25}
    else if(thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6 ) {thuNhapChiuThue * 0.3}
    else if(thuNhapChiuThue > 960e+6 ) {thuNhapChiuThue * 0.35}
    else {return 1}
    document.getElementById("btnResult3").onclick = document.getElementById("txtResult3").innerHTML= ("Họ Tên: " + hoten + ";Tiền thuế thu nhập cá nhân: " + thuNhapChiuThue + "VND")

}