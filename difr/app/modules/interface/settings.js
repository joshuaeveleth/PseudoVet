<script language="javascript"><!--
$(document).ready(function() {
  $('#page_effect').fadeIn(500);
  $('#datepicker1').datepicker({ inline: true, dateFormat: 'yy-mm-dd' });
  $('#datepicker2').datepicker({ inline: true, dateFormat: 'yy-mm-dd' });
  $('#datepicker3').datepicker({ inline: true, dateFormat: 'yy-mm-dd' });
  $('#datepicker4').datepicker({ inline: true, dateFormat: 'yy-mm-dd' });
  $('#datepicker5').datepicker({ inline: true, dateFormat: 'yy-mm-dd' });
  $('#datepicker6').datepicker({ inline: true, dateFormat: 'yy-mm-dd' });
  $('#datepicker7').datepicker({ inline: true, dateFormat: 'yy-mm-dd' });
  $('#datepicker8').datepicker({ inline: true, dateFormat: 'yy-mm-dd' });
  $('#datepicker9').datepicker({ inline: true, dateFormat: 'yy-mm-dd' });
  $('#datepicker10').datepicker({ inline: true, dateFormat: 'yy-mm-dd' });

  //Set the height of the block
  $('#menu .block').height($('#menu li').height());

  //go to the default selected item
  topval = $('#menu .selected').position()['top'];
  $('#menu .block').stop().animate({top: topval}, {easing: '', duration:500});

  $('#menu li').hover(

    function() {

            //get the top position
            topval = $(this).position()['top'];

            //animate the block
            //you can add easing to it
            $('#menu .block').stop().animate({top: topval}, {easing: '', duration:500});

          //add the hover effect to menu item
           $(this).addClass('hover');
    },

        function() {
            //remove the hover effect
            $(this).removeClass('hover');
        }
    );

});

function popup_show(id){
  document.getElementById(id).style.visibility="visible";
}
function popup_hide(id){
  document.getElementById(id).style.visibility="hidden";
}
--></script>
