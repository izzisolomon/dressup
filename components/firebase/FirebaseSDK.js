import React from "react";
import firebase from "react-native-firebase";

export const platform = "Native";
export const auth = firebase.auth();
export const firestore = firebase.firestore();
