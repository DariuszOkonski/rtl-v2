import React, { useEffect, useState } from 'react';
import './Pets.css';
import Filter from '../Filter/Filter';
import Cards from '../Cards/Cards';
import axios from 'axios';
// import tempCats from '../../mocks/cats.json';

const Pets = () => {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [filters, setFilters] = useState({
    gender: 'any',
  });

  const fetchCats = async () => {
    const response = await axios.get('http://localhost:4000/cats');
    setCats(response.data);
    setFilteredCats(response.data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  useEffect(() => {
    let catsFiltered = [...cats];
    if (filters.gender !== 'any') {
      catsFiltered = catsFiltered.filter(
        (cat) => cat.gender === filters.gender
      );
    }

    setFilteredCats(catsFiltered);
  }, [filters]);

  return (
    <div className='container'>
      <div className='app-container'>
        <Filter filters={filters} setFilters={setFilters} />
        <Cards cats={filteredCats} />
      </div>
    </div>
  );
};

export default Pets;
