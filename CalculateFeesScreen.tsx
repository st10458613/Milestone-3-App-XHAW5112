// src/screens/CalculateFeesScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CalculateFeesScreen: React.FC = () => {
  const [total, setTotal] = useState(0);

  const handleCalculate = (selectedCourses: number[]) => {
    const numberOfCourses = selectedCourses.length;
    let discount = 0;

    if (numberOfCourses === 2) discount = 0.05;
    else if (numberOfCourses === 3) discount = 0.10;
    else if (numberOfCourses > 3) discount = 0.15;

    const baseTotal = selectedCourses.reduce((sum, courseFee) => sum + courseFee, 0);
    const discountedTotal = baseTotal * (1 - discount);
    const totalWithVAT = discountedTotal * 1.15; // Add 15% VAT

    setTotal(totalWithVAT);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate Fees</Text>
      <Button title="Select Courses and Calculate" onPress={() => handleCalculate([1500, 750, 1500])} />
      <Text>Total Fees: R{total.toFixed(2)}</Text>
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

export default CalculateFeesScreen;
