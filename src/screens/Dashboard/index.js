// Imports
import React from 'react';
import {Text, StyleSheet, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {getMeasure} from '../../services/api/measure';

// Styles
import {Body, InformationCard, Loader, PageName} from '../../components/ui';

export default function DashboardScreen() {
  const [temperature, setTemperature] = React.useState(0);
  const [humidity, setHumidity] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      getMeasure()
        .then(res => {
          setTemperature(res.data[0].temperature);
          setHumidity(res.data[0].humidity);
        })
        .catch(err => Alert.alert('Erro:', err.message || 'Ocorreu um erro!'))
        .finally(() => setLoading(false));
    }, []),
  );

  return (
    <Body alignToCenter>
      <Loader loading={loading} />
      <PageName name="Dashboard" />
      <InformationCard
        title="Temperatura"
        iconName="temperature-low"
        value={`${temperature}ºC`}
      />
      <InformationCard title="Umidade" iconName="tint" value={`${humidity}%`} />
    </Body>
  );
}
