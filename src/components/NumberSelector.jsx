import styled from "styled-components"
import { useState } from "react";

const NumberSelector = ({setError,error,selectNumber,setselectNumber}) => {

    const arr = [1,2,3,4,5,6];

    const Errorhandler = (value) => {
        setselectNumber(value);
        setError("");
    }
  return (
    <>
        <SelectScore>
            <p className="err">{error}</p>
            <div className="flex">
                {arr.map((value,i) => (
                    <Box 
                        isSelected ={value === selectNumber}
                        key={i} 
                        onClick={() => Errorhandler(value)}>

                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </SelectScore>
    </>
  )
}

export default NumberSelector;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor:pointer;
    background-color:${(props) => props.isSelected?"black":"white"};
    color:${(props) => props.isSelected?"white":"black"};
`;

const SelectScore = styled.div`

    display:flex;
    flex-direction: column;
    align-items:end;

    .flex {
        display:flex;
        gap:24px;
    }
    
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    
    .err{
        color:red;
    }
`
