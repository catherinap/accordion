'use strict';

    $(document).ready(function(){
        $('p').not(':first').hide();
        $('h1').click(function (){
            var paragraph = $(this).next('p');
            var title = $(this).closest('.accordion');
            if(paragraph.is(':visible')){
                paragraph.slideUp();
            } else {
                title.find('p').slideUp();
                paragraph.slideDown();
            }
        });
    });

