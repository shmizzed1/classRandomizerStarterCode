$(document).ready(function(){
var stu = ["Jessie Ann Navas", 
           "Luis Dilone", 
           "Kiara Acosta Correa", 
           "Sammy Ech-Chouy", 
           "Christian Cambizaca"
           ];

var te = ["Aaron", 
          "Zack", 
          "Justin", 
          "Julia", 
          "Alyxe"];

 

var random = Math.floor(Math.random()*stu.length);


$(studentButton).click(function() {
    $(studentDisplay).append(stu[random], " " );
    
});

$(teacherButton).click(function() {
    $(teacherDisplay).append(te[random], " " );
});


});
