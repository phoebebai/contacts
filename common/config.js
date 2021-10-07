//This class is used to store all url settings
export default class Config {
  static BASE_URL = 'http://localhost:3000';
  static API_URL = this.BASE_URL + '/api';
  static CONTACT_API_URL = this.API_URL + '/contacts';
  static IMAGE_API_URL = this.API_URL + '/images';
}
