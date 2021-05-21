import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../NavBars/NavBar";
import Footer from "../../Footers/Footer";
import "./Login.css";
import Button1 from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 25,
    width: 300,
  },
}));
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [ReEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  let dispatch = useDispatch();
  const classes = useStyles();

  const { user } = useSelector((state) => ({ ...state }));
  const { days_page } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user && user.token) {
      if (days_page.days_redirect === "n") {
        history.push("/home");
      } else if (days_page.days_redirect === "r") {
        history.push("/recommendedhome");
      }
    }
  }, [user]);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
    console.log(
      process.env.REACT_APP_REGISTER_REDIRECT_URL,
      "handle register submit"
    );
    await auth.sendSignInLinkToEmail(ReEmail, config);

    toast.success(
      `Email is sent to ${ReEmail}.Click the link to complete your registration.`
    );
    //save email in local storage
    window.localStorage.setItem("emailForRegistration", ReEmail);
    console.log();
    // clear state
    setReEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleRegisterSubmit}>
      <input
        type="email"
        className="form-control"
        value={ReEmail}
        onChange={(e) => setReEmail(e.target.value)}
        placeholder="Your Email"
        autoFocus
      />
      <br />

      <Button1
        variant="contained"
        color="secondary"
        onClick={handleRegisterSubmit}
        startIcon={<MailOutlineOutlinedIcon />}
        className={classes.button}
      >
        Register
      </Button1>
    </form>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
          uid: user.uid,
        },
      });
      setLoading(true); // waste to write
      history.push("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        console.log(user);
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
            uid: user.uid,
            profilepic: user.photoURL,
          },
        });
        history.push("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          autoFocus
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password "
        />
      </div>
      <Link
        to="/forgot/password"
        className="float-right text-danger logintxtdngr"
      >
        Forgot Password ?
      </Link>
      <Button1
        variant="contained"
        color="secondary"
        disabled={!email || !password}
        onClick={handleSubmit}
        startIcon={<MailOutlineOutlinedIcon />}
        className={classes.button}
      >
        Login with Email & Password
      </Button1>
    </form>
  );

  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Giftshub - signup / login page</title>
        <meta
          name="description"
          content="Signup at once and get the opportunity to know about our Giftshub and the heart throbbing gifts we have for you here."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="valentine,greetings,gifts for all,gifs,gifthub,giftshub, personalised, gifts, customized, scheduled, virtual , free,e-gift, online gifts, online gift delivery, buy gifts online, online gift shop, send gifts, gifts to india, pack, gifting, free, valentines, love, n-day pack, we at gifts, valentines pack, recommended pack, gifts hub"
        />
        <meta name="language" content="EN" />
      </Helmet>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="container p-3">
        <div className="row">
          <div className=" mx-auto loginrow">
            <div className="row">
              <div className="col-md-6 ">
                {loading ? (
                  <h4 className="text-danger "> Loading.. </h4>
                ) : (
                  <h4 className="loginh4">Login</h4>
                )}
                {loginForm()}

                <center>
                  <h3 style={{ fontSize: "17px" }}>OR</h3>
                </center>
                <Button1
                  variant="contained"
                  color="secondary"
                  onClick={handleGoogleLogin}
                  startIcon={<FontAwesomeIcon icon={faGoogle} />}
                  className={classes.button}
                >
                  Login with Google
                </Button1>
              </div>
              <div className="col-md-6 ">
                <h4 className="loginh4">Register</h4>
                {registerForm()}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
