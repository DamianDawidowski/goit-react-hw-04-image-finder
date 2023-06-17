import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './App.module.css';
import Modal from './Modal/Modal';
import Error from './Error/Error';

function  App()  {
 
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [error, setError] = useState(null); 
  const [largeImageURL, setLargeImageURL] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(0);
  
  const  toggleModal = () => {
    setShowModal(!showModal) 
    } 
   
    const editModal = ev => { 
    setLargeImageURL( ev.target.dataset.source ); 
     toggleModal();
  };

  useEffect(() => { 
    if (!query) { 
      setPage(1);
    
      setResults([]);
    } else 
    {
    const  getPictures = async () => {  
      setError(null);
      setIsLoading(true); 
      try { 
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=34020653-837b1231ff9ac2e46753275a8&image_type=photo&orientation=horizontal&per_page=12`
        );
        if (response.data.hits.length === 0) {
          setError( `No results found for: ${ query}`);
        }  
       setResults(results => [...results, ...response.data.hits]);
        setNumberOfPages(Math.ceil(response.data.totalHits / 12)); 
   
 
      } catch   {
        setError( 'Please try again.' );
      } finally { 
        setIsLoading(false); 
      }
    };

    getPictures(query, page);
 
  } 
  }, [query, page]);
 
  const  loadMore = () => {
    setPage( page + 1  ) ;
  };
 
  const  getQuery = query => {
    
    setResults([]);
    setQuery(query);
  }; 
    return (
      <div className={css.App}>
        <Searchbar onSubmit={getQuery} />
        {error && <Error errorText={error} />}
        {isLoading && <Loader />}
        {results.length > 0 && (
          <ImageGallery images={results} editModal={ editModal} />
        )}
        {showModal && (
          <Modal largeImageURL={largeImageURL} toggleModal={ toggleModal} />
        )}

        {!isLoading && page <= numberOfPages && (
          <Button loadMore={ loadMore} />
        )}
      </div>
    );
  }
  
export { App };
