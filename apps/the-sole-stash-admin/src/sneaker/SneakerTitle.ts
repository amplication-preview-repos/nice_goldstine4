import { Sneaker as TSneaker } from "../api/sneaker/Sneaker";

export const SNEAKER_TITLE_FIELD = "id";

export const SneakerTitle = (record: TSneaker): string => {
  return record.id?.toString() || String(record.id);
};
