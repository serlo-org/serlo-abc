import { filter, identity, indexOf, map, times, without } from 'ramda';
import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class MissingLetter extends AbstractExerciseGroup {
  protected generateExercises() {
    const numberOfOldWords: number = 6;
    const oldWords = sample(
      without(this.newVocabulary, this.vocabulary),
      numberOfOldWords
    );
    const words = sample(
      [...oldWords, ...this.newVocabulary],
      this.newVocabulary.length + numberOfOldWords
    );

    const version = sample(['a', 'b'], 1);
    const text: string =
      this.props.difficulty < 0.2
        ? 'Ergänzen Sie den fehlenden Buchstaben.'
        : 'Ergänzen Sie die fehlenden Buchstaben.';

    const sound: string =
      this.props.difficulty < 0.2
        ? `exercises_ergaenzen_sie_den_fehlenden_buchstaben_${version}`
        : `exercises_ergaenzen_sie_die_fehlenden_buchstaben_${version}`;

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text,
        sound
      }),
      ...map(word => {
        const wordLetters = word.split('');

        const numberOfOptions: number = 3;
        const numberMissing: number =
          this.props.difficulty < 0.2
            ? 1
            : this.props.difficulty < 0.4
              ? 2
              : this.props.difficulty < 0.6
                ? 3
                : this.props.difficulty < 0.8 ? 4 : wordLetters.length;
        const knownLettersInWord = filter(
          i => indexOf(wordLetters[i], this.letters) !== -1,
          times(identity, wordLetters.length)
        );
        const missing = sample(knownLettersInWord, numberMissing);
        const options = map(
          missingLetterIndex =>
            sample(
              [
                ...sample(
                  without([wordLetters[missingLetterIndex]], this.letters),
                  numberOfOptions - 1
                ),
                wordLetters[missingLetterIndex]
              ],
              numberOfOptions
            ),
          missing
        );
        return this.createExercise(ExerciseTypes.MissingText, {
          type: 'MissingText',
          word,
          text: wordLetters,
          missing,
          options
        });
      }, words)
    ];
  }
}