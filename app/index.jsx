import { Text, View } from 'react-native';

import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import {Link} from "expo-router"

export default function App() {
  return (
  
      <View className="flex-1 items-center justify-center">
        <Text className="uppercase font-extrabold">Página Home</Text>
        
        <Divider className="my-3 w-52 bg-gray-600" />
        <Link href="/pagina1" asChild>
        <Button className="bg-pink-300">
          <ButtonText className="font-bold text-white">Primeira página</ButtonText>
        </Button>
        </Link>
        
        <Divider className="my-3 w-20 bg-gray-600" />

       <Button className="bg-sky-300">
          <ButtonText className="font-bold text-white">Segunda página</ButtonText>
        </Button>

         <Divider className="my-3 w-20 bg-gray-600" />
        
        <Button className="bg-yellow-200">
          <ButtonText className="font-bold text-white">Terceira página</ButtonText>
        </Button>
        <Divider className="my-3 w-52"/>
      </View>
    </GluestackUIProvider>
  );
}