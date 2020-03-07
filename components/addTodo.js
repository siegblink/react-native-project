import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { TouchableOpacity, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function AddTodo(props) {
  const { inputText, onChangeText, submitHandler } = props

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Input your todo'
        value={inputText}
        onChangeText={onChangeText}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => submitHandler(inputText)}>
          <Text style={styles.buttonText}>ADD NEW TODO</Text>
          <AntDesign name='right' size={16} color='#ff6f00' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#fafafa',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6f00',
    marginRight: 24,
  },
})
