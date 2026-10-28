import { View, Text, StyleSheet, Pressable } from "react-native";

export const PrimaryButton = (props) => {
  const pressHandler = () => {
    console.log("I'm Pressed :(");
  };

  return (
    <View style={styles.outerButtonContainer}>
      <Pressable
        style={({ pressed }) => {
          return pressed
            ? [styles.innerButtonContainer, styles.pressed]
            : styles.innerButtonContainer;
        }}
        onPress={pressHandler}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerButtonContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },

  innerButtonContainer: {
    backgroundColor: "#870848",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
