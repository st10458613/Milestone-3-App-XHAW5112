// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from './navigation';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empowering the Nation</Text>
      <Button title="Six-Month Courses" onPress={() => navigation.navigate('SixMonthCourses')} />
      <Button title="Six-Week Courses" onPress={() => navigation.navigate('SixWeekCourses')} />
      <Button title="Calculate Fees" onPress={() => navigation.navigate('CalculateFees')} />
      <Button title="Contact Us" onPress={() => navigation.navigate('Contact')} />
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

export default HomeScreen;
