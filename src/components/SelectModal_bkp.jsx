import React, { Component } from 'react';
import {
  Modal,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';

import { colors, fonts, globalstyle, images } from '../theme';

let { width, height } = Dimensions.get('window');



class SelectModal extends Component {
  constructor(props) {
    super();
    this.state = {
      modalVisible: false,
      //modalVisible: true,
      searchvalue: '',
      buttonLabel: '',
      buttonFlag: '',
      selectlist: [],
      //selectlist: props?.selectlist ? props?.selectlist : [],
    };
    //console.log('Select Props => ',props.selectlist);
  }

  onSearchChange = (text) => {
    //console.log(text);
    if (text) {
      const newData = this.state.selectlist.filter(function (item) {
        // console.log('item.title => ', item.title)
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({ selectlist: newData });
      this.setState({ searchvalue: text });
    } else {
      // console.log('else');
      this.setState({ selectlist: this.props.selectlist });
      this.setState({ searchvalue: text });
    }
  };

  toggleModal = visible => {
    this.setState({ modalVisible: visible });
  };

  selectValue = (value, label) => {
    //console.log(value + ' , ' + label);
  };

  componentDidMount() {
    this.setState({ buttonLabel: this.props.buttonLabel });
    this.setState({ selectlist: this.props.selectlist })
  }


  componentWillReceiveProps(props) {
    // console.log('props.selectlist -> ', props.selectlist)
    // console.log('props.buttonLabel -> ', props.buttonLabel)
    if (props.selectlist != this.props.selectlist || props.value != this.props.value) {
      this.setState({ buttonLabel: this.props.buttonLabel });
      this.setState({ selectlist: props.selectlist })
    }

  }

  renderElement(props) {
    //console.log('renderElement props => ', props)
    if (props.value == '' || props.value == undefined) {
      return this.state.buttonLabel;
    } else if (
      props.selectlist &&
      props.selectlist.length != 0 &&
      props.value != ''
    ) {
      let matchedObj = props.selectlist.find(
        data => data.id == props.value,
      );
      //console.log('matchedObj => ', matchedObj)
      return matchedObj && matchedObj.title
        ? (props.phone ? matchedObj.CountryCode : matchedObj.title)
        //? matchedObj.title
        : this.state.buttonLabel;
    } else {
      return this.state.buttonLabel;
    }
  }

  render() {
    const { languageid } = this.props;
    return (
      <View style={styles.centeredView}>

        <Modal
          //animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          statusBarTranslucent={true}
          presentationStyle="overFullScreen"
          onRequestClose={() => {
            this.toggleModal(false);
          }}>


          <KeyboardAvoidingView style={styles.modalContainer} behavior="padding">
            <TouchableOpacity activeOpacity={1} style={[styles.overlay]} onPress={() => this.toggleModal(false)}></TouchableOpacity>
            <View style={[styles.modalView, this.props.search ? { height: height - 400 } : null]}>

              {this.props.search ?
                (
                  <View style={{ backgroundColor: colors.lightGray, width: '100%', padding: 10, position: 'relative' }}>
                    <TextInput
                      style={styles.searchfield}
                      placeholder={this.props.country || this.props.phone ? 'Search Country..' : 'Search..'}
                      value={this.state.searchvalue}
                      placeholderTextColor="#b5b5b5"
                      onChangeText={value => {
                        this.onSearchChange(value)
                      }}
                    />
                    <Icon name={'search'} size={20} color={'#fff'} style={{ position: 'absolute', top: 23, right: 23, }} />
                  </View>
                ) : null}
              <ScrollView contentInsetAdjustmentBehavior="automatic">
                {!this.props.search ?
                  (<TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      this.props.onSelect({ id: 0, title: this.props.buttonLabel });
                      this.toggleModal(false);
                    }}
                    style={[styles.selectitem, { backgroundColor: '#ddd' }]}>
                    <Text
                      style={[
                        styles.selectitemtext, { color: '#000' },
                      ]}>
                      {this.props.buttonLabel.replace("Select ", "")}
                    </Text>
                  </TouchableOpacity>) : null
                }
                {this.state?.selectlist && this.state?.selectlist?.length == 0 ? <View style={[{ backgroundColor: '#fff', flex: 1, height: height - 470, alignItems: 'center', justifyContent: 'center', }]}><ActivityIndicator size="small" color={colors.primary} /><Text style={{ fontFamily: fonts.primary, color: '#999', marginTop: 15 }}>Loading...</Text></View> : null}
                {this.state?.selectlist &&
                  this.state?.selectlist.length > 0 &&
                  this.state.selectlist.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={1}
                      style={styles.selectitem}
                      onPress={() => {
                        this.props.onSelect(item);
                        this.toggleModal(false);
                        // console.log('{ buttonLabel: this.props.phone ? item.CountryCode : item.title } => ', { buttonLabel: this.props.phone ? item.CountryCode : item.title })
                        this.setState({ buttonLabel: this.props.phone ? item.CountryCode : item.title });
                        this.setState({ buttonFlag: this.props.phone ? item.flag : '' });
                      }}>
                      <View style={this.props.phone || this.props.country ? { flexDirection: 'row', alignItems: 'center', width: '70%', marginLeft: '15%' } : {}}>
                        {this.props.phone || this.props.country && <Image source={{ uri: item.flag }} style={{ width: 30, height: 23, resizeMode: 'contain', borderWidth: 1, borderColor: '#eee' }} />}
                        <Text
                          style={[
                            styles.selectitemtext, { backgroundColor: '#fff', color: '#000' },
                          ]}>
                          {item.title}
                          {this.props.phone ? ` (${item.CountryCode})` : ''}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
              </ScrollView>

            </View>
          </KeyboardAvoidingView>
        </Modal>

        <View style={[globalstyle.container_textbox, { minWidth: this.props?.width ? this.props?.width : '100%', }, this.props.country && { maxWidth: this.props.width, minWidth: 100, marginBottom: -10 }]}>
          {/* <Image style={globalstyle.inputIcon} resizeMode="contain" source={images.country} /> */}
          <View style={globalstyle.inputfieldcontainer}>
            {this.props.showlabel && <Text style={{ color: this.props.labelColor ? this.props.labelColor : '#fff', fontFamily: fonts.primary, marginBottom: 3, fontSize: 13 }}>{this.props.buttonLabel.replace("Select ", "")}</Text>}
            <TouchableOpacity
              activeOpacity={1}
              disabled={this.props?.disabled}
              style={[
                styles.openButton,
                this.props?.disabled ? { opacity: 0.4 } : null,
                { borderColor: this.props?.borderColor ? this.props?.borderColor : 'grey', },
                { marginBottom: this.props?.marginBottom ? this.props?.marginBottom : 0 },
                { paddingRight: this.props?.TextAlign == 'right' ? 0 : 10 },
                this.props.phone && { backgroundColor: '#eee' },
                this.props.backgroundColor && { backgroundColor: this.props.backgroundColor },
                (this.props.country || this.props.currency) && { paddingHorizontal: 0, height: 35, paddingVertical: 9, flexDirection: 'row', justifyContent: this.props?.TextAlign == 'right' ? "flex-end" : "flex-start" },
                (this.props.port) && { height: 38, paddingHorizontal: 5, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: 0 },
                (this.props.small && this.props.port) && { borderLeftWidth: 1, borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }
                // { width: this.props?.width ? this.props?.width : '100%', }
              ]}
              onPress={() => {
                this.toggleModal(true);
              }}>

              <View style={this.props.phone ? { flexDirection: 'row', width: 70, alignItems: 'center' } : {}}>
                {this.props.phone && <Image source={{ uri: this.state.buttonFlag != '' ? this.state.buttonFlag : `https://flagcdn.com/w40/${this.props.value}.png` }} style={{ width: 25, height: 30, resizeMode: 'contain', marginBottom: -10, marginRight: 5, marginTop: 3 }} />}
                <View style={this.props.country && { flexDirection: 'row', alignItems: 'center', }}>
                  {this.props.country && <Image source={{ uri: this.state.buttonFlag != '' ? this.state.buttonFlag : `https://flagcdn.com/w40/${this.props.value}.png` }} style={{ width: 20, height: 15, resizeMode: 'contain', marginRight: 5, borderWidth: .2, borderColor: '#fff', marginTop: 0 }} />}
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.openButtonText,
                      { color: this.props?.color ? this.props?.color : '#fff' },
                      { textAlign: this.props?.TextAlign ? this.props?.TextAlign : 'left' },
                      (this.props.country || this.props.currency) && { paddingTop: 0, width: 'auto', fontSize: 12, paddingLeft: 0, },
                      (this.props.phone) && { width: 70 },
                      (this.props.port) && { paddingTop: 13, fontSize: 13 }
                      // { width: this.props?.width ? this.props?.width : '100%', }
                    ]}>
                    {this.renderElement(this.props)}
                  </Text>
                </View>
              </View>
              {this.props.hideArrow || !this.props.phone && <Icon name={'chevron-down'} color={this.props.color} size={(this.props.country || this.props.currency || this.props.port) ? 12 : 17} style={{ position: 'absolute', right: 7, top: 11, marginTop: (this.props.country || this.props.currency) ? -1 : 0 }} />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', },
  centeredView: {},
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 0, },
  modalView: {
    margin: 20, width: '90%', backgroundColor: 'white', borderRadius: 6, overflow: 'hidden', padding: 0, alignItems: 'center', shadowColor: '#000', zIndex: 1,
    shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
  },
  openButton: { height: 45, borderWidth: 1, paddingHorizontal: 10, borderRadius: 3 },
  openButtonText: { width: '90%', textAlign: 'left', fontFamily: fonts.primary, paddingTop: 15, paddingLeft: 3, lineHeight: 15 },

  modalText: { marginBottom: 15, textAlign: 'center' },
  selectitem: { borderBottomWidth: 1, borderBottomColor: '#ddd', width: width - 30, },
  selectitemtext: { fontFamily: fonts.primary, padding: 15, textAlign: 'center', color: '#fff' },
  searchfield: { textAlign: 'left', padding: 10, fontSize: 15, fontFamily: fonts.primary, color: '#fff', backgroundColor: colors.secondary, textAlign: 'center', width: '100%', borderRadius: 6 },
});

export default SelectModal;
