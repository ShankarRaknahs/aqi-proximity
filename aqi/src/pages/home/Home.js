import Layout from '../../components/Layout/Layout';
import { useStyles } from '../../styles/styles';
import React from 'react';
import { SocketContext, socket } from '../../api/socket';
import Single from '../../components/Charts/Single';
import Live from '../../components/Charts/Live';
import Compare from '../../components/Charts/Compare';

const Home = () => {
  const classes = useStyles();
  const cities = [
    {
      city: 'Mumbai',
      aqi: 181.62555547023916,
      lu: `10:30 PM`,
    },
    {
      city: 'Bengaluru',
      aqi: 190.09818064317164,
      lu: `10:30 PM`,
    },
    {
      city: 'Kolkata',
      aqi: 203.34304842576836,
      lu: `10:30 PM`,
    },
    {
      city: 'Bhubaneswar',
      aqi: 98.60712812357924,
      lu: `10:30 PM`,
    },
    {
      city: 'Chennai',
      aqi: 139.87410786909228,
      lu: `10:30 PM`,
    },
    {
      city: 'Pune',
      aqi: 222.41503971752303,
      lu: `10:30 PM`,
    },
    {
      city: 'Jaipur',
      aqi: 143.39592868188456,
      lu: `10:30 PM`,
    },
    {
      city: 'Chandigarh',
      aqi: 45.21123171971676,
      lu: `10:30 PM`,
    },
    {
      city: 'Lucknow',
      aqi: 74.33785689285052,
      lu: `10:30 PM`,
    },
  ];

  return (
    <div>
      <Layout className={classes.root}>
        <SocketContext.Provider value={socket}>
          <div className={classes.container}>
            <Single cities={cities} />
            <Live cities={cities} />
          </div>
          <Compare cities={cities} />
        </SocketContext.Provider>
      </Layout>
    </div>
  );
};

export default Home;
