

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const message = document.querySelector("#text");
document.getElementById("dave.jpg").hidden = true

const action = [
    {
    name: "firstSet",
    "button text" : ["Accept", "Reject"],
    "message": "You have downloaded the app and made an account. The terms and conditions pop up:"
    },
    {
        name: "secondSet",
       "button text" : ["Choose Dave", "Choose Jessie", "Choose Mike", "ERROR"],
       "button function" : [chooseFirstPerson, chooseSecondPerson, chooseThirdPerson],
       "message": "After swifting through different profiles and reviews, You find two local delivery drivers that are available, and have to choose one. "
    },
    {
    name: "thirdSet",
    "button text": ["Next"],
    "button function": [ok],
    "message": "You place your order, and the estimated delivery time is 20 minutes."
    },
    {
        name: "fourthSet",
        "button text": ["Investigate", "Ignore and continue reading", "Ignore and Check the app for updates"],
        "button function": [investigate, ignoreAndRead, ignoreAndCheckApp, nextMessage],
        "message": "You decide to start reading your new psychological horror novel.",
        "message2": "After your five chapters into the book, you hear something hit the window behind you."


    }, {
        name: "fifthSet", 

    }
]

button1.onclick = firstApp;
button2.onclick = secondApp;
button3.onclick = thirdApp;
button4.onclick = fourthApp;

function update(action){
    message.innerText = action[0]["message"];
    button1.innerText = action[0]["button text"][0];
    button2.innerText = action[0]["button text"][1];
    

    button1.onclick = action[1]["button function"][0];
  if (button2.onclick = action[1]["button function"][1]){
    message.innertext = action[1]["button text"][3]
   }
   document.getElementById('button3').hidden = true
   document.getElementById('button4').hidden = true


    //button3.onclick = action[1]["button function"][2];
}

function firstApp(){
   update(action)
 //  button3.remove();
   //button4.remove();
   
}

function secondApp(){
    update(action);
    //button3.remove();
    //button4.remove();
    
}
function thirdApp(){
    update(action);
   // button3.remove();
   // button4.remove();
  
}
function fourthApp(){
    update(action);
   // button3.remove();
   // button4.remove();
    
}
button3.appendChild()
//image 
document.getElementById('button3').hidden = false
document.getElementById('button4').hidden = false

function displayImage(src, width, height, x, y) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
   }

function chooseFirstPerson(){
    message.innerText = action[1]["message"]
    button1.innerText = action[1]["button text"][0]
    button2.innerText = action[1]["button text"][1]
    button3.innerText = action[1]["button text"][2]
   
 document.getElementById("dave.jpg").hidden = false

    button1.onclick = action[2]["button function"][0]
   button2.onclick = action[2]["button function"][0]
    button3.onclick = action[2]["button function"][0]
    
    

}

function chooseSecondPerson(){
        message.innerText = action[1]["message"]
        button1.innerText = action[1]["button text"][0]
        button2.innerText = action[1]["button text"][1]
        button3.innerText = action[1]["button text"][2]

      document.getElementById("dave.jpg").hidden = false

        button1.onclick = action[2]["button function"][0]
       button2.onclick = action[2]["button function"][0]
        button3.onclick = action[2]["button function"][0]
    
    
    } 
   



function chooseThirdPerson(){

        message.innerText = action[1]["message"]
        button1.innerText = action[1]["button text"][0]
        button2.innerText = action[1]["button text"][1]
        button3.innerText = action[1]["button text"][2]
        document.getElementById("dave.jpg").hidden = false


    button1.onclick = action[2]["button function"][0]
   button2.onclick = action[2]["button function"][0]
    button3.onclick = action[2]["button function"][0]
        
    
    } 


   function ok(){
    document.getElementById('button1').hidden = false
    document.getElementById('button2').hidden = true
    document.getElementById("dave.jpg").hidden = true 
    message.innerText = action[3]["message"]
    button1.innerText = action[2]["button text"][0]
    button1.onclick = action[3]["button function"][3]


    }
    function nextMessage(){
        message.innerText = action[3]["message2"]
        button1.innerText = action[2]["button text"][0]
        button1.onclick = action[3]["button function"][0]
       //button2.onclick = action[3]["button function"][1]
       // button3.onclick = action[3]["button function"][2]
        

    }

    function investigate(){
    message.innerText = "You get up to get a closer look, and notice a black handprint marked on your window"
    button1.innerText = action[3]["button text"][0]
   // button2.innerText = action[3]["button text"][1]
    //button3.innerText = action[3]["button text"][2]
    button1.onclick = action[3]["button function"][0]
   // button2.onclick = action[3]["button function"][1]
    //button3.onclick = action[3]["button function"][2]   
 }
    function ignoreAndRead(){
    message.innerText = "As you look back on the page of your book, you notice a page of your book has been ripped out."
    //button1.innerText = action[3]["button text"][0]
    button2.innerText = action[3]["button text"][1]
   // button3.innerText = action[3]["button text"][2]
   // button1.onclick = action[3]["button function"][0]
    button2.onclick = action[3]["button function"][1]
   // button3.onclick = action[3]["button function"][2] 
    }
    function ignoreAndCheckApp(){
    message.innerText = "As you pull out your phone and pull up the app, you see an update that reads 'Delivered at 3:00 am'. "
   // button1.innerText = action[3]["button text"][0]
   // button2.innerText = action[3]["button text"][1]
    button3.innerText = action[3]["button text"][2]
   // button1.onclick = action[3]["button function"][0]
   // button2.onclick = action[3]["button function"][1]
    button3.onclick = action[3]["button function"][2] 
    }

