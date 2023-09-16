import { StyleSheet, Text, TextInput, View } from "react-native"
import globalstyle from "../theme/style"
import { colors } from "../theme"
import Icon from "react-native-vector-icons/Feather"

const InputField = ({
    label,
    placeholder,
    name,
    editable = true,
    multiline = false,
    onChangeText,
    errors,
    register,
    icon = false,
    defaultValue = '',
    halffield
}) => {

    // console.log('InputField props => ', props)

    return (
        <View style={[styles.inputwithlabel, halffield && { width: '48.5%' }]}>
            {label && <Text style={globalstyle.inputlabel}>{label}</Text>}
            <View style={[globalstyle.inputbox, !icon && { paddingHorizontal: 0 }, multiline && { paddingTop: 10, height: 140, alignItems: 'flex-start' }]}>
                {icon && <Icon color={colors.primary} name={'mail'} size={18} />}
                <TextInput
                    multiline={multiline}
                    style={globalstyle.inputfield}
                    editable={editable}
                    placeholder={placeholder}
                    // value=''
                    {...register(name, {
                        value: defaultValue,
                        required: `${label} is required`,
                        // pattern: {
                        //     value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                        //     message: `Please provide valid ${label}`
                        // },
                    })}
                    defaultValue={defaultValue}
                    placeholderTextColor={colors.placeholdercolor}
                    autoCapitalize='none'
                    onChangeText={value => onChangeText(value)}
                    // ref={input01}
                    returnKeyType="next"
                // onSubmitEditing={() => input02.current.focus()}
                />
            </View>
            {errors[name] && <Text style={globalstyle.errorField}>{errors[name].message}</Text>}
        </View>
    )
}

export default InputField;

const styles = StyleSheet.create({
    inputwithlabel: { marginBottom: 10 }
})