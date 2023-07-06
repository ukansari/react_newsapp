import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';


const News =(props)=> {
   
     const capitalize=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
      const [articles,setArticles]= useState([]);
      const [loading,setLoading]=useState(true);
      const [page,setPage]=useState(1);
      const [totalResults,setTotalResults]=useState(0);
    
        document.title=`${capitalize(props.category)} - News`;
    
   const  updateNews=async()=>{
        props.setProgress(10);
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18cf5e27414c4f2abc1fa48a4df8710d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
           let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
      
        setLoading(true)
      
      let data = await fetch(url);
      props.setProgress(50);
      let parsedData = await data.json()
      props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
    }
    useEffect(()=>{
        updateNews();

    },[]);
    

    const handlePrevClick = async ()=>{
        setPage(page-1)
        updateNews();
    }
    
    const handleNextClick = async ()=>{
   
    setPage(page+1);
    updateNews();
        }
       const fetchMoreData=async()=>{
           const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
           setPage(page+1);
            let data = await fetch(url);
            let parsedData = await data.json()
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);  
            }

                return (
                    <div className="container my-3">
                <h1 className="text-center" style={{margin: '35px 0px' , marginTop:"70px"}}>TopNews -{capitalize(props.category)} Headlines</h1>
                { loading && <Spinner/>}
                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
                <div className='container'>

                <div className="row my-3"> 
                { articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>  
                })} 
                </div>
                </div> 
                </InfiniteScroll>
                
            </div>
        )
        
            }
        News.defaultProps = {
            country: 'in',
            pageSize: 8, 
            category: 'general',
        }
        
        News.propTypes = {
            country: PropTypes.string,
            pageSize: PropTypes.number, 
            category: PropTypes.string,
  }
  
  export default News;