import React, { useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News=(props)=>{
  
   const[articles, setArticles] = useState([])
   const[loading, setLoading] = useState(true)
   const[page, setPage] = useState(1)
   const[totalResults, setTotalresults]  = useState(0)
   


   const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1)
   }
   document.title = ` ${capitalizeFirstLetter(props.category)} News`    
  
  

  const operator= async()=>{
    props.myprogress(10)
    setPage(1)
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${props.myapiKey}&category=${props.category}&page=${page}&pageSize=${props.pagesize}`
    

    const res = await fetch(url);
    props.myprogress(40)
    const data = await res.json();
    props.myprogress(70)
    setArticles(data.articles)
    setTotalresults(data.totalResults)
    setLoading(false)
    props.myprogress(100)
  }
  
  useEffect(()=>{
     //setPage(1)

   operator();
  },[])

  

    const fetchMoreData=async()=>{
      
      let url = `https://newsapi.org/v2/top-headlines?apiKey=${props.myapiKey}&category=${props.category}&page=${page+1}&pageSize=${props.pagesize}`
      //this.setState({loading:true})
      //this.setState({page: this.state.page +1})
      setLoading(true)
      setPage(page+1)

       const res = await fetch(url);
        const data = await res.json();

      setTimeout(() => {
        setArticles(articles.concat(data.articles))
        setTotalresults(data.totalResults)
        setLoading(false)
        
      }, 500);
    }




  

    return (
       <>
       

        
       
        <h3 className="text-center heading" style={{marginTop:"85px"}}>Top {capitalizeFirstLetter(props.category)} Headlines</h3>
         {loading&&<Spinner/>}
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData}
          hasMore={articles.length !== totalResults}
         loader={loading&&<Spinner />}
         >
            <div className='container my-3'>
              <div className='row' >
                {articles.map((element) => {

                  return (element.title) !== "[Removed]" && <div className='col-md-4' key={element.publishedAt} >
                    <NewsItem title={element.title} description={element.description ? element.description.slice(0, 100)+"...." :<i>Description unavailable</i>} date={element.publishedAt} source={element.source.name} imageUrl={element.urlToImage ? element.urlToImage : "./noimage.png"} newsurl={element.url} />
                  </div>
                  //this && statement explained in notes

                })}


              </div>
            </div>  
        </InfiniteScroll>
        



     </> 
    )
  
  }


{/*News.defaultProps = {
  pagesize: 6,
  category: "general"
}*/}
News.propTypes = {
  pagesize: PropTypes.number,
  category: PropTypes.string,
  
}

export default News


