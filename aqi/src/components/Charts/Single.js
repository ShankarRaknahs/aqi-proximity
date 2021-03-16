import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { RadialBarChart, RadialBar } from 'recharts';
import { Typography } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useStyles } from './stytle';
const data = [
  {
    name: 'singleCity',
    uv: 10,
    fill: '#ffc658',
  },
  {
    name: 'singleCity',
    uv: 10,
    fill: '#000000',
  },
];

const Single = ({ cities }) => {
  const classes = useStyles();

  // const [name, setName] = React.useState(cities[0].city);
  const [activeCity, setActiveCity] = React.useState(cities[0]);

  const handleChange = (event) => {
    // setName(event.target.value);
    setActiveCity(event.target.value);
  };

  return (
    <div>
      <Card className={classes.singleCityCard}>
        <CardContent className={classes.singleCardContent}>
          <div className={classes.chartContainer}>
            <RadialBarChart
              width={320}
              height={320}
              innerRadius='80%'
              outerRadius='100%'
              data={data}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                minAngle={50}
                label={{ fill: '#000000', position: 'insideStart' }}
                background
                clockWise={true}
                dataKey='uv'
              />
            </RadialBarChart>

            <Typography variant='h2' className={classes.singleCityValue}>
              {Math.round(activeCity.aqi * 100 + Number.EPSILON) / 100}
            </Typography>
            <Typography
              variant='subtitle1'
              className={classes.singleCityHeader}
            >
              Moderate Air Quality
            </Typography>
          </div>
          <div>
            <FormControl variant='outlined' className={classes.buttonLight}>
              <Select
                native
                value={activeCity.city}
                onChange={handleChange}
                inputProps={{
                  name: 'City',
                  id: 'active-city',
                }}
              >
                {cities.map((city) => {
                  return <option value={city}>{city.city}</option>;
                })}
              </Select>
            </FormControl>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Single;
