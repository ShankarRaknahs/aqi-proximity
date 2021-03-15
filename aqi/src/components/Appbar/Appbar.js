import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import IconButton from '@material-ui/core/IconButton';
import Title from '../Title/Title';
import { APP } from '../../config/app.config';
import { useStyles } from '../../styles/styles';

const Appbar = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar variant='dense' className={classes.primaryColor}>
        <Title data={APP.TITLE} />
        <IconButton aria-label='notifications' color='inherit'>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
