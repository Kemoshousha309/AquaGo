import {
  Button,
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import Calculator from "../Calculator";
import "./oxygen.scss";

class OxygenCalc extends Calculator { 
  state = {
    inputs: {
      fishNum: {
        value: "",
        valid: true,
        mess: "",
        doValidation: true,
      },
      fishAverageWieght: {
        value: "",
        valid: true,
        mess: "",
        defaultMess: "your input should be in grams",
        doValidation: true,
      },
      waterType: {
        value: "FRESH",
        doValidation: false,
      },
    },
    calculatedDO: null,
  };

  calcOxygenHandler = (e) => {
    // calculate the oxygen demand
    const {isValid, inputs } = this.isInputsValid();
    let DO = null;
    if (isValid) {
      DO = this.calcOxygen(
        inputs.fishNum.value,
        inputs.fishAverageWieght.value,
        inputs.waterType.value
      );
    }
    this.setState({ inputs: inputs, calculatedDO: DO });
    this.forceUpdate();
  };

  calcOxygen(fishNum, fishWieght, waterType) {
    const oxygenRate = waterType === "FRESH" ? 0.5 : 0.75;
    const boiMass = (fishNum * fishWieght) / 1000; // in Kg
    const DO = (oxygenRate * boiMass) / 1000;
    return DO;
  }

  render() {
    const {
      state: {
        inputs: { fishNum, fishAverageWieght, waterType },
        calculatedDO,
      },
      inputChangeHandler,
      calcOxygenHandler,
    } = this;
    return (
      <div className="oxygenCalc container">
        <h2 className="heading-1">
          Calculate the required dissolved oxygen for your stock
        </h2>
        <p className="paragraph">
          input your fish number and the average of your fish weight in grams
          and click Calculate to view the result
        </p>
        <div className="oxygenCalc__inputs">
          <TextField
            className="oxygenCalc__input"
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
          <TextField
            className="oxygenCalc__input"
            helperText={
              fishAverageWieght.mess
                ? fishAverageWieght.mess
                : fishAverageWieght.defaultMess
            }
            label="Fish average weight"
            variant="outlined"
            name="fishAverageWieght"
            value={fishAverageWieght.value}
            onChange={inputChangeHandler}
            type="number"
            error={!fishAverageWieght.valid}
            required
          />
          <FormControl fullWidth className="oxygenCalc__input">
            <InputLabel id="waterType">Water Type</InputLabel>
            <Select
              labelId="waterType"
              name="waterType"
              value={waterType.value}
              label="waterType"
              onChange={inputChangeHandler}
            >
              <MenuItem value="FRESH">Fresh</MenuItem>
              <MenuItem value="SALT">Salt</MenuItem>
            </Select>
          </FormControl>
          <Button
            className="oxygenCalc__button"
            onClick={calcOxygenHandler}
            variant="contained"
          >
            Calculate
          </Button>
        </div>
        <div className="oxygenCalc__resultContianer">
          <p className="oxygenCalc__result paragraph">
            = &nbsp; <span className="oxygenCalc__DO">{calculatedDO}</span> Kg
            oxygen / hour
          </p>
        </div>
      </div>
    );
  }
}

export default OxygenCalc;
