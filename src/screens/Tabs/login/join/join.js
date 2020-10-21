import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    FlatList, onContentSizeChange, ScrollView,
} from 'react-native';
import Styles from '../../../../styles';
import join_final from './join_final';
import Modal from 'react-native-modal';
import axios from 'axios';

//import RNPickerSelect from 'react-native-picker-select';
//import {Dropdown} from 'react-native-material-dropdown';

// import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/Feather';

// this.state = {
//     country: 'uk'
// }

//const qs = require('qs');


// 10월21일부
function join({ navigation }) {



    //133.186.216.152
    //220.149.231.179


    let searchName = async () => await axios.post('http://220.149.231.179:8080/users/searchName', {
        userName: userName
    })
        .then(function(response){
            if(response.data == false){ //seach_hash 를 이용해서 통신한 결과가 없을 경우 ResData를 빈 배열로 초기화
                //setResData(response.data);
                {setModalVisible2(!modalVisible2);}
                console.log("없는 아이디래");
                console.log(response.data);
                userName = response.data;
                //없는 아이디
            }
            else {
                setResData(response.data);
                {setModalVisible1(!modalVisible1);}
                console.log("있는 아이디래");
                console.log(response.data);
                userName = response.data;
            // 있는 아이디
            }
        })
        .catch(function(error){
            console.log("에러 :" + error);
        });



    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    let [pw, changeP] = useState(require('../../../../image/pw_unchecked.png'));
    let [pwc, changePwc] = useState("");
    let [userName, setUserName] = useState("");
    const [resData, setResData] = useState([]); //search_hash 를 이용한 axios통신

    let [textA, changeTextA] = useState(require('../../../../image/name_g.png'));
    function setNewTextA(Text){
        if(Text == ""){
            changeTextA(require('../../../../image/name_g.png'));
        }
        else {
            setUserName(Text);
            console.log(userName);
            changeTextA(require('../../../../image/name_y.png'));
        }
    }

    let [textB, changeTextB] = useState(require('../../../../image/id_g.png'));
    function setNewTextB(Text){
        if(Text == ""){
            changeTextB(require('../../../../image/id_g.png'));
        }
        else{
            changeTextB(require('../../../../image/id_y.png'));
        }
    }
    let [textC, changeTextC] = useState(require('../../../../image/pw_g.png'));
    function setNewTextC(Text){
        if(Text == ""){
            changeTextC(require('../../../../image/pw_g.png'));
        }
        else{
            changeTextC(require('../../../../image/pw_y.png'));
            changePwc(Text);
        }
    }
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

    let [textE, changeTextE] = useState(require('../../../../image/mail_check_g.png'));
    function setNewTextE(Text){
        if(Text == ""){
            changeTextE(require('../../../../image/mail_check_g.png'));
        }
        else{
            changeTextE(require('../../../../image/mail_check_y.png'));
        }
    }

    let [textF, changeTextF] = useState(require('../../../../image/phone_g.png'));
    function setNewTextF(Text){
        if(Text == ""){
            changeTextF(require('../../../../image/phone_g.png'));
        }
        else {changeTextF(require('../../../../image/phone_y.png'));}
    }


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
                        source={textA}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 15, paddingRight: 45,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="닉네임 (최대 6자)"
                        onChangeText = {(text) => setNewTextA(text)}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={async () => searchName()}>
                        <Text  style={{fontSize: 15, color: '#f8f6f6', paddingVertical: 5,paddingLeft: 20, paddingRight: 13, backgroundColor: '#121313',borderStyle: 'solid',paddingTop: 5,
                            borderRadius: 30,
                            borderColor: '#0b4072',
                            borderWidth: 2, Top: 0, }}>
                            중복확인
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/* 사용불가능한 닉네임입니다 Modal*/}
            <View>
            <Modal
                animationIn={"slideInUp"} //default 'slideInUp'
                animationOut={'slideOutDown'} //default 'slideOutDown'
                isVisible={modalVisible1}
                transparent={true} //default 'true'
                backdropColor={'black'} //default 'black'
                backdropOpacity={0.5} //default 0.7
                onBackButtonPress={() => { setModalVisible1(!modalVisible1); }}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}
                          onBackDropPress={() => { setModalVisible1(!modalVisible1); }}>

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
                                source={require('../../../../image/name_g.png')}
                            />
                            <Text style={{fontSize: 13, color: '#000000',paddingRight: 20,}}>중복 확인</Text>
                        </View>

                        <Text style={{fontSize: 12, color: '#5f5e5e',borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,paddingBottom: 20, paddingRight: 40, paddingLeft: 40, paddingTop: 20}}>이미 사용 중인 닉네임 입니다.</Text>


                        <TouchableHighlight
                            style={{ ...styles.openButton,}}
                            onPress={() => {
                                setModalVisible1(!modalVisible1);
                            }}
                        >
                            <Text style={{fontSize: 14, color: '#000000',paddingTop: 25,}}>확인</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            </View>

            <View>
            <Modal
                animationIn={"slideInUp"} //default 'slideInUp'
                animationOut={'slideOutDown'} //default 'slideOutDown'
                isVisible={modalVisible2}
                transparent={true} //default 'true'
                backdropColor={'black'} //default 'black'
                backdropOpacity={0.5} //default 0.7
                onBackButtonPress={() => { setModalVisible2(!modalVisible2); }}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}
                          onBackDropPress={() => { setModalVisible2(!modalVisible2); }}>

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
                                source={require('../../../../image/name_y.png')}
                            />
                            <Text style={{fontSize: 13, color: '#000000',paddingRight: 20,}}>중복 확인</Text>
                        </View>

                        <Text style={{fontSize: 12, color: '#5f5e5e',borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,paddingBottom: 20, paddingRight: 40, paddingLeft: 40, paddingTop: 20}}>{resData}는 사용 가능한 닉네임 입니다.</Text>


                        <TouchableHighlight
                            style={{ ...styles.openButton,}}
                            onPress={() => {
                                setModalVisible2(!modalVisible2);
                            }}
                        >
                            <Text style={{fontSize: 14, color: '#000000',paddingTop: 25,}}>확인</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
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
                        source={textB}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 15, paddingRight: 150,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="이메일 (아이디)"
                        onChangeText = {(text) => setNewTextB(text)}
                    />
                </View>
            </View>


            {/*비번*/}
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
                        source={textC}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 15, paddingRight: 140,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="비밀번호 (6-14자)"
                        onChangeText = {(text) => setNewTextC(text)}
                    />
                </View>
            </View>

            {/*비번정보*/}
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

            {/*비번확인*/}
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
                        source={textE}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 15, paddingRight: 180,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="질문 답변"
                        onChangeText = {(text) => setNewTextE(text)}
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
                        source={textF}
                    />
                </View>
                <View>
                    <TextInput
                        style={{fontSize: 13, color: '#A5A5A5', paddingLeft: 7, paddingRight: 7,  borderBottomColor: '#d6d9dc',
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,}}
                        placeholder="010 - 0000 - 0000 ( - 는 빼고 입력해주세요)"
                        onChangeText = {(text) => setNewTextF(text)}
                    />
                </View>
            </View>
            {/*가입하기*/}
            <View style={{
                paddingTop: 20,
                paddingHorizontal: 30,
                alignItems: 'center',
            }}>

                <TouchableOpacity onPress={async () => navigation.navigate('join_final',{memtitle:[userName]})}>
                    <Text  style={{fontSize: 15, color: '#f8f6f6', paddingVertical: 5,paddingLeft: 40, paddingRight: 40, backgroundColor: '#0b4072',borderStyle: 'solid',paddingTop: 10, paddingBottom: 10,
                        borderRadius: 30,
                        borderColor: '#0b4072',
                        borderWidth: 2,}}>
                        가입하기
                    </Text>
                </TouchableOpacity>
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

export default join;
