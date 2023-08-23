import React, { useEffect,useState } from "react";
import { render } from "react-dom";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik'
import CustConnection from './ConnectionCustomer/CustConnection';

const validate = (supData) => {
    const errors = {}  
     if (!supData.feedback)
        errors.feedback = "Pease write feedback!"

    if (supData.rating==0)
        errors.rating = "Rating Required!"

    return errors
}
function CFeedback() {
    const{id} =useParams()
    useEffect(() => {
        document.title = "HomeEase || Feedback"
    }, [])
   

    let navigate = useNavigate()

   

    const formik = useFormik({
        initialValues: {
            feedback: '',
            rating: '0'
        },
        validateOnBlur: true,
         validate: validate,
        onSubmit: () => {           
            const otp= formik.values.feedback;
            const token=formik.values.rating;
            const order={otp,token}
            CustConnection.GiveFeedback(id,order).then((res)=>{
                if(res.data!=0){
                    navigate('/c/ord')
                }
            }).catch((err)=>{
                alert(err)
            })
          
        }
    })


    return (

        <div className="container col-5 mt-5 mb-5">
            <div className='card text-bg-light p-3 '>
                <form
                    onSubmit={formik.handleSubmit}
                >
                    <h3 className='text-center'>Feedback Form</h3>
                    <div className="form-group mb-2">
                        <label className="form-label">OrderId</label>
                        <span class=""
                           
                            name="orderid"
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {id}</span>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">FeedBack</label>
                        <textarea class="form-control"
                            placeholder="Write a Review.."
                            name="feedback"
                            value={formik.values.feedback}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control mt-2 "></textarea>
                            {formik.touched.feedback && formik.errors.feedback ?
                                    <span className="text-danger">{formik.errors.feedback}</span>
                                    : null}
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Rating</label>&nbsp;&nbsp;
                        <select name="rating" value={formik.values.rating}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            
                            className="rounded-pill">
                            <option selected disabled value={'0'}>Select Rating</option>
                            <option value={'1'}>1</option>
                            <option value={'2'}>2</option>
                            <option value={'3'}>3</option>
                            <option value={'4'}>4</option>
                            <option value={'5'}>5</option>
                        </select>
                        {formik.touched.rating && formik.errors.rating ?
                                    <span className="text-danger">{formik.errors.rating}</span>
                                    : null}
                    </div>
                    <div className='d-grid gap-2'>
                        <button className="btn btn-primary mt-4 rounded-pill"
                            type="submit"
                        >Submit</button>
                    </div>
                </form>
                <div className='text-center mt-3'><small><a href=''>
                    Back to dashboard</a></small>
                </div>

            </div>
        </div>


    );
}

export default CFeedback
