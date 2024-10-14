import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = () => {
  const [messages, setMessages] = React.useState([]);
  const [inputMessage, setInputMessage] = React.useState('');

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { id: messages.length, text: inputMessage }]);
      setInputMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        style={styles.chatArea}
      />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 20,
  },
  chatArea: {
    flex: 1, 
    marginBottom: 10,
  },
  messageContainer: {
    backgroundColor: '#D0F3C4',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  messageText: {
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    
  },
  sendButton: {
    backgroundColor: '#1E5703',
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
    
  },
});

export default ChatScreen;
