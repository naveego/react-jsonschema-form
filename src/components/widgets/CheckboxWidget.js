import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "semantic-ui-react";

function CheckboxWidget(props) {
  const {
    schema,
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
  } = props;
  return (
    <Checkbox
      readOnly={readonly}
      disabled={disabled}
      id={id}
      checked={typeof value === "undefined" ? false : value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      label={label || schema.description}
      onChange={event => onChange(event.target.checked)}
    />
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}

export default CheckboxWidget;
