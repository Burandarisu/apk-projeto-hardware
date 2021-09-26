// Imports
import React, {useEffect, useState} from 'react';
// import {useFocusEffect} from '@react-navigation/native';
import {Alert, Appearance} from 'react-native';
import {formatISO} from 'date-fns';

// Styles
import {Body, Loader, PageName} from '../../components/ui';

// Components
import Chart from '../../components/Chart';
import Calendar from '../../components/Calendar';
import {getMeasure} from '../../services/api/measure';

export default function TemperatureScreen() {
  const [data, setData] = useState({data: [], labels: []});
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState();

  const search = async date => {
    try {
      date = new Date(date);

      let created_at_begin = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        0,
        0,
        0,
        0,
      );
      let created_at_end = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        23,
        59,
        59,
        0,
      );
      setLoading(true);

      const res = await getMeasure({
        created_at_begin: formatISO(created_at_begin),
        created_at_end: formatISO(created_at_end),
        per_page: 99999,
      });

      const data = res.data.reverse().reduce(
        (acc, item) => {
          acc.data.push(item.temperature);
          const created_at = new Date(item.created_at);
          acc.labels.push(
            `${created_at.getHours()}:${created_at.getMinutes()}`,
          );
          return acc;
        },
        {data: [], labels: []},
      );
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro: ', error.message);
    }
  };

  useEffect(() => {
    setTheme(Appearance.getColorScheme());
    Appearance.addChangeListener(onThemeChange);

    return () => Appearance.removeChangeListener(onThemeChange);
  }, []);

  const onThemeChange = ({colorScheme}) => {
    setTheme(colorScheme);
  };

  return (
    <Body alignToCenter>
      <Loader loading={loading} />
      <PageName name="Temperatura" />
      <Calendar onDate={search} />
      <Chart
        yFormat={value => {
          return `${value} ºC`;
        }}
        data={data}
        color={theme}
      />
    </Body>
  );
}
