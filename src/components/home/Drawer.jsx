import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import {
  // Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  // ListSubheader,
  SwipeableDrawer,
  Switch
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

import { get as getSetting, set as setSetting } from "../actions/settings";

export default function HomeDrawer({
  open,
  onClose,
  onOpen,
  answers,
  guesses,
  onReset
}) {
  const { push } = useHistory();

  const [intro, setIntro] = useState(getSetting("intro", v => v !== "false"));

  useEffect(() => {
    // BUG: Need page reload
    setSetting("intro", intro);
  }, [intro]);

  return (
    <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
      <List>
        <ListItem button onClick={() => push("/proverbs")}>
          <ListItemIcon>
            <DoneIcon />
          </ListItemIcon>
          <ListItemText
            primary={`${guesses.length}/${answers.length}`}
            secondary="Risposte"
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" title="Cancella progressi" onClick={onReset}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <span>B</span>
          </ListItemIcon>
          <ListItemText primary="Bruegel" secondary="v1.3.0" />
        </ListItem>

        <ListItem button title="Toggle" onClick={() => setIntro(!intro)}>
          <ListItemIcon>
            <Switch checked={intro} />
          </ListItemIcon>
          <ListItemText
            primary="Introduction"
            secondary={intro ? "Visible" : "Hidden"}
          />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
