import { useNavigation } from '@react-navigation/native'

const { TouchableOpacity, View, Image, Text } = require('react-native')
const { fonts, colors, fontSize } = require('../theme')

const FollowerItem = (props) => {
    const navigation = useNavigation();
    const { item } = props;

    const IMAGE_SIZE = props?.showSalary ? 65 : 63;
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { navigation.navigate('Profile', { user: item, fromcandidate: props?.showSalary ? true : false }) }}
            style={[{ marginBottom: 10, paddingBottom: 10 },
            !props.last && { borderBottomColor: '#ddd', borderBottomWidth: 1, },
            props.index % 2 && { backgroundColor: '#fff', paddingHorizontal: 15, paddingTop: 10, marginHorizontal: -15, marginTop: -11, borderBottomColor: 'transparent' },
                // props.candidates && { backgroundColor: colors.white, padding: 10, borderBottomWidth: 0, borderRadius: 15 }
            ]}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={item?.image}
                    defaultSource={require('./../../assets/images/dummy-profile-image.png')} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: IMAGE_SIZE, resizeMode: 'cover', marginRight: 10 }} />
                <View>
                    <Text style={{ fontFamily: fonts.latoBold, fontSize: (fontSize + 3), marginBottom: 3 }}>{item?.title}</Text>
                    {/* <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 2) }}>{item?.designation} - {item?.company}</Text> */}
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1) }}>{item?.designation}</Text>
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1), color: colors.primary, marginTop: 2 }}>{item?.company}</Text>
                    {props?.showSalary && <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 2), marginTop: 2 }}>Monthly <Text style={{ fontFamily: fonts.latoBold }}>{parseInt(59000).toLocaleString()} - {parseInt(100000).toLocaleString()} USD</Text></Text>}
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}> */}
                    {/* <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>Full Time / Permanent</Text>
                        <View style={{ width: 1, height: 10, backgroundColor: '#999', marginHorizontal: 7, marginBottom: -2 }} />
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>{item?.shift}</Text>
                        <View style={{ width: 1, height: 10, backgroundColor: '#999', marginHorizontal: 7, marginBottom: -2 }} />
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>California</Text> */}
                    {/* <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), backgroundColor: colors.primary, color: colors.white, paddingHorizontal: 10, paddingVertical: 6, marginRight: 6 }}>Full Time / Permanent</Text>
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), backgroundColor: colors.secondary, color: colors.white, paddingHorizontal: 10, paddingVertical: 6 }}>First Shift</Text> */}
                    {/* </View> */}
                </View>
            </View>
            {!props.candidates && <Text numberOfLines={2} style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1), color: colors.grey, marginTop: 10 }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>}
        </TouchableOpacity>
    )
}

export default FollowerItem;