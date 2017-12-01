import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { capitalizeFirstLetter } from '../word/helpers';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class WriteLetter extends AbstractExerciseGroup {
  protected generateExercises() {
    const letter: string = this.props.letter.toLowerCase();

    const version = sample(['a', 'b'], 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: 'Schreiben Sie den Buchstaben.',
        sound: `exercises_schreiben_sie_den_buchstaben_${version}`
      }),
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'TutorialVideo',
        video: 'explanation_write_letter'
      }),
      this.createExercise(ExerciseTypes.Canvas, {
        type: 'WriteLetter',
        letter: capitalizeFirstLetter(letter)
      }),
      this.createExercise(ExerciseTypes.Canvas, {
        type: 'WriteLetter',
        letter: capitalizeFirstLetter(letter)
      }),
      this.createExercise(ExerciseTypes.Canvas, {
        type: 'WriteLetter',
        letter: capitalizeFirstLetter(letter)
      }),
      this.createExercise(ExerciseTypes.Canvas, {
        type: 'WriteLetter',
        letter
      }),
      this.createExercise(ExerciseTypes.Canvas, {
        type: 'WriteLetter',
        letter
      }),
      this.createExercise(ExerciseTypes.Canvas, {
        type: 'WriteLetter',
        letter
      })
    ];
  }
}