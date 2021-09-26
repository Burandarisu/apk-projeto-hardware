// Imports
import React from 'react';
import {LineChart} from 'react-native-chart-kit';

export default function Chart({data: {data, labels}, color, yFormat}) {
  if (!data?.length || !labels?.length) {
    return null;
  }

  if (data.length === 0 || labels.length === 0) {
    return null;
  }

  const colorSchema = color;

  return (
    <LineChart
      data={{
        labels: [],
        datasets: [
          {
            data,
          },
        ],
      }}
      formatYLabel={_value => {
        if (yFormat) {
          return yFormat(_value);
        }
        return _value;
      }}
      width={300}
      height={250}
      yAxisInterval={1} // optional, defaults to 1
      fromZero
      withDots
      withShadow={false}
      chartConfig={{
        strokeWidth: 10,
        backgroundGradientFrom:
          colorSchema === 'dark' ? 'rgb(30,30,30)' : 'white',
        backgroundGradientTo:
          colorSchema === 'dark' ? 'rgb(30,30,30)' : 'white',
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 1) =>
          colorSchema === 'dark'
            ? `rgba(255, 255, 255, ${opacity})`
            : `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) =>
          colorSchema === 'dark'
            ? `rgba(255, 255, 255, ${opacity})`
            : `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 7,
        },
        propsForBackgroundLines: {
          strokeWidth: 0,
          r: 2,
        },
        propsForDots: {
          r: 4,
          strokeWidth: 1,
          stroke: 'limegreen',
        },
      }}
      style={{
        marginVertical: 26,
        borderRadius: 7,
      }}
    />
  );
}
