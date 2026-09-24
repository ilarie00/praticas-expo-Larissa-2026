import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from '@/components/ui/divider';
import { useRouter } from "expo-router";

export default function Pagina1() {
  const router = useRouter();

  return (
      <View style={styles.container}>
        <Text className='uppercase font-extrabold text-white'>Página Home</Text>
        <Divider className="my-3 w-52 bg-gray-600" />
        
        {/* Usando router.push para avançar para a página 1 em vez de voltar */}
        <Button className="bg-fuchsia-300" onPress={() => router.push('/pagina1')}>
          <ButtonText className='font-bold text-white'>Primeira Página</ButtonText>
        </Button>
        
        <Divider className="my-3 w-20 bg-gray-600" />
        
        <Button className="bg-indigo-600" onPress={() => router.push('/pagina2')}>
          <ButtonText className='font-bold text-white'>Segunda Página</ButtonText>
        </Button>
        
        <Divider className="my-3 w-20 bg-gray-600" />
        
        <Button className="bg-slate-800" onPress={() => router.push('/pagina3')}>
          <ButtonText className='font-bold text-white'>Terceira Página</ButtonText>
        </Button>
        
        <Divider className="my-3 w-52 bg-gray-600" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});