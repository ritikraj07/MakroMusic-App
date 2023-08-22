import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import StackTab from './Source/Navigation/Stack.jsx'; // Assuming StackTab is your main navigation component

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const containerStyle = {
    backgroundColor: '#10141F', // Set the background color here
    flex: 1,
    color:'white'
  };

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#10141F"
        color='white'
      />
      <StackTab /> 
    </SafeAreaView>
  );
}

export default App;
