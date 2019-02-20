import {
    Platform
} from 'react-native';
import {
    Permissions,
    Calendar
} from "expo";

export default class calendarService {

    calendarName;
    calendarOwner;
    calendar;

    constructor(name, owner) {
        this.calendarName = name;
        this.calendarOwner = owner
    }

    async initialize() {
        if (await this._askPermissions()) {
            this.calendar = await this._getCalendar(true);
        }
    }

    async getEvents(from, to) {
        return await Calendar.getEventsAsync(
            [this.calendar.id],
            from,
            to
        );
    }

    getAlarm(relativeOffset) {
        return {
            relativeOffset: relativeOffset,
            method: Calendar.AlarmMethod.ALERT
        };
    }

    async addEvent(event) {

        try {
            await Calendar.createEventAsync(this.calendar.id.toString(), event);
        } catch (e) {
            console.log(`error caught ${e}`);
        }
    }

    async deleteEvent(eventId) {
        try {
            await Calendar.deleteEventAsync(eventId);
            return true;
        } catch (e) {
            console.log(`error removing event with id ${eventId}`);
            return false;
        }
    }


    async _askPermissions() {
        return await this._askForCalendarPermissions() &&
            await this._askForReminderPermissions();
    }

    async _getCalendar(createIfRequired) {
        breatheCalendar = await this._searchCalendars();

        if (breatheCalendar) {
            return breatheCalendar
        }

        if (createIfRequired) {
            await this._createCalendarAsync();
        }

        return await this._searchCalendars();
    }

    async _createCalendarAsync(calendars) {
        try {
            await Calendar.createCalendarAsync({
                title: this.calendarName,
                entityType: Calendar.EntityTypes.EVENT,
                color: "#2196F3",
                sourceId: Platform.OS === "ios" ?
                    calendars.find(cal => cal.source && cal.source.name === "Default")
                    .source.id : undefined,
                source: Platform.OS === "android" ? {
                    name: this.calendarOwner,
                    isLocalAccount: true
                } : undefined,
                name: this.calendarName,
                accessLevel: Calendar.CalendarAccessLevel.OWNER,
                ownerAccount: this.calendarOwner
            });
        } catch (e) {
            console.log("Calendar could not be created", e.message);
        }
    }

    async _searchCalendars() {
        const calendars = await Calendar.getCalendarsAsync();
        return await calendars && calendars.length ?
            calendars.filter(
                c =>
                c.name === this.calendarName && c.source.name === this.calendarOwner
            )[0] : undefined;
    }

    async _askForCalendarPermissions() {
        const response = await Permissions.askAsync(Permissions.CALENDAR);
        return response.status === "granted";
    }

    async _askForReminderPermissions() {
        if (Platform.OS === "android") {
            return true;
        }

        const response = await Permissions.askAsync(Permissions.REMINDERS);
        return response.status === "granted";
    }
}