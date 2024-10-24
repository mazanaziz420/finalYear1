import React from 'react';

const InputField = ({ id, name, type, placeholder, value, onChange, className, isError }) => (
    <div className='mb-4'>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {placeholder} <span className="text-red-500">*</span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border ${isError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      />
      {isError && <p className="mt-2 text-sm text-red-600">{isError}</p>}
    </div>
  );

export default InputField;