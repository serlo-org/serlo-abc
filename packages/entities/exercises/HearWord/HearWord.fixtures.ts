// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import { Fixtures } from '../helpers';
import { IProps, IState } from './HearWord';

const props: IProps = {
  words: [new Word('apfel'), new Word('nase'), new Word('ball')],
  correctIndex: 1
};

const fixtures: Fixtures<IProps, IState> = [
  {
    name: 'correct selected',
    props,
    state: { selectedIndex: 1, soundsPlayed: true },
    isCorrect: true
  },
  {
    name: 'wrong selected',
    props,
    state: { selectedIndex: 2, soundsPlayed: true },
    isCorrect: false
  }
];

export default fixtures;