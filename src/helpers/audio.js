import sounds from '../assets/sounds';

export const getSound = id => {
  return sounds[id];
};

export const play = sound =>
  new Promise(resolve => {
    sound.playFromPositionAsync(0);

    sound.setOnPlaybackStatusUpdate(status => {
      if (status.didJustFinish) {
        sound.stopAsync().then(() => resolve());
      }
    });
  });

export const playAll = (sounds, delay = 1000) =>
  new Promise(resolve => {
    const playAllRecursive = ([sound, ...rest]) => {
      play(sound).then(() => {
        if (rest.length === 0) {
          return resolve();
        }

        setTimeout(() => {
          playAllRecursive(rest, delay);
        }, delay);
      });
    };

    playAllRecursive(sounds);
  });
