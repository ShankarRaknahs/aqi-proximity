import React from 'react';

import { io } from 'socket.io-client';
import { APP } from '../config/app.config';

export const socket = io.connect(APP.SOCKET_SERVER_URL, {
  transports: ['websocket'],
  reconnect: true,
});
export const SocketContext = React.createContext();
