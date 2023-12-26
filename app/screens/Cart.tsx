import { AddSVG, ArrowBack, RemoveSVG } from 'app/assets/svg';
import { CartStackScreenProps } from 'app/types/navigation';
import {
  addProduct,
  clearCart,
  reduceProduct,
} from 'app/utils/redux/cartSlice';
import { useAppDispatch, useAppSelector } from 'app/utils/redux/hooks';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Cart = ({ navigation }: CartStackScreenProps) => {
  const { items, products, subtotal } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView className="w ̰-full bg-white h-full">
      <StatusBar backgroundColor={'#fff'} />
      <View className="p-5 flex items-center flex-row gap-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-gray-100 p-2 rounded-full w-[45px] flex items-center justify-center h-[45px]">
          <ArrowBack />
        </TouchableOpacity>
        <Text className="text-base text-secondary">Shopping Cart({items})</Text>
      </View>
      {products?.length > 0 ? (
        <View className="px-5 max-h-[45vh]">
          <FlatList
            data={products}
            renderItem={({ item }) => {
              return (
                <View className="w-full flex flex-row items-center justify-between border-b border-gray-200 py-4 px-2">
                  <View>
                    <Image
                      className="mx-auto w-[70px] h-[35px]"
                      source={{ uri: item?.thumbnail }}
                    />
                  </View>
                  <View className="w-1/3">
                    <Text className="text-sm font-medium text-secondary">
                      {item?.title}
                    </Text>
                    <Text className="text-sm font-medium text-secondary">
                      $ {item?.price}
                    </Text>
                  </View>
                  <View className="flex items-center flex-row gap-3">
                    <TouchableOpacity
                      onPress={() => dispatch(reduceProduct(item.id))}
                      className="w-[40px] h-[40px] flex items-center justify-center bg-gray-100 rounded-full">
                      <RemoveSVG />
                    </TouchableOpacity>
                    <Text>{item?.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => dispatch(addProduct(item))}
                      className="w-[40px] h-[40px] flex items-center justify-center bg-gray-100 rounded-full">
                      <AddSVG color="#130F26" size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item?.id?.toString()}
          />
        </View>
      ) : (
        <View className="w-full h-[40vh] flex items-center justify-center">
          <Image
            source={require('../assets/gifs/emptycart.gif')}
            className="w-[300px] h-[300px] mx-auto"
          />
        </View>
      )}

      {products?.length > 0 && (
        <View className="my-2 flex-row justify-end items-center px-5">
          <TouchableOpacity
            onPress={() => dispatch(clearCart())}
            className="w-max">
            <Text className="text-xs font-medium text-primary">Clear Cart</Text>
          </TouchableOpacity>
        </View>
      )}
      <View className="w-full p-2 absolute  -bottom-16">
        <View className="p-4 w-full bg-[#F8F9FB] rounded-t-3xl h-[40vh]">
          <View className="flex px-5 pb-5 w-full flex-row justify-between items-center">
            <Text className="text-base text-tertiary">Subtotal</Text>
            <Text className="text-base text-secondary">${subtotal}</Text>
          </View>
          <View className="flex px-5 pb-5  w-full flex-row justify-between items-center">
            <Text className="text-base text-tertiary">Delivery</Text>
            <Text className="text-base text-secondary">
              ${items > 0 ? 2 : 0}
            </Text>
          </View>
          <View className="flex px-5 pb-5  w-full flex-row justify-between items-center">
            <Text className="text-base text-tertiary">Total</Text>
            <Text className="text-base text-secondary">
              ${items > 0 ? subtotal + 2 : 0}
            </Text>
          </View>
          <View>
            <TouchableOpacity className="w-full rounded-3xl bg-[#2A4BA0] py-[18px]">
              <Text className="text-center text-white text-sm font-semibold">
                Proceed To checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
