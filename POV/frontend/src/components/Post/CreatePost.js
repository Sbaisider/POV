import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { createPost } from '../../api';

const CreatePost = ({ route, navigation }) => {
  const { token } = route.params;
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');

  const handleCreatePost = async () => {
    try {
      await createPost(token, imageUrl, caption);
      navigation.navigate('Home');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <TextInput
        style={styles.input}
        placeholder="Caption"
        value={caption}
        onChangeText={setCaption}
      />
      <Button title="Create Post" onPress={handleCreatePost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default CreatePost;