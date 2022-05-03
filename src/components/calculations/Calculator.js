import { PureComponent } from "react";
import { checkValidity } from "../../utilities/utilities";


class Calculator extends PureComponent {
  inputChangeHandler = (e) => {
    const id = e.target.name;
    const value = e.target.value;
    const inputs = { ...this.state.inputs };
    inputs[id].value = value;
    this.setState({ inputs: inputs });
  };

  isInputsValid = () => {
    // check validity
    const { inputs } = this.state;
    let isValid = true;
    for (const key in inputs) {
      if (inputs[key].doValidation) {
        const { valid, mess } = checkValidity(parseInt(inputs[key].value));
        isValid = isValid && valid;
        inputs[key].valid = valid;
        inputs[key].mess = mess;
      }
    }
    return {isValid, inputs};
  }
  render() {return}
}

export default Calculator;