import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('')

  function changeHandler(val) {
    setText(val)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Input your todo'
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title='ADD TODO'
        color='coral'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
})
