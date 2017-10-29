import { getWordObject } from '../../helpers/words.js';
import { Fixtures } from '../helpers';
import { IProps, IState } from './FindLetter';

const props = {
  word: getWordObject('ananas'),
  letter: 'A'
};

const fixtures: Fixtures<IProps, IState> = [
  {
    name: 'all correct letters',
    props,
    state: [true, false, true, false, true, false],
    isCorrect: true
  },
  {
    name: 'one wrong letter',
    state: [true, true, true, false, true, false],
    props,
    isCorrect: false
  },
  {
    name: 'some but not all correct letters',
    state: [true, false, false, false, true, false],
    props,
    isCorrect: false
  }
];

export default fixtures;
