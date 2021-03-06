export const wsConnect = () => ({type: "WS_CONNECT"});
export const wsConnected = () => ({type: "WS_CONNECTED"});
export const wsDisconnected = () => ({type: "WS_DISCONNECTED"});
export const onMessage = message => ({type: "ON_MESSAGE", message});

const websocketInitialState = {
  disconnects: 0
};

export const websocketReducer = (state = {...websocketInitialState}, action) => {
  switch(action.type) {
    case "WS_CONNECTED":
      return {...state, connected: true};

    case "WS_DISCONNECTED":
      return {...state, connected: false, disconnects: state.disconnects + 1};

    default:
      return state;
  }
};