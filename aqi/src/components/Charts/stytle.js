import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../config/theme.config';

export const useStyles = makeStyles({
  primaryColor: {
    backgroundColor: COLORS.PRIMARY,
  },
  header: {
    fontWeight: 'bolder',
    color: COLORS.GREY,
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
    border: 'none',
    margin: '2vw',
    width: '10vw',
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
    marginTop: '15vh',
    fontWeight: 'bolder',
  },
  singleCityHeader: {
    display: 'flex',
    fontWeight: 'bolder',
    position: 'absolute',
    marginTop: '25vh',
    width: '20vw',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY01,
  },
  liveDataCard: {
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY01,
    marginLeft: '2vw',
  },
  liveData: {
    color: '#f0f0f7',
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
    display: 'flex',
    backgroundColor: COLORS.PRIMARY01,
    marginInline: '4vh',
    borderRadius: 10,
    justifyContent: 'center',
  },
  compareData: {
    display: 'flex',
  },
  categoryData: {
    padding: '1vw',
    width: '14vw',
    height: '1vh',
    backgroundColor: COLORS.PRIMARY01,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 20,
    justifyContent: 'center',
  },
  cityCard: {
    margin: '1vw',
    width: '13vw',
    height: '10vh',
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
  subtitle: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
