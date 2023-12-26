import { ArrowBack, HeartSVG, ShoppingBagSVG } from 'app/assets/svg';
import { ProductStackScreenProps } from 'app/types/navigation';
import { addProduct } from 'app/utils/redux/cartSlice';
import {
  addFavProduct,
  removeFavProduct,
} from 'app/utils/redux/favouriteSlice';
import { useAppDispatch, useAppSelector } from 'app/utils/redux/hooks';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import Carousel from 'react-native-reanimated-carousel';

const Product = ({ navigation, route }: ProductStackScreenProps) => {
  const item = route.params || {}; // getting the product from the previous screen
  const width = Dimensions.get('window').width; // get the width of the mobile screen
  const { items } = useAppSelector(state => state.cart); // cart state manager ̰
  const { fav_products } = useAppSelector(state => state.favourite); // favourite state manager ̰‸
  const isFav = !!fav_products?.find(p => p.id === item?.id);
  console.log(isFav);
  const dispatch = useAppDispatch();

  console.log(item);

  return (
    <SafeAreaView className="w-full bg-white h-full">
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View className="p-5 items-center justify-between flex-row gap-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-gray-100 p-2 rounded-full w-[45px] flex items-center justify-center h-[45px]">
          <ArrowBack />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          className="">
          <ShoppingBagSVG color="black" />
          <Text className="absolute -top-2 bg-[#ffc800] text-base w-6 rounded-full -right-4 text-center h-6">
            {items}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View className="px-5">
          <Text className="text-5xl font-light text-secondary pt-5 capitalize">
            {item?.brand}
            <Text className="text-xl text-primary">({item?.category})</Text>
          </Text>
          <Text className="text-5xl font-extrabold text-secondary pt-2 capitalize">
            {item?.title}
          </Text>
          <AirbnbRating
            count={5}
            defaultRating={item?.rating}
            size={16}
            ratingContainerStyle={styles.ratingContainerStyle}
            starContainerStyle={styles.starContainerStyle}
            reviews={[]}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              if (!isFav) {
                dispatch(addFavProduct(item));
              } else {
                dispatch(removeFavProduct(item?.id));
              }
            }}
            className="absolute z-[999] bg-[#000000d8] w-[40px] h-[40px] rounded-full flex right-5 items-center justify-center">
            <HeartSVG active={!!isFav} />
          </TouchableOpacity>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={item?.images}
            scrollAnimationDuration={1000}
            renderItem={({ item: image }) => {
              return (
                <View className="w-full p-3">
                  <View className="shadow-md w-full h-[150px] shadow-gray-500 bg-white border border-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                    <Image
                      width={width}
                      height={width / 2}
                      source={{ uri: image }}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View className=" flex flex-row gap-3 items-center px-5">
          <Text className="text-base font-semibold text-[#2A4BA0]">
            ${item?.price}
          </Text>
          <Text className="text-xs font-normal bg-[#2A4BA0] rounded-full px-3 py-1 text-white">
            ${item?.discountPercentage}%
          </Text>
        </View>
        <View className=" flex flex-row gap-3 items-center py-5 px-5">
          <TouchableOpacity
            onPress={() => dispatch(addProduct(item))}
            className="w-[48%] rounded-2xl border  border-[#2A4BA0] py-[18px]">
            <Text className="text-center text-[#2A4BA0] text-sm font-semibold">
              Add To Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[48%] rounded-2xl border border-[#2A4BA0] bg-[#2A4BA0] py-[18px]">
            <Text className="text-center text-[#fff] text-sm font-semibold">
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="px-5   text-black font-normal text-base">Details</Text>
        <Text className="px-5   text-base text-gray-500">
          {item?.description}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  ratingContainerStyle: {
    height: 25,
    alignItems: 'flex-start',
  },
  starContainerStyle: {
    marginBottom: 17,
  },
});
