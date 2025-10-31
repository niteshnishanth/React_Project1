import React from "react";
import axios from "axios";
import {motion, AnimatePresence} from "framer-motion";
import { useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

const CategoryCards = ({ data }) => {
  const [cards, setCards] = React.useState(data);
  useEffect(() => {
    
    setCards(data);
  }, [data]);
  const handleDrop =async(item) => {
           try{
            const response=await axios.post('http://localhost:5000/api/dropcard',{item:item})
            if(response.data.success){
                
                console.log('before',cards)
                setCards((prevCards) => prevCards.filter((card) => card._id !== item._id));
                console.log(cards)
            }
          }
        catch(error){
            console.log(error)
        }
    }
   
  return (
    <MDBContainer className="my-4">
      
      <MDBRow className="g-4">
        <AnimatePresence>
        {cards.map((item, index) => (
          <MDBCol md="4" sm="6" key={index}>
            <motion.div
              initial={{ opacity: 0,y:30}}
              animate={{opacity:1, y:0}}
              exit={{ opacity: 0, y:-20, scale:0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}>
            
            <MDBCard className="h-100 shadow-4-strong hover-shadow">
              <MDBCardImage
                src={item.image}
                position="top"
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText className="text-muted">
                  {item.description}
                </MDBCardText>
                <button onClick={()=>handleDrop(item)} className="btn btn-danger">Drop</button>
              </MDBCardBody>
            </MDBCard>
            </motion.div>
          </MDBCol>
        ))}
        
        </AnimatePresence>
      </MDBRow>
    </MDBContainer>
  );
};

export default CategoryCards;
