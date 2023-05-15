import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const callTrigger = async () => {
  const response = await fetch("https://eoa7s7zs368tk3j.m.pipedream.net/", options, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      tyson: "hichman",
    }),
    mode: "cors",
  });
  const data = await response.json();
  console.log(data);
};

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Events</h1>
          <button onClick={async () => await callTrigger()}>
            Trigger pipedream job
          </button>
        </div>
      </main>

    </div>
  );
}