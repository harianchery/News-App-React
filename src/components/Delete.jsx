import React, { useState } from 'react'

const Delete = () => {
    const [news,changeNews]=useState(
        {
            "Title":""
        }
    )
    const InputHandler=(event)=>{
        changeNews({...news,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(news)
    }
        
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" name="Title" value={news.name} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger" onClick={readValue}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete