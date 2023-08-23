import React,{useEffect, useState}  from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from "axios";

const mijor = () => {

  return (
    <body>
         <div class="container-fluid mt-5">
        <h1 class="bg-dark bg-gradient" style="height:150px">heading</h1>
        <div class="row">
        <div class="card col-3 m-2">
            <div class="card-header">
            <h5 class="card-title">Product Name</h5>
            </div>
            <div class="card-body">
                <img src="images/a.jpg" class="img-fluid"/>
                <p class="card-text">
                Product Price<br/>
                Description
                </p>
            <a name="" id="" class="card-link" href="#" role="button">Button</a>
            </div>
            <div class="card-footer">
                <input name="" id="" class="btn btn-primary" type="button" value="Button"/>
            </div>
        </div>

        <div class="card col-3 m-2 bg-primary">
            <div class="card-body">
                <img src="images/a.jpg" class="img-fluid"/>
                <p class="card-text">
                Product Price<br/>
                Description
                </p>
                <input name="" id="" class="btn btn-primary" type="button" value="Add to cart"/>
            </div>
        </div>

        <div class="card col-3 m-2">
            <img src="images/a.jpg" class="card-img-top"/>
            <div class="card-body">              
                <p class="card-text">
                Product Price<br/>
                Description
                </p>
                <input name="" id="" class="btn btn-primary" type="button" value="Add to cart"/>
            </div>
        </div>

        <div class="card col-3 m-2">
            <img src="images/a.jpg" class="card-img-top"/>
            <div class="card-img-overlay">              
                <p class="card-text text-white">
                Product Price<br/>
                Description
                </p>
                <input name="" id="" class="btn btn-primary" type="button" value="Add to cart"/>
            </div>
        </div>
    </div>
    </div>    
    </body>
    )
}

export default mijor