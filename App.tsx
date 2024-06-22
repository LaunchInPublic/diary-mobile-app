import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './app.routes';

export function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
