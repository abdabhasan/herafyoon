import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "@/i18n/translationKeys";
// import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

// import mobileAds from "react-native-google-mobile-ads";
import { CustomText } from "@/components/CustomText";

export default function TabLayout() {
  const { t } = useTranslation();

  // useEffect(() => {
  //   mobileAds()
  //     .initialize()
  //     .then(() => {
  //       console.log("AdMob initialized with app ID");
  //     });
  // }, []);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.light.tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: t(TranslationKeys.tabs.profile),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="person.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: t(TranslationKeys.tabs.search),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="magnifyingglass" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: t(TranslationKeys.tabs.home),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
      </Tabs>
      {/* <BannerAd
        unitId={"ca-app-pub-3940256099942544/6300978111"}
        //  unitId={"ca-app-pub-6809262854669948/6215156572"}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
          networkExtras: {
            collapsible: "bottom",
          },
        }}
      /> */}

      <View>
        <CustomText text="ads banner here" type="primarySubtitle" />
      </View>
    </>
  );
}
