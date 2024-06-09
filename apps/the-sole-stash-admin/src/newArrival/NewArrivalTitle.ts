import { NewArrival as TNewArrival } from "../api/newArrival/NewArrival";

export const NEWARRIVAL_TITLE_FIELD = "id";

export const NewArrivalTitle = (record: TNewArrival): string => {
  return record.id?.toString() || String(record.id);
};
