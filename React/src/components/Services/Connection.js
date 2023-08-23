import axios from "axios";


  var token = `${sessionStorage.getItem('JwtToken')}` 
class Connection{
  constructor(props) {
  
    this.state={
      items:[],
      isLoaded: false,
      redirectToReferrer:false,
      token:''
  }
  }
  
      getServices(){
        return axios.get('http://localhost:8084/api/supplier/getservices',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getToken(user){      
        return axios.post('http://localhost:8084/api/secure/token',user)
      }

       getAllUsers(){
         return axios.get('http://localhost:8084/api/v1/employees')
       }

      savePassword(password){
        return axios.post('http://localhost:8084/api/secure/savepassword',password)
      }
      forgotPass(user){
        return axios.post('http://localhost:8084/api/secure/forgotpassword',user)
      }
      saveCustomer(customer){      
        return axios.post('http://localhost:8084/api/secure/signupcustomer',customer)
      }

      verifyot(user){
        return axios.post('http://localhost:8084/api/secure/verifyotp',user)
      }
      changePassword(user){
        return axios.post('http://localhost:8084/api/secure/changepassword',user,{ headers: {"Authorization" : `Bearer ${token}`} })
      }

    
}
export default new Connection();
