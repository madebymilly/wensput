import { allQuestions } from '../data/questions'
import { getRandomItems, shuffle } from '../js/helpers'

import { NUM_OF_Q } from '../config/settings';

function useGetQuestions() {

  // Filter required questions:
  const requiredQuestions = allQuestions.filter(question => question.required)

  // Filter unrequired questions, get as many as settings.numberOfQuestions minus number of required questions:
  const randomQuestions = getRandomItems(allQuestions.filter(question => !question.required), NUM_OF_Q - requiredQuestions.length)

  // Combine required and unrequired questions + shuffle:
  const questions = shuffle(requiredQuestions.concat(randomQuestions))
  //const questions = requiredQuestions // only required questions for now

  // Give all questions an id
  questions.map((question, i) => question.id = i + 1)

  return questions;
}

export default useGetQuestions;
