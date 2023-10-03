$("#add_stock").submit(function (event) {
    alert("Tambah Data Berhasil.");
})

$("#update_stock").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function (n, i) {
        data[n['name']] = n['value']
    })
    
    var request = {
        "url": `[LINK APP ENGINE]/api/stocks/${data.docId}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function (response) {
        alert("Data Berhasil Diupdate.");
        location.replace("[LINK APP ENGINE]");
    })

})

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");

    $ondelete.click(function () {
        var docId = $(this).attr("data-docId")

        var request = {
            "url": `[LINK APP ENGINE]/api/stocks/${docId}`,
            "method": "DELETE"
        }

        if (confirm("Apakah Anda yakin ingin menghapus stock ini?")) {
            $.ajax(request).done(function (response) {
                alert("Data Berhasil Dihapus.");
                location.reload();
            })
        }

    })
}