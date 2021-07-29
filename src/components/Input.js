import React from "react";
import * as _ from "lodash";
import {savePerson} from "../store/actions";
import {useDispatch} from "./State";

const Input = ({ person, field, type = "text", children }) => {
    const dispatch = useDispatch();
    const [iValue, setIValue] = React.useState(
        _.get(person, field)
    );
    const updateInput = (evt) => {
        const targetValue = evt.currentTarget.value;
        _.set(person, field, evt.currentTarget.value);
        dispatch(savePerson(person));
        setIValue(targetValue);

        console.log("SAVE PERSON", person, person.id)
    }

    return (
        <>
            <label htmlFor={`input_${field}_${person.id}`}>{field}</label>
            {type === "select" && <select
                onInput={updateInput}
                onChange={updateInput}
                name={field}
                value={iValue}
                id={`input_${field}_${person.id}`}
            >{children}</select>}
            {type !== "select" &&
            <input
                onInput={updateInput}
                onChange={updateInput}
                name={field}
                value={iValue}
                id={`input_${field}_${person.id}`}
            />}
        </>
    );
}

export default Input;