/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const ProductDetails = ({ item, handleClose }) => {
  const [selectedimg,setselectedimg]=useState(null)
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        {selectedimg ? <img width={300} src={selectedimg} alt="" /> : <img width={300} src={item.attributes.productImg.data[0].attributes.url} alt="" /> }
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">WOMEN'S FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          {item.attributes.productPrice} Da
        </Typography>
        <Typography variant="body1">
          {item.attributes.productDescription}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {item.attributes.productImg.data.map((img) => {
            console.log("Image Data:", img); // Ajoutez cette ligne pour déboguer
            const imageUrl = img.attributes.url;
            return (
              <img
                key={img.url}
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                src={`${imageUrl}`}
                alt=""
                onClick={()=>setselectedimg(imageUrl)}
              />
            );
          })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
