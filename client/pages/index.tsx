import { Button } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { finish, getQueue } from "./api";
import ClientCell from "./components/ClientCell";
import NameForm from "./components/NameForm";
import QueueTable from "./components/queue/QueueTable";

export default function Home() {
  const [queue, setQueue] = useState<any[]>([]);
  useEffect(() => {
    getQueue().then((array) => {
      if (array) {
        setQueue(array);
      }
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Main page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NameForm queue={queue} setQueue={setQueue} />
        <QueueTable queue={queue} />
        {queue[0] && (
          <>
            <ClientCell client={queue[0]} />
            <Button
              variant="contained"
              color="primary"
              onClick={async () => {
                const done = await finish(queue[0].queue);
                if (done) {
                  console.log(done);

                  setQueue(queue.splice(1));
                } else {
                  alert("Problem in update client");
                }
              }}
            >
              Call Next
            </Button>
          </>
        )}
      </main>
      {/* <footer></footer> */}
    </div>
  );
}
