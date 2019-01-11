import { observable } from "mobx";
import { AsyncStorage } from "react-native";

class ObservableSettingsStore {
  _defaultValues = {
    totalDuration: 10,
    timeToBreatheIn: 5,
    timeToHold: 5,
    timeToBreatheOut: 5,
    timeToHoldOut: 5
  };

  @observable totalDuration = this._defaultValues.totalDuration;
  @observable timeToBreatheIn = this._defaultValues.timeToBreatheIn;
  @observable timeToHold = this._defaultValues.timeToHold;
  @observable timeToBreatheOut = this._defaultValues.timeToBreatheOut;
  @observable timeToHoldOut = this._defaultValues.timeToHoldOut;

  setDefaultValues() {
    this.setTotalDuration(this._defaultValues.totalDuration);
    this.setTimeToBreatheIn(this._defaultValues.timeToBreatheIn);
    this.setTimetoHold(this._defaultValues.timeToHold);
    this.setTimeToBreatheOut(this._defaultValues.timeToBreatheOut);
    this.setTimeToHoldOut(this._defaultValues.timeToHoldOut);
  }

  setTotalDuration(duration) {
    this.totalDuration = duration;
  }

  setTimeToBreatheIn(duration) {
    this.timeToBreatheIn = duration;
  }

  setTimetoHold(duration) {
    this.timeToHold = duration;
  }

  setTimeToBreatheOut(duration) {
    this.timeToBreatheOut = duration;
  }

  setTimeToHoldOut(duration) {
    this.timeToHoldOut = duration;
  }

  saveSettings() {
    AsyncStorage.multiSet([
      ["totalDuration", this.totalDuration.toString()],
      ["timeToBreatheIn", this.timeToBreatheIn.toString()],
      ["timeToHold", this.timeToHold.toString()],
      ["timeToBreatheOut", this.timeToBreatheOut.toString()],
      ["timeToHoldOut", this.timeToHoldOut.toString()]
    ]);
  }

  loadSettings() {
    AsyncStorage.getAllKeys((err, keys) => {
      if (keys.length) {
        AsyncStorage.multiGet(keys, (err, stores) => {
          stores.map((result, i, store) => {
            let key = store[i][0];
            let value = store[i][1];

            switch (key) {
              case "totalDuration":
                this.setTotalDuration(parseInt(value));
                break;
              case "timeToBreatheIn":
                this.setTimeToBreatheIn(parseFloat(value));
                break;
              case "timeToHold":
                this.setTimetoHold(parseFloat(value));
                break;
              case "timeToBreatheOut":
                this.setTimeToBreatheOut(parseFloat(value));
                break;
              case "timeToHoldOut":
                this.setTimeToHoldOut(parseFloat(value));
                break;
            }
          });
        });
      }
    });
  }
}

const settingsStore = new ObservableSettingsStore();
export default settingsStore;
