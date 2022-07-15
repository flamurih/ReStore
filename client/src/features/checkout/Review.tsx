import { Payments } from "@mui/icons-material";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const products = [
    {
        name: 'Product 1',
        desc: 'A nice thing',
        price: '$9.99',
    },
    {
        name: 'Product 2',
        desc: 'A nice thing',
        price: '$29.99',
    },
    {
        name: 'Product 3',
        desc: 'A nice thing',
        price: '$19.99',
    },
    {
        name: 'Product 4',
        desc: 'A nice thing',
        price: '$39.99',
    },
];

const addresses = ['1 Road to', '2 Road to','3 Road to','4 Road to'];
const payments = [
    { name: 'Card type', detail: 'Visa'},
    { name: 'Card holder', detail: 'Mr John Smith'},
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234'},
    { name: 'Card date', detail: '04/24'},
]
export default function Review() {
    return (
      <>
        <Typography variant="h6" gutterBottom>
            Order Summary
        </Typography>
        <List disablePadding>
        {products.map((product) => (
            <ListItem key={product.name} sx={{py:1 , px: 0}}>
                <ListItemText primary={product.name} secondary={product.desc} />
                <Typography variant="body2">{product.price}</Typography>
            </ListItem>
        ))}
        <ListItem sx={{py:1 , px: 0}}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{fontWeight:700}}>$34.04</Typography>
        </ListItem>
        </List>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                    Shipping
                </Typography>
                <Typography gutterBottom>John Smith</Typography>
                <Typography gutterBottom>{addresses.join(', ')}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                    Payment details
                </Typography>
                <Grid container>
                    {payments.map((payment) => (
                        <React.Fragment key={payment.name}>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{payment.name}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{payment.detail}</Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Grid>
        </Grid>
      </>
    )
  }
  