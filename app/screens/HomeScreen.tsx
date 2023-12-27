import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from 'app/api/product.api';
import {
  AddSVG,
  ArrowDownSVG,
  HeartSVG,
  SearchSVG,
  ShoppingBagSVG,
} from 'app/assets/svg';
import { GET_ALL_PRODUCTS } from 'app/utils/constants';
import { useAppNavigation } from 'app/utils/hooks';
import { addProduct } from 'app/utils/redux/cartSlice';
import {
  addFavProduct,
  removeFavProduct,
} from 'app/utils/redux/favouriteSlice';
import { useAppDispatch, useAppSelector } from 'app/utils/redux/hooks';
import React, { Fragment, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Address from '../components/DropDowns/Address';

const Home = () => {
  const navigation = useAppNavigation();
  const [toggleAddress, setToggleAddress] = useState(false);
  const [selectedTime, setSelectedTime] = useState('1 hour');
  const { items } = useAppSelector(state => state.cart);
  const { fav_products } = useAppSelector(state => state.favourite);
  const [searchTerm, setSearchTerm] = useState('');
  const [address, setAddress] = useState('Add Address');
  const dispatch = useAppDispatch();

  const { data, isLoading } = useQuery({
    queryKey: [GET_ALL_PRODUCTS],
    queryFn: getAllProducts,
  });

  const products = data?.products || [];

  return (
    <Fragment>
      <SafeAreaView className="h-0 bg-primary" />
      <SafeAreaView className="w-full bg-white h-full">
        <StatusBar backgroundColor={'#2A4BA0'} barStyle={'light-content'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="w-full py-5 bg-primary ">
            <View className="flex my-5 flex-row px-5 justify-between items-center">
              <Text className="text-[22px] text-white font-semibold">
                Hey, Chinmaya
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                className="relative">
                <ShoppingBagSVG />
                <View className="absolute -top-2 bg-accent text-base w-6 rounded-2xl -right-4 justify-center items-center h-6">
                  <Text>{items}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="mt-2 mx-4 rounded-full relative flex items-center justify-start flex-row">
              <View className="absolute z-[99] top-[35%] left-7">
                <SearchSVG />
              </View>
              <TextInput
                className="w-full bg-[#153075] text-white py-4 text-sm font-medium pl-14 pr-6 rounded-full"
                placeholder="Search Products Or Store"
                placeholderTextColor={'#8891A5'}
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>
            <View className="px-5 pt-5 flex flex-row justify-between items-center">
              <View className="">
                <Text className="text-[#F8F9FB] uppercase text-[11px] font-extrabold">
                  Delivery to
                </Text>
                <TouchableOpacity
                  onPress={() => setToggleAddress(true)}
                  className="flex flex-row items-center gap-2">
                  <Text className="text-white text-base">
                    {address?.split(';')?.[0]}
                  </Text>
                  <View>
                    <ArrowDownSVG />
                  </View>
                </TouchableOpacity>
              </View>
              <View className="">
                <Text className="text-[#F8F9FB] uppercase text-[11px] font-extrabold ml-6">
                  Within
                </Text>
                <SelectDropdown
                  data={['1 HOUR', '6 HOUR', '12 HOUR', '24 HOUR']}
                  onSelect={selectedItem => setSelectedTime(selectedItem)}
                  defaultButtonText={selectedTime}
                  buttonStyle={styles.buttonStyle}
                  buttonTextStyle={styles.buttonTextStyle}
                  renderDropdownIcon={() => {
                    return <ArrowDownSVG />;
                  }}
                  dropdownIconPosition={'right'}
                  dropdownStyle={styles.dropdownStyle}
                  rowStyle={styles.rowStyle}
                  rowTextStyle={styles.rowTextStyle}
                />
              </View>
            </View>
          </View>

          <View className="w-full relative pb-20">
            {isLoading ? (
              <View className="h-28 justify-center items-center">
                <ActivityIndicator color={'#2A4BA0'} size={'large'} />
              </View>
            ) : (
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {products?.slice(3, 9)?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        navigation.navigate('Product', item);
                      }}
                      className="w-[230px] m-4 h-[110px] bg-[#F9B023] rounded-md shadow-sm shadow-[#000]">
                      <View>
                        <Image
                          className="mx-auto w-full h-full rounded-md"
                          source={{ uri: item?.thumbnail }}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}

            <Text className="text-black text-3xl px-5 mb-3">
              {searchTerm?.length > 0
                ? 'Results For: ' + searchTerm
                : 'Recommended'}
            </Text>
            {isLoading ? (
              <View className="h-28 justify-center items-center">
                <ActivityIndicator color={'#2A4BA0'} size={'large'} />
              </View>
            ) : (
              <View className="flex flex-row flex-wrap justify-between px-5 gap-3 pb-28">
                {products.length > 0 &&
                  products.map((item, index) => {
                    const isFav = fav_products?.filter(p => p.id === item?.id);
                    if (
                      item?.title
                        ?.toLowerCase()
                        ?.includes(searchTerm?.toLowerCase())
                    ) {
                      return (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Product', item)}
                          key={index}
                          className="w-[45%] h-48 shadow-md border border-gray-100  bg-[#fff] p-4 rounded-xl shadow-gray-400 ">
                          <View className="w-full relative">
                            <TouchableOpacity
                              onPress={() => {
                                if (!isFav?.find(p => p?.id === item?.id)) {
                                  dispatch(addFavProduct(item));
                                } else {
                                  dispatch(removeFavProduct(item?.id));
                                }
                              }}
                              className="absolute z-[999]  w-[40px] h-[40px] rounded-full -top-[23px] -left-[23px] flex items-center justify-center">
                              <HeartSVG
                                active={!!isFav?.find(p => p?.id === item?.id)}
                              />
                            </TouchableOpacity>
                            <Image
                              className="mx-auto w-full h-28 rounded-md"
                              source={{ uri: item?.thumbnail }}
                            />
                            <View className="flex items-center justify-between flex-row mt-3">
                              <Text className="text-sm text-secondary">
                                ${item?.price}
                              </Text>
                              <TouchableOpacity
                                onPress={() => dispatch(addProduct(item))}
                                className="w-6 h-6 flex items-center justify-center bg-[#2A4BA0] rounded-full">
                                <AddSVG size={12} />
                              </TouchableOpacity>
                            </View>
                            <Text numberOfLines={1} className="text-xs mt-0.5">
                              {item?.title}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    }
                  })}
              </View>
            )}
          </View>
        </ScrollView>
        {toggleAddress && (
          <Address
            toggleAddress={toggleAddress}
            setToggleAddress={setToggleAddress}
            address={address}
            setAddress={setAddress}
          />
        )}
      </SafeAreaView>
    </Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#2A4BA0',
    width: 100,
    height: 30,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  dropdownStyle: {
    backgroundColor: '#2A4BA0',
    borderRadius: 10,
    width: 100,
  },
  rowStyle: {
    backgroundColor: '#2A4BA0',
    borderRadius: 10,
    width: 100,
  },
  rowTextStyle: {
    color: 'white',
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
  },
});
