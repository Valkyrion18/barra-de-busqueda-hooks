import React from 'react'

export const MovieCard = ({
    name,
    image
}) => {
    return (
        <div>
            <div className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 270 }}>
                <div className="row no-gutters estilo-card">
                    <div className="col-md-4">
                        <img src={image} className="card-img estilo-imagen" alt={name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title estilo-titulo">{name}</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
