import React, {Component, useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView} from 'react-native';
import Styles from '../../../../styles';
import find_pw_final from './find_pw_final';



// 10월21일부
function find_pw_new({ navigation }) {

    let [textA, changeTextA] = useState(require('../../../../image/pw_g.png'));
    function setNewTextA(Text){
        if(Text == ""){
            changeTextA(require('../../../../image/pw_g.png'));
        }
        else {
            changeTextA(require('../../../../image/pw_y.png'));
            changePwc(Text);
        }
    }

    let [pw, changeP] = useState(require('../../../../image/pw_unchecked.png'));
    let [pwc, changePwc] = useState("");
    let [textD, changeTextD] = useState(require('../../../../image/pw_check_g.png'));
    function setNewTextD(Text){
        if(Text.length == 0){
            changeTextD(require('../../../../image/pw_check_g.png'));
        }
        else{
            changeTextD(require('../../../../image/pw_check_y.png'));
        }
        if(Text == pwc){
            changeP(require('../../../../image/pw_checked.png'));
        }
        if(Text != pwc){
            changeP(require('../../../../image/pw_unchecked.png'));
        }
    }
    return (

        <View style={styles.container}>

            <View style={{paddingTop: 50,}}>
            </View>
            {/*사진*/}
            <View>
                <Image
                    style={{
                        height: 70,
                        width: 70,
                        resizeMode: 'center',
                    }}
                    source={require('../../../../image/check.png')}
                />
            </View>


            {/*글*/}
            <View style={{paddingTop: 40,}}>
            </View>
            <View>
                <Text>
                    새로운 비밀번호를 등록해주세요.
                </Text>
            </View>
            <ScrollView>

            {/*비밀번호*/}
            <View style={{paddingTop: 60,}}>
            </View>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#ffffff',
                width: '100%',
                paddingHorizontal: 30,
                alignItems: 'center',
            }}>
                <View>
                    <Image
                        style={{
                            height: 70,
                            width: 70,
                            resizeMode: 'center',
                        }}
                        source={textA}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 15, paddingRight: 120,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="비밀번호 (6-14자)"
                        onChangeText = {(text) => setNewTextA(text)}
                    />
                </View>
            </View>

            {/*영문자,숫자*/}
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#ffffff',
                width: '100%',
                paddingHorizontal: 30,
                alignItems: 'center',
            }}>

                <View>
                    <Text
                        style={{fontSize: 11, color: '#171616', paddingLeft: 80, paddingBottom: 10}}>
                        영문자, 숫자를 조합해주세요.
                    </Text>
                </View>
            </View>

            {/*비밀번호 확인*/}
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#ffffff',
                width: '100%',
                paddingHorizontal: 30,
                alignItems: 'center',
            }}>
                <View>
                    <Image
                        style={{
                            height: 70,
                            width: 70,
                            resizeMode: 'center',
                        }}
                        source={textD}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 15, paddingRight: 100,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="비밀번호 확인"
                        onChangeText = {(text) => setNewTextD(text)}
                    />
                </View>
                <View>
                    <Image
                        style={{
                            height: 70,
                            width: 70,
                            resizeMode: 'center',
                            borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,
                        }}
                        source={pw}
                    />
                </View>
            </View>
            <View style={{paddingTop: 70,}}>
            </View>


            {/*비밀번호 찾기*/}
            <View style={{
                paddingTop: 20,
                paddingHorizontal: 30,
                alignItems: 'center',
            }}>
                <TouchableOpacity  onPress={() => navigation.navigate(find_pw_final)}>
                    <Text  style={{fontSize: 15, color: '#f8f6f6', paddingVertical: 5,paddingLeft: 40, paddingRight: 40, backgroundColor: '#0b4072',borderStyle: 'solid',paddingTop: 10, paddingBottom: 10,
                        borderRadius: 30,
                        borderColor: '#0b4072',
                        borderWidth: 2,}}>
                        비밀번호 찾기
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop: 40,}}>
            </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

export default find_pw_new;
