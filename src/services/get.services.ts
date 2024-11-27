import axios from "axios";
import { ExchangeRate } from "./types";

const APP_ID = "ae84940ca9dd46a5bb0a7a48251cacba";
const SOURCE = "https://openexchangerates.org/api/";

export const fetchUSDILSExchangeRate: (
  date: Date
) => Promise<ExchangeRate> = async (date: Date) => {
  try {
    const formatedDate = date.toISOString().split("T")[0];

    const data = await axios
      .get(
        `${SOURCE}historical/${formatedDate}.json?app_id=${APP_ID}&symbols=USD,ILS`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
