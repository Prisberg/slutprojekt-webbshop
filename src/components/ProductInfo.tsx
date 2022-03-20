
import { 
 Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow, } from "@mui/material";

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
        marginTop: '15rem',
        display: 'flex',
      }} >
      <Table sx={{maxWidth: '30rem', textAlign: 'center',}}>
          <TableBody>
              {rows.map((row) => (
                  <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                          {row.name}
                      </TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
              ))}
          </TableBody>
      </Table>
  </TableContainer>
    );
  }
  
  export default ProductInfo;