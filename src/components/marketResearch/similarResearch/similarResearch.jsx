import React from "react"
import classes from "./similarResearch.module.css"
import {useSelector} from 'react-redux';

const SimilarResearch=()=>{
    const language = useSelector(state => state.langReducer.lang)
    return(
        <div className={classes.blockTitle}>
            {language === 1 && <span>Похожие исследования</span>}
            {language === 2 && <span>Products related to this item</span>}
            {language === 3 && <span>Окшош изилдөөлөр</span>}
        </div>
    )
}
export default SimilarResearch;