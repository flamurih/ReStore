import { Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";

export default function AddressForm() {
  return (
    <>
        <Typography variant="h6" gutterBottom>
            Shipping address
        </Typography>
        <Grid container spacing ={3}>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-level1"
                variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-level1"
                variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal Code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel 
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
            />
          </Grid>
        </Grid>
    </>
  )
}
