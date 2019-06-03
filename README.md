# react-native-serious-nav
Sample application to learn navigation patterns based on [this article](https://medium.com/react-native-training/react-native-navigation-v2-by-wix-getting-started-7d647e944132)

### Architecture
```
                            /-> Home Page 
Landing ->(is_valid_user?)-- 
                            \-> SignUp/SignIn Tabs
```
### Topics covered
- react-native-navigation
- @react-native-community/async-storage

### TODO
- [x] Bottom Tab
- [x] Stack Navigation - Push|Pop
- [] Navigation Drawer
- [] Navigation from list item.
- [] Jest

### IMPORTANT
- Tested only on Android (For iOS, manually link native-navigation and async-storage libraries)
- Since I'm using native-navigation instead of the traditional navigation library, `react-native link <xyz-framework>` won't work as expected. You will have to manually link those dependencies 