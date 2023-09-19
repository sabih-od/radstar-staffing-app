import React, { useCallback, useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';


import { IOS, colors, fonts, isIPad } from '../theme';
import { Image, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LogOut, SetUserInfo, UpdateFcmToken, UpdateNotificationBadge } from '../redux/reducers/AppStateReducer';
import DrawerItem from '../components/drawer/DrawerItem';
import globalstyle from '../theme/style';

import { fcmService } from '../helpers/firebase/FCMService';
import { localNotificationService } from '../helpers/firebase/LocalNotificationService';
import messaging from '@react-native-firebase/messaging';
import { GetProfileApiCall } from '../redux/reducers/AuthReducer';

// import { connectSocket, getSocket } from '../helpers/socket-manager';
import { useAppState } from '../hooks/useAppState';
import { EditProfileApiCall } from '../redux/reducers/UserStateReducer';
// import { connectPusher } from '../helpers/pusher';

const DrawerContent = (props) => {

  // useEffect(() => {
  //   connectPusher();
  // }, [])

  // const appState = useAppState();
  // console.log('appState status => ', appState);

  // useEffect(() => {

  //   fcmService.register(onRegister, onNotification, onOpenNotification);
  //   localNotificationService.configure(onOpenNotification);

  //   function onRegister(token) {
  //     console.log('onRegister => ', token);
  //     if (props.fcmToken == '' || props.fcmToken != token) {
  //       props.UpdateFcmToken(token);
  //       props.EditProfileApiCall(user.id, { fcm_token: token });
  //     }
  //   }

  //   const testtopic = 'test';
  //   messaging().subscribeToTopic(testtopic).then(() => console.log("Subscribed to topic:", testtopic)).catch((e) => {
  //     console.log(e);
  //   });

  //   const newtopic = 'newFirebaseNotification';
  //   messaging().subscribeToTopic(newtopic).then(() => console.log("Subscribed to topic:", newtopic)).catch((e) => {
  //     console.log(e);
  //   });

  //   function onNotification(notify) {
  //     console.log('onNotification => ', notify);
  //     const options = { soundName: 'default', };
  //     // localNotificationService.showNotification(0, notify.notification.title, notify.notification.body, notify, options,);
  //     // props.UpdateNotificationBadge(props.notificationBadge + 1);
  //     // if (notify.data.rideid) {
  //     //   props.navigation.navigate('Map', { rideid: notify?.data?.rideid });
  //     // }
  //   }

  //   function onOpenNotification(notify) {
  //     console.log('onOpenNotification => ', notify);
  //     if (notify && props.isLogin && Object.keys(notify).length > 0) {
  //       if (Object.keys(notify.data).length > 0 && notify?.data?.group_id) props.navigation.navigate('Conversation', { groupitem: { id: notify?.data?.group_id, name: notify?.data?.title  } })
  //       else props.navigation.navigate('Notifications')
  //     }
  //   }

  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     console.log('A new FCM message arrived!', remoteMessage);
  //     if (Object.keys(remoteMessage.data).length > 0 && remoteMessage?.data?.group_id) { } else {
  //       props.UpdateNotificationBadge(props.notificationBadge + 1);
  //     }
  //     // const notify = remoteMessage
  //     // const options = { soundName: 'default', };
  //     // localNotificationService.showNotification(0, notify.notification.title, notify.notification.body, notify, options,);
  //     // console.log('notify.rideid => ', notify.rideid);
  //   });

  //   return () => {
  //     fcmService.unRegister();
  //     localNotificationService.unregister();
  //     unsubscribe;
  //   };

  // }, []);

  // useEffect(() => {
  //   if (props.isLogin) {
  //     props.GetProfileApiCall();
  //   }
  // }, [])

  useEffect(() => {
    // connectSocket();
  }, []);

  const [user, setUser] = useState(props.userInfo)

  useEffect(() => {
    console.log('Drawer props.userInfo => ', props.userInfo);
    setUser(props.userInfo);
  }, [props.userInfo])



  const prevUserProfileResRef = useRef(props.getUserProfileResponse?.data);

  useEffect(() => {
    if (props.isLogin && props.getUserProfileResponse !== prevUserProfileResRef.current && props.getUserProfileResponse?.success && props.getUserProfileResponse?.data) {
      prevUserProfileResRef.current = props.getUserProfileResponse?.data;
      // console.log('props.getUserProfileResponse => ', props.getUserProfileResponse);
      let userdata = props.getUserProfileResponse?.data;
      props.SetUserInfo({
        ...props.userInfo,
        email: userdata?.email,
        first_name: userdata?.first_name,
        last_name: userdata?.last_name,
        phone: userdata?.phone,
        profile_picture: userdata?.profile_picture
      });
    }
  }, [props.getUserProfileResponse])

  const draweritems = !props.isCandidate ? [
    { title: 'Dashboard', nav: 'Dashboard', icon: 'grid', param: null },
    // { title: 'About Us', nav: 'About', icon: 'home', param: null },
    // { title: 'Book Detail', nav: 'BookDetail', icon: 'home', param: null },
    { title: 'Company Profile', nav: 'CompanyProfile', icon: 'globe', param: null },
    { title: 'Create Job', nav: 'CreateJob', icon: 'plus', param: null },
    { title: 'Company Jobs', nav: 'Jobs', icon: 'archive', param: null },
    { title: 'Followers', nav: 'Followers', icon: 'users', param: null },
    // { title: 'Upcoming Events', nav: 'UpcomingEvents', icon: 'home', param: null },
    { title: 'Edit Company Profile', nav: 'EditCompanyProfile', icon: 'edit-2', param: null },
    { title: 'Settings', nav: 'Settings', icon: 'settings', param: null },
  ] : [
    { title: 'Dashboard', nav: 'Dashboard', icon: 'grid', param: null },
    { title: 'Recommended Jobs', nav: 'Jobs', icon: 'archive', param: { headerTitle: 'Recommended Jobs' } },
    { title: 'Followers', nav: 'Followers', icon: 'users', param: { headerTitle: 'Followers' } },
    { title: 'My Profile', nav: 'Profile', icon: 'user', param: null },
    { title: 'My Job Applications', nav: 'Jobs', icon: 'archive', param: { headerTitle: 'My Job Applications' } },
    { title: 'Favourite Jobs', nav: 'Jobs', icon: 'heart', param: { headerTitle: 'Favourite Jobs' } },
    { title: 'Manage Resume', nav: 'EditProfile', icon: 'file', param: { headerTitle: 'Manage Resume' } },
    { title: 'My Followings', nav: 'Followers', icon: 'users', param: { headerTitle: 'My Followings' } },
    { title: 'Settings', nav: 'Settings', icon: 'settings', param: null },
  ]

  return (
    <>
      {user &&
        <View style={{ backgroundColor: colors.black, paddingBottom: isIPad ? 60 : 30, paddingTop: IOS ? 90 : 50, }}>
          {/* <TouchableOpacity onPress={() => { props.navigation.closeDrawer() }} activeOpacity={0.8}>
          <Icon name={'x'} color={colors.white} size={16} />
        </TouchableOpacity> */}
          <TouchableOpacity activeOpacity={0.8}
            disabled={!props.isCandidate}
            onPress={() => { props.navigation.navigate('Profile') }} style={{
              width: isIPad ? 120 : 90, height: isIPad ? 120 : 90, borderRadius: isIPad ? 120 : 90, overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto', marginBottom: 10,
              // borderColor: colors.white, borderWidth: 1, 
            }}>
            <Image
              source={{ uri: user?.profile_picture }}
              defaultSource={require('./../../assets/images/dummy-profile-image.png')}
              style={{ width: isIPad ? 120 : 90, height: isIPad ? 120 : 90, resizeMode: 'cover', }}
            />
          </TouchableOpacity>
          <Text style={{ fontFamily: fonts.latoBold, color: colors.white, textAlign: 'center', fontSize: isIPad ? 26 : 20, marginBottom: 8 }}>{props?.isCandidate ? `${user?.first_name} ${user?.last_name}` : user?.full_name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={'mail'} style={{ color: colors.white, fontSize: 16, marginRight: 10, marginBottom: -4 }} />
            <Text style={{ fontFamily: fonts.latoRegular, color: colors.white, textAlign: 'center', fontSize: isIPad ? 18 : 13 }}>{user?.email}</Text>
          </View>
          {/* <Text style={{ fontFamily: fonts.latoRegular, color: colors.white, textAlign: 'center', fontSize: 12 }}>{user?.phone}</Text> */}
        </View>
      }
      <DrawerContentScrollView {...props} style={[styles.sidebar,]} contentContainerStyle={{ paddingTop: 0 }}>
        {/* <View> */}
        {draweritems.map((item, index) => <DrawerItem key={index} item={item} navigation={props.navigation} activescreen={props.currentScreen} />)}
        <View style={{ height: 10 }} />
        {/* {!user && <TouchableOpacity activeOpacity={0.8} onPress={() => { props.navigation.navigate('Login') }} style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: '#ffffff09' }}>
          <Icon name="key" style={{ color: colors.white, marginRight: 15 }} size={16} />
          <Text style={{ fontFamily: fonts.latoRegular, color: colors.white }}>Login</Text>
        </TouchableOpacity>} */}
        {/* </View> */}
      </DrawerContentScrollView>
      {/* {user && <View style={{ backgroundColor: colors.black }}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {
          // logout(props.navigation) 
          props.navigation.closeDrawer();
          props.EditProfileApiCall(user.id, { fcm_token: '' });
          props.LogOut();
          // props.navigation.navigate('Login');
          // props.navigation.reset({ index: 0, routes: [{ name: 'AuthScreens' }] })
        }}
          style={styles.logoutitem}>
          <Icon name="log-out" style={{ color: colors.white, marginRight: 15 }} size={16} />
          <Text style={globalstyle.draweritemtext}>Logout</Text>
        </TouchableOpacity>
      </View>} */}
    </>
  )
}

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: colors.black,
    //flex: 1 
  },
  logoutitem: { flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 15, backgroundColor: colors.black, borderTopRightRadius: 30 }
})

const setStateToProps = (state) => ({
  currentScreen: state.appstate.currentScreen,
  isCandidate: state.appstate.isCandidate,
  fcmToken: state.appstate.fcmToken,
  notificationBadge: state.appstate.notificationBadge,
  userInfo: state.appstate.userInfo,
  isLogin: state.appstate.isLogin,
  getUserProfileResponse: state.authstate.getUserProfileResponse,
})

const mapDispatchToProps = (dispatch) => {
  return {
    LogOut: bindActionCreators(LogOut, dispatch),
    UpdateFcmToken: bindActionCreators(UpdateFcmToken, dispatch),
    UpdateNotificationBadge: bindActionCreators(UpdateNotificationBadge, dispatch),
    GetProfileApiCall: bindActionCreators(GetProfileApiCall, dispatch),
    SetUserInfo: bindActionCreators(SetUserInfo, dispatch),
    EditProfileApiCall: bindActionCreators(EditProfileApiCall, dispatch),
  }
}

export default connect(setStateToProps, mapDispatchToProps)(DrawerContent);

