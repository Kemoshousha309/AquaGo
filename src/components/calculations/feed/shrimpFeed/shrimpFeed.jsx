import "./shrimpFeed.scss";
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import Calculator from "../../Calculator";
import { feedTable } from "./feedTable";


class ShrimpFeed extends Calculator {
  state = {
    inputs: {
      shrimpNum: {
        value: "",
        valid: true,
        mess: "",
        doValidation: true,
      },
      shrimpAge: {
        value: "20",
        doValidation: false,
      },
      averageWeight: {
        value: "1.4",
        valid: true,
        mess: "",
        doValidation: true,
        rules: {
          max: 40
        }
      },
    },
    feedInfo: null,
  };


  feedCalcHandler = (e, value) => {
    const {
      isValid,
      inputs: { shrimpNum, averageWeight, shrimpAge },
      inputs,
    } = this.isInputsValid();
    let feedInfo = null;
    if(isValid) {
      feedInfo = this.feedCalculator(
        shrimpNum.value,
        shrimpAge.value,
        averageWeight.value,
        feedTable
      )
      console.log(feedInfo)
    }
    this.setState({ inputs: inputs, feedInfo: feedInfo });
    this.forceUpdate();
  };

  feedCalculator = (shrimpNum, age, wieght, feedTable) => {
    const feedInfo = feedTable[age];
    const bioMass = (shrimpNum * wieght) / 1000; // in kg
    const feedIntake = ((feedInfo.feedRate/100) * bioMass).toFixed(2);
    return {
      feedIntake,
      optimalWeight: feedInfo.weight,
      feedSize: feedInfo.feedSize,
      frequency: feedInfo.frequency
    };
  }

  
  render() {
    const {
      state: {
        inputs: { shrimpNum, shrimpAge, averageWeight },
        feedInfo,
      },
      feedCalcHandler,
      inputChangeHandler,
    } = this;
    return (
      <div className="shrimp">
        <div className="shrimp__inputs">
          <TextField
            className="shrimp__input"
            label="Shrimp number"
            variant="outlined"
            helperText={shrimpNum.mess}
            name="shrimpNum"
            value={shrimpNum.value}
            onChange={inputChangeHandler}
            type="number"
            error={!shrimpNum.valid}
            required
          />
          <FormControl fullWidth className="shrimp__input">
            <InputLabel id="shrimpAge">Age days</InputLabel>
            <Select
              labelId="shrimpAge"
              name="shrimpAge"
              value={shrimpAge.value}
              label="shrimpAge"
              onChange={inputChangeHandler}
            >
              <MenuItem value="5">5 day</MenuItem>
              <MenuItem value="10">10 day</MenuItem>
              <MenuItem value="15">15 day</MenuItem>
              <MenuItem value="20">20 day</MenuItem>
              <MenuItem value="25">25 day</MenuItem>
              <MenuItem value="30">30 day</MenuItem>
              <MenuItem value="35">35 day</MenuItem>
              <MenuItem value="40">40 day</MenuItem>
              <MenuItem value="45">45 day</MenuItem>
              <MenuItem value="50">50 day</MenuItem>
              <MenuItem value="55">55 day</MenuItem>
              <MenuItem value="60">60 day</MenuItem>
              <MenuItem value="65">65 day</MenuItem>
              <MenuItem value="70">70 day</MenuItem>
              <MenuItem value="75">75 day</MenuItem>
              <MenuItem value="80">80 day</MenuItem>
              <MenuItem value="85">85 day</MenuItem>
              <MenuItem value="90">90 day</MenuItem>
              <MenuItem value="95">95 day</MenuItem>
              <MenuItem value="105">105 day</MenuItem>
              <MenuItem value="110">110 day</MenuItem>
              <MenuItem value="115">115 day</MenuItem>
              <MenuItem value="120">120 day</MenuItem>
              <MenuItem value="125">125 day</MenuItem>
              <MenuItem value="130">130 day</MenuItem>
              <MenuItem value="135">135 day</MenuItem>
              <MenuItem value="140">140 day</MenuItem>
              <MenuItem value="145">145 day</MenuItem>
              <MenuItem value="150">150 day</MenuItem>
            </Select>
          </FormControl>


          <TextField
            className="shrimp__input"
            label="Average weight g"
            variant="outlined"
            helperText={averageWeight.mess}
            name="averageWeight"
            value={averageWeight.value}
            onChange={inputChangeHandler}
            type="number"
            error={!averageWeight.valid}
            required
          />

         
          <Button
            className="shrimp__button"
            onClick={feedCalcHandler}
            variant="contained"
          >
            Calculate
          </Button>
        </div>
        <div className="shrimp__resultContainer">
          <div className="shrimp__result">
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
              The optimal weight in this age: {feedInfo ? feedInfo.optimalWeight : "----"} g
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShrimpFeed;