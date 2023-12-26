import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootStackParamList } from 'app/types/navigation';

export const useAppNavigation = () =>
  useNavigation<NavigationProp<RootStackParamList>>();
