import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

export function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/nantes.png")} />
      </View>
      <Text style={styles.bemVindo}> Bem Vindo</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        placeholder="Senha"
      />

      <TouchableOpacity>
        <Text style={styles.criarContaText}>Recuperar senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}> Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.registerText}> Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
