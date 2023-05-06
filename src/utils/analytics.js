/* eslint-disable import/no-extraneous-dependencies */
import { createLogger } from "redux-logger";
import { initialize } from "react-ga4";
import { GOOGLE_ANALITICS_KEY } from "./key";

export const GA_ID = GOOGLE_ANALITICS_KEY;

export const logger = createLogger({
  collapsed: true,
});

export const initGA = () => {
  initialize(GA_ID);
};

export const logPageView = () => {
  window.gtag("config", GA_ID, {
    page_path: window.location.pathname,
  });
};
