// Styling Menu
var menu_tags = document.querySelectorAll("#fix > ul > a");
var MENU_DEFAULT_CLASS_LIST = "button is-primary is-outlined";
var MENU_ACTIVE_CLASS_LIST = "button is-primary";
function set_menu_default_class() {
    for (var i = 0; i < menu_tags.length; i++) {
        menu_tags[i].classList = MENU_DEFAULT_CLASS_LIST;
    }
}
function set_menu_active_class(node) {
    set_menu_default_class();
    node.classList = MENU_ACTIVE_CLASS_LIST;
}
set_menu_default_class();
for (var i = 0; i < menu_tags.length; i++) {
    menu_tags[i].addEventListener("click", function () {
        set_menu_active_class(this);
    });
}

// Collapse Menu
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
    menu_bars.click();
}

// Scrollspy Menu
let blocks = document.querySelectorAll(".block");
window.onscroll = function() {
    var scroll_top = document.body.scrollTop;
    let scroll_index;
    for (var i = 0; i < blocks.length; i++) {
        if (blocks[i].id && blocks[i].offsetTop <= scroll_top + 30) {
            // console.log(blocks[i].offsetTop);
            scroll_index = i;
        }
    }
    if (scroll_top < 30) {
        set_menu_active_class(document.querySelector("#fix a[href='#top']"));
    } else if (scroll_top + window.innerHeight > document.body.scrollHeight - 30) {
        set_menu_active_class(document.querySelector("#fix a[href='#footer']"));
    } else if (scroll_index !== undefined) {
        // console.log(blocks[i].id);
        let href = document.querySelector("#fix a[href='#" + blocks[scroll_index].id + "']");
        // console.log(href);
        set_menu_active_class(href);
    }
};