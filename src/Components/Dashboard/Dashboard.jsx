// import * as React from 'react';
// // import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// // import ButtonBase from '@mui/material/ButtonBase';

// // const Img = styled('img')({
// //   margin: 'auto',
// //   display: 'block',
// //   maxWidth: '100%',
// //   maxHeight: '100%',
// // });

// export default function ComplexGrid() {
//   return (
//     <Paper
//       sx={{
//         p: 2,
//         margin: 'auto',
//         maxWidth: 500,
//         flexGrow: 1,
//         backgroundColor: (theme) =>
//           theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//       }} style={{marginTop:"100px", marginLeft:'280px'}}
//     >
//       <Grid container spacing={2} >
//         <Grid item>
//           {/* <ButtonBase sx={{ width: 128, height: 128 }}>
//             <Img alt="complex" src="/static/images/grid/complex.jpg" />
//           </ButtonBase> */}
//         </Grid>
//         <Grid item xs={12} sm container style={{marginTop:"30px"}}>
//           <Grid item xs container direction="column" spacing={2}>
//             <Grid item xs>
//               <Typography gutterBottom variant="subtitle1" component="div">
//                 Standard license
//               </Typography>
//               <Typography variant="body2" gutterBottom>
//                 Full resolution 1920x1080 • JPEG
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 ID: 1030114
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                 Remove
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <Typography variant="subtitle1" component="div">
//               $19.00
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
      
//     </Paper>
    
//   );
// }
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(8),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth:'500%',
}));

function FormRow() {
  return (
    <React.Fragment >
      <Grid item xs={3}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={3}>
        <Item>1tem</Item>
      </Grid>
      <Grid item xs={3}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginLeft:"350px", marginTop:"100px"}}>
         <Grid Item xs={12}> 
      <Grid container spacing={6}>
         
        <Grid container item spacing={6}>
          <FormRow />
        </Grid>
        <Grid container item spacing={6}>
          <FormRow />
        </Grid>
        {/* <Grid container item spacing={3}>
          <FormRow />
        </Grid> */}
     </Grid>
      </Grid>
    </Box>
  );
}

