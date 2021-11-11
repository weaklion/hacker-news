import React from 'react';
import Detail from "./Detail";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpansionPanel = (props) => {
  
  const {
    id,
    expand,
    setExpand
  } = props;

  const handleChange = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? `panel_${panel}` : false )
  }

  return (
    <>
      <Accordion expanded={ expand === `panel_${id}`} onChange={handleChange(id)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id={`${id}-content-header`}
        >
          <Typography>{id}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            { expand === `panel_${id}` ?  <Detail id={id} /> : null }            
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default ExpansionPanel;
