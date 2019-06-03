# react-native-serious-nav
Sample application to learn navigation patterns based on [this article](https://medium.com/react-native-training/react-native-navigation-v2-by-wix-getting-started-7d647e944132)

### Architecture
```
                            /-> Home Page <-> Details
Landing ->(is_valid_user?)--       
                            \-> SignUp/SignIn Tabs -> Home Page
```
### Topics covered
- [react-native-navigation](https://wix.github.io/react-native-navigation/#/)
- [react-native-community/async-storage](https://github.com/react-native-community/react-native-async-storage)

### TODO
- [x] Bottom Tab
- [x] Stack Navigation - Push|Pop
- [ ] Navigation Drawer
- [ ] Navigation from list item.
- [ ] Jest

### IMPORTANT
- Tested only on Android (For iOS, manually link native-navigation and async-storage libraries)
- Since I'm using `react-native-navigation` instead of  traditional navigation library, `react-native link <xyz-framework>` **won't work as expected. Instead you should check or manually link** 3rd party libs/frameworks.