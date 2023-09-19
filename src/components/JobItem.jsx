import { useNavigation } from '@react-navigation/native'
import moment from 'moment';
import { useState } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { TouchableOpacity, View, Image, Text } = require('react-native')
const { fonts, colors, fontSize, width } = require('../theme')

const JobItem = (props) => {
    const navigation = useNavigation()
    const { item } = props

    const translateX = useSharedValue(0);
    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = translateX.value;
            console.log('ctx.startX => ', ctx.startX)
        },
        onActive: (event, ctx) => {
            let value = ctx.startX + event.translationX;
            if (value > 0) {
                translateX.value = 0;
            } else if (value < -75) {
                translateX.value = -75;
            } else {
                translateX.value = value;
            }
            console.log('onActive translateX.value => ', translateX.value)
        },
        onFinish: (event, ctx) => {
            let value = ctx.startX + event.translationX;
            if (value > 0) {
                translateX.value = 0;
            } else if (value < -75) {
                translateX.value = -75;
            }
        }
    });
    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
            ],
        };
    });

    const [showMore, setShowMore] = useState(false);

    return (
        // <View>
        //     <PanGestureHandler onGestureEvent={gestureHandler}>
        //         <Animated.View style={style}>
        //             <TouchableOpacity
        //                 activeOpacity={0.9}
        //                 onPress={() => { navigation.navigate('JobDetail', { item: item }) }}
        //                 style={[{ paddingVertical: 13, backgroundColor: '#f7f7f7', paddingHorizontal: 15, marginHorizontal: -15, borderBottomColor: '#eee', borderBottomWidth: 1, },
        //                 props.last && { borderBottomColor: 'transparent' },
        //                 props.index % 2 && {
        //                     backgroundColor: '#fff',
        //                     // borderBottomColor: 'transparent', 
        //                 },
        //                     // props.candidates && { backgroundColor: colors.white, padding: 10, borderBottomWidth: 0, borderRadius: 15 }
        //                 ]}
        //             >
        //                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        //                     <Image source={require('./../../assets/images/no-image.png')} style={{ width: 80, height: 80, borderRadius: 15, resizeMode: 'cover', marginRight: 10 }} />
        //                     <View style={{
        //                         width: width - 80 - 40 - 30,
        //                         // backgroundColor: '#ddd'
        //                     }}>
        //                         <Text style={{ fontFamily: fonts.latoBold, fontSize: (fontSize + 3), marginBottom: 3 }}>{item?.title}</Text>
        //                         <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1) }}>{item?.company}</Text>
        //                         <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, width: width - 80 - 40 - 30, }}>
        //                             <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>Full Time / Permanent</Text>
        //                             <View style={{ width: 1, height: 10, backgroundColor: '#999', marginHorizontal: 7, marginBottom: -2 }} />
        //                             <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>{item?.shift}</Text>
        //                             <View style={{ width: 1, height: 10, backgroundColor: '#999', marginHorizontal: 7, marginBottom: -2 }} />
        //                             <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>California</Text>
        //                             {/* <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), backgroundColor: colors.primary, color: colors.white, paddingHorizontal: 10, paddingVertical: 6, marginRight: 6 }}>Full Time / Permanent</Text>
        //                 <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), backgroundColor: colors.secondary, color: colors.white, paddingHorizontal: 10, paddingVertical: 6 }}>First Shift</Text> */}
        //                         </View>
        //                         <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), marginTop: 4, color: colors.grey }}>{moment(parseInt(item?.last_updated)).fromNow()}</Text>
        //                     </View>
        //                     <TouchableOpacity style={{
        //                         width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10,
        //                         // backgroundColor: '#ddd',
        //                     }}>
        //                         <Icon name="heart" style={{ fontSize: fontSize + 1, color: colors.primary }} />
        //                     </TouchableOpacity>
        //                 </View>
        //                 {!props.candidates && <Text numberOfLines={2} style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1), color: colors.grey, marginTop: 10 }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>}
        //             </TouchableOpacity>
        //         </Animated.View>
        //     </PanGestureHandler>
        //     <TouchableOpacity style={{ width: 75, backgroundColor: colors.primary, position: 'absolute', zIndex: -1, height: '100%', alignItems: 'center', justifyContent: 'center', right: -15 }}>
        //         <Icon name="heart" style={{ color: colors.white, fontSize: fontSize + 10 }} />
        //     </TouchableOpacity>
        // </View>
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { navigation.navigate('JobDetail', { item: item }) }}
            style={[{ paddingVertical: 13, backgroundColor: '#f7f7f7', paddingHorizontal: 15, marginHorizontal: -15, borderBottomColor: '#eee', borderBottomWidth: 1, },
            props.last && { borderBottomColor: 'transparent' },
            props.index % 2 && {
                backgroundColor: '#fff',
                // borderBottomColor: 'transparent', 
            },
                // props.candidates && { backgroundColor: colors.white, padding: 10, borderBottomWidth: 0, borderRadius: 15 }
            ]}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('./../../assets/images/no-image.png')} style={{ width: 80, height: 80, borderRadius: 15, resizeMode: 'cover', marginRight: 10 }} />
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
                        {/* <View style={{ width: 1, height: 10, backgroundColor: '#999', marginHorizontal: 7, marginBottom: -2 }} />
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>California</Text> */}
                        {/* <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), backgroundColor: colors.primary, color: colors.white, paddingHorizontal: 10, paddingVertical: 6, marginRight: 6 }}>Full Time / Permanent</Text>
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), backgroundColor: colors.secondary, color: colors.white, paddingHorizontal: 10, paddingVertical: 6 }}>First Shift</Text> */}
                    </View>
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), marginTop: 4, color: colors.grey }}>{moment(parseInt(item?.last_updated)).fromNow()}</Text>
                </View>
                {props.isCandidate && <TouchableOpacity
                    onPress={() => props.handleFavourite && props.handleFavourite(item.id)}
                    activeOpacity={0.8} style={{
                        width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10,
                        // backgroundColor: '#ddd',
                    }}>
                    <Ionicons name={item?.isFavourite ? "heart" : "heart-outline"} style={{ fontSize: fontSize + 5, color: colors.primary }} />
                </TouchableOpacity>}
                {!props.isCandidate && <TouchableOpacity
                    onPress={() => { setShowMore(prev => !prev) }}
                    activeOpacity={0.8} style={{
                        width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10,
                        // backgroundColor: '#ddd',
                    }}>
                    <Icon name={"more-vertical"} style={{ fontSize: fontSize + 5, color: colors.primary }} />
                </TouchableOpacity>}

                {/* {showMore && <View style={{ position: 'absolute', right: 15, top: 0, zIndex: 1, backgroundColor: '#f9f9f9', borderBottomLeftRadius: 10, overflow: 'hidden', }}>
                    <TouchableOpacity onPress={() => { }} activeOpacity={0.8} style={{ paddingHorizontal: 25, paddingVertical: 12, borderBottomWidth: 1, borderBlockColor: '#eee', flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="users" style={{ fontSize: fontSize, marginRight: 15 }} /><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Candidates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} activeOpacity={0.8} style={{ paddingHorizontal: 25, paddingVertical: 12, borderBottomWidth: 1, borderBlockColor: '#eee', flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="users" style={{ fontSize: fontSize, marginRight: 15 }} /><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Delete Job</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} activeOpacity={0.8} style={{ paddingHorizontal: 25, paddingVertical: 12, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="users" style={{ fontSize: fontSize, marginRight: 15 }} /><Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize }}>Edit Job</Text>
                    </TouchableOpacity>
                </View>} */}

            </View>
            {!props.candidates && <Text numberOfLines={2} style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1), color: colors.grey, marginTop: 10 }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>}
        </TouchableOpacity>
    )
}


const setStateToProps = (state) => ({
    // userInfo: state.appstate.userInfo,
    isCandidate: state.appstate.isCandidate,
})

const mapDispatchToProps = (dispatch) => {
    return {
        // GetUpcomingEventsList: bindActionCreators(GetUpcomingEventsList, dispatch),
    }
}

export default connect(setStateToProps, mapDispatchToProps)(JobItem);
// export default JobItem;