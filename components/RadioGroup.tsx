import React, { useState } from 'react';

const options = [
  { value: '3_sticks', label: '3 Sticks (-32%)', price: '$64.00/each', bestDeal: true },
  { value: '2_sticks', label: '2 Sticks (-22%)', price: '$71.00/each', bestDeal: false },
  { value: '1_stick', label: '1 Stick (-15%)', price: '$75.00', bestDeal: false },
];

interface RadioGroupPorps {
  selectedValue: string,
  onChange: (value: string)=> void,
}

const RadioGroup = ({ selectedValue, onChange }: RadioGroupPorps) => {
  return (
    <div className="flex space-x-4">
      {options.map(option => (
        <label
          key={option.value}
          className={`relative flex items-center w-10/16 p-4 border rounded-2xl cursor-pointer border-2 ${
            option.value === selectedValue ? 'bg-blue-50 border-blue-600' : 'bg-gray-100 border-gray-300'
          }`}
        >
          {option.bestDeal && (
            <span className="absolute -top-2 px-2 py-1 text-xs font-bold text-white bg-blue-600 rounded-lg">
              BEST DEAL
            </span>
          )}
          <input
            type="radio"
            name="stickOptions"
            value={option.value}
            checked={option.value === selectedValue}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <div className={`flex align-top items-center justify-center w-8 h-8 rounded-full ${
            option.value === selectedValue ? 'border-8 border-blue-600' : 'border-2 border-gray-400 bg-white'
          }`}>
            {option.value === selectedValue && (
              <div className="w-3 h-3 bg-white rounded-full"></div>
            )}
          </div>
          <div className="ml-4 ">
            <span className="block text-xl font-bold">{option.label}</span>
            <span className="block text-sm">{option.price}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
