import { useState } from "react";

export default function InputField({ name, onInputChange }) {

    const handleInputChange = (event) => {
        const { value } = event.target;
        onInputChange(name, value);
    };

    return (
        <div>
            <p>
                <label>{name}
                    <input type="number" name={name} required
                        id={name}
                        onChange={handleInputChange}>
                    </input>
                </label>
            </p>
        </div>
    )
}