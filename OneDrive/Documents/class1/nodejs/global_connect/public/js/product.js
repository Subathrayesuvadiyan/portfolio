$(document).ready(function () {
    $("#addBtn").click(function () {
        location.href = "/product/add"
    })

    // $("#editBtn").click(function () {
    //     var length = $(":checkbox:checked").length;
    //     if (length != 1) {
    //         alert("Please select any one checkbox")
    //         return;
    //     }
    //     location.href = "/product/edit";
    // })
});
