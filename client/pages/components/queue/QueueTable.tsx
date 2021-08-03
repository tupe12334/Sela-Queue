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
        <TableBody>
          {queue.map((client: any) => (
            <ClientCell client={client} key={client.queue} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QueueTable;
