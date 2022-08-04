import React from 'react'
import {Link} from 'react-router-dom'


export default function NewsCard(props) {
  return (
    <React.Fragment>
            <div className='col-lg-4 col-md-6'>
            <div class="card shadow-lg my-2">
            <img src={props.img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <Link to={`/article/`+props.title}>
                <button className='btn btn-outline-success'>Read Now</button>
                </Link>
            </div>
            </div>
        </div>
    </React.Fragment>
  )
}
