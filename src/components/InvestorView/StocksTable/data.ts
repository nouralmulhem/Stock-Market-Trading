export function createData(
  symbol: string,
  lastRefreshed: string,
  output: string,
  time: string
) {
  return {
    symbol,
    lastRefreshed,
    output,
    time,
  };
}

export const rows = [
  createData("IBM", "2023-09-13", "Compact", "US/Eastern"),
  createData("FB", "2023-09-14", "Compact", "US/Eastern"),
  createData("MSFT", "2023-09-9", "Compact", "US/Eastern"),
];
