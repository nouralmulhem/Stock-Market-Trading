export function fetchStock() {
  // const API_KEY = "251U935GBL43CFJZ";
  // let StockSymbol = "FB";

  // i gave a try to actual apis but they need subscribing
  let API_Call = `http://localhost:8000/daily/`;
  let stockChartXValuesFunction: any = [];
  let stockChartYValuesFunction: any = [];

  fetch(API_Call)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var key in data["Time Series (Daily)"]) {
        stockChartXValuesFunction.push(key);
        // stockChartYValuesFunction.push(
        //   data["Time Series (Daily)"][key]["1. open"]
        // );
      }
      stockChartYValuesFunction = Object.values(
        data["Time Series (Daily)"]
      ).map((entry: any) => entry["1. open"]);
    });

  return [stockChartXValuesFunction, stockChartYValuesFunction];
}
