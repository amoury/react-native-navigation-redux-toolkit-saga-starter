import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';

import {increment, decrement} from '../slices/counter';

const HomeScreen = (props) => {
  return (
    <View style={styles.homeContainer}>
      <Text>{props.counter}</Text>
      <Button onPress={() => props.increment()} title="increment"></Button>
      <Button onPress={() => props.decrement()} title="decrement"></Button>
      <Button
        title="Details Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Details',
              options: {topBar: {title: {text: 'Details'}}},
            },
          })
        }
      />
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
      textAlign: 'left',
    },
    background: {
      color: 'purple',
    },
  },
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
});

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps, {increment, decrement})(HomeScreen);
