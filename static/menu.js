var menu_tags = document.querySelectorAll("#fix > ul > a");
var menu_tags_default_classList = "button is-primary is-outlined";
for (var i = 0; i < menu_tags.length; i++) {
    menu_tags[i].addEventListener("click", function () {
        for (var i = 0; i < menu_tags.length; i++) {
            menu_tags[i].classList = menu_tags_default_classList;
        }
        this.classList = "button is-primary";
    });
    menu_tags[i].classList = menu_tags_default_classList;
}

var is_menu_hidden = false;
var menu_bars = document.querySelector("#fix > button");
menu_bars.addEventListener("click", function () {
    if (is_menu_hidden) {
        document.querySelector("#fix > ul").style = "display: block;";
    } else {
        document.querySelector("#fix > ul").style = "display: none;";
    }
    is_menu_hidden = !is_menu_hidden;
});
if (window.innerWidth < 1008) {
    console.log("fire");
    menu_bars.click();
}