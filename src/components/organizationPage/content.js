import React from "react"
import {Route,Switch} from "react-router-dom"
import ResearchCards from "./researchCards"
import SubmitBtn from "./submitBtn/submitBtn"
import classes from "./organizationPage.module.css"
import DetailMarket from "./detailMarket/detailMarket"
import AddReseach from "./addResearch"
import {useSelector} from 'react-redux';

const Content=()=>{
    const language = useSelector(state => state.langReducer.lang)
    return(
        <Switch>
            <Route exact path="/organization-page">
            <SubmitBtn/>    <div className={classes.cardTitle}>
                {language === 1 && <span>Мои исследования</span>}
                {language === 2 && <span>My products</span>}
                {language === 3 && <span>Менин изилдөөлөрүм</span>}
            </div>
            <ResearchCards/>
            </Route>
          <Route path="/organization-page/submit-research"><AddReseach/></Route>
          <Route path="/organization-page/detail-card/:id"><DetailMarket/></Route>
        </Switch>
        
    )
}
export default Content;