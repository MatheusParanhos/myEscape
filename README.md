my escape app currently under development with react-native.

showcase: https://youtu.be/_Fuckq6n98Q

To run this project clone, yarn it and react-native link
thanks!

OBS: After I've added `react-native-scrollable-tab-view` to the project, there is a small
bug on this package after react-native upgraded. So in order to run this project you will
have to go to node_modules/react-native-scrollable-tab-view/SceneComponent.js and take the trailing commas out. This issue is probably going to be fixed soon on the `npm package` Thanks! 


* Front-end Project Roadmap

- Refactor code/detatch some (junk code) logic from certain components
- Apply Render props approach to certain components
- Create unit testings 

When backend is setup

- Add Apollo client for graphql
- Add Authentication
- Update data fetching in Attractions and Stayings
- Create Rides service


* Back-end Project Roadmap
- Create dockerized typescript-node backend -DONE-
- Setup local environment -DONE-
- Integrate with cicle ci -DONE-
- Deploy to EC2 instance running with docker
- Integrate with circle ci for full production deployment 

