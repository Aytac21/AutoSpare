import React, { useEffect, useState } from 'react'
import style from './FilterPage.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import AsyncSelect from 'react-select/async';
import { orange } from '@mui/material/colors';
import CustomSliderStyles from './Customs/CustomSliderStyles';
import { customSelectStyle, customModelSelectStyle } from './Customs/CustomSelectStyles'

const FilterPage = () => {



    // const [minValue, setMinValue] = useState(20);
    // const [maxValue, setMaxValue] = useState(80);
    const [sliderValues, setSliderValues] = React.useState([20, 80]);
    const minDistance = 2;


    // useEffect(()=>{
    //     setSliderValues([minValue,maxValue]);
    //    },[minValue,maxValue])


    const handleSliderChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setSliderValues([Math.min(newValue[0], sliderValues[1] - minDistance), sliderValues[1]]);
            // setMinValue(newValue[0])           
        } else {
            setSliderValues([sliderValues[0], Math.max(newValue[1], sliderValues[0] + minDistance)]);
            // setMaxValue(newValue[1])
        }

    };


    const handlePriceInputChange=()=>{

    }
    let brandOptions = [
        { value: 'Bosch', label: 'Bosch' },
        { value: 'Roadstone', label: 'Roadstone' },
        { value: 'Mrte', label: 'Mrte' },
        { value: 'Lassa', label: 'Lassa ' },
        { value: 'Denso', label: 'Denso' },
        { value: 'KrOSS', label: 'KrOSS' },
        { value: 'OgB', label: 'OgB' },
        { value: 'Airtrack', label: 'Airtrack' },
        { value: 'BRL', label: 'BRL' }
    ];

    let cities = [
        { value: 'Baku', label: 'Baku' },
        { value: 'Gəncə', label: 'Gəncə' },
        { value: 'Sumqayıt', label: 'Sumqayıt' }
    ];

    let makes = [
        { value: 'Honda', label: 'Honda' },
        { value: 'Toyota', label: 'Toyota' },
        { value: 'Mercedes', label: 'Mercedes' }


    ];

    const filterBrands = (inputValue) => {
        return brandOptions.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const yearsOptions = [];

    for (let year = (new Date().getFullYear()); year >= 1980; year--) {
        yearsOptions.push({ value: year, label: year.toString() });
    }
    const promiseOptions = (inputValue) =>

        new Promise((resolve) => {
            setTimeout(() => {
                resolve(filterBrands(inputValue));
            });
        });

    return (
        <div className={style.main}>
            <div className={style.top}>
                <p className={style.closeButton}>x</p>
                <p>Filter</p>
            </div>
            <div className={style.content}>

                <div className={style.price}>
                    <p className={style.titleStyle}>Qiymət</p>
                    <hr />
                    <div className={style.minmax}>
                        <div className={style.min}>
                            <p>Min</p>

                            <input value={sliderValues[0]} onChange={e => {                               
                                setSliderValues([Math.min(e.target.value, sliderValues[1] - minDistance), sliderValues[1]]);
                                }} type="number"></input>
                        </div>

                        <div className={style.max}>
                            <p>Max</p>
                            <input value={sliderValues[1]} onChange={e => {
                                setSliderValues([sliderValues[0], Math.max(e.target.value, sliderValues[0] + minDistance)]);
                                }} type="number"></input>
                        </div>
                    </div>

                    <div className={style.priceSlider}>
                        <Box sx={{ width: "62.44vw" }}>
                            <Slider sx={CustomSliderStyles}
                                getAriaLabel={() => 'Minimum distance'}
                                value={sliderValues}
                                onChange={handleSliderChange}
                                valueLabelDisplay="auto"
                                // getAriaValueText={valuetext}
                                disableSwap />
                        </Box>
                    </div>
                </div>

                <div className={style.brend}>
                    <p className={style.titleStyle}>Brand</p>
                    {/* <hr /> */}
                    <AsyncSelect
                        isMulti={true}
                        styles={customSelectStyle}
                        cacheOptions
                        defaultOptions
                        loadOptions={promiseOptions} />
                </div>

                <div className={style.city}>
                    <p className={style.titleStyle}>Şəhər</p>
                    {/* <hr /> */}
                    <AsyncSelect
                        isMulti={true}
                        styles={customSelectStyle}
                        cacheOptions
                        defaultOptions={cities}
                    // loadOptions={promiseOptions}
                    />
                </div>

                <div className={style.MakeAndModel}>
                    <div className={style.make}>
                        <p className={style.titleStyle}>Marka</p>
                        <AsyncSelect
                            styles={customModelSelectStyle}
                            cacheOptions
                            defaultOptions={makes}
                        // loadOptions={promiseOptions}
                        />
                    </div>

                    <div className={style.make}>
                        <p className={style.titleStyle}>Model</p>
                        <AsyncSelect
                            styles={customModelSelectStyle}
                            cacheOptions
                            defaultOptions
                        // loadOptions={promiseOptions}
                        />
                    </div>

                </div>
                <div className={style.year}>
                    <p className={style.titleStyle}>Buraxılış ili</p>
                    <AsyncSelect
                        styles={customModelSelectStyle}
                        cacheOptions
                        defaultOptions={yearsOptions}
                    // loadOptions={promiseOptions}
                    />
                </div>
            </div>
        </div>
    )
}

export default FilterPage