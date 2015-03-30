		(function ($, window, document){
		
			$(function(){
				var firstElement = $("#graphic li:first-child");
				setActive(firstElement);
				$("#graphic li").click(clicked);
			});

            $(window).load(function(){
               sizing();
               $(".infoContainer").css('visibility','visible').hide().fadeIn();
               timeout = setTimeout(rotate, 4000);
            });
			
			function rotate(){
				var next = $("#graphic .active + li");
				if(next.length == 0){
					next = $("#graphic li:first-child");
				}
				setActive(next);
				timeout = setTimeout(rotate, 4000);
			}
			
			function clicked(){
				clearTimeout(timeout);
				setActive(this);
			}
			
			function setActive(activeEle){
				$(".infoContainer .active").removeClass("active");
				$(activeEle).addClass("active");
				var index = $(activeEle).index() + 1;
				$("#text li:nth-child( " + index + ")").addClass("active");
			}
			
			function setTextCenter(){
				var ulHeight= $("#text").outerHeight();
				$("#text > li").each(function(){
					var liHeight = $(this).outerHeight();
					var heightDiff = (ulHeight-liHeight)/2;
					$(this).css("margin-top",heightDiff); 
				});
			}
			
			function sizing(){
				var containerWidth = $(".infoContainer").width();
				if(containerWidth > 575){
                   graphicWidthpx = 375;
                   $("#graphic").css("background-size", "275px");
                } 
                else {
                   graphicWidthpx = 310;
                   $("#graphic").css("background-size", "255px");
                }
				var graphicWidth = graphicWidthpx/containerWidth * 100; 
				var textWidth = 100-graphicWidth;
				$("#graphicContainer").width(graphicWidth + "%");
				$("#textContainer").width(textWidth + "%");
				setTextCenter()
			}
			
			var doneResize;
			$(window).resize(function(){
				clearTimeout(doneResize);
				doneResize = setTimeout(sizing, 200);
			});
		}(jQuery, window, document));
		
$('a').on('click', function(evt){
	$('.active-page').removeClass('active-page');
	$(evt.target.hash).addClass('active-page');
});
