import React, { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";

import { Skeleton } from "@material-ui/lab";

import BlockIcon from "@material-ui/icons/Block";
import DoneIcon from "@material-ui/icons/Done";
import SearchIcon from "@material-ui/icons/Search";
import amber from "@material-ui/core/colors/amber";

import BoxContainer from "../BoxContainer";

export default function ProverbsContent({
  answers,
  guesses,
  loading,
  visible = false
}) {
  const [render, setRender] = useState(10);

  useEffect(() => {
    if (render < answers.length) {
      const to = setTimeout(
        setRender,
        50,
        Math.min(answers.length, render + 10)
      );
      return () => clearTimeout(to);
    }
  }, [render, answers.length]);

  return (
    <BoxContainer>
      <Typography gutterBottom>
        Tutti i testi sono tratti dalla pagina Wikipedia sul dipinto:{" "}
        <a
          href="https://it.wikipedia.org/wiki/Proverbi_fiamminghi"
          title="Apri Wikipedia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proverbi Fiamminghi (Pieter Bruegel il Vecchio)
        </a>
      </Typography>
      <Grid container alignItems="center" justify="space-evenly" spacing={1}>
        {loading &&
          Array(20)
            .fill(true)
            .map((_, i) => <SkeletonCard key={i} />)}

        {answers.slice(0, render).map(a => {
          const guessed = guesses.includes(a.id);
          return (
            <AnswerCard
              key={a.id}
              answer={a}
              guessed={guessed}
              visible={visible || guessed}
            />
          );
        })}
      </Grid>
    </BoxContainer>
  );
}

const AnswerCard = ({
  answer: { id, proverb, meaning, italian },
  guessed,
  visible
}) => {
  const [suggestion, setSuggestion] = useState(false);

  return (
    <Grid item xs={12} sm={9} md={6}>
      <Card variant="outlined">
        <CardHeader
          action={
            !guessed &&
            !!meaning && (
              <IconButton
                title="Ottieni un suggerimento"
                color="inherit"
                onClick={() => setSuggestion(!suggestion)}
              >
                <SearchIcon />
              </IconButton>
            )
          }
          avatar={
            guessed ? (
              <DoneIcon color="primary" />
            ) : (
              <BlockIcon style={{ color: amber[500] }} />
            )
          }
          title={`#${id}`}
        />
        <CardContent>
          <Collapse in={visible}>
            <Typography variant="h6">{proverb}</Typography>
            <Typography color="textSecondary">{italian}</Typography>
          </Collapse>
          <Collapse in={suggestion || guessed}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary={meaning} />
              </ListItem>
            </List>
          </Collapse>
        </CardContent>
      </Card>{" "}
    </Grid>
  );
};

const SkeletonCard = () => (
  <Grid item xs={12} sm={9} md={6}>
    <Card variant="outlined">
      <CardHeader
        avatar={<Skeleton variant="circle" width={24} height={24} />}
        title={<Skeleton variant="text" />}
      />
      <CardContent>
        <Typography variant="h6">
          <Skeleton variant="text" />
        </Typography>
        <Typography color="textSecondary">
          <Skeleton variant="text" />
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Skeleton variant="circle" width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary={<Skeleton variant="text" />} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  </Grid>
);
