import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { HttpRequest } from '../../Services/Utils/httpRequest';

interface LibraryInterface{
    id:number,
    name: string,
    last_name: string,
    email: string,
    phone: string,
    cell_phone: string,
    address: string
}

export default function ContactTable(props:any) {
    const [data, setData] = useState<LibraryInterface[]>([]);

    useEffect(() => {
        (async () => {
            const response = await HttpRequest.getData('/api/v1/library/');
            setData(response);
        })();
    }, []);

    const deleteContact = async(contactId:number) => {
        const deleted = await HttpRequest.deleteData('/api/v1/library/'+contactId);
        const response = await HttpRequest.getData('/api/v1/library/');
        setData(response);
    };
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align="right">Teléfono</TableCell>
            <TableCell align="right">Celular</TableCell>
            <TableCell align="right">Dirección</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.cell_phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right"><button onClick={()=>deleteContact(row.id)}>Eliminar</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}