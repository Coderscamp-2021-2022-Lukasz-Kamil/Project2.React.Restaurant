import { useCookies } from "react-cookie";

const LoggedAs = () => {
  const [cookies] = useCookies();

  return (
    <div
      className="d-flex justify-content-end align-items-end text-white mx-3"
      style={{
        width: "50vw",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {cookies.isSignedIn ? (
        <h4>Logged as: {cookies.signedUserEmail}</h4>
      ) : (
        <h4>Please log in!</h4>
      )}
    </div>
  );
};

export default LoggedAs;
