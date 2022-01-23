import { useState } from "react";
import styles from "../sass/pages/SignUp.module.scss";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { ISignUpUser } from "../types/user";
import { gql, useQuery } from "@apollo/client";

const SignUpForm = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation("signUp");

  return (
    <>
      <section className={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={t("username")}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("email")}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t("password")}
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder={t("confirmPassword")}
        />
      </section>
      <div className={styles.signIn}>
        {t("alreadyRegistered")}{" "}
        <Link href="/signin">
          <a style={{ color: "red" }}>{t("signInHere")}</a>
        </Link>
      </div>
    </>
  );
};

export default SignUpForm;
