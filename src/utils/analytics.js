// eslint-disable-next-line import/no-extraneous-dependencies
import ReactGA from "react-ga";
import { GOOGLE_ANALITICS_KEY } from "./key";

ReactGA.initialize("UA-000000-01");
ReactGA.pageview(window.location.pathname + window.location.search);

export const initGA = () => {
  ReactGA.initialize(GOOGLE_ANALITICS_KEY);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
