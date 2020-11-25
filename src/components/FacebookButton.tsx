import FacebookLogin from "react-facebook-login";

export default function FacebookButton() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <FacebookLogin
      appId="819117858883719"
      fields="name,email,picture"
      textButton="Entrar com o Facebook"
      callback={responseFacebook}
    />
  );
}
