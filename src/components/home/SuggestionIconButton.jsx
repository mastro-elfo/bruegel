import React, { Fragment, useEffect, useState } from "react";

import { IconButton, Tooltip, Typography } from "@material-ui/core";

import LiveHelpIcon from "@material-ui/icons/LiveHelp";

export default function SuggestionIconButton({ answers, guesses }) {
  const [show, setShow] = useState(false);
  const filterAnswers = answers.filter(({ id }) => !guesses.includes(id));

  useEffect(() => {
    if (guesses.includes(show) || (!show && filterAnswers.length > 0)) {
      // Id already guessed
      setShow(
        filterAnswers[Math.floor(Math.random() * filterAnswers.length)].meaning
      );
    }
  }, [guesses, show, filterAnswers]);

  return (
    <Tooltip
      arrow
      title={
        <Fragment>
          <Typography>Ti do un suggerimento: </Typography>
          <Typography variant="body2">"{show}"</Typography>
        </Fragment>
      }
    >
      <IconButton color="primary">
        <LiveHelpIcon />
      </IconButton>
    </Tooltip>
  );
}
