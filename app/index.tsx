import { Redirect } from 'expo-router';

export default function RootIndex() {
  // Force the app to start at the (tabs) group by default
  return <Redirect href="/(tabs)" />;
}