import { ShoppingBagSVG } from 'app/assets/svg';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CartIcon = ({ navigation, items }: any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        className="">
        <ShoppingBagSVG color="black" />
        <View className="absolute -top-2 bg-[#ffc800] border border-white rounded-full w-6  -right-4 justify-center items-center h-6">
          <Text className=" text-sm text-white">{items}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
