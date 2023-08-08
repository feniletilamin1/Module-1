import React, { useRef } from 'react'
import { useState } from 'react'

function hex2rgb(c) {
    return {
        r: parseInt(c[1], 16),
        g: parseInt(c[2], 16),
        b: parseInt(c[3], 16)
    }
}

export default function Converter() {
    const reg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const [value, setValue] = useState("#412545")
    const label = useRef(null)
    const input = useRef(null);
    let rgb = hex2rgb(value);

    const changeHandler = () => {
        const inputValue = input.current.value;
        if (inputValue.length === 7) {
            const labelElement = label.current;
            if (reg.test(inputValue)) {
                setValue(inputValue);
                rgb = hex2rgb(value);
                labelElement.innerText = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
            }
            else
                labelElement.innerText = "Ошибка";
        }
    }

    return (
        <div className="converter-wrapper" style={{ backgroundColor: value }}>
            <form action="#" className="conveter">
                <input onChange={changeHandler} id="hex" type="text" className="converter__input" placeholder={value} ref={input} />
                <label ref={label} htmlFor="hex" className="converter__label">{`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}</label>
            </form>
        </div >
    )
}
