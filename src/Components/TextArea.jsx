import React, { useEffect, useRef, useState } from 'react'
import '../Styles/textarea.css'
import Section from './Section';
import AverageContainer from './AverageContainer';



const TextArea = () => {
    const textAreaInput = useRef(null)

    useEffect(() => {
        textAreaInput.current.focus();

    }, [])
    const [text, setText] = useState("");
    const HandleChange = (e) => {
        setText(e.target.value);
        // console.log(text.length + 1)
    }
    return (
        <div className='text-area' >
            <Section text={text} />
            <textarea onChange={HandleChange} name="" ref={textAreaInput} id="textarea-container" placeholder='Paste your text here ...' value={text} ></textarea>
            <AverageContainer text={text} />
        </div>
    )
}

export default TextArea