// Imports
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  PageName,
  MySwitch,
  TextInputCard,
  ScrollBody,
  HeaderCard,
  Loader,
} from '../../components/ui';

// Styles
import {Body} from '../../components/ui';

// API
import {getConfig, saveConfig} from '../../services/api/config';

export default function SettingsScreen() {
  const [automatic, setAutomatic] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('25');

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      getConfig()
        .then(({data: [{automatic, state, temperature}]}) => {
          setAutomatic(automatic);
          setOpen(state);
          setInputValue(temperature.toString().replace('.', ','));
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }, []),
  );

  const validateInput = value => {
    if (value.length >= 3) {
      return;
    }

    value = parseInt(value, 10);
    if (isNaN(value)) {
      value = 0;
    }
    setInputValue(value.toString());
  };

  const save = async () => {
    try {
      setLoading(true);
      await saveConfig(automatic, parseInt(inputValue, 10), open);
    } catch (e) {
      Alert.alert('Erro', e.message);
    }
    setLoading(false);
  };

  return (
    <Body alignToCenter>
      <PageName name="Configuração" />
      <Loader loading={loading} />
      <ScrollBody contentContainerStyle={{marginLeft: 85}}>
        <MySwitch
          title="Modo Automático"
          value={automatic}
          onChange={() => setAutomatic(!automatic)}
        />
        {!automatic ? (
          <MySwitch
            title="Janela: Aberta/Fechada"
            value={open}
            onChange={() => setOpen(!open)}
          />
        ) : (
          <TextInputCard
            title="Temperatura Nominal"
            value={inputValue}
            onChange={validateInput}
          />
        )}
        <TouchableOpacity
          onPress={save}
          style={{
            width: '70%',
            borderRadius: 10,
            marginTop: 50,
            height: 50,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <HeaderCard style={{color: 'white'}}>Salvar</HeaderCard>
        </TouchableOpacity>
      </ScrollBody>
    </Body>
  );
}
