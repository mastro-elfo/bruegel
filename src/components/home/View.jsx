import React, { useEffect, useState } from "react";

import { useSnackbar } from "notistack";
import { deburr } from "lodash";

import Page from "../Page";
import Header from "./Header";
import Content from "./Content";
import Drawer from "./Drawer";

import { get as getGuesses, set as updateGuesses } from "../actions/guesses";
import { load as loadAnswers } from "../actions/answers";

const snackbarProps = {
  anchorOrigin: {
    horizontal: "center",
    vertical: "top"
  },
  autoHideDuration: 2000
};

export default function HomeView() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    loadAnswers()
      .then(answers => setAnswers(answers))
      .catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
  }, [enqueueSnackbar]);

  useEffect(() => {
    setGuesses(getGuesses());
  }, []);

  useEffect(() => {
    updateGuesses(guesses);
  }, [guesses, guesses.length]);

  const handleSubmit = value => {
    const words = deburr(value)
      .toLowerCase()
      .replace(/[^\w]+/g, " ")
      .replace(/\s\s+/g, " ")
      .split(" ");
    const index = answers.findIndex(
      a =>
        a.match.findIndex(match =>
          match
            .map(m => words.indexOf(m))
            .every((e, i, a) => (i > 0 ? e > a[i - 1] : a[i] !== -1))
        ) !== -1
    );
    if (index !== -1) {
      // Guessed right
      if (guesses.includes(answers[index].id)) {
        // already guessed
        enqueueSnackbar("Già trovato", { variant: "info", ...snackbarProps });
        console.log(answers[index].id, guesses);
      } else {
        // Success
        enqueueSnackbar("Corretto!", {
          variant: "success",
          ...snackbarProps
        });
        // TODO: Add a sound?
        setGuesses([...guesses, answers[index].id]);
      }
    } else {
      // Wrong
      enqueueSnackbar("Sbagliato", {
        variant: "error",
        ...snackbarProps
      });
    }
  };

  const handleReset = () => {
    setGuesses([]);
    enqueueSnackbar("Tutti i progressi sono stati cancellati", {
      variant: "info",
      ...snackbarProps
    });
  };

  return (
    <Page
      header={
        <Header
          onOpen={() => setOpen(true)}
          answers={answers}
          guesses={guesses}
        />
      }
      content={
        <Content answers={answers} guesses={guesses} onSubmit={handleSubmit} />
      }
      drawer={
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          answers={answers}
          guesses={guesses}
          onReset={handleReset}
        />
      }
    />
  );
}
