function QuestionTestHandler() {
    const startButton = document.getElementById('start-btn')
    const nextButton = document.getElementById('next-btn')
    const resultButton = document.getElementById('result-btn')
    const questionContainerElement = document.getElementById('question-container')
    const questionElement = document.getElementById('question')
    const answerButtonElement  = document.getElementById('answer-buttons')

    let correctAnswer = 0

    let shuffledQuestions, currentQuestionIndex

    startButton.addEventListener('click', startGame)
    
    nextButton.addEventListener('click', ()=>{
        currentQuestionIndex++
        setNextQuestion()
    })

    resultButton.addEventListener('click', showResult)

    function startGame() {
        startButton.classList.add('hide')
        shuffledQuestions = questions.sort(()=> Math.random() -  .5)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        setNextQuestion()
    }


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetState() {
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function showQuestion(question) {
    questionElement.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.value = answer.iscorrect
        button.classList.add('button')
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function selectAnswer(e) {
    const selectedButton = e.target
    Array.from(answerButtonElement.children).forEach(button => {
        if (button == selectedButton) {
            selectedButton.classList.add('btn-selected')
        }else {
                button.classList.remove('btn-selected')
            }
    })
    let correct = selectedButton.value

    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        nextButton.classList.add('hide')
        resultButton.classList.remove('hide')
    }
    checkAnswer(correct)
}

function checkAnswer(correct) {
    if (correct == "true") {
        correctAnswer ++
    }
}

function showResult() {
    questionContainerElement.classList.add('hide')

    if(correctAnswer < 11) {
        resultButton.innerHTML = `Ch??c m???ng b???n ho??n th??nh b??i test! B???n tr??? l???i ????ng ???????c ${correctAnswer} trong t???ng s??? 15 c??u h???i.
                              Tham gia kho?? h???c s??? gi??p b???n c?? ???????c n???n t???ng t???t h??n cho c??c kho?? h???c n??ng cao kh??c.
                              <br>
                              Ki???m tra l???i b??i test t???i ????y: <a href="test.html">test</a>`
    } else {
        resultButton.innerHTML = `Ch??c m???ng b???n ho??n th??nh b??i test! B???n tr??? l???i ????ng ???????c ${correctAnswer} trong t???ng s??? 15 c??u h???i
                                V???i tr??nh ????? hi???n t???i, b???n n??n tham gia c??c kho?? h???c n??ng cao kh??c!`
        }   
    
}

const questions = [
    {
        question: `Ch???n lo???i t??? ????ng cho t??? ???????c in hoa trong c??u: <br> <br> The <b>BROWN</b> fox ran quickly through the woods`,
        answers: [
            {text: 'Verb',  iscorrect: false},
            {text:'Noun', iscorrect: false},
            {text:'Adverb', iscorrect: false},
            {text:'Adjective', iscorrect: true}
        ]
    },
    {
        question: `Ch???n lo???i t??? ????ng cho t??? ???????c in hoa trong c??u: <br> <br> The brown fox ran quickly through the <b>WOODS</b>`,
        answers: [
            {text: 'Verb',  iscorrect: false},
            {text:'Noun', iscorrect: true},
            {text:'Adverb', iscorrect: false},
            {text:'Adjective', iscorrect: false}
        ]
    },
    {
        question: `Ch???n lo???i t??? ????ng cho t??? ???????c in hoa trong c??u: <br> <br>The grey skies <b>CLEARED</b> and the sun shone brightly`,
        answers: [
            {text: 'Verb',  iscorrect: true},
            {text:'Noun', iscorrect: false},
            {text:'Adverb', iscorrect: false},
            {text:'Adjective', iscorrect: false}
        ]
    },
    {
        question: `Ch???n lo???i t??? ????ng cho t??? ???????c in hoa trong c??u: <br> <br>The grey skies cleared and the sun shone <b>BRIGHTLY</b>`,
        answers: [
            {text: 'Verb',  iscorrect: false},
            {text:'Noun', iscorrect: false},
            {text:'Adverb', iscorrect: true},
            {text:'Adjective', iscorrect: false}
        ]
    },
    {
        question: `Ch???n ????p ??n thay th??? cho t??? ???????c g???ch ch??n trong c??u d?????i ????y: <br> <br>Mr. Nam <u><i>planning</i></u> to teach a course in chemistry next semester`,
        answers: [
            {text: 'planning',  iscorrect: false},
            {text:'are planning', iscorrect: false},
            {text:'plans', iscorrect: true},
            {text:'with a plan', iscorrect: false}
        ]
    },
    {
        question: `Ch???n ????p ??n thay th??? cho t??? ???????c g???ch ch??n trong c??u d?????i ????y: <br> <br>Becoming as a mother has taught me <u><i>to raise my kids, doing housework, and how to be more responsible for my life.</i></u>`,
        answers: [
            {text: 'planning to raise my kids,  doing housework, and how to be more responsible for my life.',  iscorrect: false},
            {text:'How to raise my kids, doing housework, and being more responsible for my life.', iscorrect: false},
            {text:'How to raise my kids , how to do housework, and how to be more responsible for my life.', iscorrect: true},
            {text:'Rasing my kids, doing housework, and being more responsilbe for my life.', iscorrect: false}
        ]
    },
    {
        question: `Ch???n ????p ??n thay th??? cho t??? ???????c g???ch ch??n trong c??u d?????i ????y: <br><br>These <u><i>books, which was published in the late eighteenth century,</i></u> are very valuable.`,
        answers: [
            {text: 'Books which was published in the late eighteenth century',  iscorrect: false},
            {text:'Books in the late eighteenth century', iscorrect: false},
            {text:'Books which were published', iscorrect: true},
            {text:'Books, which is published, in the eighteenth century', iscorrect: false}
        ]
    },
    {
        question: `Ch???n ????p ??n thay th??? cho t??? ???????c g???ch ch??n trong c??u d?????i ????y: <br> <br>If you want to create a beautiful room, having a lot of money is not nearly so important to the finished setting <u><i>as is the knowledge of basic decorating</i></u>`,
        answers: [
            {text: 'As is the knowledge of basic decorating',  iscorrect: false},
            {text:'As knowing the basics of decorating', iscorrect: true},
            {text:'But the knowledge of basic decorating', iscorrect: false},
            {text:'Like the knowledge of basic decorating', iscorrect: false}
        ]
    },
    {
        question: 'Ho??n th??nh c??u b???ng c??ch ch???n ????p ??n cho ch??? tr???ng trong c??u:<br><br> When you phoned, I ?????? a shower',
        answers: [
            {text: 'was having',  iscorrect: true},
            {text:'am having', iscorrect: false},
            {text:'had', iscorrect: false},
            {text:'will have', iscorrect: false}
        ]
    },
    {
        question: 'Ho??n th??nh c??u b???ng c??ch ch???n ????p ??n cho ch??? tr???ng trong c??u:<br><br> They ?????? the French course yet.',
        answers: [
            {text: 'had not started',  iscorrect: false},
            {text:'have start', iscorrect: false},
            {text:'will have been started', iscorrect: false},
            {text:'have not started', iscorrect: true}
        ]
    },
    {
        question: 'Ho??n th??nh c??u b???ng c??ch ch???n ????p ??n cho ch??? tr???ng trong c??u:<br><br> My family ???.. In Australia for a year when I was a child',
        answers: [
            {text: 'was living',  iscorrect: false},
            {text:'lives', iscorrect: false},
            {text:'have lived', iscorrect: false},
            {text:'lived', iscorrect: true}
        ]
    },
    {
        question: `<b>Son</b> v?? <b>Sun</b> c?? c??ch ph??t ??m gi???ng nhau?`,
        answers: [
            {text: '????ng',  iscorrect: true},
            {text:'Sai', iscorrect: false}
        ]
    },
    {
        question: `<b>Where</b> v?? <b>Were</b> c?? ph??t ??m gi???ng nhau?`,
        answers: [
            {text: '????ng',  iscorrect: false},
            {text:'Sai', iscorrect: true}
        ]
    },
    {
        question: `<b>Of</b> c?? ??m f hay ??m v?`,
        answers: [
            {text: 'f',  iscorrect: false},
            {text:'v', iscorrect: true}
        ]
    },
    {
        question: `<b>Any</b> ???????c ph??t ??m gi???ng <b>penny</b> hay <b>nanny</b>?`,
        answers: [
            {text: 'penny',  iscorrect: true},
            {text:'nanny', iscorrect: false}
        ]
    },
]

}


export {
    QuestionTestHandler
}
