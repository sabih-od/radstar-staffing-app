import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors, fontSize, fonts, width } from "../theme";
import globalstyle from "../theme/style";
import Icon from "react-native-vector-icons/Feather";
import { useForm } from "react-hook-form";
import { useState } from "react";


const CheckBox = props => {
    const [active, setActive] = useState(props.checked)
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3, backgroundColor: props.checked ? colors.primary : colors.white, paddingHorizontal: 15, paddingVertical: 8, borderRadius: 10 }}
            onPress={() => { setActive(prev => !prev) }}
        >
            {/* <Icon name={props.checked ? 'check-circle' : 'circle'} style={{ fontSize: fontSize - 1, marginRight: 7, color: props.checked ? colors.primary : colors.grey }} /> */}
            <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, color: props.checked ? colors.white : colors.black }} numberOfLines={1}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const AddExperience = props => {

    const { handleSubmit, formState: { errors }, register, setValue, } = useForm();

    return (
        <View style={{ backgroundColor: '#e9e9e9', paddingHorizontal: 15, marginHorizontal: -15, paddingVertical: 15, marginBottom: 15 }}>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <View style={{ alignItems: 'flex-start', }}>
                    <Text style={globalstyle.modaltitle}>Experience</Text>
                    <Text style={[globalstyle.modaldesc, { marginLeft: -15 }]}>Add experience here...</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.primary, paddingVertical: 9, width: 86, borderRadius: 10, justifyContent: 'center', height: 37, }}>
                    <Text style={{ color: colors.white, fontFamily: fonts.latoRegular }}>Save</Text>
                    <Icon name="save" style={{ color: colors.white, fontSize: fontSize, marginLeft: 7, marginTop: 2 }} />
                </TouchableOpacity>
            </View> */}

            <View>
                {/* <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Current Salary</Text> */}
                <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                    <TextInput
                        style={globalstyle.inputfield}
                        placeholder="Experience Title"
                        defaultValue={''}
                        // editable={isEditable}
                        placeholderTextColor={colors.placeholdercolor}
                        {...register('experience_title', {
                            value: '',
                            required: 'Experience title is required',
                        })}
                        onChangeText={value => setValue('experience_title', value)}
                        // ref={input01}
                        returnKeyType="next"
                    // onSubmitEditing={() => input02.current.focus()}
                    />
                </View>
                {errors.experience_title && (<Text style={globalstyle.errorField}> {errors.experience_title.message} </Text>)}

                {/* <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Current Salary</Text> */}
                <View style={[globalstyle.inputbox, { paddingHorizontal: 0 }]}>
                    <TextInput
                        style={globalstyle.inputfield}
                        placeholder="Company Name"
                        defaultValue={''}
                        // editable={isEditable}
                        placeholderTextColor={colors.placeholdercolor}
                        {...register('company_name', {
                            value: '',
                            required: 'Company name is required',
                        })}
                        onChangeText={value => setValue('company_name', value)}
                        // ref={input01}
                        returnKeyType="next"
                    // onSubmitEditing={() => input02.current.focus()}
                    />
                </View>
                {errors.company_name && (<Text style={globalstyle.errorField}> {errors.company_name.message} </Text>)}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Current Salary</Text> */}
                    <View style={[globalstyle.inputbox, { width: '48.5%', paddingHorizontal: 0 }]}>
                        <TextInput
                            style={globalstyle.inputfield}
                            placeholder="Start Date"
                            defaultValue={''}
                            // editable={isEditable}
                            placeholderTextColor={colors.placeholdercolor}
                            {...register('start_date', {
                                value: '',
                                required: 'Start date is required',
                            })}
                            onChangeText={value => setValue('start_date', value)}
                            // ref={input01}
                            returnKeyType="next"
                        // onSubmitEditing={() => input02.current.focus()}
                        />
                    </View>
                    {/* <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Current Salary</Text> */}
                    <View style={[globalstyle.inputbox, { width: '48.5%', paddingHorizontal: 0 }]}>
                        <TextInput
                            style={globalstyle.inputfield}
                            placeholder="End Date"
                            defaultValue={''}
                            // editable={isEditable}
                            placeholderTextColor={colors.placeholdercolor}
                            {...register('end_date', {
                                value: '',
                                required: 'End date is required',
                            })}
                            onChangeText={value => setValue('end_date', value)}
                            // ref={input01}
                            returnKeyType="next"
                        // onSubmitEditing={() => input02.current.focus()}
                        />
                    </View>
                </View>
                {errors.end_date && (<Text style={globalstyle.errorField}> {errors.end_date.message} </Text>)}

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text style={{ fontFamily: fonts.latoRegular, fontSize: fontSize, }}>By Shift</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                        <CheckBox title="Yes" checked={false} />
                        <View style={{ width: 10 }} />
                        <CheckBox title="No" checked={true} />
                    </View>
                </View>


                {/* <Text style={[globalstyle.inputlabel, { marginTop: 10 }]}>Current Salary</Text> */}
                <View style={[globalstyle.inputbox, { paddingHorizontal: 0, height: 170, alignItems: 'flex-start', paddingVertical: 10 }]}>
                    <TextInput
                        style={globalstyle.inputfield}
                        placeholder="Experience Description"
                        defaultValue={''}
                        // editable={isEditable}
                        multiline={true}
                        placeholderTextColor={colors.placeholdercolor}
                        {...register('experience_description', {
                            value: '',
                            required: 'Experience description is required',
                        })}
                        onChangeText={value => setValue('experience_description', value)}
                        // ref={input01}
                        returnKeyType="next"
                    // onSubmitEditing={() => input02.current.focus()}
                    />
                </View>
                {errors.experience_description && (<Text style={globalstyle.errorField}> {errors.experience_description.message} </Text>)}

            </View>
        </View>
    )
}

export default AddExperience;