import axios from 'axios';
import { mlvcServiceEndpoint } from '../environments/environment.default';
import { store } from '@/stores';

const company_endpoint = `${mlvcServiceEndpoint}/company`;

const getCompany = async (id, saveState = true) => 
{
  const request = await axios.get(`${company_endpoint}/${id}`);
  if (request.status === 200)
  {
    const company = request.data;
    saveState ? await store.dispatch('updateCurrentCompany', company) : null;  
    return company;
  } else 
  {
    throw new ErrorEvent('Failed to fetch companies');
  }
};

const getCompanies = async (page, rowCount, orderBy, is_descending, saveState = true) => 
{
  const request = await axios.get(company_endpoint, 
    { 
      params: 
        { 
          page: page, 
          row_count: rowCount, 
          order_by: orderBy, 
          is_descending: is_descending, 
        }, 
    });
  if (request.status === 200)
  {
    const companies = request.data;
    saveState ? await store.dispatch('updateCompanyList', companies) : null;  
    return companies;
  } else 
  {
    throw new ErrorEvent('Failed to fetch companies');
  }
};

export { 
  getCompany,
  getCompanies,
};

