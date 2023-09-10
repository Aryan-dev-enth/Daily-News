import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {

        let {url, title,description,urlImage,source,published}= this.props
        let urlSecondary="https://th.bing.com/th/id/OIP.CT2xzOkr1e0D77V51dvEHgHaE8?pid=ImgDet&rs=1"
        return (
            <div>
                <div className="card" style={{
                    backgroundColor:"black",
                    color:"white",
                    borderColor:"white"
            }}>
                    <img src={urlImage}  className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <i>{source}</i>
                            <br></br>
                            <i >({published})</i>
                            <br></br>
                            <br></br>
                            <a href={url} target="_blank" className="btn btn-sm btn-outline-danger" 
                            
                            >Read-more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
