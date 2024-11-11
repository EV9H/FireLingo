import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { H1,H2 } from '~/components/ui/typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '~/components/ui/text';
import { Textarea } from '~/components/ui/textarea';

const videoData = {
  '1': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  '2': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  '3': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  '4': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
};

export default function VideoScreen() {
  const { id } = useLocalSearchParams();
  const videoUrl = videoData[id as string] || '';
  const [value, setValue] = React.useState('');

  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: `课程视频 ${id}`,
      headerBackTitle: '返回',
    });
  }, [navigation, id]);

  return (
    <SafeAreaView style={styles.container}>
      <H2>课程视频 {id}</H2>
      <Text className='pt-4 pb-4 pl-2'> 课程介绍</Text>
      <Video
        source={{ uri: videoUrl }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        shouldPlay
      />
      <Text className='pt-4 pb-4 pl-2'>评论</Text>
      <Textarea
        // ref={inputRef}
        placeholder='Write some stuff...'
        value={value}
        onChangeText={setValue}
        aria-labelledby='textareaLabel'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  video: { width: '100%', height: 300 },
});
