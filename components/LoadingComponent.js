import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const LoadingComponent = () => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size='large' color='#5637dd' />
      <Text style={styles.loadingText}>Loading . . . </Text>
    </View>
  )
}

export default LoadingComponent;

const styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: '#5637dd',
        fontSize: 14,
        fontWeight: 'bold'
    }
})