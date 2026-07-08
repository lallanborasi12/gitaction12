
export const API_URL = process.env.REACT_APP_CALMATE_API_URL;
export const Live_API_URL = process.env.REACT_APP_CALMATE_LIVE_API_URL;
export const Main_URL = process.env.REACT_APP_CALMATE_LIVE_URL;
export const isProduction = window.location.origin === Main_URL ? true : false;
