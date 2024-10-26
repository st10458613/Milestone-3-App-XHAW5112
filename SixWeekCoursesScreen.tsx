// src/screens/SixWeekCoursesScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from './navigation';

type Props = {
  navigation: NativeStackNavigationProp<StackParamList, 'SixWeekCourses'>;
};

const SixWeekCoursesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Week Short Courses</Text>
      <Button title="Child Minding" onPress={() => navigation.navigate('CourseDetail', { courseName: 'Child Minding', fee: 750 })} />
      <Button title="Cooking" onPress={() => navigation.navigate('CourseDetail', { courseName: 'Cooking', fee: 750 })} />
      <Button title="Garden Maintenance" onPress={() => navigation.navigate('CourseDetail', { courseName: 'Garden Maintenance', fee: 750 })} />
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

export default SixWeekCoursesScreen;
