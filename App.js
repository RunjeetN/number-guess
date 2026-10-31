import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StartGameScreen } from "./screens/StartGameScreen";
import { GameScreen } from "./screens/GameScreen";
import GameOverScreen from './screens/GameOverScreen'
import { useState } from "react";
import Colors from './utils/colors'
export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);
  const [gameOver, setGameOver] = useState(false)
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function GameOverScreenHandler(){
    setGameOver(true)
    screen = <GameOverScreen/>
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} GameOverHandler={GameOverScreenHandler}/>;
  }
  if (gameOver) {
    screen = <GameOverScreen/>
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
