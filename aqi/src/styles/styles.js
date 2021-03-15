import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../config/theme.config';

export const useStyles = makeStyles({
  root: {},
  grow: {
    flexGrow: 1,
  },
  primaryColor: {
    backgroundColor: COLORS.PRIMARY,
  },
});
