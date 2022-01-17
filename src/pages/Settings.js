import { Box, Button, CircularProgress, Typography } from "@mui/material"
import { useNavigate } from "react-router";
import useAxios from "../components/hooks/useAxios";
import SelectField from "../components/SelectField"
import TextFieldComp from "../components/TextFieldComp";

const Settings = () => {

    const {response, error, loading} = useAxios({ url: "/api_category.php" })

    const history = useNavigate();

    if(loading) {
        return (
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        )
    }

    if(error) {
        return (
            <Typography variant="h6" mt={20} color="red">
                Some Went Wrong
            </Typography>
        )
    }

    const difficultyOptions = [
        { id: "easy",   name: "Easy"},
        { id: "medium",   name: "Medium"},
        { id: "hard",   name: "Hard"},
    ];

    const typeOptions = [
        { id:  "multiple", name: "Multiple Choise"},
        { id: "boolean", name: "True/False" },
    ];

    const handleSubmit = e => {
        e.preventDefault();
        history("/questions");
    }

    return (
        <div>
        <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
            Settings
            <form onSubmit={handleSubmit}> 
                <SelectField options={response.trivia_categories} label="Category"/>
                <SelectField options={difficultyOptions} label="Difficulty"/>
                <SelectField options={typeOptions} label="Type"/>
                <TextFieldComp/>
                <Box mt={3} width="100%">
                    <Button fullWidth variant="contained" type="submit">
                        Get Started
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default Settings
