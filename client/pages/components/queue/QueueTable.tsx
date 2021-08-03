import { Paper, Table, TableBody, TableContainer } from "@material-ui/core";
import React from "react";
import ClientCell from "../ClientCell";
import QueueTableHead from "./QueueTableHead";

//@ts-ignore
const QueueTable = ({ queue }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <QueueTableHead />
        {queue.length > 0 ? (
          <TableBody>
            {queue.map(
              (client: any, i: number) =>
                i > 0 && <ClientCell client={client} key={client.queue} />
            )}
          </TableBody>
        ) : (
          <span>No client in system</span>
        )}
      </Table>
    </TableContainer>
  );
};

export default QueueTable;
