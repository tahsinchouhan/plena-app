import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeTabs: NavigatorScreenParams<TabScreenParamList>;
  Product: Product;
  Cart: undefined;
};

type HomeStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeTabs'
>;
type ProductStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Product'
>;
type CartStackScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;
