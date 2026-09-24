import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from '@/components/ui/divider';
import { Link } from "expo-router";

export default function App() {
  return (
    <GluestackUIProvider mode="dark">
      <View className="items-center justify-center">
        <Text className='uppercase font-extrabold text-black'>Página Home</Text>
        <Divider className="my-3 w-52 bg-gray-600" />
        <Link href="/Pagina1">
          <Button className="bg-fuchsia-300">
            <ButtonText className='font-bold text-white'>Primeira Página</ButtonText>
          </Button>
        </Link>
        <Divider className="my-3 w-20 bg-gray-600" />
        <Link href="/Pagina2">
          <Button className="bg-indigo-600">
            <ButtonText className='font-bold text-white'>Segunda Página</ButtonText>
          </Button>
        </Link>
        <Divider className="my-3 w-20 bg-gray-600" />
        <Link href="/Pagina3">
          <Button className="bg-slate-800">
            <ButtonText className='font-bold text-white'>Terceira Página</ButtonText>
          </Button>
        </Link>
        <Divider className="my-3 w-52 bg-gray-600" />
      </View>
    </GluestackUIProvider>
  );
}
