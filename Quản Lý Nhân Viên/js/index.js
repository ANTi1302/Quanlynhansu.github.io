//Javascript Document
$(document).ready(function (e) {
    var i = 1;
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
   
    function kiemTraName() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if ($("#txtName").val() == "") {
            $("#tbName").html("Khong duoc bo trong");
            return false;
        }
        if (!re.test($("#txtName").val())) {
            $("#tbName").html("Ky Tu Dau Viet Hoa");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(kiemTraName);

    function kiemTraNgay() {
        if ($("#txtDe").val() == "") {
            $("#tbDe").html("Khong duoc bo trong");
            return false;
        }
        var day = new Date($("#txtDe").val);
        var today = new Date();
        var ngaHT = today.setDate(today.getDate() + 3);
        if (day < ngaHT) {
            $("#tbDe").html("Ngay giao phai sau ngay hien tai it nhat 3 ngay");
            return false;
        }
        $("#tbDe").html("*");
        return true;
    }
    $("#txtDe").blur(kiemTraNgay);

    function kiemTraMail() {

        var re = /^[a-zA-Z0-9.\_\-]+@([a-zA-Z0-9])+.\w{3}$/;
        if ($("#txtMail").val() == "") {
            $("#tbMail").html("Khong duoc bo trong");
            return false;
        }
        if (!re.test($("#txtMail").val())) {
            $("#tbMail").html("nhap dung dinh dang mail abc@gmail.com");
            return false;
        }
        $("#tbMail").html("*");
        return true;
    }
    $("#txtMail").blur(kiemTraMail);

    function kiemTraAdd() {
        if ($("#txtAdd").val() == "") {
            $("#tbAdd").html("Khong duoc bo trong");
            return false;
        }
        $("#tbAdd").html("*");
        return true;
    }
    $("#txtAdd").blur(kiemTraAdd);

    function kiemTraPhone() {
        var re = /^090-\d{4}-\d{3}$/;
        if ($("#txtPhone").val() == "") {
            $("#tbPhone").html("Khong duoc bo trong");
            return false;
        }
        if (!re.test($("#txtPhone").val())) {
            $("#tbPhone").html("Nhap Theo dung dinh dang 090-0000-000");
            return false;
        }
        $("#tbPhone").html("*");
        return true;
    }
    $("#txtPhone").blur(kiemTraPhone);

    $("#btnSave").click(function () {
        if (kiemTraAdd() == true && kiemTraMail() == true && kiemTraName() == true && kiemTraNgay() == true && kiemTraPhone() == true) {
            row = "<tr>";
            row += "<td>" + (i++) + "</td>";
            row += "<td>" + $("#txtName").val() + "</td>";
            row += "<td>" + $("#txtAd").val() + "</td>";
            row += "<td>" + $("#txtDe").val() + "</td>";
            row += "<td>" + $("#txtMail").val() + "</td>";
            row += "<td>" + $("#txtPhone").val() + "</td>";
            row += "</tr>";
            $("#table").append(row);
            $("#myModal").modal("hide");
            return false;
        }
        return false;
    });
});

