import { ArrowDownSVG, SearchSVG, ShoppingBagSVG } from 'app/assets/svg';
import { addProduct } from 'app/utils/redux/cartSlice';
import { addFavProduct, removeFavProduct } from 'app/utils/redux/favouriteSlice';
import { useAppSelector } from 'app/utils/redux/hooks';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Address from '../components/DropDowns/Address';

const Home = ({navigation}) => {
  // All the states for the home page
  const [loading, setLoading] = useState(true); // used for the loading animation
  const [toggleAddress, setToggleAddress] = useState(false); // used to show/hide the address page
  const [selectedTime, setSelectedTime] = useState('1 hour'); // used to display and set the timing for delivery
  const {items} = useAppSelector(state => state.cart); // cart state manager
  const {fav_products} = useAppSelector(state => state.favourite); // favourite state manager ̰‸
  const [searchTerm, setSearchTerm] = useState(''); // for the search input
  const [address, setAddress] = useState('Add Address'); // to set the address and to display it
  const [products, setProducts] = useState(null); // to set all the products from the api to a local array

  // temporary user
  const user = {
    email: 'chinmayasa09@gmail.com',
    uid: 'p-90uoi*iu98y7t6re586r97tug',
    token: '89trfl&*Tgiup9y60*TIUFT*TUgjb)',
    name: 'Chinmaya',
    image: '',
  };

  // This function helps to get the products from the api and once the data is fetched it sets it the products array
  const getProducts = async () => {
    setLoading(true);
    await fetch('https://dummyjson.com/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('🚨 ERROR: ', err?.message);
        return {
          success: false,
          data: [],
        };
      });
  };

  const pickerRef = useRef(); // used to select the time picker component
  // to focus/click on the picker component
  function open() {
    pickerRef?.current?.focus();
  }
  // used for calling the products api
  useEffect(() => {
    if (loading) {
      if (products === null) {
        getProducts();
      }
    }
  });

  const colorMode = 'light'; // used for the loading animation color

  return (
    <SafeAreaView className="w-full bg-white h-full">
      <StatusBar backgroundColor={'#2A4BA0'} style={'light'} />
      <View className="w-full rounded-b-md py-5 bg-[#2A4BA0] ">
        <View className="flex my-5 flex-row px-5 justify-between items-center">
          <Text
            className="text-2xl text-white font-[500]"
            style={{fontFamily: 'Manrope_600SemiBold'}}>
            Hey, Chinmaya
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart', {
                user: user,
                products: products,
              });
            }}
            className="relative">
            <ShoppingBagSVG />
            <View className="absolute -top-2 bg-[#ffc800] text-base w-6 rounded-2xl -right-4 justify-center items-center h-6">
              <Text>{items}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-2 mx-4 rounded-full relative flex items-center justify-start flex-row">
          <View className="absolute z-[99] top-[35%] left-7">
            <SearchSVG />
          </View>
          <TextInput
            className="w-full bg-[#153075] text-white py-4 text-lg pl-14 pr-6 rounded-full"
            placeholder="Search Products Or Store"
            placeholderTextColor={'#8891A5'}
            style={{fontFamily: 'Manrope_400Regular'}}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
        <View className="px-5 pt-5 flex flex-row justify-between items-center">
          <View className="">
            <Text
              style={{fontFamily: 'Manrope_600SemiBold'}}
              className="text-gray-300 uppercase text-xs">
              Delivery to
            </Text>
            <TouchableOpacity
              onPress={() => {
                setToggleAddress(true);
              }}
              className="flex flex-row items-center gap-2">
              <Text
                style={{fontFamily: 'Manrope_400Regular'}}
                className="text-white text-base">
                {address?.split(';')?.[0]}
              </Text>
              <ArrowDownSVG />
            </TouchableOpacity>
          </View>
          <View className="">
            <Text
              style={{fontFamily: 'Manrope_600SemiBold'}}
              className="text-gray-300 uppercase text-xs ml-6">
              Within
            </Text>
            <SelectDropdown
              data={['1 HOUR', '6 HOUR', '12 HOUR', '24 HOUR']}
              onSelect={selectedItem => {
                setSelectedTime(selectedItem);
              }}
              defaultButtonText={selectedTime}
              buttonStyle={{
                backgroundColor: '#2A4BA0',
                width: 100,
                height: 30,
              }}
              buttonTextStyle={{
                color: 'white',
                fontFamily: 'Manrope_400Regular',
                fontSize: 14,
              }}
              renderDropdownIcon={() => {
                return <ArrowDownSVG />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={{
                backgroundColor: '#2A4BA0',
                borderRadius: 10,
                width: 100,
              }}
              rowStyle={{
                backgroundColor: '#2A4BA0',
                borderRadius: 10,
                width: 100,
              }}
              rowTextStyle={{
                color: 'white',
                fontFamily: 'Manrope_400Regular',
                fontSize: 14,
              }}
            />
          </View>
        </View>
      </View>

      <View className="w-full relative pb-20">
        <ScrollView>
          {loading ? (
            <View className="h-28 justify-center items-center">
              <ActivityIndicator color={'#2A4BA0'} size={'large'} />
            </View>
          ) : (
            <ScrollView horizontal={true}>
              {products?.products?.slice(3, 9)?.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.navigate('Product', {
                        item: item,
                        user: user,
                        products: products,
                      });
                    }}
                    className="w-[230px] m-4 h-[110px] bg-[#F9B023] rounded-md shadow-sm shadow-[#000]">
                    <View>
                      <Image
                        className="mx-auto w-full h-full rounded-md"
                        source={{uri: item?.thumbnail}}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}

          <Text
            style={{fontFamily: 'Manrope_400Regular'}}
            className="text-black text-3xl px-5">
            {searchTerm?.length > 0
              ? 'Results For: ' + searchTerm
              : 'Recommended'}
          </Text>
          <View className="w-[100px] p-1 bg-[#2A4BA0] rounded-sm mx-5 mb-5" />
          {loading ? (
            <View className="flex flex-row flex-wrap justify-between px-5 gap-3 pb-28">
              {/* <MotiView
                transition={{
                  type: "timing",
                }}
                className="w-[45%] bg-gray-300 p-3 flex items-center justify-center rounded-xl h-[170px]"
                animate={{ backgroundColor: "#f1f1F1" }}
              >
                <Skeleton colorMode={colorMode} width={"100%"} height={100} />
                <Spacer height={3} />
                <Skeleton colorMode={colorMode} width={"100%"} />
              </MotiView>
              <MotiView
                transition={{
                  type: "timing",
                }}
                className="w-[45%] bg-gray-300 p-3 flex items-center justify-center rounded-xl h-[170px]"
                animate={{ backgroundColor: "#f1f1F1" }}
              >
                <Skeleton colorMode={colorMode} width={"100%"} height={100} />
                <Spacer height={3} />
                <Skeleton colorMode={colorMode} width={"100%"} />
              </MotiView>
              <MotiView
                transition={{
                  type: "timing",
                }}
                className="w-[45%] bg-gray-300 p-3 flex items-center justify-center rounded-xl h-[170px]"
                animate={{ backgroundColor: "#f1f1F1" }}
              >
                <Skeleton colorMode={colorMode} width={"100%"} height={100} />
                <Spacer height={3} />
                <Skeleton colorMode={colorMode} width={"100%"} />
              </MotiView>
              <MotiView
                transition={{
                  type: "timing",
                }}
                className="w-[45%] bg-gray-300 p-3 flex items-center justify-center rounded-xl h-[170px]"
                animate={{ backgroundColor: "#f1f1F1" }}
              >
                <Skeleton colorMode={colorMode} width={"100%"} height={100} />
                <Spacer height={3} />
                <Skeleton colorMode={colorMode} width={"100%"} />
              </MotiView> */}
            </View>
          ) : (
            <View className="flex flex-row flex-wrap justify-between px-5 gap-3 pb-28">
              {products?.products?.length > 0 &&
                products?.products?.map((item, index) => {
                  const isFav = fav_products?.filter(p => p.isFav);
                  if (
                    item?.title
                      ?.toLowerCase()
                      ?.includes(searchTerm?.toLowerCase())
                  ) {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Product', {
                            item: item,
                            user: user,
                            products: products,
                          });
                        }}
                        key={index}
                        className="w-[45%] shadow-md border border-gray-100  bg-[#fff] p-3 rounded-xl shadow-gray-400 ">
                        <View className="w-full relative">
                          <TouchableOpacity
                            onPress={() => {
                              if (!isFav?.find(p => p?.id === item?.id)) {
                                addFavProduct(item);
                              } else {
                                removeFavProduct(item);
                              }
                            }}
                            className="absolute z-[999] bg-[#000000d8] w-[40px] h-[40px] rounded-full -top-5 -left-5 flex items-center justify-center">
                            {/* <AntDesign
                              name="heart"
                              size={20}
                              color={
                                isFav?.find((p) => p?.id === item?.id)
                                  ? "red"
                                  : "white"
                              }
                            /> */}
                          </TouchableOpacity>
                          <Image
                            className="mx-auto w-full h-[70px] rounded-md"
                            source={{uri: item?.thumbnail}}
                          />
                          <View className="flex items-center justify-between flex-row my-3">
                            <Text
                              className="text-base"
                              style={{fontFamily: 'Manrope_600SemiBold'}}>
                              ${item?.price}
                            </Text>
                            <TouchableOpacity
                              onPress={() => {
                                addProduct(item);
                              }}
                              className="w-[30px] h-[30px] flex items-center justify-center bg-[#2A4BA0] rounded-full">
                              {/* <AntDesign name="plus" size={20} color="white" /> */}
                            </TouchableOpacity>
                          </View>
                          <Text
                            className="text-sm"
                            style={{fontFamily: 'Manrope_400Regular'}}>
                            {item?.title}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }
                })}
            </View>
          )}
        </ScrollView>
      </View>
      {toggleAddress && (
        <Address
          toggleAddress={toggleAddress}
          setToggleAddress={setToggleAddress}
          address={address}
          setAddress={setAddress}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

// Spacing created to separate the loaders
const Spacer = ({height = 16}) => <View style={{height}} />;
