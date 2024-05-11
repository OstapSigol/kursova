$(document).ready(function(){

    $("#dialog").dialog({
        autoOpen:false, 
        show:{
            effect:"blind",
            duration:1000
        },
        hide:{
            effect:"explode",
            duration:1000
        }
    })

    $("#my_button").on('click',function(event){
        event.preventDefault();
        $("#dialog").dialog('open') 
    })

    $("#my_button").on('click',function(event){
        event.preventDefault();
        
        let umovu = '';
        
        if ($("input[type = 'checkbox']").eq(0).prop('checked') == true){
            umovu += 'Корпус: так <br>'
        }
        if ($("input[type = 'checkbox']").eq(1).prop('checked') == true){
            umovu += 'Наклейка: так <br>'
        }
if ($('#inch_yes').prop('checked') == true){
        umovu += 'Сертифікат: так <br>';
}else{
   umovu += 'Сертифікат: ні <br>'
}
$("#dialog").html(
    $('#motoSelect option:selected').text()+"<br>"+
    $("#custom-handle").text()+" відеокарт "+"<br>"+
    "Область: "+$("#tags").val()+"<br>"+umovu

)
let prog_value = $("#progressbar").progressbar("value");
if (prog_value < 100){
    alert("Вам потрібно заповнити анкетування")
}else {
    $("#dialog").dialog("open");
}
    })

    $('#menu').dmenu();
})      


