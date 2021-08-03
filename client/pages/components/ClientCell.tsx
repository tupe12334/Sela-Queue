import { TableCell, TableRow } from "@material-ui/core";
import dayjs from "dayjs";
import React from "react";
import styles from "../../../styles/Home.module.css";
import useWindowSize from "../hooks/useWindowSize";

//@ts-ignore
const ClientCell = ({ client }) => {
  const size = useWindowSize();
  return (
    <TableRow>
      {size.width > 350 && (
        <TableCell>
          {dayjs(client.enqueue).format("DD MMMM YYYY in HH:mm")}
        </TableCell>
      )}

      <TableCell>{client.name}</TableCell>
      <TableCell>{client.queue}</TableCell>
    </TableRow>
  );
};

export default ClientCell;
