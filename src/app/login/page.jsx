"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import styles from "./loginPage.module.css";
import { useLayoutEffect } from "react";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useLayoutEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {status === "loading" ? (
          <div className="lds-ellipsis"></div>
        ) : (
          <>
            <div
              className={styles.socialButton}
              onClick={() => signIn("google")}
            >
              Sign in with Google
            </div>
            <div className={styles.socialButton}>Sign in with Github</div>
            <div className={styles.socialButton}>Sign in with Facebook</div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
