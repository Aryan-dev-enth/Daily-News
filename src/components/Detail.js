import React, { Component } from 'react'

export class Detail extends Component {
    
    render() {

        let articles=this.props;


        return (


            <div className='container'>
                {
                    this.articles.map((article) => {
                        if (article.url === "") {
                            return (

                                <div class="card my-3 mb-3" style={{
                                    padding: "30px"
                                }}>

                                    <img src={article.urlToImage} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{article.title}</h5>
                                        <p class="card-text">{article.description}</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                    <a href={article.url} target='_blank' className="btn btn-sm btn-outline-danger"
                                        style={{
                                            maxWidth: "150px",
                                        }}

                                    >Read-more</a>
                                </div>

                            )
                        }
                    })
                }

            </div>
        )
    }
}

export default Detail
