// toggle JS
function toggle() {
    var p1 = document.getElementById('1');
    var p2 = document.getElementById('2');

    //hides p2 and displays p1
    if (p1.style.display == "none") {
        p1.style.display = "block";
        p2.style.display = "none";
    }
    //hides p1 and displays p2
    else {
        p1.style.display = "none";
        p2.style.display = "block";
    }
}
document.getElementById('1').style.display = "block";