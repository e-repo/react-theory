import axios from 'axios'

export default axios.create({
	baseURL: 'https://react-quiz-a04a4.firebaseio.com'
})