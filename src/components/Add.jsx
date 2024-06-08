import React, { useState } from 'react'

const Add = () => {
    let [news,setNews]=useState(
        {
            "Title":"",
            "Date":"",
            "Category":"",
            "Description":"",
        }
    )
    let inputHandler=(event)=>{
        setNews({...news,[event.target.name]:event.target.value})
    }
    let readvalue=()=>{
        console.log(news)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" name='Title' value={news.Title}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date</label>
                            <input type="date" className="form-control" name='Date' value={news.Date}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Category</label>
                            <select name="Category" id="" className="form-control" value={news.Category}onChange={inputHandler}>
                                <option value="">Entertainment</option>
                                <option value="">General</option>
                                <option value="">Sports</option>
                                <option value="">Movies</option>
                                <option value="">Politics</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea type="text" className="form-control" name='Description' value={news.Description}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>Add New</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add