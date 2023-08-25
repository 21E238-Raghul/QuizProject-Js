// Questions that will be asked
let Questions = [{
	q: "Javascript is an _______ language?",
	a: [{ text: "Object-Oriented", isCorrect: true },
	{ text: "Object-Based", isCorrect: false },
	{ text: "Procedural", isCorrect: false },
	{ text: "None of the above", isCorrect: false }]
},
{
	q: "Which of the following keywords is used to define a variable in Javascript?",
	a: [{ text: "var", isCorrect: false, isSelected: false },
	{ text: "let", isCorrect: false },
	{ text: "Both a and b", isCorrect: true },
	{ text: "none", isCorrect: false }]

},
{
	q: "Which of the following methods can be used to display data in some form using Javascript?",
	a: [{ text: "documennt.write()", isCorrect: false },
	{ text: "console.log()", isCorrect: false },
	{ text: "window.alert()", isCorrect: false },
	{ text: "All of the above", isCorrect: true }]
},
{
    q:"How can a datatype be declared to be a constant type?",
    a:[{text:"const",isCorrect:true},
    {text:"var",isCorrect:false},
    {text:"let",isCorrect:false},
    {text:"constant",isCorrect:false}]
},
{
q:"What keyword is used to check whether a given property is valid or not?",
    a:[{text:"in",isCorrect:true},
    {text:"of",isCorrect:false},
    {text:"lies",isCorrect:false},
    {text:"exists",isCorrect:false}]
}
]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
