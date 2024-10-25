import React, {useState} from "react";
import { Bar, SearchButton, SearchContainer } from "./Bar.styled";
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
      e.preventDefault();
      if (onSearch) {
        onSearch(searchTerm);
      }
    };
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form onSubmit={handleSearch}>
              <SearchContainer>
                <Bar
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="¿Qué te gustaría ver?"
                />
                <SearchButton type="submit">
                  <FaSearch />
                </SearchButton>
              </SearchContainer>
              </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchBar;