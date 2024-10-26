// src/screens/CourseDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from './navigation';

type CourseDetailScreenProps = {
  route: RouteProp<StackParamList, 'CourseDetail'>;
};

const CourseDetailScreen: React.FC<CourseDetailScreenProps> = ({ route }) => {
  const { courseName, fee } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{courseName}</Text>
      <Text>Fees: R{fee}</Text>
      <Text>Details of the {courseName} course...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default CourseDetailScreen;
