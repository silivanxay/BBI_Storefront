// Import the global style enabling tailwind classes
import '../styles/globals.css'
import axios from 'axios';
import withAxiosDecorator from 'storybook-axios';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}


const instance = axios.create();
export const getAxios = () => instance;
export const decorators = [withAxiosDecorator(getAxios())];