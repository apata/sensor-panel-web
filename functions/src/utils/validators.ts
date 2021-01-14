import ValidationError from "../models/ValidationError";

type ValidatorFunction = (
  valueToValidate: any
) => {
  error?: ValidationError;
};

export const validateString: ValidatorFunction = (s) => {
  if (typeof s === "string" || s instanceof String) {
    return {};
  } else {
    return {
      error: {
        message: "must be a valid string",
        invalidValue: s,
      },
    };
  }
};

export const validateNumber: ValidatorFunction = (n) => {
  if (Number.isNaN(n)) {
    return {
      error: {
        message: "must be a valid number",
        invalidValue: n,
      },
    };
  }
  return {};
};

export const validateTimestamp: ValidatorFunction = (timestamp) =>
  validateNumber(timestamp);

export const validateDeviceEUI64: ValidatorFunction = (deviceEUI64) => {
  const stringValidationResult = validateString(deviceEUI64);
  if (stringValidationResult.error) {
    return stringValidationResult;
  }
  // check for EUI64 length
  if (deviceEUI64.length === 16) {
    return {};
  }
  return {
    error: {
      message: "source must be a valid EUI64",
      invalidValue: deviceEUI64,
    },
  };
};

export const validateArray: ValidatorFunction = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    return {};
  } else {
    return {
      error: {
        message: "values must be an array with members",
        invalidValue: array,
      },
    };
  }
};
