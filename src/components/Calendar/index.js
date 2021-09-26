// Imports
import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

// Styles
import {Body, ContainerCalendar} from '../../components/ui';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: new Date(),
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
    this.props.onDate?.(date);
  }
  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <Body alignToCenter>
        <ContainerCalendar>
          <CalendarPicker
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
            weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
            previousTitle="Anterior"
            nextTitle="Próximo"
            onDateChange={this.onDateChange}
            // width={Dimensions.get('window').width}
            width={300}
            height={275}
            showDayStragglers
            scrollable
          />
        </ContainerCalendar>
      </Body>
    );
  }
}
