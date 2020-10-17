/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import React from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

Navigation.registerComponent(
  'Home',
  () => (props) => (
    <Provider store={store}>
      <HomeScreen {...props} />
    </Provider>
  ),
  () => HomeScreen,
);

Navigation.registerComponent('Details', () => DetailsScreen);

Navigation.setDefaultOptions({
  statusBar: {backgroundColor: '#4d089a'},
  topBar: {
    title: {color: 'white'},
    backButton: {color: 'white'},
    background: {color: '#4d089a'},
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
