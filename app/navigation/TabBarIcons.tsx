import { CategoriesSVG, FavouriteSVG, HomeSVG, MoreSVG } from 'app/assets/svg';
import React from 'react';
import { Text, View } from 'react-native';

const TabIcon = ({
  focused,
  icon,
}: {
  focused: boolean;
  icon: React.ReactNode;
}) => {
  return (
    <View
      className={
        focused
          ? 'bg-[#000] shadow-md shadow-[#000] p-4 rounded-full absolute bottom-6'
          : 'p-3 rounded-full '
      }>
      <View className="mx-auto">{icon}</View>
    </View>
  );
};
export const HomeIcon = ({ focused }: { focused: boolean }) => {
  return (
    <View>
      <TabIcon
        focused={focused}
        icon={<HomeSVG color={focused ? '#f0c537' : '#ffc800'} />}
      />
      {!focused && <Text className="text-xs font-medium">Home</Text>}
    </View>
  );
};
export const CategoriesIcon = ({ focused }: { focused: boolean }) => {
  return (
    <View>
      <TabIcon
        focused={focused}
        icon={<CategoriesSVG color={focused ? '#f0c537' : '#ffc800'} />}
      />
      {!focused && <Text className="text-xs font-medium">Categories</Text>}
    </View>
  );
};
export const FavouritesIcon = ({ focused }: { focused: boolean }) => {
  return (
    <View>
      <TabIcon
        focused={focused}
        icon={<FavouriteSVG color={focused ? '#f0c537' : '#ffc800'} />}
      />
      {!focused && <Text className="text-xs font-medium">Favourites</Text>}
    </View>
  );
};
export const MoreIcon = ({ focused }: { focused: boolean }) => {
  return (
    <View>
      <TabIcon
        focused={focused}
        icon={<MoreSVG color={focused ? '#f0c537' : '#ffc800'} />}
      />
      {!focused && <Text className="text-xs font-medium">More</Text>}
    </View>
  );
};
