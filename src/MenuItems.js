import React from 'react'

const MenuItems = ({items}) => {
  return (
    <>
    <section className="course pb-5 pt-3">
        <div className="container-fluid">
            <div className="row">
            
             {items.map((val)=>{

              const {id,imgpath,name,discription,price,discount,link} = val;

                return(
                    <>
                          <div className="col-12 col-md-4" key={id}>
                          <div className="card">
                          <div className="row">
                          <div className="col-12 col-md-4">
                          <div className="figur">
                          <img src={imgpath} className="" alt="..."/>
                          </div>
                          </div>
                          <div className="col-12 col-md-8">
                          <div className="card-body">
                          <h5 className="card-title text-uppercase">{name}</h5>
                          <p className="card-text"><strong>Discription:</strong> {discription}</p>
                          <p className='d-flex justify-content-between'><strong>Price: {price}</strong> <strong>Discount: {discount}</strong></p>
                          <a href="#" className="btn btn-primary">{link}</a>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
                    </>
                )
             })}
           </div>
        </div>
      </section>
    </>
  )
}

export default MenuItems;
