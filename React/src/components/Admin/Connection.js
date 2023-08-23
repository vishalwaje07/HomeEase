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
  
  
      
      getAdminDashboard(){      
        return axios.get('http://localhost:8084/api/customer/admindashboard',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getAdminProfile(){      
        return axios.get('http://localhost:8084/api/customer/getcustomer',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      EditProfile(admin){      
        return axios.put('http://localhost:8084/api/customer/editcustomer',admin,{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getCustomerList(){      
        return axios.get('http://localhost:8084/api/secure/customerslist',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getCustomer(id){      
        return axios.get(`http://localhost:8084/api/customer/customerforadmin/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      EditUser(user){      
        return axios.post('http://localhost:8084/api/secure/edituser',user,{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getSupplierList(){      
        return axios.get('http://localhost:8084/api/secure/supplierslist',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getSupplier(id){      
        return axios.get(`http://localhost:8084/api/supplier/supplierforadmin/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getAdminList(){      
        return axios.get('http://localhost:8084/api/secure/adminlist',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getOrderList(){      
        return axios.get('http://localhost:8084/api/customer/orderslist',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getOrder(id){      
        return axios.get(`http://localhost:8084/api/customer/orderforadmin/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
      }










    
}
export default new Connection();
