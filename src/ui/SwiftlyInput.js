import React from "react";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

export function SwiftlyInput(props) {
  const { id, labelDesc, dataType, dataTypeExtras, hint } = props;
  return (
    <div>
      <SwiftlyInputWrapper
        id={id}
        labelDesc={labelDesc}
        dataType={dataType}
        key={id}
        hint={hint}
        dataTypeExtras={dataTypeExtras}
      />
    </div>
  );
}

class SwiftlyInputCore {
  constructor(props) {
    const { id, labelDesc, dataType, dataTypeExtras, hint } = props;
    this.id = id;
    this.labelDesc = labelDesc;
    this.dataType = dataType;
    this.dataTypeExtras = dataTypeExtras;
    this.hint = hint;
  }

  render = () => {
    return this.__render();
  };

  __render = () => {
    const nodes = [
      <InputLabel htmlFor={this.id} key={0}>
        {this.labelDesc}
      </InputLabel>,
    ];
    if (this.hint) {
      nodes.push(this.withAndronment());
    } else {
      nodes.push(this.basicInput());
    }

    return (
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        {nodes}
      </FormControl>
    );
  };

  basicInput = () => {
    return <Input id={this.id} key={1}></Input>;
  };

  withAndronment = () => {
    return (
      <Input
        id={this.id}
        key={1}
        startAdornment={
          <InputAdornment position="start">{this.hint}</InputAdornment>
        }
      ></Input>
    );
  };
}

function SwiftlyInputWrapper(props) {
  const { id, labelDesc, dataType, dataTypeExtras } = props;
  const core = new SwiftlyInputCore(props);
  return core.render();
}

SwiftlyInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelDesc: PropTypes.string.isRequired,
  dataType: PropTypes.string.isRequired,
  dataTypeExtras: PropTypes.object,
  hint: PropTypes.string,
};

SwiftlyInputWrapper.propTypes = {
  ...SwiftlyInput.propTypes,
};
