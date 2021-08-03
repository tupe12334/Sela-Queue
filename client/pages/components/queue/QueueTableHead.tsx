import { TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

const QueueTableHead = () => {
  const size = useWindowSize();

  return (
    <TableHead>
      <TableRow>
        {size.width > 350 && <TableCell>Enqueued At</TableCell>}
        <TableCell>Name</TableCell>
        <TableCell>Queue Num</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default QueueTableHead;
