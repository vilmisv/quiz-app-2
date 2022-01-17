import { Box, Button, Typography } from "@mui/material"
import { typography } from "@mui/system"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";


function FinalScreen() {

    const dispatch = useDispatch();
    const { score } = useSelector(state => state);
    const history = useNavigate();

    const handleBackToSettings = () => {
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(50));
        history('/')
    }

    return (
        <Box mt={30}>
            <Typography variant="h3" fontWeight="bold" mb={3}>Final Score {score}</Typography>
            <Button onClick={handleBackToSettings} variant="outlined">Back to settings</Button>
        </Box>
    )
}

export default FinalScreen
