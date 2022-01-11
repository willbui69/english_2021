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
        button.classList.add('btn')
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
        resultButton.innerHTML = `Chúc mừng bạn hoàn thành bài test! Bạn trả lời đúng được ${correctAnswer} trong tổng số 15 câu hỏi.
                              Tham gia khoá học sẽ giúp bạn có được nền tảng tốt hơn cho các khoá học nâng cao khác.
                              Tìm hiểu thêm khoá học tại: <a href="startpage.html">đây</a><br>
                              Kiểm tra lại bài test tại đây: <a href="test.html">test</a>`
    } else {
        resultButton.innerHTML = `Chúc mừng bạn hoàn thành bài test! Bạn trả lời đúng được ${correctAnswer} trong tổng số 15 câu hỏi
                                Với trình độ hiện tại, bạn nên tham gia các khoá học nâng cao khác!`
        }   
    
}

const questions = [
    {
        question: `Chọn loại từ đúng cho từ được in hoa trong câu: <br> <br> The <b>BROWN</b> fox ran quickly through the woods`,
        answers: [
            {text: 'Verb',  iscorrect: false},
            {text:'Noun', iscorrect: false},
            {text:'Adverb', iscorrect: false},
            {text:'Adjective', iscorrect: true}
        ]
    },
    {
        question: `Chọn loại từ đúng cho từ được in hoa trong câu: <br> <br> The brown fox ran quickly through the <b>WOODS</b>`,
        answers: [
            {text: 'Verb',  iscorrect: false},
            {text:'Noun', iscorrect: true},
            {text:'Adverb', iscorrect: false},
            {text:'Adjective', iscorrect: false}
        ]
    },
    {
        question: `Chọn loại từ đúng cho từ được in hoa trong câu: <br> <br>The grey skies <b>CLEARED</b> and the sun shone brightly`,
        answers: [
            {text: 'Verb',  iscorrect: true},
            {text:'Noun', iscorrect: false},
            {text:'Adverb', iscorrect: false},
            {text:'Adjective', iscorrect: false}
        ]
    },
    {
        question: `Chọn loại từ đúng cho từ được in hoa trong câu: <br> <br>The grey skies cleared and the sun shone <b>BRIGHTLY</b>`,
        answers: [
            {text: 'Verb',  iscorrect: false},
            {text:'Noun', iscorrect: false},
            {text:'Adverb', iscorrect: true},
            {text:'Adjective', iscorrect: false}
        ]
    },
    {
        question: `Chọn đáp án thay thế cho từ được gạch chân trong câu dưới đây: <br> <br>Mr. Nam <u><i>planning</i></u> to teach a course in chemistry next semester`,
        answers: [
            {text: 'planning',  iscorrect: false},
            {text:'are planning', iscorrect: false},
            {text:'plans', iscorrect: true},
            {text:'with a plan', iscorrect: false}
        ]
    },
    {
        question: `Chọn đáp án thay thế cho từ được gạch chân trong câu dưới đây: <br> <br>Working as a receptionist for my uncle’s business taught me <u><i>to handle customer complaints, answering the telephone, and how to maintain a Rolodex.</i></u>`,
        answers: [
            {text: 'planning to handle customer complaints, answering the telephone, and how to maintain a Rolodex.',  iscorrect: false},
            {text:'How to handle customer complaints, answering telephone, and maintaining a Rolodex.', iscorrect: false},
            {text:'How to handle customer complaints, how to answer the telephone, and how to maintain Rolodex.', iscorrect: true},
            {text:'Handling customer complaints, answering the telephone, and maintenance of Rolodex.', iscorrect: false}
        ]
    },
    {
        question: `Chọn đáp án thay thế cho từ được gạch chân trong câu dưới đây: <br><br>These <u><i>books, which was published in the late eighteenth century,</i></u> are very valuable.`,
        answers: [
            {text: 'Books which was published in the late eighteenth century',  iscorrect: false},
            {text:'Books in the late eighteenth century', iscorrect: false},
            {text:'Books which were published', iscorrect: true},
            {text:'Books, which is published, in the eighteenth century', iscorrect: false}
        ]
    },
    {
        question: `Chọn đáp án thay thế cho từ được gạch chân trong câu dưới đây: <br> <br>If you want to create a beautiful room, having a large sum of money is not nearly so important to the finished setting <u><i>as is the knowledge of basic decorating</i></u>`,
        answers: [
            {text: 'As is the knowledge of basic decorating',  iscorrect: false},
            {text:'As knowing the basics of decorating', iscorrect: true},
            {text:'But the knowledge of basic decorating', iscorrect: false},
            {text:'Like the knowledge of basic decorating', iscorrect: false}
        ]
    },
    {
        question: 'Hoàn thành câu bằng cách chọn đáp án cho chỗ trống trong câu:<br><br> When you phoned, I …… a shower',
        answers: [
            {text: 'was having',  iscorrect: true},
            {text:'am having', iscorrect: false},
            {text:'had', iscorrect: false},
            {text:'will have', iscorrect: false}
        ]
    },
    {
        question: 'Hoàn thành câu bằng cách chọn đáp án cho chỗ trống trong câu:<br><br> They …… the French course yet.',
        answers: [
            {text: 'had not started',  iscorrect: false},
            {text:'have start', iscorrect: false},
            {text:'will have been started', iscorrect: false},
            {text:'have not started', iscorrect: true}
        ]
    },
    {
        question: 'Hoàn thành câu bằng cách chọn đáp án cho chỗ trống trong câu:<br><br> My family ….. In Australia for a year when I was a child',
        answers: [
            {text: 'was living',  iscorrect: false},
            {text:'lives', iscorrect: false},
            {text:'have lived', iscorrect: false},
            {text:'lived', iscorrect: true}
        ]
    },
    {
        question: `<b>Son</b> và <b>Sun</b> có cách phát âm giống nhau?`,
        answers: [
            {text: 'Đúng',  iscorrect: true},
            {text:'Sai', iscorrect: false}
        ]
    },
    {
        question: `<b>Where</b> và <b>Were</b> có phát âm giống nhau?`,
        answers: [
            {text: 'Đúng',  iscorrect: false},
            {text:'Sai', iscorrect: true}
        ]
    },
    {
        question: `<b>Of</b> có âm f hay âm v?`,
        answers: [
            {text: 'f',  iscorrect: false},
            {text:'v', iscorrect: true}
        ]
    },
    {
        question: `<b>Any</b> được phát âm giống <b>penny</b> hay <b>nanny</b>?`,
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
