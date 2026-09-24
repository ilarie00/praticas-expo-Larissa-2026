import { Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import {Link, Stack} from "expo-router"

export default function App() {
  return (
    <GluestackUIProvider mode="dark">
<Tabs>
    <Tabs.screen name="pagina1"/>
    <Tabs.screen name="pagina2"/>
    <Tabs.screen name="pagina3"/>
    </Tabs>
    </GluestackUIProvider>
  );
}