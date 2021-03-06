
import React, { Component } from 'react';
import {View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';
import Styles from '../../../../styles';

import LoginHome from '../home';



// 10월21일부

function find_pw_final({ navigation }) {


    return (

        <View style={styles.container}>
            <View style={{
                backgroundColor: '#ffffff',
                width: '100%',
            }}>
            </View>
            <View>
                <Image
                    style={{
                        height: 150,
                        width: 150,
                        resizeMode: 'contain',
                    }}
                    source={require('../../../../image/pw_y.png')}
                />
            </View>
            <View>
                <Text style={{fontSize: 25, color: '#171616',}}>
                    환영합니다!
                </Text>
            </View>
            <View></View>
            <View style={{
                backgroundColor: '#ffffff',
                width: '100%',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <View>
                    <Text style={{fontSize: 15, color: '#171616',}}>
                        반갑습니다.        님,
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize: 15, color: '#171616', paddingTop: 10,}}>
                        회원가입이 완료되었습니다.
                    </Text>
                </View>
            </View>


            <View>
                <TouchableOpacity onPress={() => navigation.navigate(LoginHome)}>
                    <Text  style={{fontSize: 15, color: '#f8f6f6', paddingVertical: 5,paddingLeft: 40, paddingRight: 40, backgroundColor: '#0b4072',borderStyle: 'solid',paddingTop: 10, paddingBottom: 10,
                        borderRadius: 30,
                        borderColor: '#0b4072',
                        borderWidth: 2,}}>
                        로그인하기
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                backgroundColor: '#ffffff',
                width: '100%',
                paddingTop: 50,
            }}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});
export default find_pw_final;
