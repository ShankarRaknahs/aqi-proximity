import { useStyles } from '../../styles/styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Air Quality Index app coding challenge</h1>
    </div>
  );
};

export default App;
