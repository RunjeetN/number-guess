import {View, StyleSheet} from 'react-native'
import Colors from '../../utils/colors'

function Card({children}) {
    return <View style={styles.card}>{children}</View>
}

export default Card 

const styles = StyleSheet.create({
    card: {
    justifyContent: "center", // main axis
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    shadowOpacity: 0.25,
  },
})