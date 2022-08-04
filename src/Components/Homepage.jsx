import React from 'react'
import CSEComponent from './CSEComponent';
import NewsComponent from './NewsComponent';
import Slider from './Slider';
import Marquee from './Marquee';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

export default function Homepage(props) {
  return (
    <React.Fragment>
        <Slider data={props.Articles} />
          <Marquee data= {props.Crude}/>
          <CSEComponent data={props.Gainers} lose={props.Losers} aspi={props.ASPI} snp = {props.SnpSL} currency = {props.Currency} />
          <NewsComponent articles = {props.Articles} />
          <Footer />
    </React.Fragment>
  )
}
