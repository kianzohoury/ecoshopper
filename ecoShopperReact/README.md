# ecoShopper React Native App

## Installation and Running

Note: It might be a bit complicated to set up the environment. You can jump to [Use the React Native Web Console](#use-the-react-native-web-console) section below if you don't want to install.

First, make sure you have `npm` installed. Follow the guide here: [node.js Download](https://nodejs.org/en/download/)

cd into the `ecoShopperReact` folder. 

Run: 
```
npm install -g expo-cli
expo install
expo start
```

Then the Expo developer tools should be opened in your browser window. 

Click "Run in web browser" will open a new tab. Press F12 (open Chrome/Firefox developer tools) and change your device by click on the drop down on the top bar. For now we'll choose iPhone X. 

You can also run the app on your phone by downloading [Expo Go app](https://expo.dev/tools#client) on your phone. After that, scan the QR code in your phone camera app if you're on iOS, or scan directly in the Expo Go app on Android. 

## Creating a Component

Important resources: 
- [React Native Components](https://reactnative.dev/docs/components-and-apis)
- [React Fundamentals](https://reactnative.dev/docs/intro-react)

### Use the React Native Web Console

Open this demo: https://snack.expo.dev/@evelynluw/hello-world and follow the comment text there. You can add html code or use React Native components. 

Note that the way css works in React Native is just a bit different, we can't use external css files but we just add the css directly in the same file. CSS converts very easily to the Javascript syntax React uses. You'll find out once you see the code.

### Adding the Component into the Codebase

Components are stored under `ecoShopperReact/components`. 

You can create a .tsx file and copy paste what you wrote on the web demo. After that, please rename the function name to the name of the component and remove `default` in the `export` line. 

### Using the Component on a Screen/Page

The screens are stored under `ecoShopperReact/screens`. 

First import the component: 
```typescript
import { BlackButton } from '../components/BlackButton';
```
Then add the component in the tsx (react's flavor of html) being returned by the page:

```typescript
      <BlackButton onPress={() => { console.log(`button pressed`);}} text='Next >' />
```
