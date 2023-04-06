import * as Yup from "yup";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await auth.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <AppFormField
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          keyboardType="email-address"
          name="email"
        />
        <AppFormField
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          name="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
