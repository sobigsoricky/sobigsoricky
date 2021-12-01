import { Divider } from '@material-ui/core';
import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import './SearchFilter.css';
// import { ApiData } from './ApiData';

const API_END_POINT = 'https://coursenatorapi.herokuapp.com/api/user/course/testingCourseData'
 

const countData = (data, dataLen, seter, type) => {
    // seter means useState's const value...
    const providerCount = {};
    const universityCount = {};
    const instituteCount = {};

    data.map((item, i) => {
        if (dataLen === i + 1) {
            setTimeout(() => {
                if (type === 'provider') {
                    seter(providerCount)
                }
                if (type === 'university') {
                    seter(universityCount)
                }
                if (type === 'institute') {
                    seter(instituteCount)
                }
            }, 500);
        }
        if (type === 'provider') {
            (item.provider.toLowerCase() in providerCount) ? providerCount[item.provider.toLowerCase()] += 1 : providerCount[item.provider.toLowerCase()] = 1;
        }
        else if (type === 'university') {
            (item.university.toLowerCase() in universityCount) ? universityCount[item.university.toLowerCase()] += 1 : universityCount[item.university.toLowerCase()] = 1;
        }
        else if (type === 'institute') {
            (item.institute.toLowerCase() in instituteCount) ? instituteCount[item.institute.toLowerCase()] += 1 : instituteCount[item.institute.toLowerCase()] = 1;
        }
        return null;
    })
}

