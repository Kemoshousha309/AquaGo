export function checkValidity(value) {
  let valid = true;
  let mess = "";
  if(value <= 0) {
    valid = false && valid;
    mess = "The input should be higher than zero";
  }if(isNaN(value)) {
    valid = false && valid;
    mess = "This field is required"
  }

  return {
    valid, mess
  }
  
}