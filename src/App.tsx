import * as React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {store} from './redux/store';
import {mainContainer} from './style';
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={mainContainer.container}>
        <Router />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
