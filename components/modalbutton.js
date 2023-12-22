import { View, Text, Pressable, StyleSheet } from "react-native";

function ModalButton({ children, onPress }) {
  
  function pressHandler() {
    onPress()
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#09315d",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Futura-Bold'
  },
  pressed: {
    opacity: 0.85,
  },
});

export default ModalButton;