# REnewtronics

# Authors/Developers: Binh Pham, Alberto Acosta, Hung Nguyen.

![splash-background-demo](App/assets/demo/splash-background-demo.png) ![login-background-demo](App/assets/demo/login-background-demo.png) 
![feed-demo](App/assets/demo/feed-demo.png) ![account-screen-demo](App/assets/demo/account-screen-demo.png)

# About:
This is a matching app where people can do online trading or buy second-hand items from other people. In other words, this app's purpose is similar to OfferUp 
and CragList where users can post their no-longer needed items online for sale and buy second-hand items from other users at a cheaper price. The context purpose of 
the app is to be submitted as a minimum viable product for the school Social Venture Competition. This is our second attempt at designing apps from React Native. 
This app took significant inspiration from Mosh's React Native course online because we expanded our design knowledge based on it.

# Social Media:
Showcases and work progress contents are posted on Instagram, please check out at:
[Link will be updated here later]

# Software:

Visual Studio Code, Expo Go, Postman.

# Functionality:

![login-page-demo](App/assets/demo/login-page-demo.png) ![register-page-demo](App/assets/demo/register-page-demo.png)

1. Signing in (can use FaceID) correctly will pass an encrypted access token to ensure the login process. Implementing Account Registration with specific conditions in each textInput field using Yup.
3. Implementing AsyncStorage and SecureStorage to cache data in the app. More specifically, even when there is no Internet connection, the app will still restore all previous data from the database. Additionally, the app will memorize any state changes and perform necessary actions when there is an Internet connection again. 
4. Simulating sending notification messages to other users. On receiving such messages, one tap on one of those and the app will direct to the message tab. 

![posting-demo](App/assets/demo/posting-demo.png) ![cameraroll-demo](App/assets/demo/cameraroll-demo.png) ![new-listing-demo](App/assets/demo/new-listing-demo.png)

5. The capability of posting a new item with these respective fields, such as title, price, category, and description. Each of these field inputs has its respective condition checks and customizations like numpab-only-keyboard and other features. Furthermore, there is an option to choose and upload images from the camera roll. All this information will be recorded on the Node.js database and shown in the list after reloading.
6. Using a Node.js backend to record all the necessary information.
7. Using Lottie Animation to increase the liveliness of the app during fetching data or uploading data process.
8. Thoughtfully design different modules of components, API, hooks, assets, etc. This ensures the separation of concerns. Specifically, we build and use a lot of custom hooks, text, itemPicker, etc. 

# API Reference Installtion:
[Will add it later]

# Improvements That Could Be Made:

* Make Statusbar more visible depending on the background color.
* Learn Node.js or SQLite more to implement our own customizable back-end, especially implementing our message system or chat log.
* Using API Reference to pinpoint a map location of the user.
* Research and update some old functions that will soon be deprecated.
* Fixing some Keyboard view pop-ups in some places.

# Credit:

- **Binh: Lead Developer/Programmer.**
- **Acosta: Developer, UI Designer.**
- **Hung: UX/UI Designer.**
- **The Back-end that we chose was taken directly from Mosh's Advanced React Native online course:**
**[Code With Mosh](https://codewithmosh.com/p/the-ultimate-react-native-course)**

