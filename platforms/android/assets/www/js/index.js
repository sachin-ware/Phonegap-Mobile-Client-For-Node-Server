
var basepath="http://192.168.43.88:3000";

$(document).ready(function(){


    $("#mybtn").click(function(e){

            $.ajax({
                type:"GET",
                url:basepath+"/bots",
                success:function(data,status,request){
                    console.log(status);
                     $("#contentHolder").html($("#contentHolder").text()+data);
                },
                error: function(error){
                    alert(JSON.stringify(error));
                },
                timeout:5000
            });

    });


    $("#btnLogin").click(function(e){

        $.ajax({
            type:"GET",
            url:basepath+"/login",
            success:function(data,status,request){
                if(data)
                {
                    alert('Logged in successfully . . . . !')
                }
                else
                {
                    alert('Error . . . . !')
                }
            },
            error: function(error){
                alert(JSON.stringify(error));
            },
            timeout:5000
        });

    });


});