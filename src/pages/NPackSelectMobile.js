import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
const allComp = [
  {
    id: "magazine",
    ismailsent: false,
    content: "Magazine",
    url: "",
    img:
      "https://img.timeinc.net/time/images/covers/asia/2012/20121105_600.jpg",
  },
  {
    id: "challenge",
    ismailsent: false,
    content: "Challenge",
    url: "",
    img:
      "https://img.timeinc.net/time/images/covers/asia/2012/20121105_600.jpg",
  },
  {
    id: "aboutquiz",
    ismailsent: false,
    content: "About Quiz",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fmemo.PNG?alt=media&token=beeb8d64-7501-4051-91e9-d15ba8977de4",
  },
  {
    id: "calendar",
    ismailsent: false,
    content: "Calendar",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FthreeDsqr.PNG?alt=media&token=89f9386d-931d-4642-a744-761ef2b97f2d",
  },
  {
    id: "threedcarousel",
    ismailsent: false,
    content: "3D Carousel",
    url: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60_0gL8ZRN3M91p7rKmcrV8mU_hL3bbejKA&usqp=CAU",
  },
  {
    id: "honeycomb",
    ismailsent: false,
    content: "Honey Comb ",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FAnimatedFrames.PNG?alt=media&token=349119f7-5722-4887-8bd7-c4586f916f94",
  },
  {
    id: "journey",
    ismailsent: false,
    content: "Journey",
    url: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBz4nl3tuB44qN7Y6k4Kl-N4bf2M9ZX7CPUg&usqp=CAU",
  },
  {
    id: "swatchbook",
    ismailsent: false,
    content: "Swatch Book",
    url: "",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBz4nl3tuB44qN7Y6k4Kl-N4bf2M9ZX7CPUg&usqp=CAU",
  },
  {
    id: "puzzle",
    ismailsent: false,
    content: "Slide Puzzle",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Ftom-and-jerry-hd-background.jpg?alt=media&token=a5fb8323-7899-46d7-8119-16b69e1e2531",
  },
  {
    id: "specialcard",
    ismailsent: false,
    content: "Special Card",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FSpecialCard.PNG?alt=media&token=1fdfb6d2-3bcd-42e7-b10c-4537a10b914a",
  },
  {
    id: "animatedframe",
    ismailsent: false,
    content: "Animated Frame ",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FAnimatedFrames.PNG?alt=media&token=349119f7-5722-4887-8bd7-c4586f916f94",
  },
  {
    id: "threedimage",
    ismailsent: false,
    content: "3D Image",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FthreeDsqr.PNG?alt=media&token=89f9386d-931d-4642-a744-761ef2b97f2d",
  },
  {
    id: "greetingcard",
    ismailsent: false,
    content: "Greeting Card",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FGreeting.PNG?alt=media&token=6ee929be-de78-4b21-a046-ed716c52b8da",
  },
  {
    id: "cubes",
    ismailsent: false,
    content: " 3D Heart",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FCubessqare.PNG?alt=media&token=5d65ad64-985a-4335-9274-da1fdc115f5e",
  },
  {
    id: "memorygame",
    ismailsent: false,
    content: "Memory Game",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fmemo.PNG?alt=media&token=beeb8d64-7501-4051-91e9-d15ba8977de4",
  },
  {
    id: "collage",
    ismailsent: false,
    content: "Collage",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FcollagePNG.PNG?alt=media&token=145fccf1-8bc0-4615-9ebf-8dc87fdfcae0",
  },
  {
    id: "newspaper",
    ismailsent: false,
    content: "NewsPaper",
    url: "",
    img:
      "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fpersonalisednewspapersq-9918857eg.jpg?alt=media&token=48bf0687-fa71-471d-acc3-207f346dd1b9",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 250,
    height: 280,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function TransferList({ setpackfunc }) {
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState(allComp);
  const [right, setRight] = useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);
  useEffect(() => {
    setpackfunc(right);
  }, [right]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.id} />
              <img style={{ width: "50px" }} src={value.img} alt={value.id} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>{customList("Gifts", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList("Chosen", right)}</Grid>
    </Grid>
  );
}
