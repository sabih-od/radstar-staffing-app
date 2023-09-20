import { Image, Modal, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { colors, fontSize, fonts, isIPad, width } from '../../theme';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import globalstyle from '../../theme/style';
import JobItem from '../JobItem';
import moment from 'moment';

const JobCandidateListModal = (props) => {
    const { item, visible, handleAction, setShowCandidateModal } = props;
    let [visibility, setVisiblity] = useState(visible ? visible : false)
    useEffect(() => {
        setVisiblity(visible)
        return () => {
        };
    }, [visible]);
    return (
        <Modal
            // animationType='fade'
            statusBarTranslucent={true}
            transparent={true}
            visible={visible}
            onRequestClose={() => { setShowCandidateModal(false); }}
        >
            <View style={{ ...StyleSheet.absoluteFillObject, zIndex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { handleAction(false) }} activeOpacity={1} style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></TouchableOpacity>
                <View style={{ backgroundColor: '#fff', borderRadius: 7, width: isIPad ? 470 : '90%', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <Image source={require('./../../../assets/images/no-image.png')} style={{ width: 80, height: 80, borderRadius: 15, resizeMode: 'cover', marginRight: 10 }} />
                        <View style={{
                            width: width - 80 - 40 - 30,
                            // backgroundColor: '#ddd'
                        }}>
                            <Text style={{ fontFamily: fonts.latoBold, fontSize: (fontSize + 2), marginBottom: 3 }}>{item?.title}</Text>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1) }}>{item?.company}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, width: props.isCandidate ? width - 80 - 40 - 30 : width - 80 - 40 }}>
                                <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>Full Time / Permanent</Text>
                                <View style={{ width: 1, height: 10, backgroundColor: '#999', marginHorizontal: 7, marginBottom: -2 }} />
                                <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>{item?.shift}</Text>
                            </View>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), marginTop: 4, color: colors.grey }}>{moment(parseInt(item?.last_updated)).fromNow()}</Text>
                        </View>
                    </View>

                    {/* <Text style={globalstyle.modaltitle}>Delete Account</Text>
                    <Text style={globalstyle.modaldesc}>Are you sure you want to delete your account?</Text> */}

                    <View style={{ backgroundColor: '#f1f1f1', overflow: 'hidden', }}>
                        <TouchableOpacity onPress={() => { handleAction('all') }} activeOpacity={0.8} style={{ backgroundColor: '#d9d9d9', paddingHorizontal: 25, paddingVertical: 15, borderBottomWidth: 1, borderBlockColor: '#999', flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="people-outline" style={{ color: colors.black, fontSize: fontSize + 4, marginRight: 15 }} /><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>All Candidates List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { handleAction('shortlisted') }} activeOpacity={0.8} style={{ paddingHorizontal: 25, paddingVertical: 15, borderBottomWidth: 1, borderBlockColor: '#ddd', flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="list" style={{ color: colors.primary, fontSize: fontSize, marginRight: 15 }} /><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Short Listed Candidates</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { handleAction('hired') }} activeOpacity={0.8} style={{ paddingHorizontal: 25, paddingVertical: 15, borderBottomWidth: 1, borderBlockColor: '#ddd', flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="check" style={{ color: colors.primary, fontSize: fontSize, marginRight: 15 }} /><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Hired Candidates</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { handleAction('rejected') }} activeOpacity={0.8} style={{ paddingHorizontal: 25, paddingVertical: 15, borderBottomWidth: 1, borderBlockColor: '#999', flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="x" style={{ color: colors.primary, fontSize: fontSize, marginRight: 15 }} /><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Rejected Candidates</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { handleAction('edit', item) }} activeOpacity={0.8} style={{ backgroundColor: '#d9d9d9', paddingHorizontal: 25, paddingVertical: 15, borderBottomWidth: 1, borderBlockColor: '#999', flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="edit-2" style={{ fontSize: fontSize, marginRight: 15 }} /><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Edit Job</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { handleAction('delete', item) }} activeOpacity={0.8} style={{ backgroundColor: '#d9d9d9', paddingHorizontal: 25, paddingVertical: 15, borderBottomWidth: 0, borderBlockColor: '#999', flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="trash" style={{ fontSize: fontSize, marginRight: 15 }} /><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Delete Job</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <View style={globalstyle.modalbtnsrow}>
                        <TouchableOpacity onPress={() => {
                            handleAction('delete')
                        }} activeOpacity={0.6} style={[globalstyle.modalbtn, { borderRightColor: '#ddd', borderRightWidth: 1, }]}>
                            <Icon name="trash" size={17} color={colors.primary} style={{ marginRight: 10 }} />
                            <Text style={globalstyle.modalbtntext}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            handleAction('edit')
                        }} activeOpacity={0.6} style={globalstyle.modalbtn}>
                            <Icon name="edit-2" size={17} color={colors.primary} style={{ marginRight: 10 }} />
                            <Text style={globalstyle.modalbtntext}>Edit</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        </Modal >
    )
}
export default JobCandidateListModal;

const styles = StyleSheet.create({
    modaltitle: { fontFamily: fonts.latoBlack, color: colors.black, textAlign: 'center', paddingTop: 15, paddingBottom: 5, fontSize: 18, color: colors.primary },
    modaldesc: { fontFamily: fonts.latoRegular, color: colors.black, textAlign: 'center', fontSize: 13, paddingHorizontal: 15, paddingBottom: 15, color: '#444' },
    modalbtnsrow: { flexDirection: 'row', alignItems: 'center', borderTopColor: '#ddd', borderTopWidth: 1, },
    confirmbtntext: { fontFamily: fonts.latoRegular, color: colors.black, textAlign: 'center', paddingVertical: 14, textAlign: 'center' },
    confirmbtn: { width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
})