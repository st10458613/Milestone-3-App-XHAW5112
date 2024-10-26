// src/screens/SixMonthCoursesScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackParamList } from './navigation';

type Props = {
  navigation: NativeStackNavigationProp<StackParamList, 'SixMonthCourses'>;
};

const SixMonthCoursesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Month Courses</Text>
      <Button title="First Aid" onPress={() => navigation.navigate('CourseDetail', { courseName: 'First Aid', fee: 1500 })} />
      <Button title="Sewing" onPress={() => navigation.navigate('CourseDetail', { courseName: 'Sewing', fee: 1500 })} />
      <Button title="Landscaping" onPress={() => navigation.navigate('CourseDetail', { courseName: 'Landscaping', fee: 1500 })} />
      <Button title="Life Skills" onPress={() => navigation.navigate('CourseDetail', { courseName: 'Life Skills', fee: 1500 })} />
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
    marginBottom: 20,
  },
});

export default SixMonthCoursesScreen;
