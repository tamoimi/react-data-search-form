import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";

function App() {
  const { register, handleSubmit, control, watch } = useForm();

  function onSubmitButton(data) {
    console.log({ data });
    console.log();
    alert(JSON.stringify(data));
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmitButton)}>
          <label>시작날짜 / 종료날짜</label>
          <Controller
            name="dateRange"
            control={control}
            render={({ field: { value, onChange } }) => (
              <DatePicker
                selected={value}
                onChange={(value) => onChange(value)}
                selectsRange={true}
                placeholderText="시작날짜를 선택해주세요."
                isClearable={true}
              />
            )}
          />
          {/* <Controller
            name="endDate"
            control={control}
            render={({ field: { value, onChange } }) => (
              <DatePicker
                selected={endDate}
                onChange={(value) => onChange(value)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="종료날짜를 선택해주세요."
                isClearable={true}
              />
            )}
          /> */}
          <br />
          <label>아이스크림</label> <br />
          <Controller
            name="iceCreamType"
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              />
            )}
            control={control}
            defaultValue=""
          />
          <label>검색</label> <br />
          <input
            {...register("search")}
            type="text"
            name="search"
            placeholder="검색어를 입력해주세요."
          />
          <p>좋아하는 날씨를 골라주세요.</p>
          <label htmlFor="field-rain">
            <input
              className="dot"
              {...register("weather")}
              type="radio"
              name="weather"
              value="rain"
            />
            비 <br />
          </label>
          <label htmlFor="field-wind">
            <input
              className="dot"
              {...register("weather")}
              type="radio"
              name="weather"
              value="wind"
            />
            바람 <br />
          </label>
          <label htmlFor="field-sun">
            <input
              className="dot"
              {...register("weather")}
              type="radio"
              name="weather"
              value="sun"
            />
            맑음 <br />
          </label>
          <input type="submit" className="result" />
        </form>
      </div>
    </>
  );
}

export default App;
