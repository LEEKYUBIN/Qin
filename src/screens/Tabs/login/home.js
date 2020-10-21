import React, {Component, useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView} from 'react-native';
import Styles from '../../../styles';
import join from './join/join';
import find_id from './find_id/find_id';
import find_pw from './find_pw/find_pw';



function LoginHome({ navigation }) {


    const [logIn, setLogIn] = useState(false);

    useEffect (()=>{
        if(logIn){
            changeTextB(require('../../../../src/image/login_checked.png'));
        }else{
            changeTextB(require('../../../../src/image/login_unchecked.png'))
        }
    }, [logIn]);

    let [textA, changeTextA] = useState(require('../../../../src/image/logo_blue.png'));
    function setNewTextA(Text){
        if(Text == ""){
            changeTextA(require('../../../../src/image/logo_blue.png'));
        }
        else {
            changeTextA(require('../../../../src/image/logo_yellow.png'));
        }
    }

    let [textB, changeTextB] = useState('#807d7d');
    function setNewTextB(Text){
        if(Text.length < 6){
            changeTextB('#807d7d');
        }
        else{
            changeTextB('#0958b6');
        }
    }

    return (

        <View style={styles.container}>
            {/*사진*/}
            <View>
                <TouchableOpacity>
                    <Image
                        style={{
                            height: 100,
                            width: 100,
                            resizeMode: 'contain',
                            paddingTop: 200,
                        }}
                        source={textA}
                    />
                </TouchableOpacity>
            </View>


            {/*로그인창*/}

            <View style={{
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                width: '100%',
                paddingHorizontal: 35,
                paddingTop: 10
            }}>
                {/*이메일*/}

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#ffffff',
                    width: '100%',
                    alignItems: 'center',
                    paddingHorizontal: 35,
                    borderStyle: 'solid',
                    borderRadius: 30,
                    borderColor: '#d6d9dc',
                    borderWidth: 2,
                }}>
                    <Image
                        style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'center',
                        }}
                        source={require('../../../../src/image/id_g.png')}
                    />
                    <TextInput
                        style={{fontSize: 16, color: '#A5A5A5', paddingLeft: 15,}}
                        placeholder="이메일"
                        onChangeText = {(text) => setNewTextA(text)}
                    />
                </View>


                {/*비밀번호*/}

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#ffffff',
                    width: '100%',
                    alignItems: 'center',
                    paddingHorizontal: 35,
                    borderStyle: 'solid',
                    borderRadius: 30,
                    borderColor: '#d6d9dc',
                    borderWidth: 2,
                    top: 10,
                }}>
                    <Image
                        style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'center',
                        }}
                        source={require('../../../../src/image/pw_g.png')}
                    />
                    <TextInput
                        style={{fontSize: 16, color: '#A5A5A5', paddingLeft: 15,}}
                        placeholder="비밀번호"
                        onChangeText = {(text) => setNewTextB(text)}
                    />
                </View>

            </View>


            {/*로그인버튼*/}

            <View style={{
                flexDirection: 'row',
                backgroundColor: '#ffffff',
                width: '100%',
                alignItems: 'center',
                paddingHorizontal: 35,

            }}>
                <TouchableOpacity onPress={() => setLogIn(!logIn)}>
                <Image
                    style={{
                        height: 50,
                        width: 50,
                        resizeMode: 'center',
                    }}
                    source={textB}
                />
                </TouchableOpacity>
                <Text  style={{fontSize: 10, color: '#504d4d', paddingVertical: 5,paddingLeft: 10, paddingRight: 60,}}>
                    로그인 상태 유지
                </Text>
                <TouchableOpacity>
                <Text  style={{fontSize: 15, color: '#f8f6f6', paddingVertical: 5,paddingLeft: 40, paddingRight: 40, backgroundColor: textB,borderStyle: 'solid',paddingTop: 10, paddingBottom: 10,
                    borderRadius: 30,
                    borderColor: '#d6d9dc',
                    borderWidth: 2,}}>
                    로그인 하기
                </Text>
                </TouchableOpacity>

                <View style={{paddingVertical: 25}}>
                    <View style={{
                        width: '100%',
                        height:1,
                        backgroundColor: '#E2E2E2',
                    }}/>
                </View>

            </View>

            {/*회원가입*/}

            <View style={{
                flexDirection: 'row',
                backgroundColor: '#ffffff',
                width: '100%',
                paddingHorizontal: 35,
                borderTopColor: '#d6d9dc',
                borderTopStyle: 'solid',
                borderTopWidth: 2,
                paddingTop: 5,
                paddingBottom: 50,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate(find_id)}>
                <Text  style={{fontSize: 13, color: 'black', paddingVertical: 5,paddingLeft: 10,}}>
                    아이디   l
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(find_pw)}>
                <Text  style={{fontSize: 13, color: 'black', paddingVertical: 5,paddingLeft: 10,}}>
                    비밀번호 찾기
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(join)}>
                <Text  style={{fontSize: 13, color: 'black', paddingVertical: 5,paddingLeft: 150,}}>
                    회원가입
                </Text>
                </TouchableOpacity>

            </View>
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


export default LoginHome;
