import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback
} from "react-native";
import dayjs from "dayjs";
import { router } from "expo-router";
import {
  Button,
  H6,
  Input,
  Text,
  useTheme,
  View,
  XStack,
  YStack
} from "tamagui";

import { getAuthToken, setAuthToken } from "../../utils/AuthUtils";
import { MySafeAreaView } from "../MySafeAreaView";

import { AuthHelper, AuthScreen } from "./ApiHelper";

const AuthScreenMap = {
  [AuthScreen.LOGIN]: {
    subText: "Signin to your account!",
    submitPath: "/login",
    bottomLeftText: "Not a member?",
    bottomRightText: "Signup!",
    goToOnClick: AuthScreen.SIGNUP
  },
  [AuthScreen.SIGNUP]: {
    subText: "Welcome to Flavora, signup!",
    submitPath: "/register",
    bottomLeftText: "Already a member?",
    bottomRightText: "Login!",
    goToOnClick: AuthScreen.LOGIN
  }
};

const Auth = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authScreen, setAuthScreen] = useState<AuthScreen>(AuthScreen.LOGIN);
  const [error, setError] = useState(false);

  // TODO: show contact info for forgot password
  const onSubmit = async () => {
    try {
      const response = await AuthHelper({
        email: email.toLowerCase(),
        password,
        path: authScreen
      });
      if (response.status !== 200) {
        throw new Error();
      }
      const authResponse = await response.json();
      await setAuthToken({
        token: authResponse["token"],
        expiry: dayjs.unix(authResponse["expiry"]).toString()
      });

      router.replace("/home");
    } catch (error) {
      setError(true);
    }
  };

  const disableSubmitButton =
    authScreen === AuthScreen.SIGNUP
      ? !email ||
        !password ||
        !confirmPassword ||
        (confirmPassword ? confirmPassword !== password : true)
      : !email || !password;

  return (
    <MySafeAreaView>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={{ flex: 1 }}
      >
        <View
          marginHorizontal="$3.5"
          justifyContent="space-between"
          flex={1}
        >
          <YStack marginTop="$6">
            <Text
              fontWeight="800"
              fontSize="$11"
              color="$orange9"
            >
              Flavora
            </Text>
            <H6
              marginBottom="$12"
              color="$gray9"
            >
              {AuthScreenMap[authScreen].subText}
            </H6>
            {error && (
              <Text
                textAlign="center"
                color="$red11"
                marginBottom="$3"
              >
                Please check your username/password
              </Text>
            )}
            <Input
              placeholder="Email"
              marginVertical="$1.5"
              onChangeText={setEmail}
            />
            <Input
              placeholder="Password"
              marginVertical="$1.5"
              onChangeText={setPassword}
              secureTextEntry
            />
            {authScreen === AuthScreen.SIGNUP && (
              <>
                {confirmPassword !== password
                  ? !!confirmPassword && (
                      <Text
                        textAlign="center"
                        color="$red11"
                        marginTop="$1.5"
                      >
                        {"Passwords don't match"}
                      </Text>
                    )
                  : null}
                <Input
                  placeholder="Confirm Password"
                  marginVertical="$1.5"
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
              </>
            )}
            <Button
              marginTop="$4"
              onPress={onSubmit}
              backgroundColor="$orange9"
              color="white"
              disabled={disableSubmitButton}
              opacity={disableSubmitButton ? 0.3 : 1}
            >
              Submit
            </Button>
          </YStack>
          <XStack
            justifyContent="center"
            marginBottom="$7"
          >
            <Text paddingRight="$1.5">
              {AuthScreenMap[authScreen].bottomLeftText}
            </Text>
            <Text
              onPress={() => {
                setAuthScreen(AuthScreenMap[authScreen].goToOnClick);
                setError(false);
              }}
              color="$blue9"
            >
              {AuthScreenMap[authScreen].bottomRightText}
            </Text>
          </XStack>
        </View>
      </TouchableWithoutFeedback>
    </MySafeAreaView>
  );
};

export default Auth;
