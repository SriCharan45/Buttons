for (var i = 0; i < document.querySelectorAll(".buttons").length; i++) {
    document.querySelectorAll(".buttons")[i].addEventListener("click", function () {
        var innerElement = this.innerHTML;
        buttonHover(innerElement);
    });
}
document.addEventListener("keypress", function (event) {
    buttonHover(event.key);
})
function buttonHover(value) {
    var currentElement = document.querySelector("." + value.toLowerCase());
    currentElement.classList.add("pressed");
    setTimeout(function () {
        currentElement.classList.remove("pressed");
    }, 100);
}