import * as React from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';

import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { useRouter } from 'expo-router';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { H1 } from '~/components/ui/typography';
import { Text } from '~/components/ui/text';
const { width: screenWidth } = Dimensions.get('window');

const videos = [
  { id: '1', title: 'Video 1', description: 'Description for Video 1', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  { id: '2', title: 'Video 2', description: 'Description for Video 2', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
  { id: '3', title: 'Video 3', description: 'Description for Video 3', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
  { id: '4', title: 'Video 4', description: 'Description for Video 4', videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
];


export default function TabsScreen() {
  const router = useRouter();
  const handleCardPress = (id: string) => {
    // Navigate to the video screen with the video ID
    router.push(`/video/${id}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.verticalScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            style={styles.fullWidthImage}
            source={{ uri: 'https://dummyimage.com/640x4:3' }}
          />
        </View>
        <H1 style={styles.title}>课程视频</H1>
        {/* Horizontal ScrollView for Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContainer}>
          {videos.map((video) => (
            <TouchableOpacity key={video.id} onPress={() => handleCardPress(video.id)}>
              <Card style={styles.card}>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent style={styles.cardContent}>
                  <Image style={styles.cardImage} source={{ uri: 'https://dummyimage.com/640x4:3' }} />
                </CardContent>
                {/* <CardFooter style={styles.cardFooter}>
                  <Button>
                    <Text>View Course</Text>
                  </Button>
                </CardFooter> */}
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <H1 style={styles.title}>More Courses</H1>

        {/* Second Horizontal ScrollView for More Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContainer}
        >
          {/* Card 3 */}
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle>Course 1</CardTitle>
              <CardDescription>Course Description Course Description Course Description</CardDescription>
            </CardHeader>
            <CardContent style={styles.cardContent}>
              <Image style={styles.cardImage} source={{ uri: 'https://dummyimage.com/640x4:3' }} />
            </CardContent>
            <CardFooter style={styles.cardFooter}>
              <Button>
                <Text>View Course</Text>
              </Button>
            </CardFooter>
          </Card>

          {/* Card 4 */}
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle>Course 2</CardTitle>
              <CardDescription>Course Description Course Description Course Description</CardDescription>
            </CardHeader>
            <CardContent style={styles.cardContent}>
              <Image style={styles.cardImage} source={{ uri: 'https://dummyimage.com/640x4:3' }} />
            </CardContent>
            <CardFooter style={styles.cardFooter}>
              <Button>
                <Text>View Course</Text>
              </Button>
            </CardFooter>
          </Card>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  verticalScroll: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    padding: 16,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  horizontalScrollContainer: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 12,
  },
  card: {
    width: 250,
    paddingBottom: 16,
  },
  cardContent: {
    paddingVertical: 8,
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardFooter: {
    paddingTop: 8,
  },
  fullWidthImage: {
    width: screenWidth,
    height: 200,
    resizeMode: 'cover',
  },
});
