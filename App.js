import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import FlexDirections from "./src/screens/FlexDirections"
import FlexAlignItem from "./src/screens/FlexAlignItems";
import FlexJustifyContent from "./src/screens/FlexJustifyContent";
import FlexAlignSelf from "./src/screens/FlexAlignSelf";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Dir:FlexDirections,
    Ali:FlexAlignItem,
    Jus:FlexJustifyContent,
    Self:FlexAlignSelf
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Appplicaizone",
    },
  }
);


export default createAppContainer(navigator);
