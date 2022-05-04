import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const Main = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/findAll")
            .then(res => {
                console.log(res)
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [])

    const onDeleteHandler = (_id, arrIndex) => {
        console.log('deleting' + arrIndex)
        axios.delete(`http://localhost:8000/api/products/${_id}`)
            .then(res=>{
                console.log(res);
                const copyState = [...products];
                copyState.splice(arrIndex,1)
                setProducts(copyState);
            })
            .catch(err=> {
                console.log(err.response)
            })

    }

    return (
        <div className="w-75 mx-auto">
            <h1 className="title">Here are the products!</h1>
            <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, i) => {
                            return <tr key={i}>
                                <td><Link to={`/products/${item._id}`} className="text-decoration-none">{item.title}</Link></td>
                                <td>$ {item.price}</td>
                                <td>{item.description}</td>
                                <td><Link to={`/products/update/${item._id}`} className="btn btn-primary btn-lg" > Edit</Link> <button onClick={()=>onDeleteHandler(item._id, i)} className="btn btn-danger btn-lg mx-2">Delete</button></td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
            <Link to="/products/create" className="btn btn-success btn-lg">Create a Product</Link>
        </div>
    )
}

export default Main