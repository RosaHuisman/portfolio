import React from 'react'
import './style.scss';
import PropTypes from 'prop-types'


const Field = ({
    value,
    type,
    changeValue,
    placeholder,
    name,
    className
    
  
}) => {

  const handleChange = (evt) => {
      evt.preventDefault();
    changeValue(evt.target.value, name);
  };


  return (
        <div className="field" >
              <input 
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                
              />
             
        </div>
       
  );
}

Field.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string, 
    changeValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
    value: '',
    type: 'text',
    placeholder: '',
}



export default Field;