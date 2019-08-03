/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import MyApp from "./MyApp";
import List from "./src/components/List";
import FlatListExample from "./src/components/FlatListExample";
import Touchables from "./src/components/Touchables";

AppRegistry.registerComponent(appName, () => MyApp);
