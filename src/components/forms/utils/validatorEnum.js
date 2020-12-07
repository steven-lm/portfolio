import validator from 'validator';

function isNotEmpty(input) {
  return validator.isLength(input, { min: 1, max: undefined });
}

function isTrue(input) {
  return validator.equals(input.toString(), 'true');
}

function noValidation() {
  return true;
}

function isNotZero(input) {
  return !validator.equals(input.toString(), '0');
}

function isAtLeastEightChars(input) {
  return validator.isLength(input, { min: 8, max: undefined });
}

function isUrlOrEmpty(input) {
  return validator.isURL(input) || validator.isEmpty(input);
}

const validatorEnum = {
  IS_NOT_EMPTY: isNotEmpty,
  IS_EMAIL: validator.isEmail,
  IS_TRUE: isTrue,
  NO_VALIDATION: noValidation,
  NOT_ZERO: isNotZero,
  IS_AT_LEAST_EIGHT_CHARS: isAtLeastEightChars,
  IS_NUMBER: validator.isInt,
  IS_URL: validator.isURL,
  IS_URL_OR_EMPTY: isUrlOrEmpty,
};

export default validatorEnum;
