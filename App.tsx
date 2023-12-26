import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { RootNavigation } from './app/navigation';
import store from './app/utils/redux/store';

const queryClient = new QueryClient();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <RootNavigation />
          </QueryClientProvider>
        </Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