const SearchFilter = (props) => {

    const [apiData, setApiData] = useState([]);
    const [filterData, setFilterData] = useState({ provider: false, university: false, institute: false, cources: [], subject: 0, subSubject: 0 })
    const [cources, setCources] = useState([]);

    const [provider, setProvider] = useState();
    const [institute, setInstitute] = useState({});
    const [university, setUniversity] = useState({});

    const [topFive, setTopFive] = useState([]);

    useEffect(() => {
        Axios.get(API_END_POINT)
            .then(res => {
                let data = res.data.data
                setApiData(data)

                let dataLen = data.length
                countData(data, dataLen, setProvider, 'provider')
                countData(data, dataLen, setUniversity, 'university')
                countData(data, dataLen, setInstitute, 'institute')

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

        // const data = ApiData().data

        return () => {
            setApiData(false);
        }
    }, []);
    const onSearch = (e) => {
        setFilterData({});
        setTopFive([])
        let searchValue = (e.target.value).toLowerCase();
        let providerDict = {};
        let universityDict = {};
        let instituteDict = {};
        let cources = [];

        var subjectCount = [];
        var subSubjectCount = [];

        if (searchValue === 'university') {
            const items = Object.keys(university).map(function (key) {
                return [key, university[key]];
            });

            // Sort the array based on the second element
            items.sort(function (first, second) {
                return second[1] - first[1];
            });
            setTopFive(items.slice(1, 6));
            setCources({});
        }
        else if (searchValue === 'provider') {
            const items = Object.keys(provider).map(function (key) {
                return [key, provider[key]];
            });

            // Sort the array based on the second element
            items.sort(function (first, second) {
                return second[1] - first[1];
            });
            setTopFive(items.slice(1, 6));
            setCources({});
        }
        else if (searchValue === 'institute') {
            const items = Object.keys(institute).map(function (key) {
                return [key, institute[key]];
            });

            // Sort the array based on the second element
            items.sort(function (first, second) {
                return second[1] - first[1];
            });
            setTopFive(items.slice(1, 6));
            setCources({});
        }
        else {
            for (let i = 0; i < apiData.length; i++) {
                const item = apiData[i]
                if (item.university?.toLowerCase() === searchValue) {
                    let universityCount = 0;

                    apiData.map((i) => {
                        if (searchValue === i.university.toLowerCase()) {
                            universityCount++
                            (cources.length !== 3) && cources.push(i);
                            (!subjectCount.includes(i.subject)) && (subjectCount.push(i.subject));
                            (!subSubjectCount.includes(i.subSubject)) && (subSubjectCount.push(i.subSubject));
                        }
                        return null
                    })
                    universityDict[searchValue] = universityCount
                    break;
                }
                else if (item.institute?.toLowerCase() === searchValue) {
                    let instituteCount = 0;
                    apiData.map((i) => {
                        if (searchValue === i.institute.toLowerCase()) {
                            instituteCount++
                            (cources.length !== 3) && cources.push(i);
                            (!subjectCount.includes(i.subject)) && (subjectCount.push(i.subject));
                            (!subSubjectCount.includes(i.subSubject)) && (subSubjectCount.push(i.subSubject));
                        }
                        return null
                    })
                    instituteDict[searchValue] = instituteCount
                    break;
                }
                else if ((item.provider?.toLowerCase().includes(searchValue) || item.name?.toLowerCase().includes(searchValue)) && (searchValue.length !== 0)) {
                    let provider = item.provider.toLowerCase()
                    if (provider) {
                        (provider in providerDict) ? providerDict[provider] += 1 : providerDict[provider] = 1
                    }
                    if (item.university) {
                        (item.university in universityDict) ? universityDict[item.university] += 1 : universityDict[item.university] = 1
                    }
                    if (apiData[i].institute) {
                        (item.institute in instituteDict) ? instituteDict[item.institute] += 1 : instituteDict[item.institute] = 1
                    }
                    (cources.length !== 3) && cources.push(item)
                }
            }
            if (Object.keys(providerDict).length >= 1) {
                let maxProvider = Object.keys(providerDict).reduce((a, b) => providerDict[a] > providerDict[b] ? a : b)
                apiData.map((i) => {
                    if (maxProvider === i.provider.toLowerCase()) {
                        (!subjectCount.includes(i.subject)) && (subjectCount.push(i.subject));
                        (!subSubjectCount.includes(i.subSubject)) && (subSubjectCount.push(i.subSubject));
                    }
                    return null
                })

                setFilterData({ provider: { name: maxProvider, totalCources: provider[maxProvider] }, subject: subjectCount.length, subSubject: subSubjectCount.length });
            }
            else if (Object.keys(universityDict).length >= 1) {
                let maxUniversity = Object.keys(universityDict).reduce((a, b) => universityDict[a] > universityDict[b] ? a : b)
                setFilterData({ university: { name: maxUniversity, totalCources: university[maxUniversity] }, subject: subjectCount.length, subSubject: subSubjectCount.length });
            }
            else if (Object.keys(instituteDict).length >= 1) {
                let maxInstitute = Object.keys(instituteDict).reduce((a, b) => instituteDict[a] > instituteDict[b] ? a : b)
                setFilterData({ institute: { name: maxInstitute, totalCources: institute[maxInstitute] }, subject: subjectCount.length, subSubject: subSubjectCount.length });
            }
        }

        if ((searchValue.length !== 0)) {
            cources.length >= 1 && setCources(cources)
        }
        else {
            setCources({})
        }
    }
    // props.setData({
    //     apiData:apiData,
    //     cources:cources,
    //     filterData:filterData,
    //     topFive:topFive
    // });
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
                                <b>Provider : {filterData.provider.name.toUpperCase()}</b> <br />
                                <small>Total Cources : {filterData.provider.totalCources}</small><br />
                                <small>Total Subject : {filterData.subject}</small><br />
                                <small>Total Sub-Subject : {filterData.subSubject}</small>
                            </p>
                        }
                        {filterData.institute &&
                            <p className='searchfilter_display__content'>
                                <b>Institute : {filterData.institute.name.toUpperCase()}</b> <br />
                                <small>Total Cources : {filterData.institute.totalCources}</small><br />
                                <small>Total Subject : {filterData.subject}</small><br />
                                <small>Total Sub-Subject : {filterData.subSubject}</small>
                            </p>
                        }
                        {filterData.university &&
                            <p className='searchfilter_display__content'>
                                <b>University : {filterData.university.name.toUpperCase()}</b> <br />
                                <small>Total Cources : {filterData.university.totalCources}</small><br />
                                <small>Total Subject : {filterData.subject}</small><br />
                                <small>Total Sub-Subject : {filterData.subSubject}</small>
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
                {topFive?.map((item, key) => {
                    return (
                        <div className='searchfilter__display' key={key}>
                            <strong className='searchfilter_display__content'>{item[0]}</strong><br />
                            <small>Total Cources : {item[1]}</small>
                            <br />
                            <br />
                            <Divider />
                        </div>
                    )
                })}

            </div>
        </Fragment >
    )
}

export default SearchFilter;