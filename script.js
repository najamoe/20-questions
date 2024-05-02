
class Node {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.yes = null;
        this.no = null;
    }
}

const questionTree = {
    question: "Er det et pattedyr?",
    yes: {
        question: "Bor det i vandet?",
        yes: {
            question: "Er det en hval?",
            yes: "Hval",
            no: "Sæl"
        },
        no: {
            question: "Er det et stort landområde?",
            yes: {
                question: "Er det en elefant?",
                yes: "Elefant",
                no: "Næsehorn"
            },
            no: {
                question: "Er det et husdyr?",
                yes: "Ko",
                no: "Giraf"
            }
        }
    },
    no: {
        question: "Er det en fugl?",
        yes: {
            question: "Kan den ikke flyve?",
            yes: "Pingvin",
            no: "Spurv"
        },
        no: {
            question: "Har det skæl?",
            yes: "Slange",
            no: "Frø"
        }
    }
};


let currentNode = questionTree;
let guessCount = 0;


function displayQuestion() {
    document.getElementById("question").textContent = currentNode.question;
    document.getElementById("question").style.display = "block";
    document.getElementById("yesBtn").style.display = "inline-block";
    document.getElementById("noBtn").style.display = "inline-block";
    document.getElementById("counter").style.display = "block";
    document.getElementById("guessCount").textContent = guessCount;
}


function answerQuestion(answer) {
    if (currentNode && typeof currentNode !== "string") {
        if (answer.toLowerCase() === "ja") {
            currentNode = currentNode.yes;
        } else {
            currentNode = currentNode.no;
        }
        guessCount++;
        displayQuestion();
    }
}


function restartGame() {
    currentNode = questionTree;
    guessCount = 0;
    document.getElementById("guessCount").textContent = guessCount;
    displayQuestion();
}


function startGame() {
    document.getElementById("play").style.display = "none";
    displayQuestion();
}
