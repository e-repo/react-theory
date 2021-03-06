import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuize from '../../components/FinishedQuiz/FinishedQuiz'
import axios from '../../axios/axios-quiz'
import Loader from "../../components/UI/Loader/Loader"

class Quiz extends Component {
  state = {
    results: {}, // {[id]: success error}
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [],
	  loading: true,
    // quiz: [
    //   {
    //     question: 'Какого цвета небо?',
    //     rightAnswerID: 2,
    //     id: 1,
    //     answers: [
    //       {text: 'Черный', id: 1},
    //       {text: 'Синий', id: 2},
    //       {text: 'Красный', id: 3},
    //       {text: 'Зеленый', id: 4},
    //     ]
    //   },
    //   {
    //     question: 'В каком году основали Санкт-Петербург?',
    //     rightAnswerID: 3,
    //     id: 2,
    //     answers: [
    //       {text: '1700', id: 1},
    //       {text: '1702', id: 2},
    //       {text: '1703', id: 3},
    //       {text: '1803', id: 4},
    //     ]
    //   }
    // ]
  }

	retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
      const quiz = response.data

      this.setState({
        quiz,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  onAnswerClickHandler = (answerID) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerID === answerID) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {[answerID]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout);
      }, 1000)
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerID]: 'error'},
        results,
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    console.log(this.state.quiz)
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {
            this.state.loading
              ? <Loader/>
              : this.state.isFinished
	            ? <FinishedQuize
                results = {this.state.results}
                quiz = {this.state.quiz}
                onRetry = {this.retryHandler}
              />
	            : <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizeLenght={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }
        </div>
      </div>
    )
  }
}

export default Quiz
