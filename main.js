// init

console.log('__x')

const testQuiz = document.querySelector('.quiz-test')
const quizBox = document.querySelector('.quizbox')

const quizBase = [
  {
    question:
      '1. В выборе одежды вы полагаетесь на свой вкус, а не на «предписания моды»?',
    a: 1,
    b: 2,
  },
  {
    question: '2. Вы любите помечтать перед сном, лёжа в постели?',
    a: 2,
    b: 0,
  },
  {
    question: '3. Вы рисуете во время собраний, заседаний или планёрок?',
    a: 1,
    b: 0,
  },
  {
    question: '4. У вас размашистый почерк?',
    a: 1,
    b: 0,
  },
  {
    question:
      '5. Рассказывая о каком-то реальном случае, вы прибегаете к вымышленным подробностям?',
    a: 2,
    b: 0,
  },
  {
    question: '6. Вы любите читать фэнтези?',
    a: 2,
    b: 0,
  },
  {
    question: '7. Вы любите мелодрамы?',
    a: 2,
    b: 0,
  },
  {
    question: '8. Вы обладаете артистическими наклонностями?',
    a: 2,
    b: 0,
  },
  {
    question: '9. Вы верите в судьбу?',
    a: 2,
    b: 0,
  },
  {
    question: '10. Вы часто видите необычные, фантастические сны?',
    a: 2,
    b: 0,
  },
  {
    question:
      '11. Когда вы слушаете музыку, возникают ли у вас какие-нибудь образы, связанные с мелодией?',
    a: 2,
    b: 0,
  },
]

quizBase.forEach((quiz, index) => {
  const newQuiz = testQuiz.cloneNode(true)
  const question = newQuiz.querySelector('.quiz__question .question__text')
  const radio1 = newQuiz.querySelector('.quiz__form .form__line:nth-child(1)')
  const radio2 = newQuiz.querySelector('.quiz__form .form__line:nth-child(2)')
  const lentaText = newQuiz.querySelector('.quiz__lenta .lenta__text')
  const prevBtn = newQuiz.querySelector('.btn-prev')
  const nextBtn = newQuiz.querySelector('.btn-next')

  question.innerText = quiz.question
  radio1.value = String(quiz.a)
  radio2.value = String(quiz.b)
  lentaText.innerText = `Вопрос ${index + 1} из 11`

  newQuiz.classList.remove('quiz-test')
  // newQuiz.classList.remove('hidden')
  newQuiz.classList.add('real-quiz')
  newQuiz.classList.add('quiz')
  newQuiz.classList.add('quiz-item')

  if (index === 0) {
    prevBtn.setAttribute('disabled', true)
  }
  if (index === 10) {
    nextBtn.setAttribute('disabled', true)

    // newQuiz.classList.remove('hidden') // temp
    // newQuiz.classList.add('fadein') // temp
  }

  quizBox.appendChild(newQuiz)
})

// end init

let c = -1
const startQuiz = document.querySelector('.quiz-start')
const startBtn = document.querySelector('.quiz-btn-start')
const allQuizes = document.querySelectorAll('.real-quiz')
const allNextBtns = document.querySelectorAll('.btn-next')
const allPrevBtns = document.querySelectorAll('.btn-prev')
const finishBtn = document.querySelectorAll('.finish-btn')[11]
console.log(finishBtn)

function onStartClickHandler() {
  c = c + 1
  startQuiz.classList.add('fadeout')
  setTimeout(() => startQuiz.classList.add('hidden'), 400)
  setTimeout(() => allQuizes[c].classList.remove('hidden'), 450)
  setTimeout(() => allQuizes[c].classList.add('fadein'), 450)
}

function onNextClickHandler() {
  c = c + 1
  allQuizes[c-1].classList.remove('fadein')
  allQuizes[c-1].classList.add('fadeout')
  setTimeout(() => allQuizes[c-1].classList.add('hidden'), 400)
  setTimeout(() => allQuizes[c].classList.remove('hidden'), 450)
  setTimeout(() => allQuizes[c].classList.add('fadein'), 450)
}

function onPrevClickHandler() {
  c = c - 1
  allQuizes[c+1].classList.remove('fadein')
  allQuizes[c+1].classList.add('fadeout')
  setTimeout(() => allQuizes[c+1].classList.add('hidden'), 400)
  setTimeout(() => allQuizes[c].classList.remove('hidden'), 450)
  setTimeout(() => allQuizes[c].classList.add('fadein'), 450)
}

function onFinishClickHandler() {
  console.log('in finish')
  const temp1 = document.querySelectorAll('input')
  const allCheckedInputs = []
  for (let i = 0; i < temp1.length; i++) {
    if(temp1[i].checked) {
      allCheckedInputs.push(temp1[i])
    }
  }

  if (allCheckedInputs.length !== 11) {
    window.alert('Вы не ответили на все вопросы.')
  } else if (allCheckedInputs.length === 11) {
    window.alert('Success!')
  }
}

allNextBtns.forEach((item) => {
  item.addEventListener('click', onNextClickHandler)
})

allPrevBtns.forEach((item) => {
  item.addEventListener('click', onPrevClickHandler)
})

startBtn.addEventListener('click', onStartClickHandler)

finishBtn.addEventListener('click', onFinishClickHandler)
