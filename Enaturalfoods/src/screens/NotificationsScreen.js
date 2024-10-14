import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const notificationsData = [
  { id: 1, title: 'Order Confirmed', description: 'Your order #1234 has been confirmed', time: '2 hours ago' },
  { id: 2, title: 'Delivery in Progress', description: 'Your order #1234 is on the way', time: '1 day ago' },
  { id: 3, title: 'Special Offer', description: 'Get 10% off on your next purchase', time: '3 days ago' },
  
];

const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <ScrollView>
        {notificationsData.map((notification) => (
          <TouchableOpacity key={notification.id} style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationDescription}>{notification.description}</Text>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E5703',
    textAlign:'center'
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
});

export default NotificationsScreen;
