import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, useColorScheme, StyleSheet, Keyboard, StatusBar } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigationContainerRef, DefaultTheme, DarkTheme, DrawerActions } from '@react-navigation/native';
import Animated, { Extrapolate, interpolate, interpolateNode, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/Feather';
import { colors, fontcolor, fonts, height, width } from "../theme";
import { createDrawerNavigator, useDrawerProgress, useDrawerStatus } from "@react-navigation/drawer";
import { store } from "../redux/store";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import globalstyle from "../theme/style";

import DrawerIcon from "../components/header/DrawerIcon";
import NotificationIcon from "../components/header/NotificationIcon";
import GoBackIcon from "../components/header/GoBackIcon"

/* Screens */
import Dashboard from "../screens/private/Dashboard";

import CompanyProfile from "../screens/private/CompanyProfile";
import Jobs from "../screens/private/Jobs";
import Followers from "../screens/private/Followers";
import EditCompanyProfile from "../screens/private/EditCompanyProfile";
import Notifications from "../screens/private/Notifications";
import EditProfile from "../screens/private/Profile/EditProfile";
import CreateJob from "../screens/private/CreateJob";
import JobDetail from "../screens/private/JobDetail";
import Profile from "../screens/private/Profile/Profile";
import Settings from "../screens/private/Settings";
import ChangePassword from "../screens/ChangePassword";

const Stack = createStackNavigator();


// const DrawerIcon = (props) => {
//     return (<TouchableOpacity
//         activeOpacity={0.8}
//         onPress={() => {
//             console.log('props.navigation => ', props.navigation);
//             Keyboard.dismiss();
//             props.navigation.openDrawer();
//         }}
//         style={[{ padding: 10, paddingHorizontal: 15, borderRadius: 40, overflow: 'hidden', marginRight: 15 }]} >
//         <Icon name={'align-right'} size={22} color={fontcolor} />
//     </TouchableOpacity >)
// }

// const GoBackIcon = (props) => {
//     return (<TouchableOpacity
//         activeOpacity={0.8}
//         onPress={() => {
//             // props.navigation.navigate(props.screen ? props.screen : 'Home')
//             props.navigation.goBack()
//         }}
//         style={[{ padding: 10, paddingHorizontal: 15, borderRadius: 40, overflow: 'hidden', marginRight: 15 }]} >
//         <Icon name={'chevron-left'} size={22} color={props.color ? props.color : colors.white} />
//     </TouchableOpacity >)
// }

// const NotificationIcon = (props) => {
//     // const state = store.getState();
//     // console.log('state.appstate.notificationBadge => ', state.appstate.notificationBadge);
//     // useEffect(()=>{
//     // },[state.appstate.notificationBadge])
//     return (
//         <TouchableOpacity
//             activeOpacity={0.8}
//             onPress={() => {
//                 console.log('Notifications Clicked');
//                 props.navigation.navigate('Notifications');
//             }}
//             style={styles.notibadge}>
//             <Icon name={'bell'} size={20} color={colors.black} />
//             {/* {state.appstate.notificationBadge > 0 && <View style={styles.badge}></View>} */}
//             {props.notificationBadge > 0 && <View style={styles.badge}></View>}
//         </TouchableOpacity>
//     )
// }

const MainStackNavigation = (props) => {

    const { navigation, style, notificationBadge, isCandidate } = props;

    const drawerProgress = useDrawerProgress();
    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.9], {
            extrapolateRight: Extrapolate.CLAMP,
        });
        const rotateY = interpolate(drawerProgress.value, [0, 1], [0, 5], {
            extrapolateRight: Extrapolate.CLAMP,
        });
        const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 15], {
            extrapolateRight: Extrapolate.CLAMP,
        });
        return {
            overflow: 'hidden',
            transform: [
                { perspective: 100 },
                { rotateY: `-${rotateY}deg` },
                { scale }
            ],
            borderRadius,
        };
    });



    const isDrawerOpen = useDrawerStatus() === 'open';

    useEffect(() => {
        // Change the StatusBar style to light when the drawer is open
        StatusBar.setBarStyle(isDrawerOpen ? 'light-content' : 'dark-content');
    }, [isDrawerOpen]);

    return <Animated.View style={[styles.stack, animatedStyle]}>
        <Stack.Navigator>

            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <DrawerIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="CompanyProfile"
                component={CompanyProfile}
                options={{
                    headerTitle: 'Company Profile',
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <DrawerIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="Jobs"
                component={Jobs}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <DrawerIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{
                    headerTitle: 'Change Password',
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <DrawerIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />
            {/* <Stack.Screen
                name="Jobs"
                component={Jobs}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <DrawerIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            /> */}
            <Stack.Screen
                name="CreateJob"
                component={CreateJob}
                options={{
                    headerTitle: 'Post a Job',
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <DrawerIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTitle: 'Profile',
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <GoBackIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="EditCompanyProfile"
                component={EditCompanyProfile}
                options={{
                    headerTitle: 'Edit Profile',
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <GoBackIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <DrawerIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: "Edit Profile",
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <GoBackIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="JobDetail"
                component={JobDetail}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: "Job Detail",
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <GoBackIcon navigation={navigation} />,
                    headerRight: () => <View style={{ flexDirection: 'row' }}>
                        {isCandidate && <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                console.log('Notifications Clicked');
                                // props.navigation.navigate('Notifications');
                            }}
                            style={[globalstyle.notibadge, { width: 20 }]}>
                            <Icon name={'heart'} size={20} color={colors.black} />
                            {/* {props.notificationBadge > 0 && <View style={globalstyle.badge}></View>} */}
                        </TouchableOpacity>}
                        <NotificationIcon navigation={navigation} />
                        {!isCandidate && <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                console.log('More Clicked');
                                // props.navigation.navigate('Notifications');
                            }}
                            style={[globalstyle.notibadge, { width: 20 }]}>
                            <Icon name={'more-vertical'} size={20} color={colors.black} />
                            {/* {props.notificationBadge > 0 && <View style={globalstyle.badge}></View>} */}
                        </TouchableOpacity>}
                    </View>
                }}
            />
            <Stack.Screen
                name="Followers"
                component={Followers}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <DrawerIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: globalstyle.headerTitleStyle,
                    headerLeft: () => <DrawerIcon navigation={navigation} />,
                    headerRight: () => <NotificationIcon navigation={navigation} />
                }}
            />

        </Stack.Navigator>
    </Animated.View>
}

const setStateToProps = (state) => ({
    // notificationBadge: state.appstate.notificationBadge,
    isCandidate: state.appstate.isCandidate,
})
const mapDispatchToProps = (dispatch) => {
    return {
        //   LogOut: bindActionCreators(LogOut, dispatch),
    }
}
export default connect(setStateToProps, mapDispatchToProps)(MainStackNavigation);

// export default MainStackNavigation;

const styles = StyleSheet.create({
    stack: { flex: 1 },
    drawerStyles: { flex: 1, width: '70%' },
    badge: { backgroundColor: colors.orange, color: colors.white, position: 'absolute', width: 11, height: 11, top: 5, right: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', borderRadius: 10, zIndex: 1, fontSize: 12, fontFamily: fonts.primary, },
    notibadge: { position: 'relative', width: 36, height: 36, marginRight: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, overflow: 'hidden', },
});