import React from "react";

import {
  Button,
  FlatList,
  Platform,
  Text,
  View
} from "react-native";
import { Permissions, Calendar } from "expo";
import moment from "moment";

export default class ReminderSettingsScreen extends React.Component {
  calendarOwner = "ReachOut";
  calendarName = "Breathe";
  calendarId = undefined;

  static navigationOptions = {
    title: "Breathing Intervals"
  };

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  async componentDidMount() {
    const hasAccess = await this.askPermissions();

    if (hasAccess) {
      let calendar = await this.getCalendar();
      this.calendarId = calendar
        ? calendar.id
        : await this.createCalendarAsync();

      this.setState({
        events: await this.getEvents()
      });
    }
  }

  async getEvents() {
    let now = moment().startOf('day');
    let tomorrow = moment().add(1, 'd').endOf('day')

    return await Calendar.getEventsAsync([this.calendarId], now.toDate(), tomorrow.toDate());
  }

  async askPermissions() {
    const calendarPermission = await this.askForCalendarPermissions();
    const reminderPermissions = await this.askForReminderPermissions();

    return calendarPermission && reminderPermissions;
  }

  async askForCalendarPermissions() {
    const response = await Permissions.askAsync(Permissions.CALENDAR);
    return response.status === "granted";
  }

  async askForReminderPermissions() {
    if (Platform.OS === "android") {
      return true;
    }

    const response = await Permissions.askAsync(Permissions.REMINDERS);
    return response.status === "granted";
  }

  async getCalendar() {
    const calendars = await Calendar.getCalendarsAsync();

    return calendars && calendars.length
      ? calendars.filter(c => c.name === this.calendarName && c.source.name === this.calendarOwner)[0]
      : undefined;
  }

  async createCalendarAsync(calendars) {
    const newCalendar = {
      title: this.calendarName,
      entityType: Calendar.EntityTypes.EVENT,
      color: "#2196F3",
      sourceId:
        Platform.OS === "ios"
          ? calendars.find(cal => cal.source && cal.source.name === "Default")
              .source.id
          : undefined,
      source:
        Platform.OS === "android"
          ? {
              name: this.calendarOwner,
              isLocalAccount: true
            }
          : undefined,
      name: this.calendarName,
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
      ownerAccount: this.calendarOwner
    };

    let calendarId = null;

    try {
      calendarId = await Calendar.createCalendarAsync(newCalendar);
    } catch (e) {
      console.log("Calendar could not be created", e.message);
    }

    return calendarId;
  }

  async newEvent() {
    await this.addEvent(this.calendarId);
    this.setState({ events: await this.getEvents() });
  }

  async addEvent(calendarId) {
    const event = {
      title: "Breathe",
      location: "",
      startDate: moment().toDate(),
      endDate: moment()
        .add(1, "hours")
        .toDate(),
      timeZone: "Australia"
    };

    try {
      return await Calendar.createEventAsync(calendarId, event);
    } catch (e) {
      console.log(e);
    }
  }

  getRenderItemKey = (item, index) => item.id;
  formatDate = (date) => moment(date).format('DD/MMM/YYYY HH:mm');

  render() {
    return (
      <View>
        <Button onPress={() => this.newEvent()} title="New Event" />
        <FlatList
          data={this.state.events}
          keyExtractor={this.getRenderItemKey}
          renderItem={({ item, separators }) => <Text>{this.formatDate(item.startDate)}</Text>}
        />
      </View>
    );
  }
}
