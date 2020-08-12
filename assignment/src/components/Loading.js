import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";

export default function Loading() {
  return (
    <Grid container wrap="nowrap">
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <Grid conatiner item xs={3} direction="column" key={item}>
            {" "}
            <Skeleton variant="text" width={210} height={58} />
            <Skeleton variant="circle" width={40} height={40} />
            <Skeleton variant="rect" width={210} height={118} />
          </Grid>
        );
      })}
    </Grid>
  );
}
