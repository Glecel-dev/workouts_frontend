import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function BottomTabs({ icons }) {
  const [activeTab, setActiveTab] = useState("Home");
  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[styles.icon]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    zIndex: 999,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderRadius: 4,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    paddingTop: 10,
    alignItems: "center",
    paddingHorizontal: 50,
  },
  icon: {
    width: 32,
    height: 33,
  },
  Add: {
    borderColor: "#fff",
    paddingVertical: 15,
    width: 50,
    height: 50,
  },
});
