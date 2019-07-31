import React from 'react';
import styled from 'styled-components'
import Lottie from 'react-lottie'
import correctAnimation from './animations/correct.json'
import errorAnimation from './animations/error.json'

const Button = styled.button`
  padding: 1rem;
  background-color: white;
  border: none;
  color: black;
  font-size: 2rem;
  margin: 0 1rem;
  cursor: pointer;
`

const Question = ({ question, correctAnswer, nextQuestion }) => {
  const { text, answers } = question
  const [isAnswered, setAnswered] = React.useState(false)
  const [isCorrect, setCorrect] = React.useState(false)

  const choose = answer => {
    setAnswered(true)
    setCorrect(answer.correct || false)
    if (answer.correct) {
      correctAnswer()
    }
  }

  const eventListeners = [{
    eventName: 'complete',
    callback: () => setTimeout(() => {
      setAnswered(false)
      nextQuestion(isCorrect)
    }, 300)
  }]

  const animationOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    animationData: isCorrect ? correctAnimation : errorAnimation,
  }

  return (
    <div>
      {!isAnswered &&
        <>
          <h2>{text}</h2>
          <div>
            {answers.map(answer => (
              <Button type='button'
                      key={answer.text}
                      onClick={() => choose(answer)}>{answer.text}</Button>
            ))}
          </div>
        </>
      }
      {isAnswered &&
        <Lottie options={animationOptions}
                eventListeners={eventListeners}
                height={400}
                width={400} />
      }
    </div>
  )
}

export default Question;
