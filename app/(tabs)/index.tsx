import { Image, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { HelloWave } from '@/components/HelloWave';
import { HelloWave as HelloWave2 } from '@/components/HelloWave2';
import ParallaxScrollView from '@/components/ParallaxScrollView2';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1D3E9", dark: "#A1D3E9" }}
      headerImage={
        <Image
          source={require('@/assets/images/redes.png')}
          style={styles.reactLogo}
        />
      }>
        <LinearGradient
      colors={["#A1D1E9", "transparent"]}
      style={styles.background}
    />
    <ThemedView style={styles.texto}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes Sociais</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={{textAlign:"justify"}}>
          Aqui está uma forma de encaminhamento rápido para minhas redes sociais.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre Mim</ThemedText>
        <HelloWave2 />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={{textAlign:"justify"}}>
          Tenho 17 anos, sou estudante de programação, gosto de jogar videogame e assistir animes nas horas vagas.
        </ThemedText>
      </ThemedView>
    </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: 'transparent',
    textAlign: 'justify',
    flex: 1,
  },
  reactLogo: {
    height: 290,
    width: 290,
    bottom: -30,
    left: 50,
    position: 'absolute',
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 400,
  },
  texto:{
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
});
