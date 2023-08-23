import React from 'react'

const SignUp = () => {
    return (
       
        <div>
        <div>

            <div className="container col-8 mt-5 mb-5">


                <div className='card text-bg-light p-1' >
                    <p >
                        <form method="post " className='container-center col-8' >
                            <div class="row">



                            </div>
                            <div class="row">
                                <div className='offset-4'>
                                    <div class="col-md-8">
                                        <div class="tab-content profile-tab" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <h3 className='text-center'>Coustomer_Details</h3><hr></hr>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label class="col-mb-2">Coustomer_Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">Vikas patil</p>
                                                    </div>
                                                </div>


                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">9309716565</p>
                                                    </div>
                                                </div>

                                            </div>


                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Address</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">Patil Vasati,wadegoan road,sangola</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>

                        <div className='text-center mt-3'><button type="button" class="btn btn-outline-primary" style={{
                            width: 300,
                            height: 50,
                            borderRadius: 140 / 2,
                           
                            transform: [
                                { scaleX: 2 }
                            ]
                        }}>Back to Orders</button></div>
            
                    </p>
                </div>
            </div>

        </div>
        
    </div>



    )
}