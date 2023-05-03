import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button.js';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Helper/Head';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../store/user';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const dispatch = useDispatch();

  const { token, user } = useSelector((state) => state);
  const loading = token.loading || user.loading;
  const error = token.error || user.error;

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      dispatch(
        userLogin({ username: username.value, password: password.value }),
      );
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Enter</Button>
        )}
        <Error error={error && 'Incorrect data.'} />
      </form>
      <Link className={styles.forgot} to="/login/forgot">
        Forgot password?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Sign Up</h2>
        <p>Not signed up yet?</p>
        <Link className={stylesBtn.button} to="/login/create">
          Register
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
