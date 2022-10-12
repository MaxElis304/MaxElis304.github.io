
$(document).ready(function() {
    $(".down").css("display", "none");
    $(".topmenu li").hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
});


@media screen and (max-width: 800px) {
	.topmenu > li {
		float: none;
	}
	.topmenu submenu {
		display: block;
		width: 100%;
	}
	.topmenu > li.hover > submenu, .topmenu li li.hover submenu {
		position: static;
	}
}

$(document).ready(function() {
	var ww = document.body.clientWidth;
	if (ww < 800) {
		$(".down").css("display", "inline-block");
		$(".topmenu li a").click(function() {
			$(this).parent("li").toggleClass('hover');
		});
	} else {
		$(".down").css("display", "none");
		$(".topmenu li").hover(function(){
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
	}
});

$(".topmenu li a").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    })
    if (ww < 800) {
        $(".down").css("display", "inline-block");
        $(".topmenu li a.parent").click(function(e) {
            e.preventDefault();
            $(this).parent("li").toggleClass('hover');
        });
    } else {
		$(".down").css("display", "none");
		$(".topmenu li").hover(function(){
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
	}
});

$(".toggleMenu").click(function(e) {
    e.preventDefault();
    $(".nav").toggle();
});
if (ww < 800) {
    $(".toggleMenu").css("display", "inline-block");
    $(".nav").hide();
} else {
	$(".down").css("display", "none");
	$(".topmenu li").hover(function(){
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});
}

