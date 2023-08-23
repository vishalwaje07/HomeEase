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
  
  saveSupplier(supplier){      
    return axios.post('http://localhost:8084/api/secure/signupsupplier',supplier)
  }
      getAllServices(){      
        return axios.get('http://localhost:8084/api/supplier/serviceslist')
      }
      getSupplierDashboard(){      
        return axios.get('http://localhost:8084/api/customer/supplierdashboard',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getSupplierProfile(){      
        return axios.get('http://localhost:8084/api/supplier/getsupplier',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      EditProfile(supplier){      
        return axios.put('http://localhost:8084/api/supplier/editsupplier',supplier,{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getSupplierOrders(){      
        return axios.get('http://localhost:8084/api/customer/getsupplierorders',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getOrder(id){      
        return axios.get(`http://localhost:8084/api/customer/getsuporderdetails/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getOrderDetails(id){      
        return axios.get(`http://localhost:8084/api/customer/getsupplierorder/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      AcceptOrder(id){      
        return axios.get(`http://localhost:8084/api/customer/supplieraccept/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      RejectOrder(id){      
        return axios.get(`http://localhost:8084/api/customer/supplierreject/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      CompletedOrder(id){      
        return axios.get(`http://localhost:8084/api/customer/suppliercomplete/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
      }










    
}
export default new Connection();
