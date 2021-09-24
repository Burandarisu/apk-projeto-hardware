// Imports
import React, {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, StyleSheet, Appearance} from 'react-native';
import {getMeasure} from '../../services/api/measure';

// Styles
import {
  Body,
  ScrollBody,
  ComponentHolder,
  Loader,
  PageName,
} from '../../components/ui';

// Components
import Chart from '../../components/Chart';
import Calendar from '../../components/Calendar';

export default function TemperatureScreen() {
  const [data, setData] = useState({data: [], labels: []});
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState();

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      getMeasure(false)
        .then(res => {
          const data = res.data.reduce(
            (acc, item, id) => {
              acc.data.push(item.humidity);
              const created_at = new Date(item.created_at);
              acc.labels.push(
                `${created_at.getHours()}:${created_at.getMinutes()}`,
              );
              return acc;
            },
            {data: [], labels: []},
          );
          setData(data);
        })
        .catch(err => Alert.alert('Erro:', err.message || 'Ocorreu um erro!'))
        .finally(() => setLoading(false));
    }, []),
  );

  useEffect(() => {
    setTheme(Appearance.getColorScheme());
    Appearance.addChangeListener(onThemeChange);

    return () => Appearance.removeChangeListener(onThemeChange);
  }, []);

  const onThemeChange = ({colorScheme}) => {
    setTheme(colorScheme);
  };

  console.log(theme);

  return (
    <Body alignToCenter>
      <Loader loading={loading} />
      <PageName name="Umidade" />
      <Calendar />
      <Chart data={data} color={theme} />
      {/* <ScrollBody horizontal style={{height: '0%'}}></ScrollBody> */}
    </Body>
  );
}
