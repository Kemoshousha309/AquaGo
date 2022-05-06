export function checkValidity(value, rules) {
  let valid = true;
  let mess = "";
  if(value <= 0) {
    valid = false && valid;
    mess = "The input should be higher than zero";
  }if(isNaN(value)) {
    valid = false && valid;
    mess = "This field is required"
  }

  if(rules) {
    if(rules.max < value) {
      valid = false && valid;
      mess = "The value shouldn't be higher than 40";
    }
  }

  return {
    valid, mess
  }
  
}