import { Avatar, CardContent, CardHeader, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useStyles } from './stytle';

const Live = ({ cities }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.liveDataCard}>
        <CardContent className={classes.liveCardContent}>
          <div>
            <Typography variant='subtitle1' className={classes.headerLight}>
              Recent updates
            </Typography>
          </div>
          <div className={classes.columnContainer}>
            {cities.map((city) => {
              return (
                <Avatar className={classes.liveData}>
                  <Typography variant='subtitle2' className={classes.header}>
                    {city.city}
                  </Typography>
                  <Typography variant='subtitle2' className={classes.header}>
                    {Math.round(city.aqi * 100 + Number.EPSILON) / 100}
                  </Typography>
                </Avatar>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Live;
