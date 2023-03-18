import React, { useState, useEffect } from "react";
import Svg, { G, Circle, Rect } from "react-native-svg";
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
} from "react-native";
import "./CircularProgressBar.css";
function CircularBar({
  size,
  strokeWidth,
  percentage,
  color,
  type,
  delay,
  duration,
  max,
}) {
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const viewBox = `0 0 ${size} ${size}`;
  const radius = size - strokeWidth / 2;
  const halfCircle = radius + strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);
  const dash = (progress * circumference) / 100;
  const circleRef = React.useRef();

  // useEffect(() => {
  //   setProgress(percentage);
  // }, [percentage]);

  const updatePercentage = () => {
    setTimeout(() => {
      setProgress(progress + 1);
    }, 5);
  };

  useEffect(() => {
    if (percentage > 0) updatePercentage();
  }, [percentage]);

  useEffect(() => {
    if (progress < percentage) updatePercentage();
  }, [progress]);

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke="#003D9E"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity={5}
          />
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity={8}
            strokeDasharray={[dash, circumference - dash]}
            strokeDashoffset={`${progress} ${100 - progress}`}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <TextInput
        underlineColorAndroid="transparent"
        editable={true}
        value={`${progress}%`}
        stroke={color}
        r={radius}
        fill="transparent"
        strokeWidth={strokeWidth}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 3, color: color ?? color },
          styles.text,
        ]}
      />
      <TextInput
        // underlineColorAndroid="transparent"
        editable={true}
        value={type}
        stroke={color}
        // r={radius}
        // fill="transparent"
        // strokeWidth={strokeWidth}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 5, color: "#003D9E" ?? color },
          Textstyle.text,
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontWeight: "400",
    textAlign: "center",
    position: "absolute",
    bottom: "25px",
  },
});

const Textstyle = StyleSheet.create({
  text: {
    fontWeight: "500",
    textAlign: "center",
    position: "relative",
    bottom: "7px",
  },
});
export default CircularBar;
