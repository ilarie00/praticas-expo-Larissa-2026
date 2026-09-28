import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pagina3() {
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
            <Text style={styles.smallTitle}>
              MYSTIC FALLS
            </Text>

            <Text style={styles.title}>
              MEU PERFIL
            </Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons
              name="person-outline"
              size={25}
              color="#B91C1C"
            />
          </View>
        </View>

        <View style={styles.line} />

        {/* Perfil */}
        <View style={styles.profileCard}>

          {/* Avatar */}
          <View style={styles.avatarOuter}>
            <View style={styles.avatar}>
              <Ionicons
                name="person"
                size={60}
                color="#8B8B8B"
              />
            </View>
          </View>

          <Text style={styles.name}>
            ELENA GILBERT
          </Text>

          <Text style={styles.role}>
            HUMANA • MYSTIC FALLS
          </Text>

          <View style={styles.status}>
            <View style={styles.statusDot} />

            <Text style={styles.statusText}>
              CONECTADA AO DIÁRIO
            </Text>
          </View>

        </View>

        {/* Informações */}
        <Text style={styles.sectionTitle}>
          MINHA HISTÓRIA
        </Text>

        <View style={styles.infoCard}>

          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Ionicons
                name="location-outline"
                size={22}
                color="#B91C1C"
              />
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>
                LOCALIZAÇÃO
              </Text>

              <Text style={styles.value}>
                Mystic Falls, Virginia
              </Text>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Ionicons
                name="book-outline"
                size={22}
                color="#B91C1C"
              />
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>
                PÁGINAS ESCRITAS
              </Text>

              <Text style={styles.value}>
                27 páginas
              </Text>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Ionicons
                name="heart-outline"
                size={22}
                color="#B91C1C"
              />
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.label}>
                MEMÓRIAS
              </Text>

              <Text style={styles.value}>
                13 momentos guardados
              </Text>
            </View>
          </View>

        </View>

        {/* Segredo */}
        <View style={styles.secretCard}>

          <View style={styles.secretHeader}>
            <Ionicons
              name="lock-closed"
              size={19}
              color="#B91C1C"
            />

            <Text style={styles.secretTitle}>
              SEGREDO
            </Text>
          </View>

          <Text style={styles.secretText}>
            Algumas coisas são melhores mantidas
            longe dos olhos dos outros.
          </Text>

          <Pressable style={styles.secretButton}>
            <Text style={styles.secretButtonText}>
              ABRIR SEGREDO
            </Text>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#B91C1C"
            />
          </Pressable>

        </View>

        {/* Botão voltar */}
        <Pressable
          style={styles.button}
          onPress={() => router.push('/pagina1')}
        >
          <Ionicons
            name="moon-outline"
            size={20}
            color="#FFFFFF"
          />

          <Text style={styles.buttonText}>
            VOLTAR PARA MYSTIC FALLS
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
    top: 75,
    right: 25,
  },

  decor2: {
    top: 250,
    left: 18,
    color: '#450A0A',
  },

  decor3: {
    bottom: 120,
    right: 20,
    color: '#991B1B',
  },

  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  smallTitle: {
    color: '#991B1B',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 4,
  },

  title: {
    color: '#F5F5F5',
    fontSize: 32,
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

  /* PERFIL */

  profileCard: {
    alignItems: 'center',

    marginTop: 25,
    paddingVertical: 25,
    paddingHorizontal: 20,

    backgroundColor: '#101010',

    borderRadius: 8,

    borderWidth: 1,
    borderColor: '#351717',

    shadowColor: '#7F1D1D',
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 8,
  },

  avatarOuter: {
    width: 125,
    height: 125,

    borderRadius: 65,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#180808',

    borderWidth: 2,
    borderColor: '#7F1D1D',

    shadowColor: '#991B1B',
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 12,
  },

  avatar: {
    width: 105,
    height: 105,

    borderRadius: 55,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#222222',

    borderWidth: 1,
    borderColor: '#4A4A4A',
  },

  name: {
    color: '#E5E5E5',
    fontSize: 21,
    fontWeight: '900',
    letterSpacing: 2,

    marginTop: 15,
  },

  role: {
    color: '#777777',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,

    marginTop: 5,
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 13,

    paddingHorizontal: 12,
    paddingVertical: 6,

    borderRadius: 20,

    backgroundColor: '#180909',
  },

  statusDot: {
    width: 7,
    height: 7,

    borderRadius: 5,

    backgroundColor: '#B91C1C',

    marginRight: 7,
  },

  statusText: {
    color: '#991B1B',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  /* HISTÓRIA */

  sectionTitle: {
    color: '#A3A3A3',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,

    marginTop: 25,
    marginBottom: 12,
  },

  infoCard: {
    padding: 18,

    backgroundColor: '#101010',

    borderWidth: 1,
    borderColor: '#292929',

    borderRadius: 8,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 45,
    height: 45,

    borderRadius: 7,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#190909',

    marginRight: 13,
  },

  infoContent: {
    flex: 1,
  },

  label: {
    color: '#606060',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
  },

  value: {
    color: '#D4D4D4',
    fontSize: 14,
    fontWeight: '600',

    marginTop: 4,
  },

  separator: {
    height: 1,
    backgroundColor: '#292929',
    marginVertical: 15,
  },

  /* SEGREDO */

  secretCard: {
    marginTop: 18,

    padding: 18,

    backgroundColor: '#110707',

    borderRadius: 8,

    borderWidth: 1,
    borderColor: '#4A1818',
  },

  secretHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  secretTitle: {
    color: '#B91C1C',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,

    marginLeft: 8,
  },

  secretText: {
    color: '#777777',
    fontSize: 13,
    lineHeight: 20,

    marginTop: 10,
  },

  secretButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 15,
    paddingTop: 13,

    borderTopWidth: 1,
    borderTopColor: '#321414',
  },

  secretButtonText: {
    color: '#991B1B',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
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
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.5,

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
