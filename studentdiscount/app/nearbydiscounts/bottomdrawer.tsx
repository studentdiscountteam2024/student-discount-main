import React, { useRef } from 'react';
import { 
  Animated, 
  Dimensions, 
  GestureResponderEvent, 
  PanResponder, 
  PanResponderGestureState, 
  View 
} from 'react-native';
import styled from 'styled-components/native'; // Ensure styled-components/native is installed



// export const animateMove = (
//     y: Animated.Value,
//     toValue: number | Animated.Value,
//     callback?: any,
//   ) => {
//     Animated.spring(y, {
//       toValue: -toValue,
//       tension: 20,
//       useNativeDriver: true,
//     }).start((finished) => {
//   /* Optional: But the purpose is to call this after the the animation has finished. Eg. Fire an event that will be listened to by the parent component */
//       finished && callback && callback();
//     });
//   };
  
//   export const getNextState = (
//     currentState: DrawerState,
//     val: number,
//     margin: number,
//   ): DrawerState => {
//     switch (currentState) {
//       case DrawerState.Peek:
//         return val >= currentState + margin
//           ? DrawerState.Open
//           : val <= DrawerState.Peek - margin
//           ? DrawerState.Closed
//           : DrawerState.Peek;
//       case DrawerState.Open:
//         return val >= currentState
//           ? DrawerState.Open
//           : val <= DrawerState.Peek
//           ? DrawerState.Closed
//           : DrawerState.Peek;
//       case DrawerState.Closed:
//         return val >= currentState + margin
//           ? val <= DrawerState.Peek + margin
//             ? DrawerState.Peek
//             : DrawerState.Open
//           : DrawerState.Closed;
//       default:
//         return currentState;
//     }
//   };

const { height } = Dimensions.get('window');
export enum DrawerState {
  Open = height - 230,
  Peek = 230,
  Closed = 0,
}
export const HorizontalLine = styled(View)`
  margin: 25px 0px 15px 0px;
  height: 1px;
  width: 100%;
  background-color: #D3D3D3
`;

export const animateMove = (
  y: Animated.Value,
  toValue: number | Animated.Value,
  callback?: any,
) => {
  Animated.spring(y, {
    toValue: -toValue,
    tension: 20,
    useNativeDriver: true,
  }).start((finished) => {
/* Optional: But the purpose is to call this after the the animation has finished. Eg. Fire an event that will be listened to by the parent component */
    finished && callback && callback();
  });
};

export const getNextState = (
  currentState: DrawerState,
  val: number,
  margin: number,
): DrawerState => {
  switch (currentState) {
    case DrawerState.Peek:
      return val >= currentState + margin
        ? DrawerState.Open
        : val <= DrawerState.Peek - margin
        ? DrawerState.Closed
        : DrawerState.Peek;
    case DrawerState.Open:
      return val >= currentState
        ? DrawerState.Open
        : val <= DrawerState.Peek
        ? DrawerState.Closed
        : DrawerState.Peek;
    case DrawerState.Closed:
      return val >= currentState + margin
        ? val <= DrawerState.Peek + margin
          ? DrawerState.Peek
          : DrawerState.Open
        : DrawerState.Closed;
    default:
      return currentState;
  }
};
interface BottomDrawerProps {
    children?: React.ReactNode;
    onDrawerStateChange: (nextState: DrawerState) => void;
  }
  
  const BottomDrawer: React.FunctionComponent<BottomDrawerProps> = ({
    children,
    onDrawerStateChange,
  }) => {
    const { height } = Dimensions.get('window');
    const y = React.useRef(new Animated.Value(DrawerState.Closed)).current;
    const state = React.useRef(new Animated.Value(DrawerState.Closed)).current;
    const margin = 0.05 * height;
    const movementValue = (moveY: number) => height - moveY;
  
    const onPanResponderMove = (
      _: GestureResponderEvent,
      { moveY }: PanResponderGestureState,
    ) => {
      const val = movementValue(moveY);
      animateMove(y, val);
    };
  
    const onPanResponderRelease = (
      _: GestureResponderEvent,
      { moveY }: PanResponderGestureState,
    ) => {
      const valueToMove = movementValue(moveY);
      const nextState = getNextState(state._Value, valueToMove, margin);
      state.setValue(nextState);
      animateMove(y, nextState, onDrawerStateChange(nextState));
    };
    const onMoveShouldSetPanResponder = (
      _: GestureResponderEvent,
      { dy }: PanResponderGestureState,
    ) => Math.abs(dy) >= 10;
  
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder,
        onStartShouldSetPanResponderCapture: onMoveShouldSetPanResponder,
        onPanResponderMove,
        onPanResponderRelease,
      }),
    ).current;
  
    return (
      <Animated.View
        style={[
          {
            width: '100%',
            height: height,
            backgroundColor: '#fff',
            borderRadius: 25,
            position: 'absolute',
            bottom: -height + 30,
            transform: [{ translateY: y }],
          },
        ]}
        {...panResponder.panHandlers}>
        <HorizontalLine />
        {children}
      </Animated.View>
    );
  };
  
  export default BottomDrawer;

