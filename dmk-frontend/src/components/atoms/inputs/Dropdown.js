// React
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// MUI
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Services



const Dropdown = props => {

    const { options, label } = props;

    const [option, setOption] = useState('');

    const handleChange = (event) => {
        setOption(event.target.value);
        console.log(option)
    };

    renderSelectOptions = () => {
        return options.map((option, i) => {
            return (
                <MenuItem key={option.id} value={option.id} primaryText={option.value} />
            );
        });
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>{label}</InputLabel>
                <Select
                    native
                    value={option}
                    onChange={handleChange}
                    autoWidth='false'
                    displayEmpty='true'
                >
                    {this.renderSelectOptions()}
                </Select>
            </FormControl>
        </div>
    )
}

/*Dropdown.defaultProps = {
    autoWidth = false,
    displayEmpty = true
  };*/

export default Dropdown
