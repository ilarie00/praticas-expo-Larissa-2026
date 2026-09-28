import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pagina2() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* Decorações */}
        <Text style={[styles.decor, styles.decor1]}>✦</Text>
        <Text style={[styles.decor, styles.decor2]}>✧</Text>
        <Text style={[styles.decor, styles.decor3]}>✦</Text>

        {/* Cabeçalho */}
        <View style={styles.header}>
          <View>
            <Text style={styles.location}>
              MYSTIC FALLS
            </Text>

            <Text style={styles.title}>
              O DIÁRIO
            </Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons
              name="book"
              size={25}
              color="#B91C1C"
            />
          </View>
        </View>

        <View style={styles.line} />

        <Text style={styles.subtitle}>
          SEGREDOS • MEMÓRIAS • PROMESSAS
        </Text>

        {/* Entrada principal */}
        <View style={styles.diaryCard}>

          <View style={styles.dateRow}>
            <Ionicons
              name="calendar-outline"
              size={17}
              color="#991B1B"
            />

            <Text style={styles.date}>
              18 DE OUTUBRO, 2010
            </Text>
          </View>

          <Text style={styles.entryTitle}>
            UMA NOITE EM MYSTIC FALLS
          </Text>

          <Text style={styles.entryText}>
            Hoje a cidade parece diferente.
            Há algo no ar, como se um segredo
            antigo estivesse prestes a despertar.
          </Text>

          <Text style={styles.entryText}>
            As ruas estão silenciosas e a lua
            ilumina a floresta. Talvez seja melhor
            não descobrir o que está lá fora...
          </Text>

          <View style={styles.signature}>
            <Text style={styles.signatureText}>
              — Meu diário
            </Text>
          </View>

        </View>

        {/* Seção de mistérios */}
        <Text style={styles.sectionTitle}>
          MISTÉRIOS DE MYSTIC FALLS
        </Text>

        {/* Card 1 */}
        <Pressable style={styles.mysteryCard}>
          <View style={styles.mysteryIcon}>
            <Ionicons
              name="moon-outline"
              size={25}
              color="#B91C1C"
            />
          </View>

          <View style={styles.mysteryContent}>
            <Text style={styles.mysteryTitle}>
              A FLORESTA
            </Text>

            <Text style={styles.mysteryText}>
              Algo se esconde entre as árvores...
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#525252"
          />
        </Pressable>

        {/* Card 2 */}
        <Pressable style={styles.mysteryCard}>
          <View style={styles.mysteryIcon}>
            <Ionicons
              name="water-outline"
              size={25}
              color="#B91C1C"
            />
          </View>

          <View style={styles.mysteryContent}>
            <Text style={styles.mysteryTitle}>
              O LAGO
            </Text>

            <Text style={styles.mysteryText}>
              Algumas histórias nunca vêm à tona.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#525252"
          />
        </Pressable>

        {/* Card 3 */}
        <Pressable style={styles.mysteryCard}>
          <View style={styles.mysteryIcon}>
            <Ionicons
              name="lock-closed-outline"
              size={25}
              color="#B91C1C"
            />
          </View>

          <View style={styles.mysteryContent}>
            <Text style={styles.mysteryTitle}>
              O SEGREDO
            </Text>

            <Text style={styles.mysteryText}>
              Nem todo segredo deve ser revelado.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#525252"
          />
        </Pressable>

        {/* Botão */}
        <Pressable
          style={styles.button}
          onPress={() => router.push('/pagina3')}
        >
          <Ionicons
            name="person-outline"
            size={20}
            color="#FFFFFF"
          />

          <Text style={styles.buttonText}>
            MEU PERFIL
          </Text>
        </Pressable>

        {/* Rodapé */}
        <Text style={styles.footer}>
          SOME MEMORIES NEVER DIE
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#070707',
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 30,

    backgroundColor: '#070707',
  },

  /* DECORAÇÕES */

  decor: {
    position: 'absolute',
    color: '#7F1D1D',
    fontSize: 25,
  },

  decor1: {
    top: 80,
    right: 20,
  },

  decor2: {
    top: 230,
    left: 15,
    color: '#450A0A',
  },

  decor3: {
    bottom: 130,
    right: 25,
    color: '#991B1B',
  },

  /* HEADER */

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  location: {
    color: '#991B1B',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 4,
  },

  title: {
    color: '#F5F5F5',
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 3,
    marginTop: 3,

    textShadowColor: '#7F1D1D',
    textShadowRadius: 12,
  },

  headerIcon: {
    width: 52,
    height: 52,

    borderRadius: 8,

    backgroundColor: '#120707',

    borderWidth: 1,
    borderColor: '#4A1818',

    alignItems: 'center',
    justifyContent: 'center',
  },

  line: {
    width: '100%',
    height: 1,

    backgroundColor: '#351414',

    marginTop: 15,
  },

  subtitle: {
    color: '#525252',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,

    marginTop: 10,
  },

  /* DIÁRIO */

  diaryCard: {
    marginTop: 25,

    padding: 22,

    backgroundColor: '#111111',

    borderRadius: 6,

    borderWidth: 1,
    borderColor: '#321717',

    shadowColor: '#7F1D1D',
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 8,
  },

  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  date: {
    color: '#737373',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginLeft: 7,
  },

  entryTitle: {
    color: '#E5E5E5',
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: 1,

    marginTop: 18,
  },

  entryText: {
    color: '#8A8A8A',
    fontSize: 14,
    lineHeight: 22,

    marginTop: 12,
  },

  signature: {
    marginTop: 20,

    alignItems: 'flex-end',
  },

  signatureText: {
    color: '#991B1B',
    fontSize: 13,
    fontStyle: 'italic',
  },

  /* MISTÉRIOS */

  sectionTitle: {
    color: '#A3A3A3',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,

    marginTop: 28,
    marginBottom: 12,
  },

  mysteryCard: {
    minHeight: 70,

    marginBottom: 10,

    paddingHorizontal: 14,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#101010',

    borderWidth: 1,
    borderColor: '#292929',

    borderRadius: 7,
  },

  mysteryIcon: {
    width: 44,
    height: 44,

    borderRadius: 8,

    backgroundColor: '#1A0909',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 13,
  },

  mysteryContent: {
    flex: 1,
  },

  mysteryTitle: {
    color: '#D4D4D4',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  mysteryText: {
    color: '#666666',
    fontSize: 11,

    marginTop: 4,
  },

  /* BOTÃO */

  button: {
    height: 52,

    marginTop: 20,

    borderRadius: 5,

    backgroundColor: '#7F1D1D',

    borderWidth: 1,
    borderColor: '#B91C1C',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#991B1B',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,

    marginLeft: 8,
  },

  /* FOOTER */

  footer: {
    color: '#3F3F3F',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 3,

    textAlign: 'center',

    marginTop: 25,
  },
});
