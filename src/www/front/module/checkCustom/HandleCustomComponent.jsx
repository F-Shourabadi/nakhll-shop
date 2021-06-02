import React from 'react';

const HandleCustomComponent = () => {

    //handle functions
    const _handleOnChange = (e) => { console.log(`e====>`, e) };
    const _handleOnInputChange = (e) => { console.log(`e2====>`, e) };

    //handleProps component
    const propsDrop = {
        placeholder: 'dropDown component',
        isMulti: true,
        isDisabled: false,
        isSearchable: true,
        className: 'customClass',
        entity: 'CITY',
        options: [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ],
        onChange: _handleOnChange,
        onInputChange: _handleOnInputChange,
    }

    return (
        <div>
           
        </div>
    )
}

export default HandleCustomComponent;