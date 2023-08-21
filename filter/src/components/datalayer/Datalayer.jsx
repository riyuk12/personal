import React from "react";
import { createContext,useContext,useReducer } from "react";

const initialData={
    user: {
      token:null,
      basicProfile: {
        username: "",
        fullName: "",
        profilePicture: "",
        bio: "",
        website:"" 
      },
      socialConnections: {
        followers: [],
        following: [],
        mutualConnections: []
      },
      postsAndMedia: {
        uploadedMedia: [],
        captions: [],
        locationTags: [],
        hashtags: [],
        timestamps: []
      },
      interactions: {
        likes: [],
        comments: [],
        savedPosts: [],
        sharedPosts: [],
        views: []
      },
      directMessaging: {
        conversations: [],
        messages: []
      },
      settingsAndPreferences: {
        privacySettings: {
          accountVisibility: "public",
          comments: "everyone"
        },
        notificationPreferences: [],
        accountSettings: {
          language: "English",
          deactivation: false
        }
      },
      exploreAndDiscover: {
        exploreHistory: [],
        suggestedUsers: []
      },
      analyticsAndInsights: {
        engagementMetrics: {
          followers: 0,
          following: 0,
          likes: 0,
          comments: 0
        },
        growthTrends: []
      },
      additionalInformation: {
        linkedAccounts: [],
        businessInfo: {}
      }
    }
  };


  const reducer =(state,action)=>{
        //for debugging
        console.log(action)
        //main if else

        //action ->type,[payload]
        switch(action.type){
          case 'SET_USER':
            return{
              ...state,
              user:action.user
            } 
        }
    }

  const dataLayerContext=createContext();

  export const DataLayer=({children})=>(
    <dataLayerContext.Provider value={useReducer(reducer,initialData)}>
        {children}
    </dataLayerContext.Provider>
  )
 

  export const useDataLayerValue=()=>useContext(dataLayerContext);