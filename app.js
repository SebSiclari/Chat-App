
//JQUERY CODE

function pressEnter(event){ 

    
    
// The function must when the user does not press the enter keyboard or whenm they didnt' press the button

    if (!(event.key == 'Enter' || event.key == undefined))
	 return;

    event.preventDefault();
    let $message= $('#text-chat')
    let message=$message.val() 

//If message is empty can't send anything 

    if(message==""){ 
        return;
    }

//Get today's Date

    const currentDate=new Date();
    let minutes=currentDate.getMinutes()
    if(parseInt(minutes)<10){ 
        minutes= "0"+minutes
    }

    const messageDates= currentDate.toDateString().split(' ').slice(1).join(' ')+" "+currentDate.getHours()+ ":"+ minutes;

//Add/Display User Message + Time when Sent

    var element=$("<div></div>").addClass('container lighter').append("<p></p>").append(message).append('<br>').append("<br>");

    element.append("<span></span>").addClass('time-right').css('float', 'right').append(messageDates);

    $('#container-page').append(element);
 

// Create Computer Responses 

    let array=[, 
    "What are you up to?",
    "I hope your day is going great",
    "Want to do somethign later?",
    'Need help with something?',
    'I hope you have an amazing day!!:)',
    "Whats your favorite sport?",
    "Want to go to the gym later?",
    'Btw,tell the rest of the Codewroks team I say hi! :)',
    'What is your favorite type of food?',
    'Who do you think is going to win the World Cup?',
    'What is your name, again?', 
    'Do you like poke?',
    ]

//Generate random Number to pick a random response from the array

    let random = Math.floor(Math.random() * 17) 

    let userText=$('#text-chat').val() 

    var computerText= "" 

// Desinged repsonses for designed user inputs

    if(userText=="Hello" || userText=="hello" || userText=='hi' || userText=='Hi' || userText=='Hey'){ 
    
       computerText= "Hello nice to meet you, don't you think Seb would make a great fit at codeworks?"
    }
    else if(userText=="how are you" || userText=="what are you doing" ){ 

     computerText= 'I am doing great, just love talking to you. I hope you are having a great day as well.'  
    } 
    else if(userText.includes("yes") || userText.includes("Yes")){ 

      computerText= ':)'
    } 
    else if(userText.includes("no ") || userText.includes("No ") || userText.includes('dont') || userText.includes('France')){ 

    computerText= ':('
    }
    else if(userText.includes('bye') || userText.includes('later')){ 

   computerText ='Have a great day. Tell the rest of the codeworks team I say hi:).'
    }
    else if(userText.includes('name')){ 

    computerText ='My name is Eva and I was created by Seb:)'
    }
    else if(userText.includes('old') || userText.includes('age')){ 

    computerText ='I am 0 yers old '
    }
    else{

    computerText=array[random]
    }

    var element2=$("<div></div>").addClass('container').append("<p></p>").append(computerText).append('<br>').append('<br>')
    element2.append("<span></span>").addClass('time-left').append(messageDates)
    $('#container-page').append(element2)

// Screen Automatic FLow 

    $(document).scrollTop($(document).height()); 

    $("#text-chat").val("");
        
}

// Allows the  enter keyboard  to send the message 

jQuery(function(){ 

    $("#text-chat").keypress(pressEnter)

    $('#press').click(pressEnter)})



