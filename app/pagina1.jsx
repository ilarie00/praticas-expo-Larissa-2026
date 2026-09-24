import { Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { useRouter } from "expo-router";

export default function Pagina1() {
  const router = useRouter();

  return (
    <GluestackUIProvider mode="dark">
      <View className="flex-1 items-center justify-center">
        <Text className="uppercase font-extrabold">Página Um</Text>
        
        <Divider className="my-3 w-52 bg-gray-600" />
        
        <Button className="bg-pink-300" onPress={() => router.back()}>
          <ButtonText className="font-bold text-white">Home</ButtonText>
        </Button>
        
        <Divider className="my-3 w-20 bg-gray-600" />

        <Button className="bg-sky-300" onPress={() => router.push('/pagina2')}>
          <ButtonText className="font-bold text-white">Segunda página</ButtonText>
        </Button>

        <Divider className="my-3 w-20 bg-gray-600" />
   
        <Button className="bg-yellow-200" onPress={() => router.push('/pagina3')}>
          <ButtonText className="font-bold text-white">Terceira página</ButtonText>
        </Button>
        
        <Divider className="my-3 w-52" />
      </View>
    </GluestackUIProvider>
  );
}