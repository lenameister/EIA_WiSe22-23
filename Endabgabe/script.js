//Variablen speichern Referenzen zu HTML-Elementen, die im Code verwendet werden
//zB ist Variable 'htmlButton' eine Referenz zum HTML-Button-Element mit der ID "html-button"
const htmlButton = document.getElementById("html-button");
const cssButton = document.getElementById("css-button");
const typescriptButton = document.getElementById("typescript-button");
const mixedButton = document.getElementById("mixed-button");
const questionSection = document.getElementById("question-section");
const question = document.getElementById("question");
const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const answers = document.getElementById("answers");
let category;
let questions;
let currentQuestion;
let score = 0;
let scoreNumber;
//ermöglicht es score number laden zu lassen
document.addEventListener("DOMContentLoaded", hndLoad);
function hndLoad(_event) {
    scoreNumber = document.querySelector("#score-number");
}
//5 Fragen zu HTML
let htmlQuestions = [
    {
        question: "Welches Element wird verwendet, um einen Absatz darzustellen?",
        answers: [
            { text: "<p>", correct: true },
            { text: "<div>", correct: false },
            { text: "<span>", correct: false },
            { text: "<a>", correct: false }
        ],
        link: "Das <p>  Tag stellt einen Absatz dar: https://www.w3schools.com/html/html_elements.asp"
    },
    {
        question: "Was ist HTML?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyperlink Text Markup Language", correct: false },
            { text: "Hypertext Media Language", correct: false },
            { text: "Hyperlink Text Media Language", correct: false },
        ],
        link: "HTML ist Auszeichnungprache zur Strukturierung von Webseiten: https://www.schulhomepage.de/webdesign/html"
    },
    {
        question: "Welches ist die niedrigste Überschriftenebene in HTML?",
        answers: [
            { text: "h6", correct: true },
            { text: "h3", correct: false },
            { text: "h4", correct: false },
            { text: "h1", correct: false },
        ],
        link: "Überschriften werden mit den Ebenen 1 bis 6 ausgezeichnet: https://www.edv-lehrgang.de/ueberschriften-in-html/"
    },
    {
        question: "Wie leitet man einen HTML-Kommentar ein?",
        answers: [
            { text: "<!--kommentar-->", correct: true },
            { text: "//kommentar", correct: false },
            { text: "/*kommentar*/", correct: false },
            { text: "#kommentar", correct: false },
        ],
        link: "https://praxistipps.chip.de/html-code-auskommentieren-so-gehts_47676"
    },
    {
        question: "Wie zeigt man in HTML ein Bild an?",
        answers: [
            { text: "<img src='bild.jpg'>", correct: true },
            { text: "<p src='bild.jpg'>", correct: false },
            { text: "pic img='bild.jpg'>", correct: false },
            { text: "<i img'bild.jpg'>", correct: false },
        ],
        link: "https://www.w3schools.com/html/html_images.asp"
    },
];
//5 Fragen zu CSS
let cssQuestions = [
    {
        question: "Wie wird eine ID im CSS ausgewählt?",
        answers: [
            { text: "#id", correct: true },
            { text: ".class", correct: false },
            { text: "element", correct: false },
            { text: "*", correct: false }
        ],
        link: "https://www.w3schools.com/cssref/sel_id.php"
    },
    {
        question: "Wofür steht CSS?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Color Style Sheets", correct: false },
            { text: "Code Style System", correct: false },
            { text: "Color Sheet System", correct: false },
        ],
        link: "https://www.atinternet.com/de/glossar/css/"
    },
    {
        question: "Was ist das Ziel von CSS?",
        answers: [
            { text: "Aussehen verändern", correct: true },
            { text: "Programmierung vereinfachen", correct: false },
            { text: "Interaktivität erhöhen", correct: false },
            { text: "Ladezeit von Webseiten verkürzen", correct: false },
        ],
        link: "https://www.ionos.de/digitalguide/websites/webdesign/was-ist-css/"
    },
    {
        question: "Welches Pseudoelement kann verwendet werden, um ein Element beim Klicken zu ändern?",
        answers: [
            { text: ":active", correct: true },
            { text: ":hover", correct: false },
            { text: ":visited", correct: false },
            { text: ":first-child", correct: false },
        ],
        link: "https://www.w3schools.com/css/css_image_transparency.asp"
    },
    {
        question: "Wie kann man die Hintergrundfarbe ändern?",
        answers: [
            { text: "background-color", correct: true },
            { text: "color", correct: false },
            { text: "backcolor", correct: false },
            { text: "font-color", correct: false },
        ],
        link: "https://www.w3schools.com/css/css_background.asp"
    },
];
//5 Fragen zu TS 
let typescriptQuestions = [
    {
        question: "Wie wird eine Variable in TypeScript deklariert?",
        answers: [
            { text: "var variableName", correct: false },
            { text: "let variableName", correct: false },
            { text: "const variableName", correct: false },
            { text: "let variableName: type", correct: true }
        ],
        link: "https://digitale-rundschau.de/javascript/typescript-lernen-grundlagen/"
    },
    {
        question: "Was ist TypeScript?",
        answers: [
            { text: "Erweiterung von JavaScript", correct: true },
            { text: "Ersatzsprache für JavaScript", correct: false },
            { text: "Komplexere Programmiersprache als JavaScript", correct: false },
            { text: "Vereinfachte Programmiersprache zu JavaScript", correct: false },
        ],
        link: "https://t3n.de/news/eigentlich-typescript-859869/"
    },
    {
        question: "Wozu dient der Befehl 'tsc' im Kontext von TypeScript?",
        answers: [
            { text: "Um TS-Code in JS-Code zu transpilieren", correct: true },
            { text: "Um TS-Code auszuführen", correct: false },
            { text: "Um Fehler im TS-Code zu finden", correct: false },
            { text: "Um TS-Code zu komprimieren", correct: false },
        ],
        link: "https://code.visualstudio.com/docs/typescript/typescript-compiling"
    },
    {
        question: "Kann man TS ohne transpilieren direkt in einem Browser ausführen?",
        answers: [
            { text: "Nein", correct: true },
            { text: "Ja", correct: false },
            { text: "Nur Teils", correct: false },
            { text: "Kommt auf den Browser an", correct: false },
        ],
        link: "https://www.helmbergers.com/ts-node"
    },
    {
        question: "Kann man existierenden JS-Code in TS umwandeln?",
        answers: [
            { text: "Ja, er kann in TS umgewandelt werden", correct: true },
            { text: "Nein, er kann nicht in TS umgewandelt werden", correct: false },
            { text: "Ja, aber nur mit bestimmten Tools oder Methoden", correct: false },
            { text: "Nein, er muss neu geschrieben werden, um in TS verwendet zu werden", correct: false },
        ],
        link: "https://www.computerwoche.de/a/was-javascript-von-typescript-unterscheidet,3548614"
    },
];
//5 Gemischte Fragen
let mixedQuestions = [
    {
        question: "Was ist HTML?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyperlink Text Markup Language", correct: false },
            { text: "Hypertext Media Language", correct: false },
            { text: "Hyperlink Text Media Language", correct: false },
        ],
        link: "HTML ist Auszeichnungprache zur Strukturierung von Webseiten: https://www.schulhomepage.de/webdesign/html"
    },
    {
        question: "Wie wird eine ID im CSS ausgewählt?",
        answers: [
            { text: "#id", correct: true },
            { text: ".class", correct: false },
            { text: "element", correct: false },
            { text: "*", correct: false }
        ],
        link: "https://www.w3schools.com/cssref/sel_id.php"
    },
    {
        question: "Wie kann man die Hintergrundfarbe ändern?",
        answers: [
            { text: "background-color", correct: true },
            { text: "color", correct: false },
            { text: "backcolor", correct: false },
            { text: "font-color", correct: false },
        ],
        link: "https://www.w3schools.com/css/css_background.asp"
    },
    {
        question: "Wie wird eine Variable in TypeScript deklariert?",
        answers: [
            { text: "var variableName", correct: false },
            { text: "let variableName", correct: false },
            { text: "const variableName", correct: false },
            { text: "let variableName: type", correct: true }
        ],
        link: "https://digitale-rundschau.de/javascript/typescript-lernen-grundlagen/"
    },
    {
        question: "Was ist TypeScript?",
        answers: [
            { text: "Erweiterung von JavaScript", correct: true },
            { text: "Ersatzsprache für JavaScript", correct: false },
            { text: "Komplexere Programmiersprache als JavaScript", correct: false },
            { text: "Vereinfachte Programmiersprache zu JavaScript", correct: false },
        ],
        link: "https://t3n.de/news/eigentlich-typescript-859869/"
    },
];
//HTML Klick Events auf die Buttons legen
htmlButton.addEventListener("click", () => {
    category = "html";
    questions = htmlQuestions;
    startQuiz();
});
cssButton.addEventListener("click", () => {
    category = "css";
    questions = cssQuestions;
    startQuiz();
});
typescriptButton.addEventListener("click", () => {
    category = "typescript";
    questions = typescriptQuestions;
    startQuiz();
});
mixedButton.addEventListener("click", () => {
    category = "mixed";
    questions = mixedQuestions;
    startQuiz();
});
//Funktion wird aufgerufen, wenn eine Kategorie ausgewählt wird.
//Sie stellt die Fragen-Sektion sichtbar und mischt die Fragen mit der Funktion shuffleQuestions().
//Dann wird die erste Frage mit der Funktion showQuestion() angezeigt.
function startQuiz() {
    questionSection.style.display = "block";
    currentQuestion = 0;
    shuffleQuestions();
    showQuestion();
}
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}
function showQuestion() {
    const current = questions[currentQuestion];
    question.innerText = current.question;
    shuffleAnswers(current.answers);
    answer1.innerText = current.answers[0].text;
    answer2.innerText = current.answers[1].text;
    answer3.innerText = current.answers[2].text;
    answer4.innerText = current.answers[3].text;
    answer1.addEventListener("click", checkAnswer);
    answer2.addEventListener("click", checkAnswer);
    answer3.addEventListener("click", checkAnswer);
    answer4.addEventListener("click", checkAnswer);
}
function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
}
//Funktion wird aufgerufen, wenn eine Antwort ausgewählt wird. Sie überprüft, ob die ausgewählte Antwort korrekt ist,
//und gibt dem Benutzer eine Rückmeldung entsprechend. Es erhöht den Punktestand, wenn die Antwort korrekt ist,
//und geht zur nächsten Frage oder beendet die Runde, wenn alle Fragen beantwortet wurden.
function checkAnswer(event) {
    const clickedButton = event.target;
    const clickedAnswer = clickedButton.innerText;
    const correct = questions[currentQuestion].answers.find(a => a.text === clickedAnswer).correct;
    if (correct) {
        score++;
        scoreNumber.textContent = score.toString();
        alert("Richtige Antwort, zum nachlesen: " + questions[currentQuestion].link);
    }
    else {
        alert("Leider falsch, die richtige Antwort war: " + questions[currentQuestion].answers.find(a => a.correct).text);
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }
    if (score == 5) {
        alert("Herzlichen Glückwunsch! Du hast die Runde abgeschlossen und erreichst " + score + " Punkte");
        questionSection.style.display = "none";
        score = 0;
        scoreNumber.textContent = score.toString();
    }
    else {
        showQuestion();
    }
}
//# sourceMappingURL=script.js.map