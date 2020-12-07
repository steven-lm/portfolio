import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const styles = {
  textFieldFormComponentWrapper: {
    marginBottom: '10px',
    width: '100%',
  },
};

const TextFieldFormComponent = ({
  formStateName, value, label, onChange, validatorMethod, errorState,
  errorText, setFormError, multiline, required, type,
}) => {
  const [textValue, setTextValue] = useState('');
  useEffect(() => {
    setTextValue(value);
  }, [value]);

  function onTextFieldChange(event) {
    setFormError(formStateName, false);

    if (!validatorMethod(event.target.value)) {
      setFormError(formStateName, true);
    }
    onChange(event, formStateName);
    setTextValue(event.target.value);
  }
  return (
    <div style={styles.textFieldFormComponentWrapper}>
      <TextField
        label={label}
        onChange={onTextFieldChange}
        error={errorState}
        helperText={errorState ? errorText : ''}
        color="secondary"
        fullWidth
        required={required}
        type={type}
        multiline={multiline}
        value={textValue}
      />
    </div>
  );
};

TextFieldFormComponent.propTypes = {
  formStateName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validatorMethod: PropTypes.func.isRequired,
  errorState: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
  setFormError: PropTypes.func.isRequired,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
};

TextFieldFormComponent.defaultProps = {
  multiline: false,
  required: false,
  type: 'text',
};

export default TextFieldFormComponent;
