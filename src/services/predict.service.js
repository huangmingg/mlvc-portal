import axios from 'axios';

const getFunction = async () => {
  const res = await axios.get('https://mlvc-service.herokuapp.com/predict/');
  console.log(res);
  return res;
};

export { getFunction };

