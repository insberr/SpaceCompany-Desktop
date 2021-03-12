/* Keyboard shortcuts */
document.onkeyup = function (e) {
    if (e.ctrlKey && e.which == 83) {
        Game.save();
    } else if (e.which == 27) {
        Game.mainMenu('main');
    } else if (e.ctrlKey && e.which == 67) {
        PNotify.removeAll();
    }
};