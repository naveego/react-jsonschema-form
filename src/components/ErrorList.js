import React from "react";
import { Message } from "semantic-ui-react";

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <Message error visible header="Errors" list={errors.map(x => x.stack)} />
  );
}
