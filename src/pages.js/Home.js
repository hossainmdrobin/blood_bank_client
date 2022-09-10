import React from 'react';
import Banks from '../components/Banks/Banks';
import Doctors from '../components/Doctors/Doctors';
import Patients from '../components/Patients/Patients';
import Topbanner from '../components/Topbanner/Topbanner';

const Home = () => {
    return (
        <>
          <Topbanner />
          <Banks />
          <Doctors />
          <Patients />
        </>
    );
}

export default Home;
