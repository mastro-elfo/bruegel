import React, { useEffect, useState, Fragment } from "react";

import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import SuggestionIconButton from "./SuggestionIconButton";
import GrowTypography from "../GrowTypography";

export default function HomeHeader({ onOpen, answers, guesses }) {
  const [newGuess, setNewGuess] = useState(false);

  useEffect(() => {
    if (guesses.length > 0) {
      setNewGuess(true);
      const to = setTimeout(setNewGuess, 2000, false);
      return () => clearTimeout(to);
    }
  }, [guesses.length]);

  return (
    <Fragment>
      <AppBar color="transparent">
        <Toolbar>
          <IconButton color="primary" title="Open" onClick={onOpen}>
            <MenuIcon />
          </IconButton>
          <GrowTypography variant="h6" color="inherit"></GrowTypography>

          <SuggestionIconButton answers={answers} guesses={guesses} />

          <Typography color="primary" variant="h6">
            <Badge badgeContent={newGuess ? "+1" : 0} color="primary">
              {guesses.length}/{answers.length}
            </Badge>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
