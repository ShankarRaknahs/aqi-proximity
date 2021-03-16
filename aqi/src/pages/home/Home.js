import Layout from '../../components/Layout/Layout';
import { useStyles } from '../../styles/styles';
import React, { useEffect, useState } from 'react';
import Single from '../../components/Charts/Single';
import Live from '../../components/Charts/Live';
import Compare from '../../components/Charts/Compare';
import { initiateSocket, subscribe } from '../../api/socket';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
  const classes = useStyles();
  const defaultCities = [
    {
      city: 'Mumbai',
      aqi: 381.62555547023916,
      lu: `10:30`,
    },
    {
      city: 'Bengaluru',
      aqi: 490.09818064317164,
      lu: `8:30`,
    },
    {
      city: 'Kolkata',
      aqi: 203.34304842576836,
      lu: `1 hour ago`,
    },
    {
      city: 'Bhubaneswar',
      aqi: 98.60712812357924,
      lu: `2 hours ago`,
    },
    {
      city: 'Chennai',
      aqi: 139.87410786909228,
      lu: `10:30`,
    },
    {
      city: 'Pune',
      aqi: 222.41503971752303,
      lu: `10:30`,
    },
    {
      city: 'Jaipur',
      aqi: 143.39592868188456,
      lu: `10:30`,
    },
    {
      city: 'Chandigarh',
      aqi: 45.21123171971676,
      lu: `10:30`,
    },
    {
      city: 'Lucknow',
      aqi: 74.33785689285052,
      lu: `10:30`,
    },
  ];

  const [cities, setCities] = useState([]);

  const [updatedCities, setUpdatedCities] = useState(defaultCities);

  useEffect(() => {
    initiateSocket();
  }, []);

  useEffect(() => {
    subscribe((error, newMessages) => {
      if (error) return;
      let __cities__ = cities;
      newMessages.map((newMessage) => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        newMessage.lu = `${hours}: ${minutes}`;
        let messageInCities = __cities__.findIndex(
          (city) => city.city === newMessage.city
        );
        messageInCities >= 0
          ? (__cities__[messageInCities] = newMessage)
          : __cities__.push(newMessage);
      });
      setUpdatedCities(newMessages);

      return setCities(__cities__);
    }, []);
  });

  return (
    <div>
      <Layout className={classes.root}>
        {cities.length > 0 ? (
          <>
            <div className={classes.container}>
              <Single cities={cities} />
              <Live cities={cities} />
            </div>
            <Compare cities={cities} />
          </>
        ) : (
          <div className={classes.loadContainer}>
            {' '}
            <CircularProgress disableShrink />
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Home;
