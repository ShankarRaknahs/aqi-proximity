import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../config/theme.config';

export const useStyles = makeStyles({
  primaryColor: {
    backgroundColor: COLORS.PRIMARY,
  },
  header: {
    fontWeight: 'bolder',
    color: COLORS.DARK,
  },
  headerLight: {
    fontWeight: 'bolder',
    color: COLORS.LIGHT,
  },
  singleCardContent: {
    display: 'flex',
  },
  buttonLight: {
    backgroundColor: COLORS.SECONDARY,
    fontWeight: 'bolder',
    borderRadius: 10,
    margin: '2vw',
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  singleCityCard: {
    borderRadius: 20,
  },
  singleCityValue: {
    position: 'absolute',
    marginTop: '8vh',
  },
  singleCityHeader: {
    fontWeight: 'bolder',
    position: 'absolute',
    marginTop: '17vh',
  },
  liveDataCard: {
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY01,
    marginLeft: '2vw',
  },
  liveData: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1vw',
    borderRadius: 10,
    padding: '1vw',
    width: '8vw',
  },
  liveCardContent: {
    flexWrap: 'wrap',
  },
  columnContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  compareDataCard: {
    backgroundColor: COLORS.PRIMARY01,
    marginInline: '4vh',
    paddingInline: '1vw',
  },
  compareData: {
    display: 'flex',
    flexDirection: 'row',
  },
  categoryData: {
    padding: '1vw',
    width: '100%',
    backgroundColor: COLORS.PRIMARY01,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
  },
  cityCard: {
    margin: '2vw',
    width: '13vw',
  },
  bold: {
    fontWeight: 'bolder',
  },
  cityName: {
    overflow: 'hidden',
    fontWeight: 'bolder',
    marginLeft: '1vw',
  },
  time: {
    marginLeft: '1vw',
  },
});
