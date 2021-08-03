import { Button, CircularProgress, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addName } from "../api";
import useWindowSize from "../hooks/useWindowSize";

//@ts-ignore
const NameForm = ({ queue, setQueue }) => {
  const [sending, setSending] = useState(false);
  const size = useWindowSize();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values: any) => {
    if (values?.name && errors.name === undefined) {
      setSending(true);
      const data = await addName(values.name);
      if (data) {
        setQueue(queue.concat(data));
      } else {
        alert("Problem in add client");
      }
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        justifyContent: "space-around",
        display: "flex",
        width: "100%",
        flexDirection: size.width > 350 ? "row" : "column",
      }}
    >
      <TextField
        id="filled-basic"
        label="Name"
        variant="filled"
        {...register("name", {
          required: true,
          minLength: 2,
          pattern: new RegExp("^[a-zA-Z]+$", "gi"),
        })}
        helperText={errors.name && "Please enter an name."}
        error={errors.name}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={sending}
      >
        Add
      </Button>
    </form>
  );
};

export default NameForm;
