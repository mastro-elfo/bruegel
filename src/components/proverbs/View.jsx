import React, { useEffect, useState } from "react";

import { useSnackbar } from "notistack";

import Page from "../Page";
import Header from "./Header";
import Content from "./Content";

import { get as getGuesses } from "../actions/guesses";
import { load as loadAnswers } from "../actions/answers";

export default function ProverbsView() {
  const [answers, setAnswers] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    loadAnswers()
      .then(answers => setAnswers(answers))
      .catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      })
      .then(() => setLoading(false));
  }, [enqueueSnackbar]);

  useEffect(() => {
    setGuesses(getGuesses());
  }, []);

  const handleVisibileToggle = () => setVisible(!visible);

  return (
    <Page
      header={
        <Header
          answers={answers}
          guesses={guesses}
          loading={loading}
          visible={visible}
          onVisibileToggle={handleVisibileToggle}
        />
      }
      content={
        <Content
          answers={answers}
          guesses={guesses}
          loading={loading}
          visible={visible}
        />
      }
    />
  );
}
