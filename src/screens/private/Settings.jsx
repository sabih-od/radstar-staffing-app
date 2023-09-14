import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors, fontSize, fonts } from "../../theme"
import Icon from "react-native-vector-icons/Feather"
import globalstyle from "../../theme/style"
import { connect } from "react-redux"
import { EditProfileApiCall } from "../../redux/reducers/UserStateReducer"
import { LogOut } from "../../redux/reducers/AppStateReducer"
import { bindActionCreators } from "redux"


const Settings = props => {


    const SettingItem = props => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={{ paddingVertical: 18, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, borderBottomWidth: 1, borderBottomColor: '#eee' }}
                onPress={() => {

                    if (props.icon == 'log-out') {
                        props.navigation.closeDrawer();
                        // props.EditProfileApiCall(userInfo.id, { fcm_token: '' });
                        props.LogOut();
                    } else {
                        props.nav && props.navigation.navigate(props.nav)
                    }

                }}
            >
                <Icon name={props?.icon} style={{ marginRight: 15, fontSize: fontSize + 1 }} />
                <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>{props?.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={globalstyle.fullview}>
            <View style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('./../../../assets/images/dummy-profile-image.png')}
                            defaultSource={require('./../../../assets/images/dummy-profile-image.png')}
                            style={{ width: 70, height: 70, marginRight: 13, borderRadius: 70, overflow: 'hidden' }}
                        />
                        <View>
                            <Text style={{ fontFamily: fonts.latoBold, marginBottom: 2, fontSize: fontSize + 4 }}>{props.isCandidate ? `${props.userInfo.first_name} ${props.userInfo.first_name}` : `${props.userInfo.full_name}`}</Text>
                            <Text style={{ fontFamily: fonts.latoRegular, marginBottom: 2, fontSize: fontSize + 1, color: colors.primary }}>{!props.isCandidate ? props.userInfo.email : 'Medical Laboratory Technician'}</Text>
                            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize - 1, color: colors.grey }}>{!props.isCandidate ? props.userInfo.phone : 'MedixGen Health'}</Text>
                        </View>
                    </View>
                </View>
                <SettingItem title={props.isCandidate ? "Profile" : "Company Profile"} icon="user" navigation={props.navigation} nav={props.isCandidate ? "Profile" : "CompanyProfile"} />
                <SettingItem title={"Edit Profile"} icon="edit-2" navigation={props.navigation} nav={props.isCandidate ? "EditProfile" : "EditCompanyProfile"} />
                <SettingItem title="Change Password" icon="lock" navigation={props.navigation} nav="ChangePassword" />
                <SettingItem title="Delete Your Account" icon="trash" navigation={props.navigation} />
                <SettingItem title="Log Out" icon="log-out" navigation={props.navigation} LogOut={props.LogOut} />
            </View>
        </SafeAreaView>
    )
}


const setStateToProps = (state) => ({
    userInfo: state.appstate.userInfo,
    isCandidate: state.appstate.isCandidate,
    // getUpcomingEventsListResponse: state.listingstate.getUpcomingEventsListResponse,
    // getEventsListResponse: state.listingstate.getEventsListResponse,
    // getOurSpeakersListResponse: state.listingstate.getOurSpeakersListResponse,
    // getOurStaffListResponse: state.listingstate.getOurStaffListResponse,
    // getPostsListResponse: state.listingstate.getPostsListResponse,
    // getSermonsListResponse: state.listingstate.getSermonsListResponse,
    // getHomeBannerResponse: state.listingstate.getHomeBannerResponse,
    // getUserProfileResponse: state.authstate.getUserProfileResponse,
})

const mapDispatchToProps = (dispatch) => {
    return {
        EditProfileApiCall: bindActionCreators(EditProfileApiCall, dispatch),
        LogOut: bindActionCreators(LogOut, dispatch),
        // GetOurSpeakerList: bindActionCreators(GetOurSpeakerList, dispatch),
        // GetOurStaffList: bindActionCreators(GetOurStaffList, dispatch),
        // GetPostsList: bindActionCreators(GetPostsList, dispatch),
        // GetSermonsList: bindActionCreators(GetSermonsList, dispatch),
        // GetHomeBanner: bindActionCreators(GetHomeBanner, dispatch),
        // GetProfileApiCall: bindActionCreators(GetProfileApiCall, dispatch),
        // SetUserInfo: bindActionCreators(SetUserInfo, dispatch),
    }
}

export default connect(setStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
})