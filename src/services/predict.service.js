import axios from 'axios';
import { mlvcServiceEndpoint } from '@/environments/environment.default';
import { camelToUnderscore } from './utility.service';
import { store } from '@/stores';

const predict_endpoint = `${mlvcServiceEndpoint}/predict`;

const format_data_to_body = (data) => 
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
  const body = format_data_to_body(obj);
  const response = await axios.post(`${predict_endpoint}/`, body);
  if (response.status === 200)
  {
    saveState ? await store.dispatch('updatePrediction', response.data) : null;
    console.log(store.getters.getPrediction);
    return response.data;
  } else 
  {
    throw new ErrorEvent('Failed to post prediction');
  }
};

export { 
  postPrediction,
};

