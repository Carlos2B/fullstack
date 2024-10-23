import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Músicas</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {/* Exemplo de músicas */}
        {['Música 1', 'Música 2', 'Música 3', 'Música 4'].map((musica, index) => (
          <View key={index} style={styles.musicCard}>
            <Image
              style={styles.musicImage}
              source={{ uri: 'https://via.placeholder.com/100' }}
            />
            <Text style={styles.musicName}>{musica}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.recommendationsTitle}>Recomendações</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {/* musica 1 */}
        <View style={styles.musicCard}>
            <Image
              style={styles.musicImage}
              source={{ uri: 'https://i.ytimg.com/vi/YLa77FGfkY8/maxresdefault.jpg' }} 
            />
            <Text style={styles.musicName}>Racionais</Text>
          </View>
        {/* musica 2 */}
          <View style={styles.musicCard}>
            <Image
              style={styles.musicImage}
              source={{ uri: 'https://i.ytimg.com/vi/YLa77FGfkY8/maxresdefault.jpg' }} 
            />
            <Text style={styles.musicName}>Racionais</Text>
          </View>
          {/* musica 3 */}
          <View style={styles.musicCard}>
            <Image
              style={styles.musicImage}
              source={{ uri: 'https://i.ytimg.com/vi/YLa77FGfkY8/maxresdefault.jpg' }} 
            />
            <Text style={styles.musicName}>Racionais</Text>
          </View>

      </ScrollView>

      <View style={styles.navBar}>
        <Pressable style={styles.navButton}>
          <Ionicons name="home-outline" size={24} color="#FFC107" />
          <Text style={styles.navText}>Início</Text>
        </Pressable>
        <Pressable style={styles.navButton}>
          <Ionicons name="play-outline" size={24} color="#FFC107" />
          <Text style={styles.navText}>Playlists</Text>
        </Pressable>
        <Pressable style={styles.navButton}>
          <Ionicons name="person-outline" size={24} color="#FFC107" />
          <Text style={styles.navText}>Perfil</Text>
        </Pressable>
        <Pressable style={styles.navButton}>
          <Ionicons name="heart-outline" size={24} color="#FFC107" />
          <Text style={styles.navText}>Favoritos</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFC107',
  },
  scrollContainer: {
    marginBottom: 20,
  },
  musicCard: {
    alignItems: 'center',
    marginRight: 20,
  },
  musicImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  musicName: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  recommendationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFC107',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#444',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#FFC107',
    fontSize: 12,
  },
});

export default HomeScreen;