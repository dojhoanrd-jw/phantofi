import React from 'react';
import Header from '../Components/header'; 
import SearchBar from '../Components/searchbar'; 
import CreationOptions from '../Components/CreationOptions';
import Recentfiles from '../Components/Recentfile';
import Templates from '../Components/Template';

function DashboardPage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <CreationOptions />
      <Recentfiles />
      <Templates/>
  
      {/* Contenido de la página del dashboard */}
    </div>
  );
}

export default DashboardPage; // Asegúrate de tener esta línea
