import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {Avatar,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch} from "react-native-paper"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
// import DrawerSection from "react-native-paper/lib/typescript/components/Drawer/DrawerSection";
export function DrawerContent(props) {
  const [isDarkTheme, setIdDarkTheme] = React.useState(false);
  const toggleTheme=() => {
    setIdDarkTheme(!isDarkTheme)
  }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                      <View style={{flexDirection:'row', marginTop:15}}>
                        <Avatar.Image source={{uri:'https://i.kym-cdn.com/entries/icons/mobile/000/036/023/bale-1.jpg'}}
                        size={50}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                          <Title style={styles.title}>
                            Ron Tennyson
                          </Title>
                          <Caption style={styles.caption}>
                            @The_OG_RT
                          </Caption>
                        </View>
                      </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Ionicon name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={()=>{props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Ionicon name="settings-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={()=>{props.navigation.navigate('Settings')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Ionicon name="information-circle-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="About App"
                            onPress={()=>{props.navigation.navigate('Details')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                          <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference2}>
                              <Text>Dark Theme</Text>
                              <Switch
                                value={isDarkTheme}
                                onValueChange={toggleTheme}
                              />
                            </View>
                          </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                            <MaterialCommunityIcons name="exit-to-app"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Sign Out"
                        onPress={()=>{}}
                    />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 0,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 18,
    },
    preference2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    preferenceText: {
      fontSize: 16,
    },
  });