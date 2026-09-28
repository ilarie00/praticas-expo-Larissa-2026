import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pagina1() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Lua */}
        <View style={styles.moon}>
          <View style={styles.moonShadow} />
        </View>

        {/* Elementos decorativos */}
        <Text style={[styles.bat, styles.bat1]}>✦</Text>
        <Text style={[styles.bat, styles.bat2]}>✧</Text>
        <Text style={[styles.bat, styles.bat3]}>✦</Text>

        {/* Cabeçalho */}
        <Text style={styles.smallTitle}>
          MYSTIC FALLS
        </Text>

        <Text style={styles.title}>
          DIÁRIOS
        </Text>

        <Text style={styles.titleSecond}>
          DE UM VAMPIRO
        </Text>

        <View style={styles.line} />

        <Text style={styles.subtitle}>
          ALGUNS SEGREDOS NUNCA MORREM
        </Text>

        {/* Símbolo central */}
        <View style={styles.symbol}>
          <Ionicons
            name="moon-outline"
            size={65}
            color="#B91C1C"
          />

          <View style={styles.diamond} />
        </View>

        {/* Card */}
        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            BEM-VINDO A MYSTIC FALLS
          </Text>

          <Text style={styles.cardText}>
            Uma cidade onde nada é o que parece.
            Vampiros, bruxas, lobisomens e segredos
            vivem entre nós.
          </Text>

          <Text style={styles.quote}>
            "O amor é uma força poderosa."
          </Text>

        </View>

        {/* Botão */}
        <Pressable
          style={styles.button}
          onPress={() => router.push('/pagina2')}
        >
          <Ionicons
            name="book-outline"
            size={21}
            color="#FFFFFF"
          />

          <Text style={styles.buttonText}>
            ABRIR O DIÁRIO
          </Text>
        </Pressable>

        {/* Rodapé */}
        <Text style={styles.footer}>
          MYSTIC FALLS • 1864
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#070707',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#070707',
    overflow: 'hidden',
  },

  /* LUA */

  moon: {
    position: 'absolute',
    top: 45,
    right: 25,

    width: 75,
    height: 75,
    borderRadius: 50,

    backgroundColor: '#E5E5E5',

    shadowColor: '#FFFFFF',
    shadowOpacity: 0.35,
    shadowRadius: 25,
    elevation: 15,

    overflow: 'hidden',
  },

  moonShadow: {
    position: 'absolute',
    top: -5,
    left: 20,

    width: 70,
    height: 70,
    borderRadius: 50,

    backgroundColor: '#070707',
  },

  /* DECORAÇÕES */

  bat: {
    position: 'absolute',
    color: '#7F1D1D',
    fontSize: 28,
  },

  bat1: {
    top: 120,
    left: 30,
  },

  bat2: {
    top: 220,
    right: 30,
    color: '#991B1B',
  },

  bat3: {
    bottom: 150,
    left: 35,
    color: '#450A0A',
  },

  /* TÍTULOS */

  smallTitle: {
    color: '#991B1B',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 5,
    marginBottom: 8,
  },

  title: {
    color: '#F5F5F5',
    fontSize: 43,
    fontWeight: '900',
    letterSpacing: 5,

    textShadowColor: '#7F1D1D',
    textShadowRadius: 15,
  },

  titleSecond: {
    color: '#B91C1C',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 4,
    marginTop: -3,
  },

  line: {
    width: 130,
    height: 1,

    backgroundColor: '#991B1B',

    marginTop: 14,
    marginBottom: 10,
  },

  subtitle: {
    color: '#737373',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
  },

  /* SÍMBOLO */

  symbol: {
    width: 135,
    height: 135,
    borderRadius: 70,

    marginTop: 25,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#120707',

    borderWidth: 1,
    borderColor: '#7F1D1D',

    shadowColor: '#991B1B',
    shadowOpacity: 0.6,
    shadowRadius: 25,
    elevation: 15,
  },

  diamond: {
    position: 'absolute',

    width: 18,
    height: 18,

    backgroundColor: '#991B1B',

    transform: [
      {
        rotate: '45deg',
      },
    ],

    opacity: 0.5,
  },

  /* CARD */

  card: {
    width: '100%',

    marginTop: 25,
    padding: 20,

    backgroundColor: '#0F0F0F',

    borderWidth: 1,
    borderColor: '#2A1515',

    borderRadius: 8,
  },

  cardTitle: {
    color: '#D4D4D4',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
  },

  cardText: {
    color: '#737373',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',

    marginTop: 10,
  },

  quote: {
    color: '#991B1B',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',

    marginTop: 12,
  },

  /* BOTÃO */

  button: {
    width: '90%',
    height: 52,

    marginTop: 20,

    borderRadius: 5,

    backgroundColor: '#7F1D1D',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#B91C1C',

    shadowColor: '#991B1B',
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,

    marginLeft: 9,
  },

  /* RODAPÉ */

  footer: {
    position: 'absolute',
    bottom: 18,

    color: '#404040',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 3,
  },
});




