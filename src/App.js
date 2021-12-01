import { ThemeProvider } from "@material-ui/core/styles"
import GlobalStyle from "./globalStyles"
import { theme } from "./theme"

import React, { Suspense, useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import "./assets/css/styles.css"

import { Newfooter, Offerads } from "./components"
import { UserProvider } from "./context"
import { onGetData } from "./views/apicalling"

const Home = React.lazy(() => import("./views/Home"))
const Catalog = React.lazy(() => import("./views/catalogPage"))
const Course = React.lazy(() => import("./views/courseList"))
const ProductPage = React.lazy(() => import("./views/ProductPage"))
const CourseList = React.lazy(() => import("./views/courseList"))
const University = React.lazy(() => import("./views/Universities"))
const UniversityList = React.lazy(() => import("./views/UniversityList"))
const Provider = React.lazy(() => import("./views/Provider"))
const ProviderList = React.lazy(() => import("./views/ProviderList"))
const Language = React.lazy(() => import("./views/Language"))
const LanguageList = React.lazy(() => import("./views/LanguageList"))
const About = React.lazy(() => import("./views/About"))
const Contact = React.lazy(() => import("./views/ContactPage"))
const Faq = React.lazy(() => import("./views/Faq"))
const Terms = React.lazy(() => import("./views/Terms"))
const Blogs = React.lazy(() => import("./views/Blogs"))
const News = React.lazy(() => import("./views/News"))
const BlogPost = React.lazy(() => import("./views/BlogPost"))
const SearchList = React.lazy(() => import("./views/searchList"))
const Profile = React.lazy(() => import("./views/Profile"))
const CustomizePage = React.lazy(() => import("./views/CustomizePage"))
const Customize = React.lazy(() => import("./views/Customization"))
const Recommend = React.lazy(() => import("./views/Recommend"))
const TopCourses = React.lazy(() => import("./views/TopCourses"))
const FaqProvider = React.lazy(() => import("./views/FaqProvider"))
const ProviderInfo = React.lazy(() => import("./views/providerInfo"))
const Discount = React.lazy(() => import("./views/Discount"))
const Whataretracks = React.lazy(() => import("./views/comingsoon"))
const Viewexperttrack = React.lazy(() => import("./views/Viewexpertrack"))
const Viewtrack = React.lazy(() => import("./views/Viewtrack"))
const Trackgallery = React.lazy(() => import("./views/Trackgallery"))
const Followexperttrack = React.lazy(() => import("./views/Followexperttrack"))
const Customizeyourpath = React.lazy(() => import("./views/Customizeyourpath"))
const Choosingsubsubject = React.lazy(() =>
  import("./views/Choosingsubsubject")
)
const Resources = React.lazy(() => import("./views/Resources"))
const Freecerti = React.lazy(() => import("./views/Freecerti"))
const Welcome = React.lazy(() => import("./views/Welcome"))
const Redirect = React.lazy(() => import("./views/Redirect"))
const Pnf = React.lazy(() => import("./views/Pnf"))
const LoadingPage = React.lazy(() => import("./components/Loading/Lading"))

function App() {
  require("typeface-nunito")
  require("typeface-skranji")
  require("typeface-sora")
  const [NavData, setNavData] = useState([])
  const [AllSubject, setAllSubject] = useState([])
  const [AllSubSubject, setAllSubSubject] = useState([])
  useEffect(() => {
    onGetData("api/user/subject/getAllDataNav")
      .then((res) => {
        setAllSubject(res.data.data)
      })
      .catch((error) => {
        console.log("Error")
      })
    onGetData("api/user/subject/getAllSubSubjectNav")
      .then((res1) => {
        setAllSubSubject(res1.data.data)
      })
      .catch((error) => {
        console.log("Error")
      })
    onGetData("api/user/course/testingCourseData/all/0").then((res) => {
      if (res.data.error == false) {
        setNavData(res.data.data)
      } else {
        setNavData(NavData)
      }
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename='/'>
        <ScrollToTop title='top'>
          <UserProvider
            value={{
              NavData: NavData,
              AllSubject: AllSubject,
              AllSubSubject: AllSubSubject,
            }}
          >
            <Suspense fallback={<div></div>}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />

                <Route path='/catalog' component={Catalog}></Route>
                <Route
                  path='/course/:name'
                  exact={true}
                  component={Course}
                ></Route>
                <Route path='/product/:slug' component={ProductPage}></Route>
                <Route path='/courseList' component={CourseList}></Route>
                <Route path='/university' component={University}></Route>
                <Route
                  path='/university-list/:name'
                  component={UniversityList}
                ></Route>
                <Route path='/provider' component={Provider}></Route>
                <Route
                  path='/provider-list/:name'
                  component={ProviderList}
                ></Route>
                <Route path='/language' component={Language}></Route>
                <Route
                  path='/language-list/:name'
                  component={LanguageList}
                ></Route>
                <Route path='/about' component={About} />
                <Route path='/contactus' component={Contact}></Route>
                <Route path='/faq' component={Faq}></Route>
                <Route path='/termsandconditions' component={Terms}></Route>
                <Route path='/blogs' component={Blogs} />
                <Route path='/newsandarticles' component={News}></Route>
                <Route path='/blogpost/:slug' component={BlogPost}></Route>
                <Route path='/search/:name' component={SearchList}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/customizepage' component={CustomizePage}></Route>
                <Route path='/customizenow' component={Customize}></Route>
                <Route path='/recommendedcourses' component={Recommend}></Route>
                <Route path='/topcourses' component={TopCourses}></Route>
                <Route path='/faqprovider' component={FaqProvider}></Route>
                <Route path='/providerinfo' component={ProviderInfo}></Route>
                <Route path='/discount' component={Discount}></Route>
                <Route path='/whataretracks' component={Whataretracks}></Route>
                <Route
                  path='/viewexperttrack'
                  component={Viewexperttrack}
                ></Route>
                <Route path='/viewtrack' component={Viewtrack}></Route>
                <Route path='/trackgallery' component={Trackgallery}></Route>
                <Route
                  path='/followexperttrack'
                  component={Followexperttrack}
                />
                <Route
                  path='/customizeyourpath'
                  component={Customizeyourpath}
                />
                <Route
                  path='/choosingsubsubject/:text'
                  component={Choosingsubsubject}
                />
                <Route path='/recources' component={Resources}></Route>
                {/* <Route path="/testing" component={Testing}></Route> */}
                <Route path='/freecertificate' component={Freecerti}></Route>
                <Route path='/welcome' component={Welcome}></Route>
                <Route path='/redirect' component={Redirect}></Route>
                <Route component={Pnf} />
              </Switch>
            </Suspense>
          </UserProvider>
        </ScrollToTop>

        {/* <Newfooter /> */}
        {/* <Offerads /> */}
      </Router>
    </ThemeProvider>
  )
}
export default App
