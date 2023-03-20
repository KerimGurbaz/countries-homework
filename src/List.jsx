import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const List = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    handleOpen();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="countries">
      {countries.map((country) => {
        return (
          <div
            key={country.name}
            className="country"
            onClick={() => handleCountryClick(country)}
          >
            <h2>{country.name}</h2>
            <div
              className="flag"
              style={{ backgroundImage: `url(${country.flag})` }}
            ></div>
          </div>
        );
      })}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedCountry && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {selectedCountry.name}
              </Typography>
              <div
                className="flag"
                style={{
                  backgroundImage: `url(${selectedCountry.flag})`,
                  //   width: "100px",
                  //   height: "70px",
                }}
              ></div>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Population: {selectedCountry.population}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Capital: {selectedCountry.capital}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Language: {selectedCountry.languages}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
export default List;
