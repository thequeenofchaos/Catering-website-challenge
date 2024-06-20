window.onload = function () {

    let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"]
    // saving pic names for loading in src

    let captions =["caption1", "caption2", "caption3"]
    //loads in alt

    let currentPosition = 0
    let currentCaption = 0

    let backButton = document.getElementById("back")
    let forwardButton = document.getElementById("forward")

    function nextPic() {
         
        if((currentPosition >= photos.length - 1)
        &&
        (currentCaption >= captions.length - 1)) {

            currentPosition = 0;
            currentCaption = 0;

        } else {

            currentPosition++;
            currentCaption++;

        }
        renderImage();
    };

    function lastPic() {
         
        if((currentPosition <= 0)
        &&
        (currentCaption <= 0)) {

            currentPosition = photos.length - 1;
            currentCaption = photos.length - 1;

        } else {

            currentPosition--;
            currentCaption--;

        }

        renderImage();

    }

    function renderImage() {
        document.getElementById("image").innerHTML = 

        `<img src="img/${photos[currentPosition]}" alt=${captions[currentCaption]}>`
    }

    forwardButton.addEventListener("click", nextPic);
    backButton.addEventListener("click", lastPic);

    renderImage();
}
