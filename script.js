
/*function FormValidation()
{
    let p,com,text;
    p=document.getElementById("phone").value
    if(isNaN(p)||p<0||p>9||p=="")
     text="Enter a Number"
     document.getElementById("lbphone").innerHTML=text
    com=document.getElementById("comment").value
     if(com.length<20)
     alert("Enter atleast 20 charecter in message field  ")

}*/
$(document).ready(function(){
      
   $("#fname").blur( function()
   {
    var text;
    
    text=$(this).val()
    if(text=="")
     $("#lbname").show()
    else
       $("#lbname").hide()
   
   })
   $("#femail").blur( function()
   {
    var text1;
    
    text1=$("#femail").val()
    if(text1=="")
     $("#lbemail").show()
    else
        $("#lbemail").hide()
    })

    $("#fphone").blur(function()
    {
        var text2
        text2=$("#fphone").val()
        if(text2==""||isNaN(text2))
         $("#lbphone").show()
        else
          $("#lbphone").hide()
           
     } )
    $("#comment").blur(function()
    {
        var text3
        text3=$("#comment").val()
        if(text3.length<20)
         $("#lbtext").show()
        else
          $("#lbtext").hide()
           
       
    })
    $("#buton").click(function()
    {
      text=$("#fname").val()
      text1=$("#femail").val()
      text2=$("#fphone").val()
      text3=$("#comment").val()
     if(text==""||tex1==""||text2==""||text3==""||isNaN(text2))
       alert("Enter the Values")
      else 
        alert("Successfully enterd")
    
    })
})
   /* $(document).ready(function()
    {
     $("#buton").click(function()
     {
        var text;
         text=$("#fname").val()
        if(text=="")
         $("#lbname").show()
        else
          $("#lbname").hide()

       var text1;
        text1=$("#femail").val()
        if(text1=="")
          $("#lbemail").show()
        else
          $("#lbemail").hide()

        var text2
        text2=$("#fphone").val()
        if(text2==""||isNaN(text2))
         $("#lbphone").show()
        else
          $("#lbphone").hide()

        var text3
        text3=$("#comment").val()
        if(text3.length<20)
         $("#lbtext").show()
        else
          $("#lbtext").hide()
        $("#formvalidation").validate().resetForm() 
           
    }) 
}) 
$(document).ready(function()
{
  $("#formvalidation").validate({
           rules:{
            "fname":{
              required:true,
              minlength:5
            }

           }

    })
  
})*/
