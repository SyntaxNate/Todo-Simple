import { Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import SearchBars from './Search';


const MotionButton = motion(Button);

function MainPage() {
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>

          <h1>
            Main Page</h1>


            <Stack spacing={4}>
                {/* Bounce Effect */}
                <MotionButton 
                    variant="contained"
                    whileTap={{ scale:0.9 }}
                    whileHover={{ y: -4 }}
                    component={Link}
                    to="/search"
                    >
                  Search Bars
                </MotionButton>
              
            
        
                {/* Rotate on Click */}
                <MotionButton
                    variant="outlined"
                    whileTap={{ rotate: 360}}
                >
                  Spin Button 
                </MotionButton>

                {/* Fade + Slide */}
                <MotionButton
                    Variant="contained"
                    whileHover={{ opacity: 0.8, x: 10 }}
                >

                  Slide & Fade    
                </MotionButton>

                {/* Grow on Hover */}
                <MotionButton
                    variant="outlined"
                    whileHover={{ scale: 1.1 }}
                >

                  Grow on Hover
                </MotionButton>
            </Stack>

        </div>
    );
}

  function App() {
    return(
      <Routes>
        {/* Main Page with Button Links */}
        <Route path='/' element={<MainPage />} />

        {/* Search Bars Page */}
        <Route path='/search' element={<SearchBars />} />
      </Routes>
    );
  }

export default App;