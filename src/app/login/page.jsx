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
const aa = {
  web: {
    client_id:
      "942982069345-0knoou4eadj0noi44jhimb7tgvpf4ceu.apps.googleusercontent.com",
    project_id: "nextjs-shop-398408",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "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",
    redirect_uris: [
      "https://nextjs-shop-teal.vercel.app/api/auth/callback/google",
      "http://localhost:3000/api/auth/callback/google",
    ],
  },
};
