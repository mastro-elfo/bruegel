import React from "react";

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
  SwipeableDrawer
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

export default function HomeDrawer({
  open,
  onClose,
  onOpen,
  answers,
  guesses,
  onReset
}) {
  const { push } = useHistory();

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
          <ListItemText primary="Bruegel" secondary="v1.1.0" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
