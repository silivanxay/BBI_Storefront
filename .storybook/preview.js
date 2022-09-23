// Import the global style enabling tailwind classes
import '../styles/globals.css'
import { getAxios } from '../utils/get-axios';
import withAxiosDecorator from 'storybook-axios';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}


export const decorators = [withAxiosDecorator(getAxios())];