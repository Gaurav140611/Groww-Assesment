import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";

const Individual_Bank = () => {
  let { ifsc } = useParams();
  const { data } = useData();
  const rowdata = data.filter((item) => item.ifsc == ifsc)[0];
  return (
    <Box margin={10} mt={30}>
      <Card style={{ backgroundColor: "#e3dcef" }} variant="outlined">
        <Box ml={2}>
          {" "}
          <Typography variant="h4" color="secondary">
            {" "}
            Bank Information{" "}
          </Typography>
        </Box>

        <Divider></Divider>
        <CardContent>
          <Grid container spacing="2">
            <Grid item xs={6}>
              <Typography variant="h5" color="primary">
                <span style={{ color: "black", fontWeight: "600" }}>
                  Bank Name
                </span>
                : {rowdata?.bank_name}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" color="primary">
                <span style={{ color: "black", fontWeight: "600" }}>
                  Bank ID
                </span>
                : {rowdata?.bank_id}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h5" color="primary">
                <span style={{ color: "black", fontWeight: "600" }}>
                  Branch Name
                </span>{" "}
                {rowdata?.branch}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h5" color="primary">
                <span style={{ color: "black", fontWeight: "600" }}>City</span>{" "}
                {rowdata?.city}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" color="primary">
                <span style={{ color: "black", fontWeight: "600" }}>State</span>{" "}
                {rowdata?.state}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" color="primary">
                <span style={{ color: "black", fontWeight: "600" }}>
                  IFSC CODE
                </span>{" "}
                {rowdata?.ifsc}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" color="primary">
                <span style={{ color: "black", fontWeight: "600" }}>
                  Address
                </span>
                : {rowdata?.address}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" color="primary">
                <span style={{ color: "black", fontWeight: "600" }}>
                  District
                </span>
                : {rowdata?.district}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Individual_Bank;
