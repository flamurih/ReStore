import { Button, Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function ServerError() {
    const history = useNavigate();
    const {state}: any = useLocation();
  return (
    <Container component={Paper}>
        {state?.error ? (
            <>
                <Typography variant="h5" gutterBottom>Server Error</Typography>
                <Divider />
                <Typography>{state.error.detail || 'Internal server error'}</Typography>
            </>
        ) : (
                <Typography variant="h5" gutterBottom>Server Error</Typography>
        )}
        <Button onClick={() => history('/catalog')}>Go back te the store</Button>
    </Container>
  );
}
