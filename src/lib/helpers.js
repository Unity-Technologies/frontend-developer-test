import {SORT_ORDER} from './constants';

export const sortData = (data, order) =>
  [...data].sort((a, b) => order === SORT_ORDER.DESC ? b.timestamp - a.timestamp : a.timestamp - b.timestamp);

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const offsetMs = date.getTimezoneOffset() * 60 * 1000;
  const msLocal =  date.getTime() - offsetMs;
  const dateLocal = new Date(msLocal);
  const iso = dateLocal.toISOString();
  return iso.slice(0, 10);
}
