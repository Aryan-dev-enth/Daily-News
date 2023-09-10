import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
export class News extends Component {

    static defaultProps = {
        country:"in",
        pageSize:15,
        category:"general"

    }


    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cbf1511b9d9486db1f2d0e49ef74f84&page=${this.state.page}&pageSize=${this.props.size}`

        this.setState({
            loading:true
        })

        const data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({
            loading:false,
            articles: parsedData.articles,
            totalArticles:parsedData.totalResults
        })
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }


    render() {

        let size=this.props.size;
        return (
            <div className='container my-4'>
                <br></br>
                <h1>Daily News - Top Headlines</h1>
                {
                    this.state.loading  && <Loading style={{
                        width:"50px"
                    }}/> 
                }
                <br></br>
                

                <div className="row">
                    {!this.state.loading && this.state.articles.map((article) => {
                        
                        return (
                            <div className='col-md-4' key={article.url} style={{
                                marginTop: "30px"
                            }}>
                                <Newsitem title={article.title} description={article.description} urlImage={article.urlToImage} source={article.author} url={article.url} published={article.publishedAt.split('T')[0]}/>

                            </div>

                        )
                    })}



                </div>
                <div className='d-flex justify-content-between my-3'>
                    <button
                        className="btn btn-dark"
                        type='button'
                        disabled={this.state.page <= 1 ? true : false}
                        onClick={async () => {
                            await this.setState({
                                page: this.state.page - 1
                            })
                            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cbf1511b9d9486db1f2d0e49ef74f84&page=${this.state.page}&pageSize=${size}`;
                            this.setState({
                                loading:true
                            })

                            const data = await fetch(url);
                            let parsedData = await data.json();
                            this.setState({
                                loading:false
                            })
                            this.setState({
                                articles: parsedData.articles
                            })
                        }}


                    > &#8249; Previous</button>
                    <button
                        className="btn btn-dark"
                        type='button'
                        disabled={this.state.page >= Math.ceil(this.state.totalArticles/size) ? true : false}
                        onClick={async () => {
                            await this.setState({
                                page: this.state.page + 1
                            })
                            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cbf1511b9d9486db1f2d0e49ef74f84&page=${this.state.page}&pageSize=${size}`

                            this.setState({
                                loading:true
                            })

                            const data = await fetch(url);
                            let parsedData = await data.json();
                            this.setState({
                                loading:false
                            })
                            this.setState({
                                articles: parsedData.articles
                            })
                        }}

                    >Next &#8250;</button>
                </div>

            </div>
        )
    }
}

export default News
