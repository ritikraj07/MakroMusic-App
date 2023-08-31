import 'react-native-gesture-handler'
import React from 'react';
import { View, StatusBar, useColorScheme, Text } from 'react-native';
import StackTab from './Source/Navigation/Stack.jsx'; // Assuming StackTab is your main navigation component
import { ThemeProvider, createTheme } from '@rneui/themed';

import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyle from './Source/Style/Global.jsx';
import Filter from './Source/Components/Filter.jsx';
import store from './Source/Redux/Store.js';
import LoadingScreen from './Source/Components/LoadingScreen.jsx';



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
    <Provider store={store} >
      
    <SafeAreaView style={containerStyle}>
      <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#10141F"
        color='white'
      />
        <StackTab /> 
          {/* <Filter /> */}
          <LoadingScreen />
        </ThemeProvider>

    </SafeAreaView>
    
     </Provider> 
  )
}

export default App;
