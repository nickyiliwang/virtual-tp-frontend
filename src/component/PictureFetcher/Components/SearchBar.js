import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

export const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const classes = useStyles();

  const onFormSubmit = e => {
    e.preventDefault();
    if (term === "") return;
    onSubmit(term);
  };

  return (
    <div>
      <Paper component="form" className={classes.root} onSubmit={onFormSubmit}>
        <InputBase
          className={classes.input}
          placeholder="Search for images"
          inputProps={{ "aria-label": "Search for images" }}
          onChange={e => setTerm(e.target.value)}
          value={term}
          type="text"
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};
