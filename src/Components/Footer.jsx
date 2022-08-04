import React from 'react'

export default function Footer() {
  return (
    <div className='row bg-dark text-light p-3'>
        <div className='col-lg-4 p-2 col-sm-12'>
            <p className='about-us'>BiZaRd</p>
            <h6>About Us</h6>
            <p>Daily Mirror is a daily English-language newspaper published in Colombo, Sri Lanka, by Wijeya Newspapers. Its Sunday counterpart is the Sunday Times. Its sister newspaper on financial issues is the Daily FT</p>
        </div>
        <div className='col-lg-4 p-2 col-sm-12'>
        <p className='about-us'>Links</p>
            <ul>
                <li>Articles</li>
                <li>Cartoons</li>
                <li>Contact Us</li>
                <li>Locate Us</li>

            </ul>
        </div>
        <div className='col-lg-4 p-2 col-sm-12'>
            <p className='about-us'>Locate Us</p>
            <div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><a href="https://www.embedgooglemap.net">google maps on my website</a></div></div>
        </div>
    </div>
  )
}
