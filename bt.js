function main() {
var diemchuan = getELE("diemchuan").value;
var radiokv0 = getELE("khuvuc0");
var radiokvA = getELE("A");
var radiokvB = getELE("B");
var radiokvC = getELE("C");
var doituong0 = getELE("doituong0");
var doituong1 = getELE("1");
var doituong2 = getELE("2");
var doituong3 = getELE("3");
var diemmon1 = getELE("mon1").value;
var diemmon2 = getELE("mon2").value;
var diemmon3 = getELE("mon3").value;
 var khuvuc = "";
 if(radiokv0.checked) {
    khuvuc = 0
 } else if (radiokvA.checked) {
    khuvuc = 2
 } else if (radiokvB.checked) {
    khuvuc = 1
 } else if (radiokvC.checked) {
    khuvuc = 0.5
 } else {
    alert("Hãy chọn khu vực")
 }
var doituong = "";
if(doituong0.checked) {
   doituong = 0
} else if (doituong1.checked) {
   doituong = 2.5
} else if (doituong2.checked) {
   doituong = 1.5
} else if (doituong3.checked) {
   doituong = 1
} else {
   alert("Hãy chọn đối tượng")
}
var dtb = Number(diemmon1) + Number(diemmon2) + Number(diemmon3);
var total = dtb + Number(khuvuc) + Number(doituong);

if (total >= diemchuan && diemmon1 > 0 && diemmon2 > 0 && diemmon3 > 0) {
    getELE("btnResult").onclick = getELE("txtResult").innerHTML= ("Bạn đã đậu. Tổng điểm: " + total)
} else {
    getELE("btnResult").onclick = getELE("txtResult").innerHTML= ("Bạn đã rớt. Tổng điểm: " + total)
}

}
function getELE(id) {
    return document.getElementById(id);
}
