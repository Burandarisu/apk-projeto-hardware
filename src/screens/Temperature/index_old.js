import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

// Styles
import {Body, ContainerCalendar, PageName} from '../../components/ui';

// Components
import Chart from '../../components/Chart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <Body alignToCenter>
        <ContainerCalendar>
          <CalendarPicker
            onDateChange={this.onDateChange}
            width={Dimensions.get('window').width}
            showDayStragglers
            scrollable
          />
        </ContainerCalendar>
        <Text>SELECTED DATE:{startDate}</Text>
      </Body>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});
