import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <ScrollView style={styles.container}>
        <Image
            source={require('./assets/perfil.jpg')} // Você pode trocar esse arquivo por uma foto sua
            style={styles.imagem}
        />

        <Text style={styles.texto2}>Victor Hugo Passarine Rangel Bearari</Text>
        <Text style={styles.texto2}>17 anos</Text>
        <Text style={styles.texto3}>Sobre mim: </Text>
        <Text style={styles.texto2}>Sou o Victor Hugo Passarine Rangel Bearari. Gosto de aprender coisas novas, sou curioso e estou sempre buscando evoluir. Me interesso por tecnologia, gosto de criar e encarar desafios novos.</Text>
        <Text style={styles.texto3}>Formação acadêmica: .</Text>
        <Text style={styles.texto2}>- Desenvolvimento Front-end (HTML, CSS, JavaScript) – minha principal habilidade</Text>
        <Text style={styles.texto2}>- Noções de lógica de programação</Text>
        <Text style={styles.texto2}>- Organização e atenção aos detalhes</Text>
        <Text style={styles.texto2}>- Curiosidade e vontade de evoluir sempre</Text>
        <Text style={styles.texto3}>Experiências profissionais : </Text>
        <Text style={styles.texto3}>Competências / Habilidades: </Text>
        <Text style={styles.texto3}>Idiomas:</Text>
        <Text style={styles.texto2}>- Português (nativo), Inglês (Bem Pouco).</Text>
        <Text style={styles.texto3}>Email:</Text>
        <Text style={styles.texto2}>- victor.bearari@aluno.senai.br</Text>
        <Text style={styles.texto3}>Telefone:</Text>
        <Text style={styles.texto2}>- (18) 99777-7627</Text>
        <StatusBar style="auto" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  texto2: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },

  imagem: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 100,
  },

  texto3: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },


});