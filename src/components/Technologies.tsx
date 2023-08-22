import { useState } from "react";

const Technologies = () => {
  const options = [
    { value: "San Francisco" },
    { value: "New York" },
    { value: "Seattle" },
    { value: "Los Angeles" },
    { value: "Chicago" },
  ];
  const [value, setValue] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const addList = () => {
    if (value !== "" && !technologies.includes(value))
      setTechnologies([...technologies, value]);

    console.log(technologies);
    setValue("");
  };
  return (
    <>
      <div>
        <label htmlFor="technologies" className="form-label">
          Used Technologies
        </label>
        <div>
          <input
            className="form-control"
            id="exampleDataList"
            placeholder="Type to search..."
            list="datalistOptions"
            type="text"
            value={value}
            onChange={(e) => handleChange(e)}
          />
          <datalist id="datalistOptions">
            {options.map((option) => (
              <option key={option.value} value={option.value} />
            ))}
          </datalist>
        </div>

        <div className="addBtn">
          <button type="button" className="btn btn-secondary" onClick={addList}>
            Add to list
          </button>
          <h5 className="technologyHash">{"#" + technologies.join(", #")}</h5>
        </div>
      </div>
    </>
  );
};

export default Technologies;
