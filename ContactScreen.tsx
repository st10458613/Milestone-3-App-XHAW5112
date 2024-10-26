// src/screens/ContactScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text>Phone: +27 123 4567</Text>
      <Text>Email: info@empoweringthenation.co.za</Text>
      <Text>Address: 123 Skill Street, Johannesburg</Text>
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

export default ContactScreen;
