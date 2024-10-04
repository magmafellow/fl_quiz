// init

console.log('__x')

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
    question: '11. Когда вы слушаете музыку, возникают ли у вас какие-нибудь образы, связанные с мелодией?',
    a: 2,
    b: 0,
  },
]

// end init

const testQuiz = document.querySelector('.quiz-test')
const quizBox = document.querySelector('.quizbox')

quizBase.forEach((quiz, index) => {
  const newQuiz = testQuiz.cloneNode(true)
  const question = newQuiz.querySelector('.quiz__question .question__text')
  const radio1 = newQuiz.querySelector('.quiz__form .form__line:nth-child(1)')
  const radio2 = newQuiz.querySelector('.quiz__form .form__line:nth-child(2)')
  const lentaText = newQuiz.querySelector('.quiz__lenta .lenta__text')
  
  question.innerText = quiz.question
  radio1.value = String(quiz.a)
  radio2.value = String(quiz.b)
  lentaText.innerText = `Вопрос ${index+1} из 11`

  newQuiz.classList.remove('quiz-test')
  newQuiz.classList.remove('hidden')
  
  quizBox.appendChild(newQuiz)
})






































