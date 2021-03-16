import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { RadialBarChart, RadialBar } from 'recharts';
import { Button, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStyles } from './stytle';
const data = [
  {
    name: 'singleCity',
    uv: 10.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

const Single = ({ cities }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.singleCityCard}>
        <CardContent className={classes.singleCardContent}>
          <div className={classes.chartContainer}>
            <RadialBarChart
              width={200}
              height={200}
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
            <Typography
              variant='subtitle1'
              className={classes.singleCityHeader}
            >
              Moderate Air Quality
            </Typography>
            <Typography variant='h3' className={classes.singleCityValue}>
              120
            </Typography>
          </div>
          <div>
            <Button
              variant='contained'
              size='large'
              className={classes.buttonLight}
              endIcon={<ExpandMoreIcon />}
            >
              BOMBAY(IN)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Single;
