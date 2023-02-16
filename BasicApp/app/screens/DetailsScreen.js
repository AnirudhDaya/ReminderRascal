import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
        <Button 
            title="Go to Deets again" 
            onPress={()=>navigation.push("Details")}>
        </Button>
        <Button 
            title="Go to home" 
            onPress={()=>navigation.navigate("Home")}>
        </Button>
        <Button 
            title="Go back" 
            onPress={()=>navigation.goBack()}>
        </Button>
        <Button 
            title="Go to first screen" 
            onPress={()=>navigation.popToTop()}>
        </Button>
      </View>
    );
  }
  

const styles = StyleSheet.create(
    { container:
      {
        flex:1, 
        alignItems: 'center' , 
        justifyContent: 'center'
      }
    }
)

export default DetailsScreen;