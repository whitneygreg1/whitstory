$(document).ready(function(){
    $("#dialog").html("<p>Olivia's at the Bar</p>");
    //make choices button
    $("#choices").append('<button id="overtime">Olivia works overtime</button>');
    
    $("#choices").append('<button id="leftearly">olivia leaves early</button>');

    $("#overtime").click(function(){
        $("#dialog").html("<p>olivia works overtime. A big party came in for her to serve and she meets a man. He ask her to go to the hottest club with him.</p>");
        $("#dialog").prepend('<img src="adult-alcohol-bar-274192.jpg" alt="black and white picture of people in bar"  height="350px"/>'  
    );
    $("#dialog").prepend('<img src="bar-business-chairs-2585614.jpg" alt="black and white picture of people in bar"  height="350px"/>');
        $("#choices").empty();
        $("#choices").append('<button id="hottest club">Goes to the hottest club in town</button>');
    
    $("#choices").append('<button id="Go home Tired">Olivia decline and goes home tired</button>');
    });
    $("#hottest club").click(function (){
        $("#dialog").html("<p>Olivia and Peter goes to the hottest club in town and have fun dancing on the dance floor. They look into each other eyes and he leans in for kiss.</p>");
        $("#choices").empty();
        $("#choices").append('<button id="kiss">Olivia and peter kiss</button>');
    
    $("#choices").append('<button id="hug">Olivia gives hug</button>');
    });
    //clic



});