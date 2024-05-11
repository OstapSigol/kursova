$(document).ready(function(){

    $("#accordion").accordion({
        collapsible:true,       
        active:false,
        heightStyle:'content'
    })
})
    $("#my_button").button();
    $('#radius').selectmenu();
    $('#color').selectmenu();
    $("#clear_form").button();
    $("#clear_form").click(function(event){
        event.preventDefault();
$('#div_form_1 input[type=checkbox]').prop('checked',false).button("refresh");
$('#div_form_1 input[type=radio]').prop('checked',false).button("refresh");
$('input[type=text]').val('');
event.preventDefault();
    })

    $('input[type=checkbox]').checkboxradio();
    $('input[type=radio]').checkboxradio();
    
    $('#motoSelect, #daySelect').selectmenu(); 


