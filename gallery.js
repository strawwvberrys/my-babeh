const pages = [

{
    leftPhoto: "images/photo1.png",
    leftText: "The first photo we took together hehe",

    rightPhoto: "images/photo2.png",
    rightText: "goated mountain climbers"
},

{
    leftPhoto: "images/photo3.png",
    leftText: "fat oranges",

    rightPhoto: "images/photo4.png",
    rightText: "OUR MATCHING FACES HEHE"
},

{
    leftPhoto: "images/photo5.png",
    leftText: "I WAS BTAAAA IN THIS GAMEEE",

    rightPhoto: "images/photo6.png",
    rightText: "Riley staring at the crazy hobo patients♡"
},

{
    leftPhoto: "images/photo7.png",
    leftText: "Mukbangers heh",

    rightPhoto: "images/photo8.png",
    rightText: "holy cholesterol"
},

{
    leftPhoto: "images/photo9.png",
    leftText: "zap zapped my mannn",

    rightPhoto: "images/photo10.png",
    rightText: "His dirty pores"
},

{
    leftPhoto: "images/photo11.png",
    leftText: "caught him killing the patient",

    rightPhoto: "images/photo12.png",
    rightText: "nerd"
},

{
    leftPhoto: "images/photo13.png",
    leftText: "pusheen da goat",

    rightPhoto: "images/photo14.png",
    rightText: "golden poop in a golden toilet"
},

{
    leftPhoto: "images/photo15.png",
    leftText: "WE made it",

    rightPhoto: "images/photo16.png",
    rightText: "fat asses"
},

{
    leftPhoto: "images/photo17.png",
    leftText: "stalking my prey",

    rightPhoto: "images/photo18.png",
    rightText: "silly face"
},

{
    leftPhoto: "images/photo19.png",
    leftText: "FINALLY won",

    rightPhoto: "images/photo20.png",
    rightText: "toh goats"
},

{
    leftPhoto: "images/photo21.png",
    leftText: "sillay swing",

    rightPhoto: "images/photo22.png",
    rightText: "hello kitty dance battle"
},

{
    leftPhoto: "images/photo23.png",
    leftText: "",

    rightPhoto: "images/photo24.png",
    rightText: ""
},

{
    leftPhoto: "images/photo25.png",
    leftText: "",

    rightPhoto: "images/photo26.png",
    rightText: "monkes mating ritual"
},

{
    leftPhoto: "images/photo27.png",
    leftText: "",

    rightPhoto: "images/photo28.png",
    rightText: "on the way to the burger date"
},

{
    leftPhoto: "images/photo29.png",
    leftText: "booger date",

    rightPhoto: "images/photo30.png",
    rightText: "usagi and da hawtie"
},

{
    leftPhoto: "images/photo31.png",
    leftText: "diarrhea",

    rightPhoto: "images/photo32.png",
    rightText: ""
},

{
    leftPhoto: "images/photo33.png",
    leftText: "",

    rightPhoto: "images/photo34.png",
    rightText: ""
},

{
    leftPhoto: "images/photo35.png",
    leftText: "",

    rightPhoto: "images/photo36.png",
    rightText: ""
},

{
    leftPhoto: "images/photo37.png",
    leftText: "",

    rightPhoto: "images/photo38.png",
    rightText: ""
},

{
    leftPhoto: "images/photo39.png",
    leftText: "",

    rightPhoto: "images/photo40.png",
    rightText: ""
},

{
    leftPhoto: "images/photo41.png",
    leftText: "",

    rightPhoto: "images/photo42.png",
    rightText: ""
},
{
    leftPhoto: "images/photo47.png",
    leftText: "our big familyy hehe",

    rightPhoto: "images/photo46.png",
    rightText: "family roadtrip"
},
{
    leftPhoto: "images/photo48.png",
    leftText: "our son",

    rightPhoto: "images/photo49.png",
    rightText: "my loaf driving us around"
},
{
    leftPhoto: "images/photo44.jpeg",
    leftText: "a suprise for you my love, I hope you like it...",

    rightPhoto: "images/photo45.jpeg",
    rightText: "I'M SO EMBARRASSED"
},

{
    leftPhoto: "images/photo43.png",
    leftText: "Ahem the end of the gallery.",

    rightPhoto: "images/photo1.png",
    rightText: "I'll love you forever Riley, I can't wait to make more memories with you my loaf."
}

];

let current = 0;

function showPage(){

    document.getElementById("leftPhoto").src = pages[current].leftPhoto;
    document.getElementById("leftText").textContent = pages[current].leftText;

    document.getElementById("rightPhoto").src = pages[current].rightPhoto;
    document.getElementById("rightText").textContent = pages[current].rightText;
}

function nextPage(){

    current++;

    if(current >= pages.length){
        current = 0;
    }

    showPage();
}

function previousPage(){

    current--;

    if(current < 0){
        current = pages.length - 1;
    }

    showPage();
}

showPage();