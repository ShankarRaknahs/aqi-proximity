import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../config/theme.config';

export const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto',
    backgroundColor: COLORS.SECONDARY,
  },
  grow: {
    flexGrow: 1,
  },
  primaryColor: {
    backgroundColor: COLORS.PRIMARY,
  },
  container: {
    display: 'flex',
    padding: '2vw',
    backgroundColor: COLORS.SECONDARY,
  },
  header: {
    fontWeight: 'bolder',
  },
  headerLight: {
    fontWeight: 'bolder',
    color: COLORS.LIGHT,
  },
  loadContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  },
});
