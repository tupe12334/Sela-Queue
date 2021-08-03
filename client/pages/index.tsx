import { Button } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { finish, getQueue } from "./api";
import ClientCell from "./components/ClientCell";
import NameForm from "./components/NameForm";
import QueueTable from "./components/queue/QueueTable";

export default function Home() {
  const [queue, setQueue] = useState<any[]>([]);
  useEffect(() => {
    console.log(queue);
    queue.concat;
    getQueue().then(setQueue);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Main page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NameForm queue={queue} setQueue={setQueue} />
        <QueueTable queue={queue} />
        {queue[0] && (
          <>
            <ClientCell client={queue[0]} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                finish(queue[0].queue);
                setQueue(queue.splice(1));
              }}
            >
              Call Next
            </Button>
          </>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
