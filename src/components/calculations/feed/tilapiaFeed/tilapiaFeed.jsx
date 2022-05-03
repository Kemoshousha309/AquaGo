import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import Calculator from "../../Calculator";
import "./tilapiaFeed.scss";
import { feedTable } from "./feedTable";

class TilapiaFeed extends Calculator {
  state = {
    inputs: {
      fishNum: {
        value: "",
        valid: true,
        mess: "",
        doValidation: true,
      },
      fishWieght: {
        value: "50-100",
        doValidation: false,
      },
      temperature: {
        value: "26",
        doValidation: false,
      },
    },
    feedInfo: null,
  };

  feedCalcHandler = (e, value) => {
    const {
      isValid,
      inputs: { fishNum, fishWieght, temperature },
      inputs,
    } = this.isInputsValid();
    let feedInfo = null;
    if (isValid) {
      feedInfo = this.feedCalculator(
        fishNum.value,
        fishWieght.value,
        temperature.value,
        feedTable
      );
      console.log(feedInfo);
    }
    this.setState({ inputs: inputs, feedInfo: feedInfo });
    this.forceUpdate();
  };

  feedCalculator = (fishNum, fishWieght, temperature, table) => {
    const rowData = table[fishWieght];
    const feedRate = rowData.temp[temperature];
    const [init, final] = fishWieght.split("-");
    const boiMass = (fishNum * ((Number(init) + Number(final)) / 2)) / 1000; // in kg
    const feedIntake = Math.fround(boiMass * (feedRate / 100)).toFixed(3);
    return {
      feedIntake,
      feedSize: rowData.feedSize,
      protein: rowData.protein,
      frequency: rowData.frequency,
    };
  };

  render() {
    const {
      state: {
        inputs: { fishNum, fishWieght, temperature },
        feedInfo,
      },
      inputChangeHandler,
      feedCalcHandler,
    } = this;
    return (
      <div className="tilapia">
        <div className="tilapia__inputs">
          <TextField
            className="tilapia__input"
            label="Fish number"
            variant="outlined"
            helperText={fishNum.mess}
            name="fishNum"
            value={fishNum.value}
            onChange={inputChangeHandler}
            type="number"
            error={!fishNum.valid}
            required
          />
          <FormControl fullWidth className="tilapia__input">
            <InputLabel id="fishWieght">Fish wieght g</InputLabel>
            <Select
              labelId="fishWieght"
              name="fishWieght"
              value={fishWieght.value}
              label="fishWieght"
              onChange={inputChangeHandler}
            >
              <MenuItem value=".1-1">.1-1 g</MenuItem>
              <MenuItem value="1-3">1-3 g</MenuItem>
              <MenuItem value="3-5">3-5 g</MenuItem>
              <MenuItem value="5-10">5-10 g</MenuItem>
              <MenuItem value="15-25">15-25 g</MenuItem>
              <MenuItem value="25-50">25-50 g</MenuItem>
              <MenuItem value="50-100">50-100 g</MenuItem>
              <MenuItem value="100-150">100-150 g</MenuItem>
              <MenuItem value="150-200">150-200 g</MenuItem>
              <MenuItem value="200-300">200-300 g</MenuItem>
              <MenuItem value="300-400">300-400 g</MenuItem>
              <MenuItem value="+400">+400 g</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth className="tilapia__input">
            <InputLabel id="temperature">Temperature &deg;c</InputLabel>
            <Select
              labelId="temperature"
              name="temperature"
              value={temperature.value}
              label="temperature"
              onChange={inputChangeHandler}
            >
              <MenuItem value="22">22 &deg;c</MenuItem>
              <MenuItem value="26">26 &deg;c</MenuItem>
              <MenuItem value="29">29 &deg;c</MenuItem>
              <MenuItem value="33">33 &deg;c</MenuItem>
            </Select>
          </FormControl>
          <Button
            className="tilapia__button"
            onClick={feedCalcHandler}
            variant="contained"
          >
            Calculate
          </Button>
        </div>
        <div className="tilapia__resultContainer">
          <div className="tilaia__result">
            <p className="paragraph">
              Feed intake: {feedInfo ? feedInfo.feedIntake : "----"} Kg
            </p>
            <p className="paragraph">
              Feed particle size: {feedInfo ? feedInfo.feedSize : "----"} mm
            </p>
            <p className="paragraph">
              Frequency: {feedInfo ? feedInfo.frequency : "----"} time/day
            </p>
            <p className="paragraph">
              Protein rate: {feedInfo ? feedInfo.protein : "----"} %
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TilapiaFeed;
