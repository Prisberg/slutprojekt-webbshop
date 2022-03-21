
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";

function createData(name: string, value: any) {
  return { name, value };
}

const rows = [
  createData('Name', 'Rolex'),
  createData('Circumference', '46 mm'),
  createData('Use', 'Have them around your wrist'),
  createData('Back case', 'solid'),
  createData('Glass', 'Diamond glass on top'),
  createData('Thickness', '8 mm'),
  createData('Bracelet', 'steel'),
];

function ProductInfo() {
  return (
    <TableContainer sx={{
      justifyContent: 'center',
      display: 'flex',
      paddingTop: { xs: '6rem', sm: '10rem' },
    }} >
      <Table sx={{
        maxWidth: '30rem', 
        textAlign: 'center', 
        backgroundColor: 'white', 
      }}>
        <Box sx={{ 
        padding: '1rem',
        display: 'flex', 
        justifyContent:'center' }}>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          <Button sx={{
            backgroundColor: 'black',
            color: 'white',
            width: '8rem',
            height: '3rem',
            marginTop: '1rem',
            display: 'block',
            '&:hover': {
              backgroundColor: '#5f5f5f',
              color: '#fff',
            }
          }}>Add to cart</Button>
          </TableBody>
        </Box>
      </Table>
    </TableContainer >

  );
}

export default ProductInfo;