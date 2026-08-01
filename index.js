window.addEventListener("DOMContentLoaded", () => {

const loveMessage = `I love you, Je t'aime, Te amo, Te quiero, Eu te amo, Ti amo, Te iubesc, Ich liebe dich, Ik hou van jou, Ek is lief vir jou, Jag älskar dig, Jeg elsker deg, Jeg elsker dig, Ég elska þig, Minä rakastan sinua, Ma armastan sind, Es tevi mīlu, Aš tave myliu, Kocham cię, Miluji tě, Ľúbim ťa, Ljubim te, Volim te, Волим те, Volim te, Те сакам, Обичам те, Я тебя люблю, Я тебе кохаю, Я цябе кахаю, Σ' αγαπώ, Të dua, Seni seviyorum, Ես քեզ սիրում եմ, მიყვარხარ, أحبك, אני אוהב אותך, നിന്നെ സ്നേഹിക്കുന്നു, 我爱你, 我愛你, 愛してる, אני אוהבת אותך, دوستت دارم, Ez te hez dikim, मैं तुमसे प्यार करता हूँ, मैं तुमसे प्यार करती हूँ, میں تم سے محبت کرتا ہوں, میں تم سے محبت کرتی ہوں, আমি তোমাকে ভালোবাসি, ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ, હું તને પ્રેમ કરું છું, मी तुझ्यावर प्रेम करतो, म तिमीलाई माया गर्छु, මම ඔයාට ආදරෙයි, நான் உன்னை காதலிக்கிறேன், నేను నిన్ను ప్రేమిస్తున్నాను, ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ, ഞാൻ, 사랑해, Anh yêu em, Em yêu anh, ฉันรักเธอ, Aku cinta kamu, Saya cinta padamu, Mahal kita, ချစ်တယ်, Би чамд хайртай, ຂ້ອຍຮັກເຈົ້າ, ខ្ញុំស្រឡាញ់អ្នក, Ngiyakuthanda, Ndiyakuthanda, Mo nifẹ rẹ, Nakupenda, A hụrụ m gị n'anya, Ina son ka, Waan ku jeclahay, እወድሃለሁ, Aloha wau iā ʻoe, Aroha ahau ki a koe, ʻOfa atu, Ou te alofa ia te oe, Ua here vau ia oe, Tá grá agam duit, Tha gaol agam ort, Rwy'n dy garu di, Da garout a ran, Maite zaitut, T'estimo, Quérote, Mi amas vin, Mi tu lub, Au domoni iko.`;

const text = document.getElementById("loveText");
const sparkleContainer = document.querySelector(".love-sparkles");

let i = 0;

function randomDelay(){
    return Math.random() < .2
        ? 120 + Math.random()*180
        : 10 + Math.random()*20;
}

function makeSparkle(){

    const s = document.createElement("div");

    s.className="type-sparkle";

    s.textContent=Math.random()>.5 ? "✦" : "♡";

    s.style.left=Math.random()*100+"%";
    s.style.top=Math.random()*100+"%";

    sparkleContainer.appendChild(s);

    setTimeout(()=>{
        s.remove();
    },2000);

}

function typeWriter(){

    if(i < loveMessage.length){

        text.textContent += loveMessage.charAt(i);

        const box = document.querySelector(".love-scroll");

        box.scrollTop = box.scrollHeight;

        if(Math.random() < 0.18){
            makeSparkle();
        }

        i++;

        setTimeout(typeWriter, randomDelay());

    } else {

        setTimeout(() => {

            i = 0;
            text.textContent = "";

            typeWriter();

        }, 2500);

    }

}typeWriter();

setInterval(makeSparkle, 2500);

text.style.textShadow = "0 0 8px rgba(255,185,220,.4)";

setTimeout(() => {
    text.style.textShadow = "none";
}, 80);

});