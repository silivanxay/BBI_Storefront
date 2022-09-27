import React, { useState, useEffect } from "react";
import { Checkbox } from "@vechaiui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import { getAxios } from "../../../utils/get-axios.js";

const initialStates = {
  display: false,
};


const name = [
  { id: 1, name: "Size" },
  { id: 2, name: "Color" },
  { id: 3, name: "Material" },
  { id: 4, name: "Style" },
];

const type = [
  { id: 1, name: "Boolean" },
  { id: 2, name: "Text" },
  { id: 3, name: "Integer" },
  { id: 4, name: "Float" },
  { id: 5, name: "Date" },
];

export default function Option({ url, method }) {
  const form = useRef(null);
  const execRequest = (e) => {
    console.log("ENTER");
    e.preventDefault();
    console.log(form.current);
    const formData = new FormData(form.current);

    const result = getAxios()[method](url, formData);
    console.log(result);
  };


  const [display, setDisplay] = useState(initialStates);

  const [selected, setSelected] = useState(name[0]);

  const [select, setSelect] = useState(type[0]);

  const [query, setQuery] = useState("");

  const [query1, setQuery1] = useState("");

  const [allPlayers, setAllPlayers] = useState([{}]);

  const filteredPeople =
    query === ""
      ? name
      : name.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const filteredtype =
    query1 === ""
      ? type
      : type.filter((person) =>
          person.type
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query1.toLowerCase().replace(/\s+/g, ""))
        );

  const handleAddPlayers = () => {
    const values = [...allPlayers];
    values.push({});
    setAllPlayers(values);
  };

  const handleRemovePlayers = (index) => {
    const values = [...allPlayers];
    values.splice(index, 1);
    setAllPlayers(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...allPlayers];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAllPlayers(values);
  };

  console.log(allPlayers);

  useEffect(() => {
    document.getElementById("option_form").classList.toggle("hidden");
  }, [display]);

  return (
    <>
      <div className="max-w-lg  bg-gray-900 shadow-2xl rounded-lg m-auto text-center py-12 mt-4">
        <Checkbox
          className="text-white"
          onChange={() => {
            setDisplay(!display);
            console.log(display);
          }}
        >
          <label
            htmlFor="display"
            className="text-white text-2xl font-extrabold "
          >
            Add Options
          </label>
        </Checkbox>
        <div className="container py-5 max-w-md mx-auto" id="option_form">
          <form
            action={url}
            ref={form}
            method={method}
            onSubmit={execRequest}
            encType="multipart/form-data"
          >
            <row className="justify-content-center max-w-md">
              {allPlayers.length > 0 && (
                <>
                  {allPlayers.map((index) => (
                    <>
                      <div className="add-player-div">
                        <div className="text-left py-2">
                          <label htmlFor="name" className="text-white ">
                            Option Name
                          </label>
                        </div>
                        <Combobox value={selected} onChange={setSelected}>
                          <div className="mt-1">
                            <div className="w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                              <Combobox.Input
                                name="name"
                                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                displayValue={(name) => name.name}
                                onChange={(event) =>
                                  setQuery(event.target.value)
                                }
                              />
                              <Combobox.Button className="py-2 -mx-7">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </Combobox.Button>
                            </div>
                            <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                              afterLeave={() => setQuery("")}
                            >
                              <Combobox.Options className="fixed w-full">
                                {query.length > 0 && (
                                  <Combobox.Option
                                    value={{ id: null, name: query }}
                                  ></Combobox.Option>
                                )}
                                {filteredPeople.map((name) => (
                                  <Combobox.Option
                                    key={name.id}
                                    value={name}
                                    className={({ active }) =>
                                      `relative bg-gray-200 cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                          ? "bg-blue-400 text-white"
                                          : "text-black"
                                      }`
                                    }
                                  >
                                    {name.name}
                                  </Combobox.Option>
                                ))}
                              </Combobox.Options>
                            </Transition>
                          </div>
                        </Combobox>
                      </div>

                      <div className="text-left py-2">
                        <label htmlFor="name" className="text-white ">
                          Option type
                        </label>
                      </div>

                      <Combobox value={select} onChange={setSelect}>
                        <div className=" mt-1">
                          <div className=" w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                            <Combobox.Input
                              name="type"
                              className=" w-full border-none py-2 text-sm leading-5 text-gray-900 focus:ring-0"
                              displayValue={(type) => type.name}
                              red
                              onChange={(event) =>
                                setQuery1(event.target.value)
                              }
                            />
                            <Combobox.Button className=" py-2 -mx-7">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </Combobox.Button>
                          </div>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                            afterLeave={() => setQuery1("")}
                          >
                            <Combobox.Options className="fixed w-full">
                              {query1.length > 0 && (
                                <Combobox.Option
                                  value={{ id: null, name: query1 }}
                                ></Combobox.Option>
                              )}
                              {filteredtype.map((type) => (
                                <Combobox.Option
                                  key={type.id}
                                  value={type}
                                  className={({ active }) =>
                                    ` relative bg-gray-200 cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-blue-400 text-white"
                                        : "text-black"
                                    }`
                                  }
                                >
                                  {type.name}
                                </Combobox.Option>
                              ))}
                            </Combobox.Options>
                          </Transition>
                        </div>
                      </Combobox>

                      <div className="text-left py-3">
                        <label htmlFor="value" className="text-white ">
                          Option value
                        </label>
                      </div>
                      <div className="mb-4">
                        <input
                          placeholder="Midium"
                          className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="value"
                          type="text"
                          name="value"
                        />
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Done
                        </button>

                        <button
                          className="bg-red-500 hover:bg-red-700 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                          onClick={() => handleRemovePlayers(index)}
                        >
                          delete
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-5"></div>
                    </>
                  ))}
                </>
              )}
              <div className="flex items-center justify-between mt-5">
                <button
                  className="bg-blue-500 hover:bg-blue-700 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => handleAddPlayers()}
                >
                  + Add another option
                </button>
              </div>
            </row>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
