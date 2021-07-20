import Papa from 'papaparse';

const parseCsv = async () => {
  const res = Papa.parse('../data/company.csv');
  console.log(res);
};
  
export { parseCsv };