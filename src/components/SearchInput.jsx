import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { colors, fontSize, fonts, isRTL, width } from "../theme";

const SearchInput = (props) => {
    const { value, onSearch, placeholder } = props;

    const [searchInput, setSearchInput] = useState(value);

    return (
        <View style={{ width: props.width ? props.width : width - 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
            <TextInput
                placeholder={placeholder ? placeholder : 'Search Jobs...'}
                placeholderTextColor={'#777'}
                onChangeText={value => setSearchInput(value)}
                value={searchInput}
                style={{ fontFamily: fonts.latoRegular, height: 42, backgroundColor: '#fff', width: props.width ? props.width - 70 : width - 70, color: colors.black, fontSize: 14, paddingHorizontal: 15, paddingVertical: 10, textAlign: isRTL ? 'right' : 'left' }}
            />
            <TouchableOpacity
                onPress={() => onSearch(searchInput)}
                style={{ width: 42, height: 42, alignItems: 'center', justifyContent: 'center', }}
            >
                <Icon name="search" style={{ fontSize: fontSize + 2, color: '#999' }} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput;