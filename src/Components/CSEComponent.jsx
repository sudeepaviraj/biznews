import React from 'react'

export default function CSEComponent(props) {

  console.log(props.currency)

  return (
    <React.Fragment>
          <div className='container my-3'>
            <div className='row d-flex justify-content-between'>
              <div className='col-lg-4 bg-light p-2 rounded-3'>
                <h4 className='text-center'>CSE Top Gainers</h4>
                <div className='shadow-lg rounded-3'>
                  <table className='table table-hover rounded'>
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Change(Rs)</th>
                        <th>Change(%)</th>
                      </tr>
                    </thead>
                    { props.data.length > 0 &&
                    <tbody>
                      {props.data[0].map((data)=>
                      <tr key={data.id}>
                        <td>{data.symbol}</td>
                        <td>{data.price.toFixed(2)}</td>
                        <td><span className='badge bg-success'><i class="fa-solid fa-caret-up me-1"></i>{data.change.toFixed(2)}</span></td>
                        <td><span className='badge bg-success'><i class="fa-solid fa-caret-up me-1"></i>{data.changePercentage.toFixed(2)}%</span></td>
                      </tr>
                      )}
                    </tbody>
                    }
                  </table>
                </div>
              </div>
              <div className='col-lg-4 bg-light p-2 rounded-3'>
                <h3 className='text-center'>Indices</h3>
                {props.aspi.length>0 &&
                <React.Fragment>
                  <div className='rounded-3 shadow-lg'>
                    <h4 className='text-center'>ASPI</h4>
                    <h3 className='text-center my-3'>
                      {props.aspi[0]["value"]}
                    </h3>
                    <div className='d-flex justify-content-center'>
                      {props.aspi[0]["change"]>0 &&
                    <h6><span className='badge bg-success'><i class="fa-solid fa-caret-up me-1"></i>{props.aspi[0]["change"]}</span></h6> 
                      }
                       {props.aspi[0]["change"]<0 &&
                    <h6><span className='badge bg-danger'><i class="fa-solid fa-caret-down me-1"></i>{props.aspi[0]["change"]}</span></h6> 
                      }
                    <i class="fa-solid fa-circle mx-2"></i>
                    {props.aspi[0]["change"]>0 &&
                    <h6><span className='badge bg-success'><i class="fa-solid fa-caret-up me-1"></i>{props.aspi[0]["percentage"].toFixed(2)}%</span></h6>  
                    } 
                    {props.aspi[0]["change"]<0 &&
                    <h6><span className='badge bg-danger'><i class="fa-solid fa-caret-down me-1"></i>{props.aspi[0]["percentage"].toFixed(2)}%</span></h6>  
                    } 
                    </div>
                  </div>
                </React.Fragment>
                }
                {props.snp.length>0 &&
                <React.Fragment>
                  <div className='rounded-3 mt-3 shadow-lg'>
                    <h4 className='text-center'>S&P SL20</h4>
                    <h3 className='text-center my-3'>
                      {props.snp[0]["value"]}
                    </h3>
                    <div className='d-flex justify-content-center'>
                      {props.snp[0]["change"]>0 &&
                    <h6><span className='badge bg-success'><i class="fa-solid fa-caret-up me-1"></i>{props.snp[0]["change"]}</span></h6> 
                      }
                       {props.snp[0]["change"]<0 &&
                    <h6><span className='badge bg-danger'><i class="fa-solid fa-caret-down me-1"></i>{props.snp[0]["change"]}</span></h6> 
                      }
                    <i class="fa-solid fa-circle mx-2"></i>
                    {props.snp[0]["change"]>0 &&
                    <h6><span className='badge bg-success'><i class="fa-solid fa-caret-up me-1"></i>{props.snp[0]["percentage"].toFixed(2)}%</span></h6>  
                    } 
                    {props.aspi[0]["change"] &&
                    <h6><span className='badge bg-danger'><i class="fa-solid fa-caret-down me-1"></i>{props.aspi[0]["percentage"].toFixed(2)}%</span></h6>  
                    } 
                    </div>
                  </div>
                </React.Fragment>
                }
                <div className='rounded-3 mt-3 shadow-lg'>
                    <h4 className='text-center'>Foreign Currencies</h4>
                    <table className='table table-hover'>
                      <thead className='text-center'>
                        <tr>
                          <th>Symbol</th>
                          <th>Rate</th>
                        </tr>
                      </thead>
                      {props.currency.length>0&&
                      <tbody>
                      {props.currency.map((curr)=>
                      <tr className='text-center' key={curr.name}>
                        <td>{curr.name}</td>
                        <td>{curr.rate.toFixed(2)}</td>
                      </tr>
                      )}
                      </tbody>
                      }
                    </table>
                </div>
              </div>
              
              <div className='col-lg-4 bg-light p-2'>
                <h4 className='text-center'>CSE Top Losers</h4>
                <div className='shadow-lg rounded-3'>
                  <table className='table table-hover rounded'>
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Change(Rs)</th>
                        <th>Change(%)</th>
                      </tr>
                    </thead>
                    { props.lose.length > 0 &&
                    <tbody>
                      {props.lose[0].map((lose)=>
                      <tr key={lose.id}>
                        <td>{lose.symbol}</td>
                        <td>{lose.price.toFixed(2)}</td>
                        <td><span className='badge bg-danger'><i class="fa-solid fa-caret-down me-1"></i>{lose.change.toFixed(2)}</span></td>
                        <td><span className='badge bg-danger'><i class="fa-solid fa-caret-down me-1"></i>{lose.changePercentage.toFixed(2)}%</span></td>
                      </tr>
                      )}
                    </tbody>
                    }
                  </table>
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}
