import { Text, View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import GameOverScreen from "./GameOverScreen";

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, GameOverHandler }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  console.log(`userNumber:${userNumber} currentGuess:${currentGuess} minBoundary:${minBoundary} maxBoundary:${maxBoundary}`)

  useEffect(
    () => {
      if (userNumber === currentGuess) {
        GameOverHandler();
      }
    },
    [userNumber, currentGuess, GameOverHandler],
  );

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  function nextGuessHandler(direction) {
    // direction => 'lower' 'higher'
    if (
      (direction === "lower" && userNumber > currentGuess) ||
      (direction === "higher" && userNumber < currentGuess)
    ) {
      Alert.alert("you filthy fucking liar", "don't lie slut!", [
        { text: "Sorry Zaddy" },
      ]);
      return 
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View styles={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
