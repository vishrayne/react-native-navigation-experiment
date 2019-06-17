# react-native-navigation
Sample application to try out [react-native-navigation](https://wix.github.io/react-native-navigation/#/) library based on [this article](https://medium.com/react-native-training/react-native-navigation-v2-by-wix-getting-started-7d647e944132)

### Architecture
```
                            /-> Home Page <-> Details
Landing ->(is_valid_user?)--       
                            \-> SignUp/SignIn Tabs -> Home Page
```
### TODO
- [x] Bottom Tab
- [x] Stack Navigation - Push|Pop
- [ ] Navigation Drawer
- [ ] Navigation from list item.

### IMPORTANT
- Tested only on Android (For iOS, manually link native-navigation and async-storage libraries)
- Since I'm using `react-native-navigation` instead of the traditional navigation library, I've to heavily mod the android main application class so `react-native link <xyz-framework>` **might not work as expected. Instead you should check or manually link 3rd party libs/frameworks.**

### Useful Links
- [react-native-navigation](https://wix.github.io/react-native-navigation/#/)
- [react-native-community/async-storage](https://github.com/react-native-community/react-native-async-storage)