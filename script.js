let counter=0;
const counterDisplay=document.getElementById("counter");
const increaseBtn=document.getElementById("increase");
const decreaseBtn=document.getElementById("decrease");
const resetBtn=document.getElementById("reset");

function updateCounter(action){
    if(action==="increase"){
        counter++;
    }
    else if(action==="decrease" && counter>0){
        counter--;
    }
    else if(action==="reset"){
        counter=0;
    }

    counterDisplay.textContent=counter;
}

increaseBtn.addEventListener("click", function(){
    updateCounter("increase");
});
decreaseBtn.addEventListener("click", function(){
    updateCounter("decrease");
});
resetBtn.addEventListener("click", function(){
    updateCounter("reset");
});



let charCounter=0;
const charCounterDisplay=document.getElementById("charCounter");
const textInput=document.getElementById("textInput");
const previewParagraph=document.getElementById("preview");
const clearBtn=document.getElementById("clear");

textInput.addEventListener("input", function(){
    const text=textInput.value;

    if(text==""){
        previewParagraph.textContent="Your text will appear here";
        charCounterDisplay.textContent="0";
    }
    else{
    previewParagraph.textContent=text;
    charCounterDisplay.textContent=text.length;
    }
})

clearBtn.addEventListener("click", function(){
    textInput.value="";
    previewParagraph.textContent="Your text will appear here";
    charCounterDisplay.textContent="0";
    textInput.focus();
})



const imageSelect=document.getElementById("imageSelect");
const animeImage=document.getElementById("animeImage");
const animeDescription=document.getElementById("animeParagraph");

const imageData={
    naruto: {
        src: "naruto.jpg",
        alt: "Naruto",
        description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young, socially isolated ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village." 
    },

    bleach: {
        src: "bleach.jpg",
        alt: "Bleach",
        description: "Bleach is a Japanese manga series written and illustrated by Tite Kubo. It follows teenager Ichigo Kurosaki, who obtains the powers of a Soul Reaper—a death personification similar to a Grim Reaper—from another Soul Reaper, Rukia Kuchiki."
    },

    onePiece: {
        src: "onepice.jpg",
        alt: "One Piece",
        description: "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It follows the adventures of Monkey D. Luffy and his crew, the Straw Hats, as he searches for the legendary treasure known as the 'One Piece' to become the next King of the Pirates."
    }
}

imageSelect.addEventListener("change", function(){
    const selectedOption=imageSelect.value;
    const selectedImageData=imageData[selectedOption];

    animeImage.src=selectedImageData.src;
    animeImage.alt=selectedImageData.alt;
    animeDescription.textContent=selectedImageData.description;
})



const inputKey=document.getElementById("inputKey");
const statusKey=document.getElementById("statusKey");
const  resultKey=document.getElementById("resultKey");

inputKey.addEventListener("keydown", function(event){
    statusKey.textContent=`Key pressed: ${event.key}`;
    if (event.key==="Enter"){
        event.preventDefault();
        resultKey.textContent=inputKey.value;
    }

    else if (event.key === "Escape"){
        event.preventDefault();
        inputKey.value="";
        resultKey.textContent="";
        statusKey.textContent="Input and result were cleared";
    }
})



const card = document.getElementById("card");
const instruction = document.getElementById("instruction");

card.addEventListener("mouseenter", function(){
    card.style.backgroundColor = "lightblue";
    instruction.textContent = "Mouse in the card";    
});

card.addEventListener("mouseleave", function(){
    card.style.backgroundColor = "";
    instruction.textContent = "Focus on the card using Tab key or the Mouse";    
});

card.addEventListener("focus", function(){
    card.style.backgroundColor = "lightblue";
    instruction.textContent = "Mouse in the card";    
});

card.addEventListener("blur", function(){
    card.style.backgroundColor = "";
    instruction.textContent = "Focus on the card using Tab key or the Mouse";    
});