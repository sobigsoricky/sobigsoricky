import React, { Component } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Paper,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Suggestion from "../suggestion/Suggestion1";
import { onGetData } from "../../views/apicalling";
import { Redirect } from "react-router-dom";
import  UserContext  from "../../context";
import ReactLoading from "react-loading";

const option = [
  {
    id: 1,
    name: "Full Stack Web Development with Angular Specialization",
    university: "The Hong Kong University of Science & Technology",
    provider: "Coursera",
    rating: "3",
  },
  {
    id: 2,
    name: "Django-3 Full Stack Websites with Python Web Develop...",
    university: "University",
    provider: "Coursera",
    rating: "3",
  },
  {
    id: 3,
    name: "Full Stack Web Development using Spring Boot Angular...",
    university: "University",
    provider: "Coursera",
    rating: "3",
  },
];
 
export class SearchbarNav extends Component {
  static contextType = UserContext
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      apiData: [],
      filterData: {
        provider: false,
        university: false,
        institute: false,
        cources: [],
        subject: 0,
        subSubject: 0
      },
      cources: [],      
      provider: {},
      university: {},
      institute: {},
      topFive: [],
      subFilter:false,
      clickedOutside: false,
      redirectIs: false,
      limit:100,
      loadinT:false,
    };
    this.getInfo = this.getInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitBtn = this.onSubmitBtn.bind(this);
  }

  getInfo = async () => {
    await onGetData("api/user/search/" + this.state.query + "/3/0")
      .then((res) => {
        if (res.data.error == false) {
          this.setState({
            results: res.data.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  countData = (data, dataLen, type) => {
    // seter means useState's const value...
    const providerCount = {};
    const universityCount = {};
    const instituteCount = {};

    data.map((item, i) => {
      if (dataLen === i + 1) {
        setTimeout(() => {
          if (type === 'provider') {
            this.setState({ provider: providerCount })
          }
          if (type === 'university') {
            this.setState({ university: universityCount })
          }
          if (type === 'institute') {
            this.setState({ institute: instituteCount })
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
  handleInputChange = (e) => {
    this.getInfo();
    this.setState(
      {
        query: e.target.value,
        clickedOutside: false,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  componentDidMount() {
    
    if (this.context.NavData && this.context.NavData.length > 0) {
      const data = this.context.NavData;

      this.setState({ apiData: data });
      const providerCount = {};
      let dataLen = data.length;
      this.countData(data, dataLen, 'provider')
      this.countData(data, dataLen, 'university')
      this.countData(data, dataLen, 'institute')
      data.map((item, i) => {
        if (dataLen === i + 1) {
          setTimeout(() => {
            this.setState({ provider: providerCount });
          }, 500);
        }
        return item.provider in providerCount
          ? (providerCount[item.provider] += 1)
          : (providerCount[item.provider] = 1);
      });
    } else {
      onGetData("api/user/course/testingCourseData/"+this.state.limit+"/0")
        .then((res) => {
          if(res.data.data.length>0){  
          let data = res.data.data;
          this.setState({ apiData: data });
          const providerCount = {};
          let dataLen = data.length;
          this.countData(data, dataLen, 'provider')
          this.countData(data, dataLen, 'university')
          this.countData(data, dataLen, 'institute')
          this.loadData1();
          // data.map((item, i) => {
          //   if (dataLen === i + 1) {
          //     setTimeout(() => {
          //       this.setState({ provider: providerCount });
          //     }, 500);
          //   }
          //   return item.provider in providerCount
          //     ? (providerCount[item.provider] += 1)
          //     : (providerCount[item.provider] = 1);
          // });
           
          }
        })
        .catch((e) => {
          // alert('something went wrong...Check console error!!')
          console.log("r", e);
          console.log(e.response);
        });
    }
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  loadData1=()=>{
    onGetData("api/user/course/testingCourseData/"+(parseInt(this.state.limit)+500)+"/0")
        .then((res) => {
         
          if(res.data.error==false && res.data.data.length>0){         
          let data = res.data.data;
          this.setState({ apiData: data,limit: (parseInt(this.state.limit)+500)});
          const providerCount = {};
          let dataLen = data.length;
          this.countData(data, dataLen, 'provider')
          this.countData(data, dataLen, 'university')
          this.countData(data, dataLen, 'institute')
          this.loadData1();
          // data.map((item, i) => {
          //   if (dataLen === i + 1) {
          //     setTimeout(() => {
          //       this.setState({ provider: providerCount });
          //     }, 500);
          //   }
          //   return item.provider in providerCount
          //     ? (providerCount[item.provider] += 1)
          //     : (providerCount[item.provider] = 1);
          // });
          }
          // if (res.data.error) {
          //   alert("something went wrong.");
          //   console.log(res.data);
          // }
        })
        .catch((e) => {
          // alert('something went wrong...Check console error!!')
          console.log("r", e);
          console.log(e.response);
        });
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  myRef = React.createRef();

  handleClickOutside = (e) => {
    if (!this.myRef.current.contains(e.target)) {
      this.setState({ clickedOutside: true });
    }
  };
  onSubmitBtn = (e) => {
    e.preventDefault();
    this.setState({ redirectIs: true });
  };
  onSearch = (e) => {
    this.setState({ filterData: {}, query: e.target.value.toLowerCase(), topFive: [] ,subFilter:false,loadinT:true});
    let searchValue = e.target.value.toLowerCase();
    var university=this.state.university;
    var institute=this.state.institute;
    var provider=this.state.provider;
    let providerDict = {};
    let universityDict = {};
    let instituteDict = {};
    let cources = [];

    var subjectCount = [];
    var subSubjectCount = [];

    if (!searchValue == '' && searchValue.trim() === 'university') {
      
      const items = Object.keys(university).map(function (key) {
       
        return [key, university[key]];
      });

      // Sort the array based on the second element
      items.sort(function (first, second) {
        return second[1] - first[1];
      });

      this.setState({ topFive: items.slice(1, 6), cources: [] });
       
    }
    else if (!searchValue == '' && searchValue.trim() === 'provider') {
      const items = Object.keys(provider).map(function (key) {
        return [key, provider[key]];
      });

      // Sort the array based on the second element
      items.sort(function (first, second) {
        return second[1] - first[1];
      });
      // setTopFive(items.slice(1, 6));
      // setCources({});
      this.setState({ topFive: items.slice(1, 6), cources:[] });
    }
    else if (!searchValue == '' && searchValue.trim() === 'institute') {
      const items = Object.keys(institute).map(function (key) {
        return [key, institute[key]];
      });

      // Sort the array based on the second element
      items.sort(function (first, second) {
        return second[1] - first[1];
      });
      // setTopFive(items.slice(1, 6));
      // setCources({});
      this.setState({ topFive: items.slice(1, 6), cources: [] });

    }
    else {
      for (let i = 0; i < this.state.apiData.length; i++) {
        const item = this.state.apiData[i]
        if (item.subject?.toLowerCase().includes(searchValue) || item.subSubject?.toLowerCase().includes(searchValue)) {
                    (!Boolean(this.state.subFilter))
                        &&this.setState({
          subFilter: {
            ...this.state.subFilter,
            provider: item.provider, subject: item.subject, subSubject: item.subSubject, university: item.university, institute: item.institute 
          },

        });
 
                }
        if (item.university?.toLowerCase() === searchValue) {
          let universityCount = 0;

          this.state.apiData.map((i) => {
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
          this.state.apiData.map((i) => {
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
          if (this.state.apiData[i].institute) {
            (item.institute in instituteDict) ? instituteDict[item.institute] += 1 : instituteDict[item.institute] = 1
          }
          (cources.length !== 3) && cources.push(item)
        }
      }
      if (Object.keys(providerDict).length >= 1) {
        let maxProvider = Object.keys(providerDict).reduce((a, b) =>
          providerDict[a] > providerDict[b] ? a : b
        );
        this.state.apiData.map((i) => {
          if (maxProvider === i.provider.toLowerCase()) {
            (!subjectCount.includes(i.subject)) && (subjectCount.push(i.subject));
            (!subSubjectCount.includes(i.subSubject)) && (subSubjectCount.push(i.subSubject));
          }
          return null
        })
        this.setState({
          filterData: {
            ...this.state.filterData,
            provider: {
              name: maxProvider,
              totalCources: providerDict[maxProvider],
            },
            subject: subjectCount.length, subSubject: subSubjectCount.length
          },

        });
      } else if (Object.keys(universityDict).length >= 1) {
        let maxUniversity = Object.keys(universityDict).reduce((a, b) =>
          universityDict[a] > universityDict[b] ? a : b
        );
        this.setState({
          filterData: {
            ...this.state.filterData,
            university: {
              name: maxUniversity,
              totalCources: universityDict[maxUniversity],
            },
            subject: subjectCount.length, subSubject: subSubjectCount.length
          },
        });
      } else if (Object.keys(instituteDict).length >= 1) {
        let maxInstitute = Object.keys(instituteDict).reduce((a, b) =>
          instituteDict[a] > instituteDict[b] ? a : b
        );
        this.setState({
          filterData: {
            ...this.state.filterData,
            institute: {
              name: maxInstitute,
              totalCources: instituteDict[maxInstitute],
            },
            subject: subjectCount.length, subSubject: subSubjectCount.length
          },
        });
      }
    }
    // this.state.apiData.filter((val) => {
    //   if (
    //     val.name.toLowerCase().includes(searchValue) ||
    //     val.provider.toLowerCase().includes(searchValue) ||
    //     val.institute.toLowerCase().includes(searchValue) ||
    //     val.university.toLowerCase().includes(searchValue)
    //   ) {
    //     let provider = val.provider;
    //     if (provider) {
    //       provider in providerDict
    //         ? (providerDict[provider] += 1)
    //         : (providerDict[provider] = 1);
    //     } else if (val.university) {
    //       val.university in universityDict
    //         ? (universityDict[val.university] += 1)
    //         : (universityDict[val.university] = 1);
    //     } else if (val.institute) {
    //       val.institute in instituteDict
    //         ? (instituteDict[val.institute] += 1)
    //         : (instituteDict[val.institute] = 1);
    //     }
    //     cources.length !== 3 && cources.push(val);
    //   }
    //   return null;
    // });
    if ((searchValue.length !== 0)) {
      cources.length >= 1 && this.setState({ cources: cources ,loadinT:false});
    }
    else {
      this.setState({ cources: {},subFilter:false ,loadinT:false})
    }
  };
  render() {
    const classes = this.props.classes;
    return (
      <>
        {this.state.redirectIs == true ? (
          <Redirect to={`/search/${this.state.query}`} />
        ) : (
          ""
        )}
        <div
         className={classes.mainouter}
          ref={this.myRef}
        >
          <Paper
            component="form"
            onSubmit={(e) => this.onSubmitBtn(e)}
            className={`${classes.root} ${classes.textfield} textfieldsearch1`}
          >
            <InputBase
              className={classes.input}
              placeholder={`Search thousands of courses`}
              // onChange={(e) => this.handleInputChange(e)}
              onChange={(e) => this.onSearch(e)}

              onClick={() => {
                this.setState({ clickedOutside: false });
              }}
              // disabled={this.state.apiData.length>0?false:true}

            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
               {this.state.loadinT===true? <ReactLoading   type="bars" color="#5C0090" />:<SearchIcon />}
            </IconButton>
          </Paper>

          <Suggestion
            courseData={this.state.cources}
            instituteData={this.state.institute}
            universityData={this.state.university}
            topFiveData={this.state.topFive}
            filterData={this.state.filterData}
            subFilter={this.state.subFilter}
            results={this.state.results}
            text={this.state.query}
            isOpen={this.state.clickedOutside}
            classes={classes}
            search="navsearch"
          />
        </div>
      </>
    );
  }
}

export default SearchbarNav;
