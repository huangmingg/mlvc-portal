import axios from 'axios';
import { mlvcServiceEndpoint } from '@/environments/environment.default';
import { camelToUnderscore, toCamel } from './utility.service';
import { store } from '@/stores';

const predictEndpoint = `${mlvcServiceEndpoint}/predict`;

const formatDataToBody = (data) => 
{
  const body = {};
  for (const [key, value] of Object.entries(data))
  {
    body[camelToUnderscore(key)] = value;
  }
  return body;
};

const postPrediction = async (obj, saveState = true) => 
{
  const body = formatDataToBody(obj);
  const response = await axios.post(`${predictEndpoint}/`, body);
  if (response.status === 200)
  {
    const result = toCamel(response.data);
    saveState ? await store.dispatch('updatePrediction', result) : null;
    console.log(result);
    return result;
  } else 
  {
    throw new ErrorEvent('Failed to post prediction');
  }
};

export { 
  postPrediction,
};

