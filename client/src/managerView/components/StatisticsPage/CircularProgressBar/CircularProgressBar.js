import "./CircularProgressBar.css";
import React, { useState, useEffect, useRef } from "react";
import { pie, Pie } from "@visx/shape";
import { Group } from "@visx/group";
// import { Text } from "@visx/text";

import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
} from "react-native";
// import Constants from "expo-constants";
import Svg, { G, Circle, Rect } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

// const coins = [
//   { symbol: "ADA", amount: 200, color: "#0033ad", inUSD: 1.48 },
//   { symbol: "SQL", amount: 5, color: "#00ffbd", inUSD: 37.6 },
// ];
function CircularProgressBar({
  percentage = 75,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = "tomato",
  delay = 100,
  textColor,
  max = 100,
}) {
  const animated = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const inputRef = useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;
  const animation = (toValue) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };

  useEffect(() => {
    animation(percentage);
    animated.addListener(
      (v) => {
        if (circleRef?.current) {
          console.log("In animation:" + circleRef.current.setNativeProps);
          const maxPerc = (100 * v.value) / max;
          const strokeDash = circumference - (circumference * maxPerc) / 100;
          console.log("strokeDash:" + strokeDash);

          circleRef.current.setNativeProps({
            strokeDashoffset: circumference/2,
          });
        }
        if (inputRef?.current) {
          inputRef.current.setNativeProps({
            text: `${Math.round(v.value)}`,
          });
        }
      },
      [max, percentage]
    );

    return () => {
      animated.removeAllListeners();
    };
  }, [max, percentage]);

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            // strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        stroke={color}
        r={radius}
        fill="transparent"
        // strokeDasharray={circumference}
        // strokeDashoffset={circumference}
        // strokeLinecap="round"
        strokeWidth={strokeWidth}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: textColor ?? color },
          styles.text,
        ]}
      />
    </View>
    // const [active, setActive] = useState();

    // const width = 100;
    // const half = width / 2;
    // return (
    //   <div className="circular-progress-bar">
    //     <svg width={width} height={width}>
    //       <Group top={half} left={half}>
    //         <Pie
    //           data={coins}
    //           pieValue={(data) => data.amount * data.inUSD}
    //           outerRadius={half}
    //           innerRadius={({ data }) => {
    //             const size = active && active.symbol == data.symbol ? 12 : 8;
    //             return half - size;
    //           }}
    //           padAngle={0.01}
    //         >
    //           {(pie) => {
    //             return pie.arcs.map((arc) => {
    //               return (
    //                 <g
    //                   key={arc.data.symbol}
    //                   onMouseEnter={() => setActive(arc.data)}
    //                   onMouseLeave={() => setActive(null)}
    //                 >
    //                   <path d={pie.path(arc)} fill={arc.data.color}></path>
    //                 </g>
    //               );
    //             });
    //           }}
    //         </Pie>
    //         {active ? (
    //           <>
    //             <Text textAnchor="middle" fill="#0033ad" fontSize={20} dy={-2}>
    //               {`$${Math.floor(active.amount * active.inUSD)}`}
    //             </Text>
    //             <Text
    //               textAnchor="middle"
    //               fill={active.color}
    //               fontSize={10}
    //               dy={10}
    //             >
    //               {`${active.amount} ${active.symbol}`}
    //             </Text>
    //           </>
    //         ) : (
    //           <></>
    //         )}
    //       </Group>
    //     </svg>
    //   </div>
  );
}

export default CircularProgressBar;

// const CircularProgressBar = ({ progress, text }) => {
//   const strokeDashoffset = 283 - (283 * progress) / 100;
//   return (
//     <div className="circular-progress-bar">
//       <svg className="progress-ring">
//         <circle
//           className="progress-ring-circle"
//           stroke="#F44336"
//           strokeWidth="4"
//           fill="transparent"
//           r="42"
//           cx="50"
//           cy="50"
//         />
//         <circle
//           className="progress-ring-circle progress-ring-circle--background"
//           stroke="#2196F3"
//           strokeWidth="4"
//           fill="transparent"
//           r="42"
//           cx="50"
//           cy="50"
//         />
//         <text className="progress-text" x="50%" y="50%">
//           {text}
//         </text>
//         <text className="progress-percent" x="50%" y="50%">
//           {progress}%
//         </text>
//         <circle
//           className="progress-ring-circle progress-ring-circle--progress"
//           stroke="#F44336"
//           strokeWidth="4"
//           fill="transparent"
//           r="42"
//           cx="50"
//           cy="50"
//           style={{ strokeDashoffset }}
//         />
//       </svg>
//     </div>
//   );
// };

// export default CircularProgressBar;
const styles = StyleSheet.create({
  text: { fontWeight: "900", textAlign: "center" },
});
