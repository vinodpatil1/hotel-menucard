import React from 'react'

const CardComman = (props) => {
  return (
    <>
    <div className="col-12 col-md-4">
            <div className="card">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="figur">
                        <img src={props.imgsrc} className="" alt="..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{props.memu}</h5>
                        <p className="card-text"><strong>Discription:</strong> {props.discrip}</p>
                        <p className='d-flex justify-content-between'><strong>Price: {props.pric}</strong> <strong>Discount: {props.disc}</strong></p>
                        <a href="#" className="btn btn-primary">{props.link}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardComman;
