import SensorValuePayload from "./models/SensorValuePayload";
import SinkPayload from "./models/SinkPayload";
import ValidationError from "./models/ValidationError";
import {
  validateArray,
  validateDeviceEUI64,
  validateNumber,
  validateString,
  validateTimestamp,
} from "./validators";

const sanitiseSingleValue = (
  value: any
): { sanitisedValue?: SensorValuePayload; errors?: ValidationError[] } => {
  const errors: ValidationError[] = [];
  const sanitisedValue: SensorValuePayload = {} as SensorValuePayload;

  // validate timestamp
  const { error: timestampError } = validateTimestamp(
    value.timestamp_production
  );
  if (timestampError) {
    errors.push(timestampError);
  } else {
    sanitisedValue.timestamp_production = value.timestamp_production;
  }

  // validate type
  const { error: notStringError } = validateString(value.type);
  if (notStringError) {
    errors.push(notStringError);
  } else {
    sanitisedValue.type = value.type;
  }

  // validate type
  const { error: notNumberError } = validateNumber(value.value);
  if (notNumberError) {
    errors.push(notNumberError);
  } else {
    sanitisedValue.value = value.value;
  }

  if (errors.length) {
    return { errors };
  } else {
    return { sanitisedValue };
  }
};

const sanitiseSensorValues = (
  values: Array<any>
): { sanitisedValues: SinkPayload["values"]; errors: ValidationError[] } => {
  const sanitisedValues: SinkPayload["values"] = [];
  const validationErrors: ValidationError[] = [];

  values.forEach((value) => {
    const { sanitisedValue, errors } = sanitiseSingleValue(value);
    if (sanitisedValue) {
      sanitisedValues.push(sanitisedValue);
    } else {
      // non-null assertion due to code above
      validationErrors.push(...errors!);
    }
  });

  return { sanitisedValues, errors: validationErrors };
};

const sanitiseSinkPayload = (
  payload: any
): {
  sanitisedSinkPayload?: SinkPayload;
  validationErrors?: ValidationError[];
} => {
  const primaryValidationErrors: ValidationError[] = [];
  const sanitisedSinkPayload: SinkPayload = {} as SinkPayload;

  // check for string and device EUI64 length
  const { error: deviceEUI64error } = validateDeviceEUI64(payload.source);
  if (deviceEUI64error) {
    primaryValidationErrors.push(deviceEUI64error);
  } else {
    sanitisedSinkPayload.source = payload.source;
  }

  // check if timestamp is a number
  const { error: timestampError } = validateTimestamp(
    payload.timestamp_arrival
  );
  if (timestampError) {
    primaryValidationErrors.push(timestampError);
  } else {
    sanitisedSinkPayload.timestamp_arrival = payload.timestamp_arrival;
  }

  // check if values is an array
  const { error: arrayError } = validateArray(payload.values);
  if (arrayError) {
    primaryValidationErrors.push(arrayError);
  }

  // sanitise values
  const {
    sanitisedValues,
    errors: valueSanitisationErrors,
  } = sanitiseSensorValues(payload.values);

  if (sanitisedValues.length) {
    sanitisedSinkPayload.values = sanitisedValues;
  }

  return {
    sanitisedSinkPayload:
      primaryValidationErrors.length === 0 && sanitisedValues.length
        ? sanitisedSinkPayload
        : undefined,
    validationErrors: [...primaryValidationErrors, ...valueSanitisationErrors],
  };
};

export default sanitiseSinkPayload;
