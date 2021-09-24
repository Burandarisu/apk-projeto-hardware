// Imports
import React from 'react';
import {LineChart} from 'react-native-chart-kit';

export default function Chart({data: {data, labels}, color}) {
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
        labels,
        datasets: [
          {
            data,
          },
        ],
      }}
      width={300}
      height={250}
      yAxisInterval={1} // optional, defaults to 1
      fromZero
      chartConfig={{
        backgroundColor: '#e26a00',
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
        propsForDots: {
          r: '4',
          strokeWidth: '2',
          stroke: 'limegreen',
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 7,
        // marginLeft: 30,
      }}
    />
  );
}
