/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import Video, {VideoRef} from 'react-native-video';
import {StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  const videoRef = useRef<VideoRef>(null);

  return (
    <Video
      // Can be a URL or a local file.
      source={{
        uri: 'https://static-akamai-dev.lemonadefashion.com/lfclips/2808/98265420-f510-4400-b086-7c94828b69c7/master.m3u8',
      }}
      resizeMode="contain"
      // Store reference
      ref={videoRef}
      // Callback when remote video is buffering
      //onBuffer={onBuffer}
      // Callback when video cannot be loaded
      //onError={onError}
      repeat={true}
      style={styles.backgroundVideo}
    />
  );
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
