import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

const AuthRoutesLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }
  if (!isSignedIn) {
    return <Redirect href={"/"} />;
  }
  return <Stack />;
};

export default AuthRoutesLayout;
