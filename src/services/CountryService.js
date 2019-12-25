/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import Axios from 'axios';
import { Config } from '../config';

export class CountryService {
  async getAllCountriesFromApi() {
    return Axios.get(`${Config.URL_API}/all/`);
  }
}
