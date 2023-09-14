import { useNavigation } from '@react-navigation/native'
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';

const { TouchableOpacity, View, Image, Text } = require('react-native')
const { fonts, colors, fontSize, width } = require('../theme')

const JobItem = (props) => {
    const navigation = useNavigation()
    const { item } = props
    return (
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
                    <Text style={{ fontFamily: fonts.latoBold, fontSize: (fontSize + 3), marginBottom: 3 }}>{item?.title}</Text>
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1) }}>{item?.company}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, width: width - 80 - 40 - 30, }}>
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>Full Time / Permanent</Text>
                        <View style={{ width: 1, height: 10, backgroundColor: '#999', marginHorizontal: 7, marginBottom: -2 }} />
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>{item?.shift}</Text>
                        <View style={{ width: 1, height: 10, backgroundColor: '#999', marginHorizontal: 7, marginBottom: -2 }} />
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3) }}>California</Text>
                        {/* <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), backgroundColor: colors.primary, color: colors.white, paddingHorizontal: 10, paddingVertical: 6, marginRight: 6 }}>Full Time / Permanent</Text>
                        <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), backgroundColor: colors.secondary, color: colors.white, paddingHorizontal: 10, paddingVertical: 6 }}>First Shift</Text> */}
                    </View>
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 3), marginTop: 4, color: colors.grey }}>{moment(parseInt(item?.last_updated)).fromNow()}</Text>
                </View>
                <TouchableOpacity style={{
                    width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10,
                    // backgroundColor: '#ddd',
                }}>
                    <Icon name="heart" style={{ fontSize: fontSize + 1, color: colors.primary }} />
                </TouchableOpacity>
            </View>
            {!props.candidates && <Text numberOfLines={2} style={{ fontFamily: fonts.latoRegular, fontSize: (fontSize - 1), color: colors.grey, marginTop: 10 }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>}
        </TouchableOpacity>
    )
}

export default JobItem;