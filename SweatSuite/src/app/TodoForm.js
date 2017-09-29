import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const mapActionsToProps = dispatch => ({
  createTodo(todo) {
    dispatch({ type: 'CREATE_TODO', payload: todo });
  }
});
export const TodoForm = props => (
  <View style={styles.form}>
    <TextInput style={styles.input} value={props.value} onChangeText={props.handleChange} />
    <TouchableOpacity style={styles.button} onPress={props.handlePress}>
      <Text style={styles.buttonText}>make</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    borderBottomWidth: 3,
    borderColor: '#f7af7a',
    fontSize: 24
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    left: 2
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
