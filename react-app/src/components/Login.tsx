import styles from './Login.module.css'
import {useState} from "react";

interface Props {
}

const Login = (props: Props) => {
    const [loginError, setLoginError] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [processingLogin, setProcessingLogin] = useState(false);

    const login = () => {

    }

    return (
        <section id="loginComponent">
            {loginError ? <div><label className="error">Invalid User Name and/or Password!</label></div> : <></>}
            <div>
                <label htmlFor="userName" className={`editor-label ${styles.loginLabel}`}>User Name:</label>
                <input id="userName" name="userName" type="text" className="editor-field" />
            </div>
            <div>
                <label htmlFor="password" className={`editor-label ${styles.loginLabel}`}>Password</label>
                <input id="password" name="password" type="password" className="editor-field" />
            </div>
            <div className={styles.buttonBar}>
                <button id={styles.loginBtn} className={`btn btn-gnarly`} disabled={processingLogin} onClick={() => login()}>Login</button>
            </div>
        </section>
    )
}

export default Login;