import React, {Component} from 'react';
import {PanResponder, View, Dimensions} from 'react-native';
import Svg, {
  Path,
  Circle,
  G,
  Text,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {BLACK, WHITE} from '../styles/colors';

export default class CircleSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: this.props.value,
      xCenter: 0,
      yCenter: 0,
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gs) => true,
      onStartShouldSetPanResponderCapture: (e, gs) => true,
      onMoveShouldSetPanResponder: (e, gs) => true,
      onMoveShouldSetPanResponderCapture: (e, gs) => true,
      onPanResponderMove: (e, gs) => {
        let xOrigin =
          this.state.xCenter - (this.props.dialRadius + this.props.btnRadius);
        let yOrigin =
          this.state.yCenter - (this.props.dialRadius + this.props.btnRadius);
        let a = this.cartesianToPolar(gs.moveX - xOrigin, gs.moveY - yOrigin);
        this.setState({angle: a > 180 ? 180 : a});
      },
    });
  }

  polarToCartesian(angle) {
    if (angle > 180) {
      angle = 180;
    }
    let r = this.props.dialRadius;
    let hC = this.props.dialRadius + this.props.btnRadius;
    let a = ((angle - 180) * Math.PI) / 180.0;

    let x = hC + r * Math.cos(a);
    let y = hC + r * Math.sin(a);
    return {x, y};
  }

  cartesianToPolar(x, y) {
    let hC = this.props.dialRadius + this.props.btnRadius;

    if (x === 0) {
      return y > hC ? 0 : 90;
    } else if (y === 0) {
      return x > hC ? 90 : 180;
    } else {
      return (
        Math.round((Math.atan((y - hC) / (x - hC)) * 180) / Math.PI) +
        (x > hC ? 90 : 180)
      );
    }
  }

  handleMeasure = (ox, oy, width, height, px, py) => {
    this.setState({
      xCenter: px + (this.props.dialRadius + this.props.btnRadius),
      yCenter: py + (this.props.dialRadius + this.props.btnRadius),
    });
  };

  doStuff = () => {
    this.refs.circleslider.measure(this.handleMeasure);
  };

  render() {
    let width = (this.props.dialRadius + this.props.btnRadius) * 2;
    let bR = this.props.btnRadius;
    let dR = this.props.dialRadius;
    let startCoord = this.polarToCartesian(this.props.startCoord);
    let endCoord = this.polarToCartesian(this.state.angle);
    const dashArray = dR * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * this.props.angle) / 100;

    return (
      <View style={{flex: 1}}>
        <Svg
          onLayout={this.doStuff}
          ref="circleslider"
          color={BLACK}
          viewbox="0 0 50 50"
          width={width}
          height={width / 2}>
          <Defs>
            <LinearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor={this.props.startGradient} />
              <Stop offset="100%" stopColor={this.props.endGradient} />
            </LinearGradient>
          </Defs>

          <Circle
            r={dR}
            cx={width / 2}
            cy={width / 2}
            stroke={BLACK}
            strokeWidth={10}
            style={{
              strokeDasharray: '2 10',
            }}
          />
          <Text x={width / 2} y={width / 2} textAnchor="middle">
            {this.props.showValue &&
              this.props.onValueChange(Math.ceil(this.state.angle / 6) + '°') +
                ''}
          </Text>
          <Path
            stroke={BLACK}
            strokeWidth={0}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <G x={endCoord.x - bR} y={endCoord.y - bR}>
            <Circle
              r={bR}
              cx={bR}
              cy={bR}
              fill={BLACK}
              {...this._panResponder.panHandlers}
            />
          </G>
        </Svg>
      </View>
    );
  }
}

CircleSlider.defaultProps = {
  btnRadius: 13,
  dialRadius: 130,
  dialWidth: 25,
  textColor: BLACK,
  textSize: 50,
  value: 0,
  xCenter: Dimensions.get('window').width / 2,
  yCenter: Dimensions.get('window').height / 2,
  showValue: true,
  startGradient: '#12D8FA',
  endGradient: '#A6FFCB',
  backgroundColor: BLACK,
  startCoord: 0,
  onValueChange: x => x,
};
