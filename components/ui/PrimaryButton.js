import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from '../../utils/colors'
export const PrimaryButton = (props) => {
  const {children, onPress} = props

  return (
    <View style={styles.outerButtonContainer}>
      <Pressable
        style={({ pressed }) => {
          return pressed
            ? [styles.innerButtonContainer, styles.pressed]
            : styles.innerButtonContainer;
        }}
        onPress={onPress}
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
    backgroundColor: Colors.primary500,
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
