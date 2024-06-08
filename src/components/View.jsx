import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [news,changeNews]=useState({"articles":[]})
        const fetchNews=()=>{
            axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
                (response)=>{
                    changeNews(response.data)
                }
            ).catch().finally()
        }
        useEffect(()=>{
            fetchNews()
        },[])
   
    return (
        <div>
             <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {
                            news.articles.map(
                                (value,index)=>{
                                    return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <br></br>
                                    <div class="card" >
                                        <img src={value.urlToImage} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.title}</h5>
                                                <p class="card-text">{value.description}</p>
                                                <a href="#" class="btn btn-primary">More Details</a>
                                            </div>
                                    </div>
    
                                </div>
                                }
                            )
                           }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View