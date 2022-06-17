import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useStoreContext } from '../../app/context/StoreContext';
import { currencyFormat } from '../../app/util/util';

export default function BasketSummary() {
    const {basket} = useStoreContext();
    const total = basket?.items.reduce((sum, item) => sum + (item.quantity * item.price),0) ?? 0;

  return (
    <>
        <TableContainer component={Paper} variant={'outlined'}>
            <Table sx={{display:'flex',justifyContent:'flex-end'}}>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={4}><strong>Total</strong></TableCell>
                        <TableCell align='right'><strong>{currencyFormat(total)}</strong></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    
    </>
  )
}
