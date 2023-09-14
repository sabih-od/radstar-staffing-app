import { Image, Modal, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { colors, fontSize, fonts, height, isIPad, width } from '../../theme';
import Icon from 'react-native-vector-icons/Feather';
import globalstyle from '../../theme/style';

const CheckBox = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3, width: width / 2 - 35 }}
            onPress={() => { }}
        >
            <Icon name={props.checked ? 'check-circle' : 'circle'} style={{ fontSize: fontSize - 1, marginRight: 13, color: props.checked ? colors.primary : colors.grey }} />
            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, }} numberOfLines={1}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const FilterModal = ({ visible, handleCamera, setVisible }) => {
    // let [visibility, setVisiblity] = useState(visible ? visible : false)
    // useEffect(() => {
    //     setVisiblity(visible)
    //     return () => {
    //     };
    // }, [visible]);
    return (
        <Modal
            // animationType='fade'
            statusBarTranslucent={true}
            transparent={true}
            visible={visible}
            onRequestClose={() => { setVisible(false); }}
        >
            <View style={{ ...StyleSheet.absoluteFillObject, zIndex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { setVisible(false) }} activeOpacity={1} style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></TouchableOpacity>
                <View style={{ backgroundColor: '#fff', borderRadius: 7, width: isIPad ? '70%' : '90%', maxHeight: height - 180 }}>
                    <Text style={globalstyle.modaltitle}>Search Filter</Text>
                    <Text style={globalstyle.modaldesc}>Set filter to show jobs related to provided filters</Text>
                    <ScrollView style={{ borderTopWidth: 1, borderTopColor: '#ddd', paddingHorizontal: 15, paddingTop: 12 }} showsVerticalScrollIndicator={false}>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 2, marginBottom: 7 }}>By Shift</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                                <CheckBox title="Morning Shift" checked={true} />
                                <CheckBox title="Afternoon Shift" checked={true} />
                                <CheckBox title="Evening Shift" checked={false} />
                                <CheckBox title="Night Shift" checked={false} />
                            </View>
                        </View>
                        <View style={{ marginBottom: 15, backgroundColor: '#f9f9f9', marginHorizontal: -15, paddingHorizontal: 15, paddingVertical: 15 }}>
                            <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 2, marginBottom: 7 }}>By Experience</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                                <CheckBox title="1 - 3 Years" checked={false} />
                                <CheckBox title="3 - 5 Years" checked={true} />
                                <CheckBox title="5 - 7 Years" checked={true} />
                                <CheckBox title="Above 7 Years" checked={false} />
                            </View>
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 2, marginBottom: 7 }}>By Career Level</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                                <CheckBox title="Junior" checked={true} />
                                <CheckBox title="Mid Level" checked={false} />
                                <CheckBox title="Experienced" checked={false} />
                            </View>
                        </View>
                        <View style={{ marginBottom: 15, backgroundColor: '#f9f9f9', marginHorizontal: -15, paddingHorizontal: 15, paddingVertical: 15 }}>
                            <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 2, marginBottom: 7 }}>By Gender</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                                <CheckBox title="Male" checked={true} />
                                <CheckBox title="Female" checked={false} />
                            </View>
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 2, marginBottom: 7 }}>By Industry</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                                <CheckBox title="Mangement" checked={true} />
                                <CheckBox title="Recruitment" checked={false} />
                                <CheckBox title="Engineering" checked={false} />
                                <CheckBox title="Call Center" checked={false} />
                                <CheckBox title="Customer Service" checked={false} />
                                <CheckBox title="Management consulting" checked={false} />
                                <CheckBox title="Quality Assurance" checked={false} />
                                <CheckBox title="Business development" checked={false} />
                                <CheckBox title="Information Technology" checked={false} />
                            </View>
                        </View>
                        <View style={{ height: 10 }} />
                    </ScrollView>
                    {/* <View style={globalstyle.modalbtnsrow}>
                        <TouchableOpacity onPress={() => { handleCamera(true) }} activeOpacity={0.6} style={[globalstyle.modalbtn, { borderRightColor: '#ddd', borderRightWidth: 1, }]}><Icon name="camera" size={17} color={colors.primary} style={{ marginRight: 10 }} /><Text style={globalstyle.modalbtntext}>Camera</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { handleCamera(false) }} activeOpacity={0.6} style={globalstyle.modalbtn}><Icon name="image" size={17} color={colors.primary} style={{ marginRight: 10 }} /><Text style={globalstyle.modalbtntext}>Gallery</Text></TouchableOpacity>
                    </View> */}
                </View>
            </View>
        </Modal>
    )
}
export default FilterModal;