import React from 'react'
import NewsCard from './NewsCard'

export default function NewsComponent(props) {
  return (
    <React.Fragment>
        {props.articles.length>0 && 
        <div className='container bg-light'>
            <h3 className='text-center'>Today Local News</h3>
        <div className='row'>
            {props.articles.map(article=>
            <NewsCard title={article.title} img = {article.imgurl} desc = {article.desc}/>    
            )}
        </div>
        </div>
        }
    </React.Fragment>
  )
}
