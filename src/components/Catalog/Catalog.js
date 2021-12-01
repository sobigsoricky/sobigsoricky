import React, { useEffect, useState } from 'react';
import { Title } from '../../globalStyles';
import {
  CatalogSection,
  ListWrapper,
  Item,
  Topic,
  ListContainer,
  List,
  CatalogTitle,
  Catp,
} from './CatElements';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { googleAnalyticsAction, onGetData } from '../../views/apicalling';
import Loading from '../Loading/Lading';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    marginTop: '4%'
  },
  container: {
    width: '87%',
    margin: 'auto',
  }
}));

function Cat() {
  const classes = useStyles();
  const [AllSubject, setAllSubject] = useState([]);
  const [AllSubSubject, setAllSubSubject] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    googleAnalyticsAction();
    onGetData('api/user/subject/getAllDataNav').then((res) => {
      setAllSubject(res.data.data);
      onGetData('api/user/subject/getAllSubSubjectNav').then((res1) => {
        setAllSubSubject(res1.data.data);
        setLoadingData(false);

      }).catch((error) => {
        console.log('Error');
      });
    }).catch((error) => {
      console.log('Error');
    });
  }, [])
  return (

    <CatalogSection>
      <CatalogTitle>Catalog</CatalogTitle>
      <Catp>Our catalog is researched by e-learning experts. It will suit all your learning needs containing a total of 149 subjects. You can choose to learn any of the subjects or a particular topic depending upon your interest. Click on any of the subjects you like below and check out all the best-reviewed online courses.
        <p>Happy Learning!</p>
      </Catp>
      {loadingData == true ? <Loading name="Catalog" /> :
        <div className={classes.root}>
          <Grid container className={classes.container}>
            {AllSubject.map((x, k) => {
              if (x.name != "No Data") {
                return (
                  <Grid item xs={12} sm={6} lg={3} md={4}>
                    <List>
                      <Topic>{x.name}</Topic>
                      {AllSubSubject.map((p, q) => {
                        if (x._id == p.parent_id && x._id != 0) {
                          if (p.name != "No Data") {
                            return (
                              <>
                                <Item to={`/course/${p.slug}`}>{p.name}</Item>
                              </>
                            )
                          }

                        }
                      })}
                    </List>
                  </Grid>
                )
              }
            })}
          </Grid>
        </div>
      }
    </CatalogSection>
  );
}
export default Cat;