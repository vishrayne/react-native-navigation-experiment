// @format
// @flow

import { StatusBar } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Home from './home';
import Landing from './landing';
import SignIn from './signin';
import SignUp from './signup';
import Screen2 from './screen2';

export const DUMMY_SCREEN = 'rnnav2.DUMMY';
export const HOME_SCREEN = 'rnnav2.HOME';
export const LANDING_SCREEN = 'rnnav2.LANDING';
export const SIGNIN_SCREEN = 'rnnav2.SIGNIN';
export const SIGNUP_SCREEN = 'rnnav2.SIGNUP';
export const SCREEN2_SCREEN = 'rnnav2.SCREEN2';

// eslint-disable-next-line prettier/prettier
export const Screens = new Map<string, any>();
Screens.set(HOME_SCREEN, Home);
Screens.set(LANDING_SCREEN, Landing);
Screens.set(SIGNIN_SCREEN, SignIn);
Screens.set(SIGNUP_SCREEN, SignUp);
Screens.set(SCREEN2_SCREEN, Screen2);

const goBack = (parentComponentID: number) => {
  Navigation.pop(parentComponentID);
};

const goToScreen2 = (parentComponentID: number) => {
  Navigation.push(parentComponentID, {
    component: {
      name: SCREEN2_SCREEN,
      passProps: {
        goBack: (componentID: number) => goBack(componentID),
      },
    },
  });
};

const goToAuth = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabs',
        children: [
          {
            component: {
              name: SIGNIN_SCREEN,
              passProps: {
                // eslint-disable-next-line no-use-before-define
                goToHome: () => goToHome(),
              },
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign In',
                  // eslint-disable-next-line global-require
                  icon: require('../assets/outline_lock_open_black_18dp.png'),
                },
              },
            },
          },
          {
            component: {
              name: SIGNUP_SCREEN,
              passProps: {
                // eslint-disable-next-line no-use-before-define
                goToHome: () => goToHome(),
              },
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign Up',
                  // eslint-disable-next-line global-require
                  icon: require('../assets/outline_person_add_black_18dp.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
};

const goToHome = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        id: 'Home',
        options: {
          topBar: {
            title: {
              text: 'Home',
            },
          },
        },
        children: [
          {
            component: {
              name: HOME_SCREEN,
              passProps: {
                goToAuth: () => goToAuth(),
                goToScreen2: (componentID: number) => goToScreen2(componentID),
              },
            },
          },
        ],
      },
    },
  });
};

export const startApp = () => {
  StatusBar.setBarStyle('dark-content', true);

  return Navigation.setRoot({
    root: {
      component: {
        name: LANDING_SCREEN,
        passProps: {
          goToAuth: () => goToAuth(),
          goToHome: () => goToHome(),
        },
      },
    },
  });
};
