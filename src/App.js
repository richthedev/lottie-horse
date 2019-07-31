import React from 'react'
import Lottie from 'react-lottie'
import './App.css'
import Question from './Question'
import horseAnimation from './animations/rocking-horse.json'

const questions = [
  {
    text: 'Combien de mains faisait le plus grand cheval du monde ?',
    answers: [ {text: '16 mains'}, {text: '2 pieds'}, {text: '21.2 1⁄2 mains', correct: true} ]
  },
  {
    text: 'Quel est le féminin de cheval ?',
    answers: [ {text: 'jument', correct: true}, {text: 'chevale avec un e'}, {text: 'pouliche'} ]
  },
  {
    text: 'Au gallop, aucune des quatres pattes du cheval ne touchent le sol ?',
    answers: [ {text: 'vrai', correct: true}, {text: 'faux'} ]
  },
  {
    text: 'Un cheval dort TOUJOURS debout ?',
    answers: [ {text: 'vrai'}, {text: 'faux', correct: true} ]
  },
  {
    text: 'De quelle couleur était le cheval blanc de Napoléon ?',
    answers: [ {text: 'brun'}, {text: 'blanc', correct: true} ]
  },
]

function App() {
  const [isPaused, setPaused] = React.useState(true)
  const [questionIndex, setQuestionIndex] = React.useState(0)
  const [score, setScore] = React.useState(0)

  const question = questions[questionIndex]

  const correctAnswer = () => {
    setScore(score + 1)
  }

  const nextQuestion = () => setQuestionIndex(questionIndex + 1)

  return (
    <div className='App'>
      <div onMouseEnter={() => setPaused(false)}
            onMouseLeave={() => setPaused(true)}>
        <Lottie options={{
                  animationData: horseAnimation,
                  autoplay: false,
                }}
                width={250}
                isClickToPauseDisabled={true}
                isPaused={isPaused} />
      </div>
      <div><small>hover the horse ^^</small></div>
      <h1>Le jeu du cheval</h1>
      {question &&
        <Question question={question} correctAnswer={() => correctAnswer()} nextQuestion={() => nextQuestion()}/>
      }
      {!question &&
        <p>Merci d'avoir joué !</p>
      }
      <h3>{score}/{questions.length}</h3>
    </div>
  )
}

export default App
