import { ArrowBack } from 'app/assets/svg';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const CustomBackHandler = ({ navigation }: any) => {
  return (
    <View className="mx-4">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-gray-100 p-2 rounded-full w-[45px] flex items-center justify-center h-[45px]">
        <ArrowBack />
      </TouchableOpacity>
    </View>
  );
};

export default CustomBackHandler;
