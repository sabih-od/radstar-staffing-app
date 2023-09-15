import { Image, Text, View } from 'react-native';
import { colors, fontSize, fonts } from '../theme';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

const ExperienceItem = ({ item, education, showTrash }) => {
    return (
        <View style={{ marginBottom: 13, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4, }}>
                <View style={{ flexDirection: 'row', }}>
                    <Image defaultSource={require('./../../assets/images/no-image.png')} style={{ width: 53, height: 53, borderRadius: 10, marginRight: 10 }} />
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
                {showTrash && <TouchableOpacity
                    activeOpacity={0.8}>
                    <Icon name="trash" style={{ color: '#f007', fontSize: fontSize+1 }} />
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default ExperienceItem;