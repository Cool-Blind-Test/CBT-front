import { NextPage } from "next";
import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import styles from "../sass/pages/SignUp.module.scss";

const SignUp: NextPage = () => {
  return (
    <main className={styles.main}>
      <SignUpForm />
    </main>
  );
};

export default SignUp;
