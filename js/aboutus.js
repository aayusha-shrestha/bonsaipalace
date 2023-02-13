//array of images
var images = ['../images/aayusha.jpg', '../images/sujalportfolio1.jpg', '../images/rahul.jpg', '../images/me.jpg', '../images/shubham.jpg', '../images/saiyam.jpg']
var x = 0;
//gets elements by their id
var imgs = document.getElementById('img');
//sets time interval to 3 sec
setInterval(slider, 3000);
function slider() {
    //if x is less than the length of the array then, the value of x increases by 1
    if (x < images.length) {
        x = x + 1;
    }
    else {
        x = 1;
    }
    //innerhtml gets the html content within the element and dynamically changes it
    imgs.innerHTML = "<img src=" + images[x - 1] + " style='height: 500px; object-fit: cover;' >";
}
