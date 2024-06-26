import React, { useState } from "react";
import { YEARS, MAKES, MAKE_MODEL_MAPPING } from "../utilities/constants";

export default function VehicleForm({ fetchData }) {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);

  const SelectInput = ({
    options,
    value,
    onChange,
    disabled,
    placeholder,
    ...props
  }) => (
    <select
      className="w-full p-3 leading-tight text-center text-gray-700 border-2 rounded appearance-none"
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const handleMakeChange = (event) => {
    const selectedMake = event.target.value;
    setMake(selectedMake);
    setModel("");
    setModels(MAKE_MODEL_MAPPING[selectedMake]);
  };

  return (
    <div className="max-w-screen-md">
      <div className="mt-2 text-lg font-semibold text-center">
        Vehicle Parameters
      </div>
      <SelectInput
        options={YEARS}
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Select Year"
        data-testid="year-select"
      />
      <SelectInput
        options={MAKES}
        value={make}
        onChange={handleMakeChange}
        disabled={!year}
        placeholder="Select Make"
        data-testid="make-select"
      />
      <SelectInput
        options={models}
        value={model}
        onChange={(e) => setModel(e.target.value)}
        disabled={!models.length}
        placeholder="Select Model"
        data-testid="model-select"
      />
      <button
        onClick={() => fetchData(year, make, model)}
        className="bg-[#832C31] hover:bg-[#42191b] text-white font-bold py-2 px-4 rounded mt-5 block w-full"
        data-testid="fetch-data-button"
      >
        Get Vehicle Information
      </button>
    </div>
  );
}
