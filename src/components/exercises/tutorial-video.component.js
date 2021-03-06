import React from 'react';
import { View } from 'react-native';
import Video from '../common/Video';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export const TutorialVideo = ({ setState, submit, video }) => {
  return (
    <PortraitScreenOrientation>
      <View style={styles.container}>
        <Video video={video} onPlayEnd={() => submit()} />
      </View>
    </PortraitScreenOrientation>
  );
};
