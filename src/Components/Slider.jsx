import React from 'react'


export default function Slider(props) {

  return (
   <React.Fragment>
    {props.data.length>0 &&
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="5000">
                <div className='row p-3'>
                    <div className='texts col-lg-6'>
                    <h1 className='title-text'>
                    {props.data[0]["title"]}
                    </h1>
                    <p className='desc-text'>
                    {props.data[0]["desc"]}
                    </p>
                    </div>
                    <div className='col-lg-6'>
                    <img src={props.data[0]["imgurl"]} class="d-block w-100 slider-img" alt="..."/>
                    </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
              <div className='row p-3'>
                    <div className='texts col-lg-6'>
                    <h1 className='title-text'>
                    {props.data[1]["title"]}
                    </h1>
                    <p className='desc-text'>
                    {props.data[1]["desc"]}
                    </p>
                    </div>
                    <div className='col-lg-6'>
                    <img src={props.data[1]["imgurl"]} class="d-block w-100 slider-img" alt="..."/>
                    </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
              <div className='row p-3'>
                    <div className='texts col-lg-6'>
                    <h1 className='title-text'>
                    {props.data[2]["title"]}
                    </h1>
                    <p className='desc-text'>
                    {props.data[2]["desc"]}
                    </p>
                    </div>
                    <div className='col-lg-6'>
                    <img src={props.data[2]["imgurl"]} class="d-block w-100 slider-img" alt="..."/>
                    </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    }
   </React.Fragment>
  )
}
