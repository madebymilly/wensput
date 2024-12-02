import { getRandomItems } from '../js/helpers'

function useGetQuestions(allQuestions, numberOfQuestions) {

  // Filter required questions:
  const requiredQuestions = allQuestions.filter(question => question.required)

  // Filter unrequired questions, get as many as settings.numberOfQuestions minus number of required questions:
  const randomQuestions = getRandomItems(allQuestions.filter(question => !question.required), numberOfQuestions - requiredQuestions.length)

  // Combine required and unrequired questions + shuffle:
  const questions = requiredQuestions.concat(randomQuestions)

  // Give all questions an id
  questions.map((question, i) => question.id = i + 1)

  return questions;
}

export default useGetQuestions;
