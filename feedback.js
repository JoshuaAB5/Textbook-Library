// Testing with requestBook.html

let requestTitle;

document.getElementById("requestBookSubmit").onclick = function() {
    requestTitle = document.getElementById("requestedTitle").value;
    document.write('Request for ${requestTitle}');
}
