import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import {  Tabs } from "expo-router"

export default function App() {
  return (
    <GluestackUIProvider mode="dark">
      <Tabs initialRouteName='Pagina1'>
        <Tabs.Screen name="Pagina1" />
        <Tabs.Screen name="Pagina2" />
        <Tabs.Screen name="Pagina3" options={{href: null}}/>
      </Tabs>
    </GluestackUIProvider>
  );
}