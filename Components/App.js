import React, {Component} from "react";
import {View} from "react-native";
import {
  StackNavigator,
} from 'react-navigation';

import DanhSach from "./DanhSach.js";
import ChiTiet from "./ChiTiet.js";

export default App = StackNavigator({
  DanhSach: {screen: DanhSach},
  ChiTiet: {screen: ChiTiet},
}, {headerMode:"none"});
