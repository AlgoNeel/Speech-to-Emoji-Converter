const emojiMap = {
    "happy": "😃", "sad": "😢", "angry": "😡", "love": "❤️", "surprised": "😲", "cool": "😎", "sleepy": "😴",
    "crying": "😭", "laughing": "😂", "scared": "😱", "excited": "🤩", "embarrassed": "😳", "confused": "😕",
    "shocked": "😧", "bored": "😐", "in love": "😍", "grinning": "😁", "thinking": "🤔", "smiling": "🙂",
    "disappointed": "😞", "worried": "😟", "surprised": "😲", "disgusted": "🤢", "facepalm": "🤦", "speechless": "😶",
    "confident": "😎", "sleeping": "😴", "dizzy": "🤢", "joyful": "😊", "relieved": "😌", "silly": "😜", "playful": "😋",
    "hugging": "🤗", "flirty": "😉", "wink": "😉", "geeky": "🤓", "nerd": "🤓", "starving": "🤤", "heartbroken": "💔",
    "pissed": "😤", "sweating": "😓", "nervous": "😬", "frozen": "❄️", "tired": "🥱", "nerdy": "🤓", "heart eyes": "😍",
    "angsty": "😖", "pensive": "😔", "mischievous": "😈", "sassy": "😏", "chill": "🧊", "shy": "😳", "awkward": "🙈",
    "smug": "😏", "kissing": "😘", "sad but trying": "🥺", "proud": "😌", "grateful": "🙏", "shy": "😳", "blush": "😊",
    "cheeky": "😜", "embarrassed": "😳", "smirking": "😏", "whistling": "🎶", "crybaby": "😭", "peaceful": "🕊️", 
    "giggling": "😆", "laughing out loud": "😂", "adorable": "🥰", "hug": "🤗", "mournful": "😔", "snobbish": "😎",
    "charmed": "😍", "playful": "😋", "laughing hard": "🤣", "pouting": "😡", "victorious": "🥳", "dazed": "😵",
    "exhausted": "😩", "hungry": "🍔", "annoyed": "😒", "blissed": "😌", "gloating": "😏", "content": "🙂",
    "serene": "🧘", "guilty": "😔", "overwhelmed": "😮‍💨", "charming": "😊", "amused": "😄", "sleep deprived": "😪",
    "optimistic": "🌞", "underwhelmed": "🙄", "nervousness": "😬", "stressed": "😫", "indifferent": "😑", "sad face": "☹️",
    "angry face": "😠", "frown": "😟", "displeased": "😤", "sick": "🤧", "face with medical mask": "😷", "clueless": "🤷‍♂️",
    "exhilarated": "🤩", "hungry": "🤤", "confounded": "😖", "mournful": "😞", "nauseated": "🤢", "shy face": "😊",
    "thankful": "🙏", "thankful": "🙌", "blushing": "😊", "distressed": "😫", "bashful": "😳", "terrified": "😨", "apprehensive": "😟",
    "accomplished": "🏆", "sorrowful": "😔", "flustered": "😳", "flirtatious": "😜", "calm": "🧘‍♂️", "stunned": "😲",
    "calming": "🧘", "relaxed": "😌", "cheerful": "🎉", "moody": "😠", "giddy": "🤪", "hyper": "😆", "zealous": "🥳",
    "savage": "🦁", "blissful": "😌", "accomplished": "🖋️", "angry cat": "😾", "pensive cat": "🙀", "winking cat": "😸",
    "loving cat": "😻", "thinking cat": "😼", "sad cat": "😿", "grumpy cat": "😾", "cool cat": "😎", "mischievous cat": "😼",
    "scared cat": "😿", "kissy cat": "😽", "silly cat": "😻", "playful cat": "😹", "sleepy cat": "😴", "curious cat": "😺"
};

const button = document.getElementById("startBtn");
const helpButton = document.getElementById("helpBtn");
const emojiDisplay = document.getElementById("emoji");
const helpContainer = document.getElementById("helpContainer");
const helpList = document.getElementById("helpList");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

recognition.onresult = function(event) {
    const speech = event.results[0][0].transcript.toLowerCase();
    console.log("You said:", speech);
    
    let foundEmoji = "🤔"; // Default unknown emoji
    for (const word in emojiMap) {
        if (speech.includes(word)) {
            foundEmoji = emojiMap[word];
            break;
        }
    }
    emojiDisplay.textContent = foundEmoji;
};

recognition.onerror = function(event) {
    console.error("Error:", event.error);
    alert("Speech recognition error. Please try again.");
};

button.addEventListener("click", () => {
    recognition.start();
    emojiDisplay.textContent = "🎤";
});

helpButton.addEventListener("click", () => {
    helpContainer.style.display = helpContainer.style.display === "none" ? "block" : "none";
    helpList.innerHTML = "";
    for (const word in emojiMap) {
        const para = document.createElement("p");
        para.textContent = `${word}: ${emojiMap[word]}`;
        helpList.appendChild(para);
    }
});
