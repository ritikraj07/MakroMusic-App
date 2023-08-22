import React from 'react';
import { View, StatusBar, useColorScheme } from 'react-native';
import StackTab from './Source/Navigation/Stack.jsx'; // Assuming StackTab is your main navigation component
import { ThemeProvider, createTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context'
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const containerStyle = {
    backgroundColor: '#10141F', // Set the background color here
    flex: 1,
    color:'white'
  };

  const theme = createTheme({
    components: {
      Button: {
        raised: true,
      },
    },
  });


  return (
    <SafeAreaView style={containerStyle}>
      <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#10141F"
        color='white'
      />
        <StackTab /> 
        </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
