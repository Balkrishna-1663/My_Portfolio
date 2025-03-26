$(document).ready(
    function() {
        $('#TopTitleDate').html(function(){
            var currentDate = new Date();
            return currentDate.toLocaleDateString('en-us',{year:"numeric", month:"long", day:"numeric"});
        });
        $('#Sec2').mouseenter(function(){
            $('#Sec2').html("kishan singh");
        });
        $('.IntroLink').hover(
            function(){
                      // Generate random RGB values
                      const brightColors = [
                        'coral',
                        'cornflowerblue',
                        'springgreen',
                        'gold',
                       'hotpink',
                       'mediumorchid',
                        'aquamarine',
                        'orangered',
                        'deepskyblue'
                    ];
                    const randomColor = brightColors[Math.floor(Math.random() * brightColors.length)];
        
        $(this).css({
            "background": randomColor,
            "color": "black"
        });
            });
        
        $('.IntroLink').mouseleave(function(){
            $(this).css({
                "background": "white"
            });
        }
    );

    function moveSkills() {
        $('.skill-item').each(function() {
            changestyle();
            const maxX = $(window).width() - $(this).width();
            const maxY = $(window).height() - $('#skills-section').height()+400;
            
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
           
            
            $(this).animate({
                left: randomX,
                top: randomY
            }, 4400, function() {
                moveSkills(); // Continue moving
            });
        });
    }

    // Initialize skill items
    function Changecss(){$('.skill-item').css({
        'position': 'absolute',
        'padding': '10px 20px',
        'background': 'white',
        'border-radius': '20px',
        'cursor': 'pointer',
        'box-shadow': 'black 2px 2px 0 0'
,
        'transition': 'all 0.1s ease'
    });}

    // Start the movement
    changestyle();
    moveSkills();
    Changecss();
    

    // Hover effect with your existing bright colors
   function changestyle(){ $('.skill-item').html(
        function() {
            const brightColors = [
                'coral',
                'cornflowerblue',
                'springgreen',
                'gold',
                'aquamarine',
                //'orangered'
            ];
            const randomColor = brightColors[Math.floor(Math.random() * brightColors.length)];
            
            $(this).css({
                'background': randomColor,
                'transform': 'scale(1.1)',
                // 'box-shadow': '0 0 15px rgba(0,0,0,0.2)'
            });
        },
        function() {
            $(this).css({
                'background': 'white',
                'transform': 'scale(1)',
                'box-shadow': 'black 2px 2px 0 0'
            });
        }
    );}
});