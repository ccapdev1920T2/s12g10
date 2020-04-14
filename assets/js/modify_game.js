$("#file").on("change", function () {

    if ($("#file")[0].files.length === 0) {
        $("#file-label").text("Please select a different file.");
        $("#upload").prop("disabled", true);
    } else {
        $("#file-label").text("File: " + $("#file")[0].files[0].name + ". Press upload to continue.");
        $("#upload").prop("disabled", false);
    }

});