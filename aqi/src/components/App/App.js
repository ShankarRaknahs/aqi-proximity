import { useStyles } from '../../styles/styles';
import Home from '../../pages/home/Home';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Home />
    </div>
  );
};

export default App;
