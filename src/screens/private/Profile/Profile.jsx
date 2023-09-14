import { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View, Text, Image, TextInput, Platform, ImageBackground, } from 'react-native';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';
// import CameraModal from '../../../components/modal/CameraModal';

// import auth from '@react-native-firebase/auth';
// import analytics from '@react-native-firebase/analytics';
// import database from '@react-native-firebase/database';

// import { useForm } from 'react-hook-form';
import globalstyle from '../../../theme/style';
import { colors, fontSize, fonts, isIPad, width } from '../../../theme';
import { useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DeleteUserApiCall, EditProfileApiCall, UpdateProfilePicApiCall } from '../../../redux/reducers/UserStateReducer';
import { LogOut, SetUserInfo } from '../../../redux/reducers/AppStateReducer';
import { showToast } from '../../../helpers/toastConfig';
import Loader from "../../../components/Loader";
import DeleteProfileConfirmationModal from '../../../components/modal/DeleteProfileConfirmationModal';
// import BlockedUsers from '../../../components/bottom-sheet/BlockedUsers';
// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import BlockedUsersListModal from '../../../components/modal/BlockedUsersListModal';
import { convertToK } from '../../../helpers/services';
import SectionTitle from '../../../components/SectionTitle';
import moment from 'moment';


const experience = [
  { title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
  { title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
  { title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
  { title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
]
const education = [
  { title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
  { title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
  { title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
  // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
]

const Profile = props => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [filePath, setFilePath] = useState(null);

  const [user, setUser] = useState(props.userInfo);

  useEffect(() => {
    console.log('Profile props.userInfo => ', props.userInfo);
    setUser(props.userInfo);
  }, [props.userInfo])


  const prevFilePathRef = useRef(filePath);
  const prevDeleteUserResRef = useRef(props.deleteUserResponse);

  useEffect(() => {
    console.log('filePath => ', filePath);
    if (filePath != null && filePath != prevFilePathRef.current) {
      const formData = new FormData();
      formData.append('profile_picture', {
        name: filePath.fileName,
        type: filePath.type,
        uri: Platform.OS === 'android' ? filePath.uri : filePath.uri.replace('file://', '')
      });
      props.UpdateProfilePicApiCall(formData);
      isLoading(true);
    }
  }, [filePath]);

  useEffect(() => {
    console.log('user => ', user);
  }, [user]);

  useEffect(() => {
    if (props.deleteUserResponse !== prevDeleteUserResRef.current && props.deleteUserResponse?.success && props.deleteUserResponse?.data) {
      prevDeleteUserResRef.current = props.deleteUserResponse;
      console.log('deleteUserResponse => ', props.deleteUserResponse);
      props.LogOut();
      showToast('success', 'User deleted successfully');
    }
    isLoading(false);
  }, [props.deleteUserResponse]);


  // console.log('errors => ', errors);
  const [loading, isLoading] = useState(false);

  function _handleDeleteConfirmValue(value) {
    console.log('value => ', value);
    if (value) {
      isLoading(true);
      props.DeleteUserApiCall({ userid: props?.userInfo?.id })
    }
    setShowConfirmationModal(false)
  }

  const PROFILE_SQUARE = isIPad ? 170 : 140;



  // const bottomSheetModalRef = useRef(null);
  // const handleChildReference = (ref) => {
  //   bottomSheetModalRef.current = ref;
  // };

  const [showBlockedUsers, setShowBlockedUsers] = useState(false)

  const ExperienceItem = ({ item, education }) => {
    return (
      <View style={{ marginBottom: 13, }}>
        <View style={{ flexDirection: 'row', marginBottom: 4, }}>
          <Image defaultSource={require('./../../../../assets/images/no-image.png')} style={{ width: 53, height: 53, borderRadius: 10, marginRight: 10 }} />
          <View>
            <Text style={{ fontFamily: fonts.latoBold, fontSize: (fontSize + 2), color: colors.black }}>{item.title}</Text>
            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.primary, marginBottom: 2 }}>{item.company}</Text>
            {education ?
              <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize - 2, color: colors.grey }}>{moment(item?.startdate).format('DD, MMM YYYY')} - {item.enddate ? moment(item?.enddate).format('DD, MMM YYYY') : 'Applied'}</Text>
              :
              <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize - 2, color: colors.grey }}>From {moment(item?.startdate).format('DD, MMM YYYY')} - {item.enddate ? moment(item?.enddate).format('DD, MMM YYYY') : 'Currenctly Working'}</Text>
            }
          </View>
        </View>
      </View>
    )
  }

  const InfoItem = ({ heading, value }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
        <Text style={[styles.tagstext, { fontFamily: fonts.latoRegular, width: width / 3 + 30 }]}>{heading}</Text>
        <Text style={[styles.tagstext, { fontFamily: fonts.latoBold, }]}> {value}</Text>
      </View >
    )
  }

  return (
    <>
      <Loader isLoading={loading} />
      <SafeAreaView style={styles.fullview}>
        <ScrollView style={{}}>
          {/* <BottomSheetModalProvider> */}
          <View style={styles.container}>

            {/* <BlockedUsers passReferenceToParent={handleChildReference} /> */}
            <DeleteProfileConfirmationModal handleDeleteConfirmValue={_handleDeleteConfirmValue} visible={showConfirmationModal} setVisible={setShowConfirmationModal} />
            <BlockedUsersListModal visible={showBlockedUsers} setVisible={setShowBlockedUsers} />
            {/* <View style={{ backgroundColor: colors.primary, height: 400, width: '100%', top: 0, position: 'absolute', }}></View> */}
            <View style={[{ paddingVertical: 20, paddingHorizontal: 15 }, isIPad && globalstyle.authscreencontainer, { marginTop: 'auto', marginBottom: 'auto' }]}>
              <View style={{ width: PROFILE_SQUARE, height: PROFILE_SQUARE, borderRadius: PROFILE_SQUARE, marginLeft: 'auto', marginRight: 'auto', marginVertical: 10, position: 'relative', backgroundColor: '#ddd', borderColor: colors.white, borderWidth: 2 }}>
                <Image
                  source={
                    filePath?.uri
                      ? { uri: filePath?.uri }
                      : user?.profile_picture
                        ? { uri: user?.profile_picture }
                        : require('./../../../../assets/images/dummy-profile-image.png')
                    // { uri: user?.profilepic }
                    // require('./../../assets/images/profile-image.jpg')
                  }
                  defaultSource={require('./../../../../assets/images/no-image.png')}
                  style={{ width: '100%', height: '100%', borderRadius: 120, resizeMode: 'cover', }}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ borderWidth: 1, borderColor: colors.white, position: 'absolute', right: 5, bottom: 2, zIndex: 1, alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 40, backgroundColor: colors.white, }}
                  onPress={() => {
                    props.navigation.navigate('EditProfile')
                    // setShowModal(true);
                  }}>
                  <Icon name="edit-2" size={isIPad ? 20 : 18} color={colors.primary} />
                </TouchableOpacity>
              </View>
              <Text style={{ fontFamily: fonts.latoBold, fontSize: (fontSize + 6), textAlign: 'center', color: colors.black, marginBottom: 6 }}>{
                // `${user?.first_name} ${user?.last_name}`
                'Kalen Parker'
              }</Text>
              <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize + 2), textAlign: 'center', color: colors.primary, marginBottom: 3 }}>Medical Laboratory Technician</Text>
              <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize), textAlign: 'center', color: colors.grey, marginBottom: 30 }}>MedixGen Health</Text>

              <View style={{ backgroundColor: colors.white, padding: 20, borderRadius: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30, marginTop: 10 }}>
                  <View style={{ alignItems: 'center', width: (width / 3) - 28, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 6, marginBottom: 3 }}>{convertToK(12367)}</Text>
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Followings</Text>
                  </View>
                  <View style={{ width: 1, height: 20, backgroundColor: '#888' }} />
                  <View style={{ alignItems: 'center', width: (width / 3) - 28, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 6, marginBottom: 3 }}>{convertToK(3122)}</Text>
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Profile Views</Text>
                  </View>
                  <View style={{ width: 1, height: 20, backgroundColor: '#888' }} />
                  <View style={{ alignItems: 'center', width: (width / 3) - 28, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 6, marginBottom: 3 }}>{convertToK(54)}</Text>
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Jobs Apply</Text>
                  </View>
                </View>

                <View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Icon name="clock" style={{ color: colors.primary, marginRight: 15, fontSize: fontSize }} />
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>Member Since July 27, 2018</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Icon name="map-pin" style={{ color: colors.primary, marginRight: 15, fontSize: fontSize }} />
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>Serenica Tranquilis Harmonyville, USA</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Icon name="phone" style={{ color: colors.primary, marginRight: 15, fontSize: fontSize }} />
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>{`${user?.phone}`}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Icon name="mail" style={{ color: colors.primary, marginRight: 15, fontSize: fontSize }} />
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>{`${user?.email}`}</Text>
                  </View>
                </View>
              </View>



              {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center', width: (width / 3) - 28, backgroundColor: colors.white, height: (width / 3) - 28, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 6 }}>{convertToK(12367)}</Text>
                  <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Followings</Text>
                </View>
                <View style={{ alignItems: 'center', width: (width / 3) - 28, backgroundColor: colors.white, height: (width / 3) - 28, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 6 }}>{convertToK(12367)}</Text>
                  <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Profile Views</Text>
                </View>
                <View style={{ alignItems: 'center', width: (width / 3) - 28, backgroundColor: colors.white, height: (width / 3) - 28, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize + 6 }}>{convertToK(12367)}</Text>
                  <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Jobs Apply</Text>
                </View>
              </View>
 */}

              <View style={{ marginBottom: 15, marginTop: 15 }}>
                <SectionTitle title={'About'} />
                <Text style={{ fontSize: fontSize, fontFamily: fonts.latoRegular, color: colors.grey, lineHeight: 22 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is ext and a search for 'lorem ipsum' will uncover many web sites</Text>
              </View>

              <SectionTitle title={"Experience"} />
              <View style={{ height: 8 }} />
              {experience && experience.map((item, index) => {
                return <ExperienceItem key={index} item={item} />
              })}

              <View style={{ backgroundColor: colors.white, padding: 15, marginHorizontal: -15, marginBottom: 15 }}>
                <SectionTitle title={"Education"} />
                <View style={{ height: 8 }} />
                {education && education.map((item, index) => {
                  return <ExperienceItem key={index} item={item} education={true} />
                })}
              </View>

              {/* <SectionTitle title={"Documents"} />
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontFamily: fonts.latoRegular, color: colors.grey }}>Drugs Test Form</Text>
                <Icon name="file" style={{ marginLeft: 5 }} />
              </TouchableOpacity> */}

              <SectionTitle title={"Skills"} />
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tags}>
                  <Text style={styles.tagstext}>{'Cold Calling'}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tags}>
                  <Text style={styles.tagstext}>{'Communication'}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tags}>
                  <Text style={styles.tagstext}>{'Technician'}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tags}>
                  <Text style={styles.tagstext}>{'Communication'}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tags}>
                  <Text style={styles.tagstext}>{'Laboratory'}</Text>
                </TouchableOpacity>
              </View>

              <View style={{ backgroundColor: colors.white, padding: 15, marginHorizontal: -15, marginVertical: 15 }}>
                <SectionTitle title={"Personal Detail"} />
                <InfoItem heading={'Immediate Available'} value={'Yes'} />
                <InfoItem heading={'Age'} value={moment('1997-01-09').format('DD, MMM YYYY')} />
                <InfoItem heading={'Gender'} value={'Male'} />
                <InfoItem heading={'Maritial Status'} value={'Married'} />
                <InfoItem heading={'Experience'} value={'04 Years'} />
                <InfoItem heading={'Current Salary'} value={`${parseInt('100000').toLocaleString()} USD per Anum`} />
                <InfoItem heading={'Expected Salary'} value={`${parseInt('120000').toLocaleString()} USD per Anum`} />
              </View>

              <SectionTitle title={"Languages"} />
              <InfoItem heading={'English'} value={'Fluent'} />
              <InfoItem heading={'French'} value={'Expert'} />

              {/* <View style={{
                flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20,
                //marginTop: 'auto' 
              }}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    // props.navigation.navigate('EditProfile')
                    // bottomSheetModalRef.current?.present()
                    setShowBlockedUsers(true)
                    // setShowConfirmationModal(true)
                  }}
                  style={[globalstyle.authSubmitButton, { width: '49%', backgroundColor: colors.orange }]}>
                  <Text style={[globalstyle.authSubmitButtonText, { fontSize: isIPad ? 16 : 13 }]}>Blocked Users</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    props.navigation.navigate('EditProfile')
                    // setShowConfirmationModal(true)
                  }}
                  style={[globalstyle.authSubmitButton, { width: '49%', backgroundColor: colors.black }]}>
                  <Text style={[globalstyle.authSubmitButtonText, { fontSize: isIPad ? 16 : 13 }]}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    setShowConfirmationModal(true)
                  }}
                  style={[globalstyle.authSubmitButton, { width: '49%', backgroundColor: colors.black, }]}>
                  <Text style={[globalstyle.authSubmitButtonText, { fontSize: isIPad ? 16 : 13 }]}>Delete Account</Text>
                </TouchableOpacity>
              </View> */}
            </View>
          </View>
          {/* <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setShowConfirmationModal(true)
            }}
            style={[globalstyle.authSubmitButton, globalstyle.authscreencontainer, { width: '100%', backgroundColor: colors.black, marginBottom: 15 }]}>
            <Text style={[globalstyle.authSubmitButtonText, { fontSize: isIPad ? 16 : 13 }]}>Delete Account</Text>
          </TouchableOpacity> */}
          {/* </BottomSheetModalProvider> */}
        </ScrollView>
      </SafeAreaView >
    </>
  );
};

const styles = StyleSheet.create({
  fullview: { flex: 1 },
  container: { flex: 1 },
  checkboxtick: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
  labelinput: { fontFamily: fonts.latoRegular, fontSize: 13, color: '#000' },

  tags: { backgroundColor: '#d1d1d1', paddingHorizontal: 12, paddingVertical: 3, marginRight: 8, borderRadius: 10, marginBottom: 8 },
  tagstext: { fontSize: fontSize, fontFamily: fonts.latoRegular, color: colors.grey, lineHeight: 22, fontSize: (fontSize - 1) }
});

const setStateToProps = state => ({
  userInfo: state.appstate.userInfo,
  deleteUserResponse: state.userstate.deleteUserResponse,
});

const mapDispatchToProps = dispatch => {
  return {
    SetUserInfo: bindActionCreators(SetUserInfo, dispatch),
    DeleteUserApiCall: bindActionCreators(DeleteUserApiCall, dispatch),
    LogOut: bindActionCreators(LogOut, dispatch),
  };
};

export default connect(setStateToProps, mapDispatchToProps)(Profile);