// Window Tab
var windowTab;
windowTab = true;
$(".window-tab").on("click",function(){
    if (windowTab) {
        $( ".tab-win" ).show();
        windowTab = false;
    } else {
        $(".tab-win").hide();
        windowTab = true;
    }
});

$('.window-tab').hover(
    function() {
        
    }, function() {
        $( ".tab-win" ).hide();
        windowTab = true;
        $( ".tab-win" ).hover(
            function() {
                windowTab = false;
                $( ".tab-win" ).show();
            }, function() {
                windowTab = true;
                $( ".tab-win" ).hide();
            }
        );

    }
);

// Game Tab
$(".game-tab").on("click",function(){
    if (windowTab) {
        $( ".tab-game" ).show();
        windowTab = false;
    } else {
        $(".tab-game").hide();
        windowTab = true;
    }
});

$('.game-tab').hover(
    function() {
        
    }, function() {
        $( ".tab-game" ).hide();
        windowTab = true;
        $( ".tab-game" ).hover(
            function() {
                windowTab = false;
                $( ".tab-game" ).show();
            }, function() {
                windowTab = true;
                $( ".tab-game" ).hide();
            }
        );

    }
);

// More Tab
$(".more-tab").on("click",function(){
    if (windowTab) {
        $( ".tab-more" ).show();
        windowTab = false;
    } else {
        $(".tab-more").hide();
        windowTab = true;
    }
});

$('.more-tab').hover(
    function() {
        
    }, function() {
        $( ".tab-more" ).hide();
        windowTab = true;
        $( ".tab-more" ).hover(
            function() {
                windowTab = false;
                $( ".tab-more" ).show();
            }, function() {
                windowTab = true;
                $( ".tab-more" ).hide();
            }
        );

    }
);

document.getElementsByClassName("menu-title")[0].innerHTML = document.title;