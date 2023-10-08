import { AuthContext } from "../Context/AuthProvider";

const { googleSignIn } = useContext(AuthContext);

const handleGoogleSignIn = () => {
  googleSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user);
      toast(
        <ToastComponent successOrError={true} message="Signin successfull" />
      );
    })
    .catch((error) => {
      toast(<ToastComponent successOrError={false} message={error.message} />);
    });
};

export default handleGoogleSignIn;
