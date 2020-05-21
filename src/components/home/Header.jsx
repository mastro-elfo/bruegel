import React, { useEffect, useState, Fragment } from "react";

import { AppBar, Badge, Box, IconButton, Toolbar } from "@material-ui/core";

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

          {
            // TODO: I don't like this background
          }
          <Box
            bgcolor="rgba(255,255,255,0.5)"
            color="primary.main"
            fontSize="h6.fontSize"
            borderRadius="borderRadius"
            px={0.5}
          >
            <Badge badgeContent={newGuess ? "+1" : 0} color="primary">
              {guesses.length}/{answers.length}
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
