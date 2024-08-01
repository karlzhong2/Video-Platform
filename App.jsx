// import React from 'react';
// import SignInScreen from './src/screens/SignInScreen';

// export default function App() {
//   return <SignInScreen />;
// }

// import React from 'react';
// import AppNavigator from './src/routes/AppNavigator';


// export default function App() {
//   return <AppNavigator />;
// }

// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/routes/AppNavigator';
import store from './src/store'; 

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;

