import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  Platform,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CameraModal from '../../../components/modal/CameraModal';

// import auth from '@react-native-firebase/auth';
// import analytics from '@react-native-firebase/analytics';
// import database from '@react-native-firebase/database';

import { useForm } from 'react-hook-form';
import globalstyle from '../../../theme/style';
import { colors, fontSize, fonts, isIPad, width } from '../../../theme';
import { useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { EditProfileApiCall, UpdateProfilePicApiCall } from '../../../redux/reducers/UserStateReducer';
import { SetUserInfo } from '../../../redux/reducers/AppStateReducer';
import { showToast } from '../../../helpers/toastConfig';
import Loader from "../../../components/Loader";


import BottomSheet, { BottomSheetModalProvider, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import DateTimeModal from './../../../components/DateTimeModal';
import SelectBottomSheet from '../../../components/SelectBottomSheet';
import countries from '../../../data/countries';
import SelectModal from '../../../components/modal/SelectModal';
import SectionTitle from '../../../components/SectionTitle';
import { careerlevellist, exprience_level, functionalarealist, genderlist, industrylist, nationalitylist } from '../../../data/selectoptions';
import ExperienceModal from '../../../components/modal/ExperienceModal';
import AddExperience from '../../../components/AddExperience';
import ExperienceItem from '../../../components/ExperienceItem';


const resumes = [
  { id: 1, title: 'My Resume', default: true },
  { id: 2, title: 'Abcd Resume', default: false },
  { id: 3, title: 'Rasdy Resume', default: false },
  { id: 4, title: 'Uahsn Resume', default: false },
]

const documents = [
  { id: 1, title: 'Drug Test Form', url: 'https://radstarstaffing.com/storage/4/jpg2pdf.pdf' },
  { id: 2, title: 'Education Verification Form', url: '' },
  { id: 3, title: 'Employment History Record', url: 'https://radstarstaffing.com/storage/4/jpg2pdf.pdf' },
  { id: 4, title: 'Release Authorization Record', url: '' },
  { id: 5, title: 'HIPAA', url: '' },
  { id: 6, title: 'Health Statement From Physician', url: 'https://radstarstaffing.com/storage/4/jpg2pdf.pdf' },
  { id: 7, title: 'Identification Photo', url: 'https://radstarstaffing.com/storage/4/jpg2pdf.pdf' },
  { id: 8, title: 'U.S. Passport', url: '' }
]

const EditProfile = props => {
  const [showModal, setShowModal] = useState(false);
  const [filePath, setFilePath] = useState(null);

  const handleCamera = value => {
    setShowModal(false);
    console.log('value => ', value);
    chooseFile(value);
  };

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const chooseFile = async isCamera => {
    var options = {
      title: 'Select Profile Picture',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: { skipBackup: true, path: 'images' },
    };

    // setTimeout(() => {
    //   launchCamera(
    //     options,
    //     // { saveToPhotos: true, mediaType: 'photo', includeBase64: true, maxHeight: 400, maxWidth: 400, },
    //     response => {
    //       // console.log({ response }); 
    //       if (response.didCancel) {
    //         console.log(' Photo picker didCancel');
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //       } else {
    //         console.log('ImagePicker: ', response);
    //         // setResponse(response)
    //       }
    //     });
    // }, 200);


    let response = {};
    if (isCamera) {
      console.log('launchCamera');
      await delay(200);
      response = await launchCamera(options);
      // response = setTimeout(() => { launchCamera(options) }, 200);
    } else {
      console.log('launchImageLibrary');
      await delay(200);
      response = await launchImageLibrary(options);
      // response = setTimeout(() => { launchImageLibrary(options) }, 200);
    }

    console.log('response here => ', response);
    if (Object.keys(response).length > 0) {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('response: ', response);
        setFilePath(response.assets[0]);
      }
    }
  };

  const [isEditable, setIsEditable] = useState(true);
  const [user, setUser] = useState(props.userInfo);

  useEffect(() => {
    console.log('Profile props.userInfo => ', props.userInfo);
    setUser(props.userInfo);
  }, [props.userInfo])

  const [showPassword, setShowPassword] = useState(false);
  // const [showConfPassword, setShowConfPassword] = useState(false);

  const input01 = useRef();
  const input02 = useRef();
  const input03 = useRef();
  const input04 = useRef();
  const input05 = useRef();

  const prevUpdateProfilePicResRef = useRef(props.updateProfilePicResponse);
  const prevEditProfileResRef = useRef(props.editProfileResponse);
  const prevFilePathRef = useRef(filePath);

  const { handleSubmit, formState: { errors }, register, setValue, } = useForm();

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
    // console.log('props.updateProfilePicResponse => ', props.updateProfilePicResponse);
    if (props.updateProfilePicResponse !== prevUpdateProfilePicResRef.current && props.updateProfilePicResponse?.success && props.updateProfilePicResponse?.data) {
      prevUpdateProfilePicResRef.current = props.updateProfilePicResponse;
      console.log('updateProfilePicResponse => ', props.updateProfilePicResponse,);
      if (props.updateProfilePicResponse?.data?.profile_picture) {
        console.log('set user profile pic => ', props.updateProfilePicResponse);
        props.SetUserInfo({ ...props.userInfo, profile_picture: props.updateProfilePicResponse?.data?.profile_picture, });
        showToast('success', 'Your profile picture updated successfully');
      }
    }
    isLoading(false);
  }, [props.updateProfilePicResponse]);

  const prevUpdateProfilePicErrorRef = useRef(props.updateProfilePicError);
  useEffect(() => {
    if (props.updateProfilePicError !== prevUpdateProfilePicErrorRef.current) {
      prevUpdateProfilePicErrorRef.current = props.updateProfilePicError;
      console.log('updateProfilePicError => ', props.updateProfilePicError);
      showToast('error', props.updateProfilePicError.message);
    }
    isLoading(false);
  }, [props.updateProfilePicError]);

  useEffect(() => {
    console.log('user => ', user);
  }, [user]);

  useEffect(() => {
    if (props.editProfileResponse !== prevEditProfileResRef.current && props.editProfileResponse?.success && props.editProfileResponse?.data) {
      prevEditProfileResRef.current = props.editProfileResponse?.data;
      console.log('props.editProfileResponse => ', props.editProfileResponse);
      props.SetUserInfo({
        ...props.userInfo,
        email: props.editProfileResponse?.data?.email,
        first_name: props.editProfileResponse?.data?.first_name,
        last_name: props.editProfileResponse?.data?.last_name,
        phone: props.editProfileResponse?.data?.phone,
      });
      showToast('success', 'Your profile updated successfully');
      isLoading(false);
      // if (props.editProfileResponse?.data?.profile_picture) {
      //   console.log('set user profile pic => ', props.editProfileResponse);
      //   // props.SetUserInfo({ ...props.userInfo, profile_picture: props.editProfileResponse?.data });
      // }
    }
  }, [props.editProfileResponse])

  const onSubmit = data => {
    if (data.password == undefined) {
      delete data.password
    }
    console.log('data => ', data);
    props.EditProfileApiCall(user.id, data);
    isLoading(true);
  };

  // console.log('errors => ', errors);
  const [loading, isLoading] = useState(false);



  const [showDate, setShowDate] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(user?.dateofbirth ? user?.dateofbirth : '');


  const _handleChangeDate = (event, date) => {
    const { type, nativeEvent: { timestamp }, } = event;
    // console.log('type => ', type);
    if (type != 'dismissed') {
      // console.log('date => ', date);
      const momentdate = moment(date).format('DD-MM-YYYY')
      // console.log('momentdate => ', momentdate);
      setShowDate(false);
      setValue('date_of_birth', momentdate)
      setDateOfBirth(momentdate);
    } else {
      setShowDate(false);
    }
  };

  function _handleSetVisible(data) {
    setShowDate(false);
  }




  const myRefInParent = useRef(null);
  // const snapPoints = useMemo(() => ["1%", "90%"], []);
  // const [isSheetOpen, toggleSheet] = useState(false)
  // const handleSheetChanges = useCallback((index) => {
  //   console.log("handleSheetChange", index);
  // }, []);
  const handleSnapPress = useCallback((index, type) => {
    // toggleSheet(true)
    setListType(type);
    if (myRefInParent.current) {
      console.log('myRefInParent.current => ', myRefInParent.current)
      myRefInParent.current.present()
      myRefInParent.current.snapToIndex(index)
    }
  }, []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);

  const [listtype, setListType] = useState();
  const [selecteditem, setSelecteditem] = useState();


  // const [country, setCountry] = useState();
  function _handleSelect(item) {
    console.log('_handleSelect => ', item);
    if (listtype == 'country') { setCountry(item); setSelecteditem(country) }
    if (listtype == 'gender') { setGender(item); setSelecteditem(gender) }
  }

  const setChildRef = (ref) => {
    console.log('setChildRef ref => ', ref)
    myRefInParent.current = ref.current;
  };


  const [gender, setGender] = useState(user?.gender ? user?.gender : null);
  const [career_level, setCareerLevel] = useState(user?.career_level ? user?.career_level : null);
  const [industry, setIndustry] = useState(user?.industry ? user?.industry : null)
  const [functional_area, setFunctionalArea] = useState(user?.functional_area ? user?.functional_area : null)
  const [experience, setExperience] = useState(user?.experience ? user?.experience : null)
  // const [ownership, setOwenership] = useState(user?.ownership ? user?.ownership : null)
  const [nationality, setNationality] = useState(user?.nationality ? user?.nationality : null)
  const [country, setCountry] = useState(user?.country ? user?.country : null)
  const [state, setState] = useState(null)
  const [city, setCity] = useState(null);
  const _handleCountry = (item) => {
    console.log('_handleCountry => ', item)
    setCountry(item)
  }
  const _handleState = (item) => {
    console.log('_handleState => ', item)
    setState(item)
  }
  const _handleCity = (item) => {
    console.log('_handleCity => ', item)
    setCity(item)
  }
  const _handleOwnership = (item) => {
    console.log('_handleOwnership => ', item)
    setOwenership(item)
  }
  const _handleIndustry = (item) => {
    console.log('_handleIndustry => ', item)
    setIndustry(item)
  }
  const _handleFunctionalArea = (item) => {
    console.log('_handleFunctionalArea => ', item)
    setFunctionalArea(item)
  }
  const _handleNationality = (item) => {
    console.log('_handleNationality => ', item)
    setNationality(item)
  }
  const _handleGender = (item) => {
    console.log('_handleGender => ', item)
    setGender(item)
  }
  const _handleExperience = (item) => {
    console.log('_handleExperience => ', item)
    setExperience(item)
  }
  const _handleCareerLevel = (item) => {
    console.log('_handleCareerLevel => ', item)
    setCareerLevel(item)
  }

  const TableRow = ({ item, showFile, showView }) => {
    return (<View style={{ flexDirection: 'row', backgroundColor: item?.id % 2 == 0 ? '#fff' : '#f1f1f1' }}>
      <View style={{ width: '50%', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 15, paddingRight: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        {showFile && <Icon name="file" style={{ fontSize: fontSize + 1, marginRight: 8 }} />}
        <Text style={{ fontFamily: fonts.latoBold, fontSize: fontSize, color: colors.black }}>{item?.title}</Text>
      </View>
      {/* <View style={{ width: '50%',   justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 15, paddingRight: 5 }}><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>{item?.default ? 'Default' : ''}</Text></View> */}
      <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start', paddingLeft: 15, paddingRight: 5 }}>
        {showFile && <TouchableOpacity style={{ width: 35, paddingVertical: 15, alignItems: 'center' }}>
          <Ionicons name={item.default ? "heart" : "heart-outline"} style={{ fontSize: fontSize + 2, color: '#005393' }} />
        </TouchableOpacity>}
        {showView && <TouchableOpacity style={{ width: 35, paddingVertical: 15, alignItems: 'center' }}>
          <Icon name="eye" style={{ fontSize: fontSize, color: colors.black }} />
        </TouchableOpacity>}
        {!showFile && <TouchableOpacity style={{ width: 35, paddingVertical: 15, alignItems: 'center' }}>
          <Icon name="edit-2" style={{ fontSize: fontSize, color: '#005393' }} />
        </TouchableOpacity>}
        <TouchableOpacity style={{ width: 35, paddingVertical: 15, alignItems: 'center' }}>
          <Icon name="trash" style={{ fontSize: fontSize, color: '#f008' }} />
        </TouchableOpacity>
      </View>
    </View>)
  }

  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);


  const _handleExperienceSubmit = (data) => {

  }

  function removeSkillsItem(id) {
    const skills = [...user.skills]
    const removedskills = skills.filter(x => x.id != id);
    console.log('removeSkillsItem skills => ', removedskills)
    setUser(prev => ({ ...prev, skills: removedskills }))
  }

  const _handleEditExperience = (item) => {
    console.log('item => ', item)
    setShowExperience(item)
  }

  const _handleEditEducation = (item) => {
    console.log('item => ', item)
    setShowEducation(item)
  }

  return (
    <>
      <CameraModal
        handleCamera={handleCamera}
        visible={showModal}
        setVisible={setShowModal}
      />
      <Loader isLoading={loading} />
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.fullview}>
          <View style={[{ flex: 1, justifyContent: 'center', paddingHorizontal: 0 }]}>
            <ScrollView style={styles.container}>
              <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  {/* <View style={{ backgroundColor: colors.primary, height: 400, width: '100%', top: 0, position: 'absolute', }}></View> */}
                  <View style={[{ paddingVertical: 20, paddingHorizontal: 15 }, isIPad && globalstyle.authscreencontainer]}>
                    <View style={{ width: 140, height: 140, borderRadius: 140, marginLeft: 'auto', marginRight: 'auto', marginVertical: 20, position: 'relative', backgroundColor: '#ddd', borderColor: colors.white, borderWidth: 2, marginTop: 10 }}>
                      <Image
                        source={
                          filePath?.uri
                            ? { uri: filePath?.uri }
                            : user?.profile_picture
                              ? { uri: user?.profile_picture }
                              : require('./../../../../assets/images/dummy-profile-image.png')
                          // { uri: user?.profilepic }
                          // require('./../../../assets/images/profile-image.jpg')
                        }
                        defaultSource={require('./../../../../assets/images/dummy-profile-image.png')}
                        style={{ width: '100%', height: '100%', borderRadius: 120, resizeMode: 'cover', }}
                      />
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ borderWidth: 1, borderColor: colors.white, position: 'absolute', right: 5, bottom: 2, zIndex: 1, alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 40, backgroundColor: colors.white, }}
                        onPress={() => {
                          setShowModal(true);
                        }}>
                        <Icon name="camera" size={isIPad ? 20 : 18} color={colors.primary} />
                      </TouchableOpacity>
                    </View>

                    {/* <TouchableOpacity
              onPress={() => {
                setIsEditable(!isEditable);
              }}
              style={{ marginLeft: 'auto', marginTop: -60, marginBottom: 15, width: 40, height: 40, borderRadius: 40, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', }}>
              <Icon name={!isEditable ? 'edit-3' : 'x'} size={20} color={colors.white} />
            </TouchableOpacity> */}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ width: '48.5%' }}>
                        <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>First Name</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }, { width: '100%' }]}>
                          <TextInput
                            style={globalstyle.inputfield}
                            placeholder="First Name"
                            defaultValue={user?.first_name}
                            placeholderTextColor={colors.placeholdercolor}
                            {...register('first_name', {
                              value: user?.first_name,
                              required: 'First name is required',
                              pattern: {
                                value: /^[A-Za-z\s]+$/i,
                                message: 'Please provide a valid name',
                              },
                            })}
                            onChangeText={value => setValue('first_name', value)}
                            ref={input01}
                            returnKeyType="next"
                            onSubmitEditing={() => input02.current.focus()}
                          />
                        </View>
                      </View>
                      {errors.first_name && (<Text style={globalstyle.errorField}> {errors.first_name.message} </Text>)}

                      <View style={{ width: '48.5%' }}>
                        <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Middle Name</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }, { width: '100%' }]}>
                          <TextInput
                            style={globalstyle.inputfield}
                            placeholder="Middle Name"
                            defaultValue={user?.middle_name}
                            placeholderTextColor={colors.placeholdercolor}
                            {...register('middle_name', {
                              value: user?.middle_name,
                              required: 'Middle name is required',
                              pattern: {
                                value: /^[A-Za-z\s]+$/i,
                                message: 'Please provide a valid name',
                              },
                            })}
                            onChangeText={value => setValue('middle_name', value)}
                            ref={input01}
                            returnKeyType="next"
                            onSubmitEditing={() => input02.current.focus()}
                          />
                        </View>
                      </View>
                      {errors.middle_name && (<Text style={globalstyle.errorField}> {errors.middle_name.message} </Text>)}
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ width: '48.5%' }}>
                        <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Last Name</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }, { width: '100%' }]}>
                          <TextInput
                            style={globalstyle.inputfield}
                            placeholder="Last Name"
                            defaultValue={user?.last_name}
                            placeholderTextColor={colors.placeholdercolor}
                            {...register('last_name', {
                              value: user?.last_name,
                              required: 'Last name is required',
                              pattern: {
                                value: /^[A-Za-z\s]+$/i,
                                message: 'Please provide a valid name',
                              },
                            })}
                            onChangeText={value => setValue('last_name', value)}
                            ref={input01}
                            returnKeyType="next"
                            onSubmitEditing={() => input02.current.focus()}
                          />
                        </View>
                      </View>
                      {errors.last_name && (<Text style={globalstyle.errorField}> {errors.last_name.message} </Text>)}

                      <View style={{ width: '48.5%' }}>
                        <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Father Name</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }, { width: '100%' }]}>
                          <TextInput
                            style={globalstyle.inputfield}
                            placeholder="Father Name"
                            defaultValue={user?.father_name}
                            placeholderTextColor={colors.placeholdercolor}
                            {...register('father_name', {
                              value: user?.father_name,
                              required: 'Father name is required',
                              pattern: {
                                value: /^[A-Za-z\s]+$/i,
                                message: 'Please provide a valid name',
                              },
                            })}
                            onChangeText={value => setValue('father_name', value)}
                            ref={input01}
                            returnKeyType="next"
                            onSubmitEditing={() => input02.current.focus()}
                          />
                        </View>
                      </View>
                      {errors.father_name && (<Text style={globalstyle.errorField}> {errors.father_name.message} </Text>)}
                    </View>

                    <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Email Address</Text>
                    <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                      <TextInput
                        style={[globalstyle.inputfield, { opacity: 0.6 }]}
                        defaultValue={user?.email}
                        editable={false}
                        placeholder="Email Address"
                        placeholderTextColor={colors.placeholdercolor}
                        {...register('email', {
                          value: user?.email,
                          required: 'Email Address is required',
                          pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                            message: 'Please provide valid email',
                          },
                        })}
                        // defaultValue={''}
                        onChangeText={value => setValue('email', value)}
                        autoCapitalize="none"
                        ref={input02}
                        returnKeyType="next"
                        onSubmitEditing={() => input03.current.focus()}
                      />
                    </View>
                    {errors.email && (
                      <Text style={globalstyle.errorField}>{errors.email.message}</Text>
                    )}


                    <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Phone Number</Text>
                    <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                      <TextInput
                        style={globalstyle.inputfield}
                        placeholder="Phone Number (Optional)"
                        placeholderTextColor={colors.placeholdercolor}
                        defaultValue={user?.phone}
                        // keyboardType='phone-pad'
                        keyboardType="phone-pad"
                        {...register('phone', {
                          value: user?.phone,
                          // required: 'Phone number is required',
                          pattern: {
                            value: /[0-9+]$/i,
                            message: 'Please provide valid phone number',
                          },
                        })}
                        onChangeText={value => setValue('phone', value)}
                        ref={input03}
                        returnKeyType="next"
                        onSubmitEditing={() => input04.current.focus()}
                      />
                    </View>
                    {errors.phone && (<Text style={globalstyle.errorField}>{errors.phone.message}</Text>)}

                    <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Password</Text>
                    <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }, { justifyContent: 'space-between' },]}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                          style={[globalstyle.inputfield, { flex: 0.8 }]}
                          placeholder="Password"
                          // value="password123"
                          placeholderTextColor={colors.placeholdercolor}
                          {...register('password', {
                            // value: 'password123',
                            // required: 'Password is required',
                            minLength: {
                              value: 8,
                              message: 'Password length must be greater then 8',
                            },
                          })}
                          // defaultValue={'tabish@123'}
                          // inputRef={password.ref}
                          onChangeText={value => setValue('password', value)}
                          secureTextEntry={!showPassword ? true : false}
                          autoCapitalize="none"
                          ref={input04}
                        // returnKeyType="next"
                        // onSubmitEditing={() => input05.current.focus()}
                        />
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={globalstyle.showhideicontouch}
                        onPress={() => {
                          setShowPassword(!showPassword);
                        }}>
                        <Icon
                          name={!showPassword ? 'eye' : 'eye-off'}
                          size={18}
                          style={globalstyle.showhideicon}
                        />
                      </TouchableOpacity>
                    </View>


                    <SelectModal placeholder="Select Gender" selected={gender} label="Gender" list={genderlist} onSelect={_handleGender} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('gender', { value: '', required: 'Gender is required', })} />
                    {errors.gender && <Text style={globalstyle.errorField}>{errors.gender.message}</Text>}

                    <SelectModal placeholder="Select Country" selected={country} label="Country" list={countries} onSelect={_handleCountry} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('country', { value: '', required: 'Country is required', })} />
                    {errors.country && <Text style={globalstyle.errorField}>{errors.country.message}</Text>}

                    <SelectModal placeholder="Select State" selected={state} label="State" list={[]} onSelect={_handleState} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('state', { value: '', required: 'State is required', })} />
                    {errors.state && <Text style={globalstyle.errorField}>{errors.state.message}</Text>}

                    <SelectModal placeholder="Select City" selected={city} label="City" list={[]} onSelect={_handleCity} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('city', { value: '', required: 'City is required', })} />
                    {errors.city && <Text style={globalstyle.errorField}>{errors.city.message}</Text>}

                    <SelectModal placeholder="Select Nationality" selected={nationality} label="Nationality" list={nationalitylist} onSelect={_handleNationality} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('nationality', { value: '', required: 'Nationality is required', })} />
                    {errors.nationality && <Text style={globalstyle.errorField}>{errors.nationality.message}</Text>}

                    {Platform.OS === 'ios' && <DateTimeModal
                      showDate={showDate}
                      // maxDate={dateOfBirth} 
                      setVisible={_handleSetVisible}
                      _handleChangeDate={_handleChangeDate}
                      _handleChangeTime={() => { }} />}

                    {(dateOfBirth) && Platform.OS !== 'ios' && (
                      <RNDateTimePicker
                        value={new Date()}
                        dataFormat="day month year"
                        mode="date"
                        display={Platform.OS === 'ios' ? 'inline' : 'spinner'}
                        // display={'spinner'}
                        // minimumDate={new Date()}
                        minimumDate={!dateOfBirth ? new Date(moment(dateOfBirth, "DD-MM-YYYY").format("YYYY"), (moment(dateOfBirth, "DD-MM-YYYY").format("MM") - 1), moment(dateOfBirth, "DD-MM-YYYY").format("DD")) : new Date()}
                        onChange={_handleChangeDate}
                      />
                    )}

                    <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Date Of Birth</Text>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setShowDate(true)}
                      style={[globalstyle.inputbox, { width: '100%', paddingVertical: 0, paddingHorizontal: 0 }]}>
                      <Text style={[globalstyle.inputfield, { color: dateOfBirth != '' ? colors.black : colors.placeholdercolor }]}>{dateOfBirth != '' ? dateOfBirth : 'Date of Birth'}</Text>
                    </TouchableOpacity>

                    <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                      <TextInput
                        style={[globalstyle.inputfield, { display: 'none' }]}
                        placeholder="Date Of Birth"
                        defaultValue={user?.date_of_birth}
                        placeholderTextColor={colors.placeholdercolor}
                        {...register('date_of_birth', {
                          value: user?.date_of_birth,
                        })}
                        onChangeText={value => setValue('date_of_birth', value)}
                        ref={input01}
                        returnKeyType="next"
                        onSubmitEditing={() => input02.current.focus()}
                      />
                    </View>
                    {errors.date_of_birth && (<Text style={globalstyle.errorField}> {errors.date_of_birth.message} </Text>)}

                    <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>National ID</Text>
                    <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                      <TextInput
                        style={globalstyle.inputfield}
                        placeholder="National ID"
                        defaultValue={user?.national_id}
                        editable={isEditable}
                        placeholderTextColor={colors.placeholdercolor}
                        {...register('national_id', {
                          value: user?.national_id,
                        })}
                        onChangeText={value => setValue('national_id', value)}
                        ref={input01}
                        returnKeyType="next"
                        onSubmitEditing={() => input02.current.focus()}
                      />
                    </View>
                    {errors.national_id && (<Text style={globalstyle.errorField}> {errors.national_id.message} </Text>)}

                    <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Street Address</Text>
                    <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                      <TextInput
                        style={[globalstyle.inputfield]}
                        // multiline={true}
                        placeholder="Street Address"
                        defaultValue={user?.street_address}
                        editable={isEditable}
                        placeholderTextColor={colors.placeholdercolor}
                        {...register('street_address', {
                          value: user?.street_address,
                        })}
                        onChangeText={value => setValue('street_address', value)}
                        ref={input01}
                        returnKeyType="next"
                        onSubmitEditing={() => input02.current.focus()}
                      />
                    </View>
                    {errors.street_address && (<Text style={globalstyle.errorField}> {errors.street_address.message} </Text>)}

                    <Text style={{ fontSize: 18, fontFamily: fonts.latoBold, marginBottom: 10, marginTop: 20 }}>Career Information</Text>

                    <SelectModal placeholder="Select Experience" selected={experience} label="Job Experience" list={exprience_level} onSelect={_handleExperience} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('experience', { value: '', required: 'Experience is required', })} />
                    {errors.experience && <Text style={globalstyle.errorField}>{errors.experience.message}</Text>}

                    <SelectModal placeholder="Select Career Level" selected={career_level} label="Career Level" list={careerlevellist} onSelect={_handleCareerLevel} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('career_level', { value: '', required: 'Career Level is required', })} />
                    {errors.career_level && <Text style={globalstyle.errorField}>{errors.career_level.message}</Text>}

                    <SelectModal placeholder="Select Industry" selected={industry} label="Industry" list={industrylist} onSelect={_handleIndustry} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('industry', { value: '', required: 'Industry is required', })} />
                    {errors.industry && <Text style={globalstyle.errorField}>{errors.industry.message}</Text>}

                    <SelectModal placeholder="Select Functional Area" selected={functional_area} label="Functional Area" list={functionalarealist} onSelect={_handleFunctionalArea} showLabel={true} />
                    <TextInput style={{ display: 'none' }} {...register('functional_area', { value: '', required: 'Functional Area is required', })} />
                    {errors.functional_area && <Text style={globalstyle.errorField}>{errors.functional_area.message}</Text>}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ width: '48.5%' }}>
                        <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Current Salary</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }, { width: '100%', paddingHorizontal: 0 }]}>
                          <TextInput
                            style={globalstyle.inputfield}
                            placeholder="Current Salary"
                            defaultValue={String(user?.current_salary)}
                            editable={isEditable}
                            placeholderTextColor={colors.placeholdercolor}
                            {...register('current_salary', {
                              value: user?.current_salary,
                              required: 'Current Salary is required',
                            })}
                            onChangeText={value => setValue('current_salary', value)}
                            ref={input01}
                            returnKeyType="next"
                            onSubmitEditing={() => input02.current.focus()}
                          />
                        </View>
                      </View>
                      {errors.current_salary && (<Text style={globalstyle.errorField}> {errors.current_salary.message} </Text>)}

                      <View style={{ width: '48.5%' }}>
                        <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Expected Salary</Text>
                        <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }, { width: '100%', paddingHorizontal: 0 }]}>
                          <TextInput
                            style={globalstyle.inputfield}
                            placeholder="Expected Salary"
                            defaultValue={String(user?.expected_salary)}
                            editable={isEditable}
                            placeholderTextColor={colors.placeholdercolor}
                            {...register('expected_salary', {
                              value: user?.expected_salary,
                              required: 'First name is required',
                            })}
                            onChangeText={value => setValue('expected_salary', value)}
                            ref={input01}
                            returnKeyType="next"
                            onSubmitEditing={() => input02.current.focus()}
                          />
                        </View>
                      </View>
                      {errors.expected_salary && (<Text style={globalstyle.errorField}> {errors.expected_salary.message} </Text>)}
                    </View>

                    <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Salary Currency</Text>
                    <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                      <TextInput
                        style={globalstyle.inputfield}
                        placeholder="Salary Currency"
                        defaultValue={user?.salary_currency && String(user?.salary_currency)}
                        editable={isEditable}
                        placeholderTextColor={colors.placeholdercolor}
                        {...register('salary_currency', {
                          value: user?.salary_currency,
                        })}
                        onChangeText={value => setValue('salary_currency', value)}
                        ref={input01}
                        returnKeyType="next"
                        onSubmitEditing={() => input02.current.focus()}
                      />
                    </View>
                    {errors.salary_currency && (<Text style={globalstyle.errorField}> {errors.salary_currency.message} </Text>)}

                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={handleSubmit(onSubmit)}
                      style={globalstyle.authSubmitButton}>
                      <Text style={globalstyle.authSubmitButtonText}>Update Profile</Text>
                    </TouchableOpacity>

                    <View style={{ height: 20 }} />
                    {/* <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Summary</Text> */}
                    <SectionTitle title={"Summary"} />
                    <View style={[globalstyle.inputbox, { paddingHorizontal: 0, }, { alignItems: 'flex-start', paddingTop: 15 }]}>
                      <TextInput
                        style={[globalstyle.inputfield, { height: 130 }]}
                        multiline={true}
                        placeholder="Write a breif profile summary"
                        defaultValue={user?.summary}
                        editable={isEditable}
                        placeholderTextColor={colors.placeholdercolor}
                        {...register('summary', {
                          value: user?.summary,
                        })}
                        onChangeText={value => setValue('summary', value)}
                        ref={input01}
                        returnKeyType="next"
                        onSubmitEditing={() => input02.current.focus()}
                      />
                    </View>
                    {errors.summary && (<Text style={globalstyle.errorField}> {errors.summary.message} </Text>)}

                    <View style={{ height: 15 }} />
                    <View style={{ paddingVertical: 20, paddingHorizontal: 15, backgroundColor: '#fff', marginHorizontal: -15 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <SectionTitle title={"Curriculum Vitae"} />
                        <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 10, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginBottom: 15, }}>
                          <Icon name="plus" style={{ color: colors.white }} />
                          {/* <Text style={{ color: colors.white, fontFamily: fonts.latoRegular, fontSize: fontSize }}>Upload</Text> */}
                        </TouchableOpacity>
                      </View>
                      <View>
                        {/* <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%', paddingVertical: 12, backgroundColor: '#333', justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 12 }}><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.white }}>Title</Text></View>
                        <View style={{ width: '50%', paddingVertical: 12, backgroundColor: '#333', justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 12 }}><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.white }}>Default</Text></View>
                        <View style={{ width: '50%', paddingVertical: 12, backgroundColor: '#333', justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 12 }}><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.white }}>Action</Text></View>
                      </View> */}
                        <View style={{ marginHorizontal: -15 }}>
                          {resumes && resumes.map((item, index) => {
                            return <TableRow keys={index} item={item} showFile={true} showView={true} />
                          })}
                        </View>
                      </View>
                    </View>

                    <View style={{ height: 30 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <View style={{ width: width - 70 }}>
                        <SectionTitle title={"Documents"} />
                        <Text style={{ fontFamily: fonts.latoRegular, color: colors.grey, marginTop: -7, marginBottom: 10, fontSize: fontSize - 1 }}>All documents must be uploaded for job application submission eligibility.</Text>
                      </View>
                      {/* <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 10, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Icon name="plus" style={{ color: colors.white }} />
                      </TouchableOpacity> */}
                    </View>

                    {documents && documents.map((item, index) => {

                      return <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 13, backgroundColor: item?.id % 2 == 0 ? '#fff' : '#f1f1f1', marginHorizontal: -15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Icon name={item.url == '' ? "circle" : "check-circle"} style={{ color: colors.primary, fontSize: fontSize, marginRight: 10 }} />
                          <Text style={{ fontFamily: fonts.latoRegular }}> {item?.title}</Text>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Icon name="eye" style={{ marginLeft: 5, fontSize: fontSize, color: colors.primary }} />
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{ borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ fontFamily: fonts.latoRegular, color: colors.primary }}>Upload</Text>
                          <Icon name="file" style={{ marginLeft: 5, fontSize: fontSize, color: colors.primary }} />
                        </TouchableOpacity> */}
                        {/* <TouchableOpacity style={{ backgroundColor: colors.primary, paddingVertical: 4, paddingHorizontal: 15, borderRadius: 10 }}>
                          <Text style={{ fontFamily: fonts.latoRegular, color: colors.white }}>Select</Text>
                        </TouchableOpacity> */}
                      </TouchableOpacity>
                    })}



                    <View style={{ height: 1, backgroundColor: '#ddd', marginTop: 10, marginBottom: 15 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <View style={{ width: width - 70 }}>
                        <SectionTitle title={"Experience"} />
                        <Text style={{ fontFamily: fonts.latoRegular, color: colors.grey, marginTop: -7, marginBottom: 10, fontSize: fontSize - 1 }}>Add experience according to your job.</Text>
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => setShowExperience(prev => !prev)}
                        style={{ width: 30, height: 30, borderRadius: 10, marginTop: 0, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Icon name={showExperience ? "minus" : "plus"} style={{ color: colors.white }} />
                      </TouchableOpacity>
                    </View>
                    {showExperience && <AddExperience item={showExperience} />}
                    {user?.experience && user?.experience.map((item, index) => {
                      return <ExperienceItem key={index} item={item} showTrash={true} handleEdit={_handleEditEducation} />
                    })}

                    <View style={{ height: 1, backgroundColor: '#ddd', marginTop: 10, marginBottom: 15 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <View style={{ width: width - 70 }}>
                        <SectionTitle title={"Education"} />
                        <Text style={{ fontFamily: fonts.latoRegular, color: colors.grey, marginTop: -7, marginBottom: 10, fontSize: fontSize - 1 }}>Add education according to your job.</Text>
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => setShowEducation(true)}
                        style={{ width: 30, height: 30, borderRadius: 10, marginTop: 0, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Icon name={showEducation ? "minus" : "plus"} style={{ color: colors.white }} />
                      </TouchableOpacity>
                    </View>


                    {showEducation && <AddExperience item={showEducation} />}
                    {user?.education && user?.education.map((item, index) => {
                      return <ExperienceItem key={index} item={item} education={true} showTrash={true} handleEdit={_handleEditExperience} />
                    })}

                    <View style={{ height: 1, backgroundColor: '#ddd', marginTop: 10, marginBottom: 25 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <View style={{ width: width - 70 }}>
                        <SectionTitle title={"Skills"} />
                        <Text style={{ fontFamily: fonts.latoRegular, color: colors.grey, marginTop: -7, marginBottom: 10, fontSize: fontSize - 1 }}>All skills must be uploaded for job application submission eligibility.</Text>
                      </View>
                      <TouchableOpacity onPress={() => setShowSkillsModal(true)} style={{ width: 30, height: 30, borderRadius: 10, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Icon name="plus" style={{ color: colors.white }} />
                        {/* <Text style={{ color: colors.white, fontFamily: fonts.latoRegular, fontSize: fontSize }}>Upload</Text> */}
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: -15, flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, }}>
                      {user?.skills && user?.skills.map((item, index) => {
                        return <View style={{ backgroundColor: '#ddd', paddingVertical: 8, paddingLeft: 10, marginRight: 5, marginBottom: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ fontFamily: fonts.latoRegular, color: colors.black, fontSize: fontSize - 1 }}>{item.title}</Text>
                          <TouchableOpacity activeOpacity={0.7} onPress={() => removeSkillsItem(item.id)} style={{ width: 25, height: 20, justifyContent: 'center', alignItems: 'center' }}><Icon name="x" style={{ color: colors.primary }} /></TouchableOpacity>
                        </View>
                        // return <TableRow keys={index} item={item} />
                      })}
                      {user?.skills && user?.skills.length == 0 && <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: colors.grey }}>No skills added</Text>}
                    </View>

                    <View style={{ height: 1, backgroundColor: '#ddd', marginTop: 25, marginBottom: 25 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <View style={{ width: width - 70 }}>
                        <SectionTitle title={"Languages"} />
                        <Text style={{ fontFamily: fonts.latoRegular, color: colors.grey, marginTop: -7, marginBottom: 10, fontSize: fontSize - 1 }}>All skills must be uploaded for job application submission eligibility.</Text>
                      </View>
                      <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 10, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Icon name="plus" style={{ color: colors.white }} />
                        {/* <Text style={{ color: colors.white, fontFamily: fonts.latoRegular, fontSize: fontSize }}>Upload</Text> */}
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: -15 }}>
                      {user?.languages && user?.languages.map((item, index) => {
                        return <TableRow keys={index} item={item} />
                      })}
                    </View>

                  </View>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </ScrollView>
            {/* <SelectBottomSheet list={listtype} handleSelect={_handleSelect} setChildRef={setChildRef} handleSheetChanges={handleSheetChanges} selecteditem={selecteditem} /> */}
            {/* {isSheetOpen && <BottomSheet
              ref={bottomSheetRef}
              index={1}
              enablePanDownToClose={true}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
            >
              <View style={{ marginHorizontal: 15, marginBottom: 10, backgroundColor: '#f7f7f7', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 15 }}>
                <TextInput
                  placeholder='Search Here...'
                  style={{ paddingHorizontal: 15, paddingVertical: 13, borderRadius: 15 }}
                />
                <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}><Icon name="search" style={{ color: '#888', fontSize: 16 }} /></View>
              </View>
              <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                {countries && countries.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => _handleSelect(item)}
                    activeOpacity={0.8}
                    style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingVertical: 13, paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                    <Icon name={item.id == country?.id ? "check-circle" : "circle"} style={{ color: item.id == country?.id ? colors.primary : '#999', marginRight: 13, fontSize: 16 }} />
                    <Text style={{ fontFamily: fonts.latoRegular }}>{item.title}</Text>
                  </TouchableOpacity>
                ))}
              </BottomSheetScrollView>
            </BottomSheet>} */}
          </View>

        </SafeAreaView >
      </BottomSheetModalProvider >
    </>
  );
};

const styles = StyleSheet.create({
  fullview: { flex: 1 },
  container: { flex: 1 },
  checkboxtick: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
  labelinput: { fontFamily: fonts.latoRegular, fontSize: 13, color: '#000' },
});

const setStateToProps = state => ({
  userInfo: state.appstate.userInfo,
  editProfileResponse: state.userstate.editProfileResponse,
  updateProfilePicResponse: state.userstate.updateProfilePicResponse,
  updateProfilePicError: state.userstate.updateProfilePicError,
});

const mapDispatchToProps = dispatch => {
  return {
    SetUserInfo: bindActionCreators(SetUserInfo, dispatch),
    EditProfileApiCall: bindActionCreators(EditProfileApiCall, dispatch),
    UpdateProfilePicApiCall: bindActionCreators(UpdateProfilePicApiCall, dispatch),
  };
};

export default connect(setStateToProps, mapDispatchToProps)(EditProfile);
