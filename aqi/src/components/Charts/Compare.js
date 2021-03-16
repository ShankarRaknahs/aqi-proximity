import {
  Avatar,
  Button,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useStyles } from './stytle';
import Paper from '@material-ui/core/Paper';

import { APP } from '../../config/app.config';

const CityCard = ({ name, aqi, color, time }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cityCard}>
      <CardContent>
        <div className={classes.columnContainer}>
          <div>
            <Typography variant='h4' style={{ color: color }}>
              {aqi}
            </Typography>
          </div>
          <div>
            <Typography variant='subtitle2' noWrap className={classes.cityName}>
              {name}
            </Typography>
            <Typography variant='body1' noWrap className={classes.time}>
              {time}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Compare = ({ cities }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.compareDataCard}>
        <CardContent className={classes.compareData}>
          {APP.CATEGORIES.map((category) => {
            return (
              <div key={category.name}>
                <Button size='large' className={classes.categoryData}>
                  <div style={{ color: category.color }}>
                    <Typography variant='subtitle2' className={classes.bold}>
                      {category.name} ({category.startRange}-{category.endRange}
                      )
                    </Typography>
                  </div>
                </Button>
                {cities.map((city) => {
                  const __aqi = Math.round(city.aqi);
                  return (
                    <div key={city.city}>
                      {__aqi >= category.startRange &&
                      __aqi <= category.endRange ? (
                        <CityCard
                          name={city.city}
                          aqi={__aqi}
                          color={category.color}
                          time={city.lu}
                        />
                      ) : (
                        <div></div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Compare;
