import { Divider } from '@material-ui/core';
import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import './SearchFilter.css';
// import { ApiData } from './ApiData';

const API_END_POINT = 'https://coursenatorapi.herokuapp.com/api/user/course/testingCourseData'

const SearchFilter = () => {
    
    const [apiData, setApiData] = useState([]);
    const [filterData, setFilterData] = useState({ provider: false, university: false, institute: false, cources: [] })
    const [cources, setCources] = useState([]);
    const [provider, setProvider] = useState({});

    useEffect(() => {
        Axios.get(API_END_POINT)
            .then(res => {
                let data = res.data.data
                setApiData(data);
                const providerCount = {};
                let dataLen = data.length
                data.map((item, i) => {
                    if (dataLen === i + 1) {
                        setTimeout(() => {
                            setProvider(providerCount)
                        }, 500);
                    }
                    return (
                        (item.provider in providerCount) ? providerCount[item.provider] += 1 : providerCount[item.provider] = 1
                    )
                })
                if (res.data.error) {
                    alert('something went wrong.')
                    console.log(res.data);
                }
            })
            .catch(e => {
                alert('something went wrong...Check console error!!')
                console.log(e)
                console.log(e.response)
            })
        // setApiData(ApiData().data)
        return () => {
            setApiData(false);
        }
    }, []);

    const onSearch = (e) => {
        setFilterData({})
        let searchValue = (e.target.value).toLowerCase()
        let providerDict = {}
        let universityDict = {}
        let instituteDict = {}
        let cources = []

        apiData.filter((val) => {
            if (val.name.toLowerCase().includes(searchValue) || val.provider.toLowerCase().includes(searchValue) || val.institute.toLowerCase().includes(searchValue) || val.university.toLowerCase().includes(searchValue)) {
                let provider = val.provider
                if (provider) {
                    (provider in providerDict) ? providerDict[provider] += 1 : providerDict[provider] = 1
                }
                else if (val.university) {
                    (val.university in universityDict) ? universityDict[val.university] += 1 : universityDict[val.university] = 1
                }
                else if (val.institute) {
                    (val.institute in instituteDict) ? instituteDict[val.institute] += 1 : instituteDict[val.institute] = 1
                }
                (cources.length !== 3) && cources.push(val)
            }
            return null
        })
        if (Object.keys(providerDict).length >= 1) {
            let maxProvider = Object.keys(providerDict).reduce((a, b) => providerDict[a] > providerDict[b] ? a : b)
            setFilterData({ ...filterData, provider: { name: maxProvider, totalCources: provider[maxProvider] } });
        }
        else if (Object.keys(universityDict).length >= 1) {
            let maxUniversity = Object.keys(universityDict).reduce((a, b) => universityDict[a] > universityDict[b] ? a : b)
            setFilterData({ ...filterData, university: { name: maxUniversity, totalCources: universityDict[maxUniversity] } });
        }
        else if (Object.keys(instituteDict).length >= 1) {
            let maxInstitute = Object.keys(instituteDict).reduce((a, b) => instituteDict[a] > instituteDict[b] ? a : b)
            setFilterData({ ...filterData, institute: { name: maxInstitute, totalCources: instituteDict[maxInstitute] } });
        }
        cources.length >= 1 && setCources(cources)
    }

    return (
        <Fragment>
            <div className='searchfiler__body'>
                <input
                    autoFocus
                    placeholder="Search cources..."
                    className="searchfilter__input"
                    onChange={onSearch} 
                />
                {apiData.length === 0 && <h6>Loding.....</h6>}
                {cources.length >= 1 &&
                    <div className='searchfilter__display'>
                        <Divider />
                        {filterData.provider &&
                            <p className='searchfilter_display__content'>
                                Provider : {filterData.provider.name} <br />
                                <small>Total Cources : {filterData.provider.totalCources}</small>
                            </p>
                        }
                        {filterData.institute &&
                            <p className='searchfilter_display__content'>
                                Institute : {filterData.institute.name} <br />
                                <small>Total Cources : {filterData.institute.totalCources}</small>
                            </p>
                        }
                        {filterData.university &&
                            <p className='searchfilter_display__content'>
                                University : {filterData.university.name} <br />
                                <small>Total Cources : {filterData.university.totalCources}</small>
                            </p>
                        }
                        <Divider />
                        {cources?.map((item, key) => {
                            return (
                                <Fragment key={key}>
                                    <strong className='searchfilter_display__content'>{item.name}</strong><br />
                                    <small>Institute : {item.institute}</small><br />
                                    <small>University : {item.university}</small><br />
                                    <small>Provider : {item.provider}</small>
                                    <Divider />
                                </Fragment>
                            )
                        })}
                    </div>
                }
            </div>
        </Fragment>
    )
}

export default SearchFilter;
