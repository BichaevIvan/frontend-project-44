import Greetings from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { getRamdomNumber, gitPrime} from '../math.js';

const prime = () => {
  const userName = Greetings('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRamdomNumber();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = gitPrime(randomNumber);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};
export default prime;
