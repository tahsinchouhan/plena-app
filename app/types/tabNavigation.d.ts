import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type TabScreenParamList = {
  Home: undefined;
  Categories: undefined;
  Favorites: undefined;
  More: undefined;
};
type HomeTabsScreenProps = BottomTabScreenProps<TabScreenParamList, 'Home'>;
