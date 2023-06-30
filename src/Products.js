import {Link} from "react-router-dom"
import React from "react"

function Products(){
  const products=[
    {
     "MobileName": "I Phone",
     "Brand": "Apple",
     "Model": "14 Pro Max",
     "Catagory": "IOS",
     "batteryCapacity": "3500 MAH",
     "Proccesor": "A 16",
     "Price": "Rs.1,35,000"
    },
    {
     "MobileName": "Samsung",
     "Brand": "Galaxy",
     "Model": "S 23 pro",
     "Catagory": "Android",
     "batteryCapacity": "5000 MAH",
     "Proccesor": "SnapDragon 888 GEN 2",
     "Price": "Rs.1,32,000"
    },
    {
     "MobileName": "Vivo",
     "Brand": "V Series",
     "Model": "V 20 Pro",
     "Catagory": "Android",
     "batteryCapacity": "4400 MAH",
     "Proccesor": "SnapDragon 765",
     "Price": "Rs.24,000"
    },
    {
     "MobileName": "Nokia",
     "Brand": "Lumia",
     "Model": "N 60",
     "Catagory": "Microsoft",
     "batteryCapacity": "2500 MAH",
     "Proccesor": "SnapDragon 500",
     "Price": "Rs.6,000"
    },
    {
    "MobileName": "Oppo",
    "Brand": "Reno",
    "Model": "3 Pro",
    "Catagory": "Android",
    "batteryCapacity": "4500 MAH",
    "Proccesor": "SnapDragon 865",
    "Price": "Rs.36,000"
     }
   ]
   
    return(

        <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Mobile Products</h1>
                        <Link to="/portal/createproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
        </div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                
                                <th>Mobile Name</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Catagory</th>
                                <th>battery Capacity</th>
                                <th>Proccesor</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        
                       <tbody>
                       
                        
                        
                        {products.map((product,index)=>{
                            return <tr key={index}>

                                <td>{product.MobileName}</td>
                                <td>{product.Brand}</td>
                                <td>{product.Model}</td>
                                <td>{product.Catagory}</td>
                                <td>{product.batteryCapacity}</td>
                                <td>{product.Proccesor}</td>
                                <td>{product.Price}</td>

                            </tr>
                        })}
                        </tbody> 
                            
                        
                    </table>
                </div>
            </div>
        </div>
        
        
        </div>


    )
}
export default Products;