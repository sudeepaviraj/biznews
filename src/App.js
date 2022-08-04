import Homepage from './Components/Homepage';
import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import Navbar from './Components/Navbar';
import {Routes,Route,useParams} from 'react-router-dom'
import { Helmet } from 'react-helmet';


function App() {

  const [Gainers,SetGainers] = useState([]);
  const [Losers,SetLosers] = useState([]);
  const [Currency,SetCurrency] = useState([])
  const [ASPI,SetASPI] = useState([])
  const [SnpSL,SetSnpSL] = useState([])
  const [Articles,SetArticles] = useState([])
  const [Crude,SetCrude] = useState([])

  useEffect(()=>{
       axios.get("https://loginregister-3da57-default-rtdb.asia-southeast1.firebasedatabase.app/gainers.json")
      .then(res=>{SetGainers(Object.values(res.data))})
      axios.get("https://loginregister-3da57-default-rtdb.asia-southeast1.firebasedatabase.app/losers.json")
      .then(res=>{SetLosers(Object.values(res.data))})
      axios.get("https://loginregister-3da57-default-rtdb.asia-southeast1.firebasedatabase.app/currency.json")
      .then(res=>{SetCurrency(Object.values(res.data))})
      axios.get("https://loginregister-3da57-default-rtdb.asia-southeast1.firebasedatabase.app/aspi.json")
      .then(res=>{SetASPI(Object.values(res.data))})
      axios.get("https://loginregister-3da57-default-rtdb.asia-southeast1.firebasedatabase.app/snp.json")
      .then(res=>{SetSnpSL(Object.values(res.data))})
      axios.get("https://loginregister-3da57-default-rtdb.asia-southeast1.firebasedatabase.app/articles.json")
      .then(res=>{SetArticles(Object.values(res.data))})
      axios.get("https://loginregister-3da57-default-rtdb.asia-southeast1.firebasedatabase.app/crudeoil.json")
      .then(res=>{SetCrude(Object.values(res.data))})

  },[])

  const [SingleImageurl,SetSingleImageurl] = useState("");
  const [SinglePostTitle,SetSinglePostTitle] = useState("")
  const [SinglePostDesc,SetSinglePostDesc] = useState("")

  useEffect(()=>{
    
  },[])

  const SinglePost = () => {
    let {title}  = useParams()

    var i = 0
    while (i<Articles.length){
      if(Articles[i]["title"]===title){
        SetSingleImageurl(Articles[i]["imgurl"])
        SetSinglePostDesc(Articles[i]["desc"])
        SetSinglePostTitle(Articles[i]["title"])
      }
      i=i+1
    }

    return (
      <React.Fragment>
        <div className='container'>
          <div className='d-flex justify-content-center'>
          <img className='img-thumbnail single-img' src={SingleImageurl} />
          </div>
          <h3 className='single-title'>{SinglePostTitle}</h3>

          <p className='single-desc'>{SinglePostDesc}</p>
        </div>
      </React.Fragment>
    )

    
  }

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage Gainers={Gainers} Losers={Losers} Articles={Articles} Crude={Crude} Currency={Currency} ASPI={ASPI} SnpSL={SnpSL} />} />
        <Route path='/article/:title' element={<SinglePost />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
