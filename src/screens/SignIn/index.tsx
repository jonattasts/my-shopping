import React from "react";
import auth from "@react-native-firebase/auth";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import Input from "../../components/Input";

import { Container, Account, Title, Subtitle } from "./styles";

export function SignIn() {
  const handleSigInAnonymously = async () => {
    const { user } = await auth().signInAnonymously();

    console.log(user);
  };

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input placeholder="e-mail" keyboardType="email-address" />

      <Input placeholder="senha" secureTextEntry />

      <Button title="Entrar" onPress={() => {}} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={() => {}} />
        <ButtonText title="Criar conta" onPress={() => {}} />
      </Account>
    </Container>
  );
}
