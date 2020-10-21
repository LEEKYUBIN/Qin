import React, { Component,useState } from 'react';
import {View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput, TouchableHighlight, ScrollView} from 'react-native';
import Styles from '../../../../styles';
import find_pw_new from './find_pw_new';
import Modal from 'react-native-modal';

// 10월21일부
function find_pw({ navigation }) {

    let eddie = 3;
    let data1 = "";
    if (eddie == 1){data1 = "가입되지 않은 닉네임입니다.";}
    else if (eddie == 2){data1 = "가입되지 않은 아이디입니다.";}
    else {data1 = "올바르지 않은 답변입니다.";}

    function setModal(){
        setModalVisible(!modalVisible)
    }
    function setNewPW() {
        setModalVisible(!modalVisible)
        navigation.navigate(find_pw_new)
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <View style={styles.container}>
            <ScrollView>
            {/*닉네임*/}
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#ffffff',
                width: '100%',
                paddingHorizontal: 30,
                paddingTop: 10,
                alignItems: 'center',
            }}>
                <View>
                    <Image
                        style={{
                            height: 70,
                            width: 70,
                            resizeMode: 'center',
                        }}
                        source={require('../../../../image/name_g.png')}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 15, paddingRight: 135,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="닉네임 (최대 6자)"
                    />
                </View>
            </View>

            {/*이메일*/}
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
                        source={require('../../../../image/id_g.png')}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 15, paddingRight: 150,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="이메일 (아이디)"
                    />
                </View>
            </View>


            {/*질문*/}
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#ffffff',
                width: '100%',
                paddingHorizontal: 30,
                alignItems: 'center',
                paddingLeft: 50,
            }}>
                <View>
                    <Image
                        style={{
                            height: 35,
                            width: 35,
                            resizeMode: 'center',
                        }}
                        source={require('../../../../image/message.png')}
                    />

                </View>
                <View>
                    {/*<DropDownPicker*/}
                    {/*    items={[*/}
                    {/*        {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={10} color="#900" />},*/}
                    {/*        {label: 'France', value: 'france', icon: () => <Icon name="flag" size={10} color="#900" />},*/}
                    {/*    ]}*/}
                    {/*    defaultValue={this.state.country}*/}
                    {/*    containerStyle={{height: 15,width: '70%',*/}
                    {/*        alignItems: 'center',*/}
                    {/*        justifyContent: 'space-between',*/}
                    {/*        resizeMode: 'center',}}*/}
                    {/*    style={{backgroundColor: '#fafafa',flexDirection: 'row-reverse',}}*/}
                    {/*    itemStyle={{*/}
                    {/*        flexDirection: 'row',*/}
                    {/*        alignItems: 'center',*/}
                    {/*        fontSize: 13,*/}
                    {/*        justifyContent: 'space-between',*/}
                    {/*        resizeMode: 'center',*/}
                    {/*    }}*/}
                    {/*    dropDownStyle={{backgroundColor: '#fafafa'}}*/}
                    {/*    onChangeItem={item => this.setState({*/}
                    {/*        country: item.value*/}
                    {/*    })}*/}
                    {/*/>*/}
                </View>
            </View>




            {/*질문답*/}
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
                        source={require('../../../../image/mail_check_g.png')}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 15, paddingRight: 180,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="질문 답변"
                    />
                </View>
            </View>
            {/*전번*/}
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
                        source={require('../../../../image/phone_g.png')}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 16, paddingRight: 16,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="010"
                    />
                </View>
                <View>
                    <Text
                        style={{fontSize: 11, color: '#171616', paddingRight: 16, paddingLeft: 16,}}>
                        -
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 16, paddingRight: 16,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="0000"
                    />
                </View>
                <View>
                    <Text
                        style={{fontSize: 11, color: '#171616', paddingRight: 16, paddingLeft: 16,}}>
                        -
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 17, paddingRight: 17,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="0000"
                    />
                </View>
            </View>
            <View style={{paddingTop: 100,}}>
            </View>

            <Modal
                animationIn={"slideInUp"} //default 'slideInUp'
                animationOut={'slideOutDown'} //default 'slideOutDown'
                isVisible={modalVisible}
                transparent={true} //default 'true'
                backdropColor={'black'} //default 'black'
                backdropOpacity={0.5} //default 0.7
                onBackButtonPress={() => { setModalVisible(!modalVisible); }}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}
                          onBackDropPress={() => { setModalVisible(!modalVisible); }}>

                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#ffffff',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: "space-around",
                            paddingHorizontal: 50,
                        }}>
                            <Image
                                style={{
                                    height: 70,
                                    width: 70,
                                    resizeMode: 'center',
                                }}
                                source={require('../../../../image/pw_g.png')}
                            />
                            <Text style={{fontSize: 13, color: '#000000',paddingRight: 20,}}>비밀번호 찾기</Text>
                        </View>

                        <Text style={{fontSize: 12, color: '#5f5e5e',borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,paddingBottom: 20, paddingRight: 40, paddingLeft: 40, paddingTop: 20}}>{data1}</Text>


                        <TouchableOpacity
                            style={{ ...styles.openButton,}}
                            onPress={() => {
                                setNewPW();
                            }}
                        >
                            <Text style={{fontSize: 14, color: '#000000',paddingTop: 25,}}>확인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/*가입하기*/}
            <View style={{
                paddingTop: 20,
                paddingHorizontal: 30,
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={() => setModal()}>
                    <Text  style={{fontSize: 15, color: '#f8f6f6', paddingVertical: 5,paddingLeft: 40, paddingRight: 40, backgroundColor: '#0b4072',borderStyle: 'solid',paddingTop: 10, paddingBottom: 10,
                        borderRadius: 30,
                        borderColor: '#0b4072',
                        borderWidth: 2,}}>
                        비밀번호 찾기
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop: 70,}}>
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
    },
    modalView: {
        width: 300,
        height: 200,
        margin: 22,
        flexDirection: 'column',
        justifyContent: "space-around",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
});

export default find_pw;
