import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TextInput, Dimensions, BackHandler, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../assets/goldicon.png'

const {width:WIDTH} = Dimensions.get('window')

export default class Registration extends Component {
    static navigationOptions = {
        title: 'Registration', 
    };

    render() {
        const { navigation } = this.props.navigation;
        return (
            <View>
                <Text style={styles.logoText}></Text>
                <SafeAreaView style={styles.logoContainer}>
                    <Image source={logo}/>
                    
                </SafeAreaView>
                
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'First Name'}
                        placeholderTextColor='white'
                    />    
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Last Name'}
                        placeholderTextColor='white'
                    />    
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Email Address'}
                        placeholderTextColor='white'
                    />    
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        placeholderTextColor='white'
                    />    
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Confirm password'}
                        placeholderTextColor='white'
                    />    
                </View>

                <View>
                    <TouchableOpacity
                        style = {styles.createAccountButton}
                        activeOpacity = {.5}
                        onPress = {buttonPressed}
                        >
                            <Text style = {styles.buttonText}> Create Account</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const buttonPressed = () => {
    Alert.alert(
        "Button has been pressed!",
        "You have pressed the button!"
        )
        
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer:{
        marginTop: 25,
        marginBottom: 25,
        alignItems: 'center',
        width:360,
        
        
        
    },
    logoText:{
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    input:{
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'gray',
        color: 'white',
        marginHorizontal: 25,
        marginTop: 10.5,
        marginBottom: 10.5
    },
    registerText:{
        color: 'blue',
        marginTop: 10,
        fontSize: 10
    },
    createAccountButton: {
        alignItems: 'center',
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 145,
        marginRight: 145,
        backgroundColor: '#F5B0C2',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#777777',
    },
    buttonText: {
        textAlign: 'center'
    }
});