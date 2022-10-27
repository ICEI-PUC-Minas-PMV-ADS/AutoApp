import { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import Nav from "../../Components/NavBar";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./style";

const form = {
  name: "",
  email: "",
  cell: "",
  document: "",
  password: "",
  confirmedPassword: "",
};

const OwnerRegistration = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <ScrollView>
      <Statusbar />
      <Nav />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
          onChangeText={(name) => setName(name)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Telefone"
          value={cell}
          autoCorrect={false}
          onChangeText={(cell) => setCell(cell)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="CPF"
          value={document}
          autoCorrect={false}
          onChangeText={(document) => setDocument(document)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Confirmar a Senha"
          secureTextEntry={true}
          value={confirmedPassword}
          onChangeText={(confirmedPassword) =>
            setConfirmedPassword(confirmedPassword)
          }
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <DefaultButton text={"Cadastrar"} />
      </View>
    </ScrollView>
  );
};

export default OwnerRegistration;
