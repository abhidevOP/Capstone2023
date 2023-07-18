import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, Select, MenuItem, TableHead, Button, TableRow, Paper, Typography, Checkbox, styled, InputLabel, FormControl, Box } from '@mui/material';
import NavigationMenu from './NavigationMenu';
import { makeStyles } from '@mui/styles';
import '../CSS files/Pushfota.css';



const useStyles = makeStyles({
    labelMargin: {
        marginTop: 20,
    },
    selectInput: {
        marginTop: 20,
    },
});

export default function Pushfota() {
    const classes = useStyles();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedEnvironment, setSelectedEnvironment] = useState('');

    const handleFileSelect = (file) => {
        const selectedFileIds = selectedFiles.map((selectedFile) => selectedFile.id);

        if (selectedFileIds.includes(file.id)) {
            setSelectedFiles(selectedFiles.filter((selectedFile) => selectedFile.id !== file.id));
        } else {
            setSelectedFiles([...selectedFiles, file]);
        }
    };

    const handleEnvironmentSelect = (event) => {
        setSelectedEnvironment(event.target.value);
    };

    const StyledButton = styled(Button)({
        margin: 'auto',
        width: '160px',
    });

    const handlerefresh = () => {
        // Implement your download logic here
    };

    const handledevice = () => {
        // Implement your getdevice logic here
    };
    const handlepushfota = () => {
        // Implement your getdevice logic here
    };

    const items2 = [
        { id: 1, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
        { id: 2, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
        { id: 3, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
        { id: 4, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
        { id: 5, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
        { id: 6, srno: 'ELM00111', mac: '12345', version: '5.1.1' },
    ];

    return (
        <div>
            <NavigationMenu />
            <div className='main'>
                <div className='header'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Client</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedEnvironment}
                                label="Client"
                                onChange={handleEnvironmentSelect}
                            >
                                <MenuItem value="Development">Development</MenuItem>
                                <MenuItem value="Production">production</MenuItem>
                                <MenuItem value="Testing">testing</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <StyledButton variant="contained" sx={{ marginTop: 1, marginLeft: '16px', backgroundColor: '#0F3F34' }} onClick={handledevice}>
                        GET DEVICE
                    </StyledButton>

                </div>


                <div style={{ width: '100%', maxWidth: '800px', height: '400px', overflow: 'auto' }}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Sr No
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Mac
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Version
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items2.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedFiles.some((selectedFile) => selectedFile.id === item.id)}
                                                onChange={() => handleFileSelect(item)}
                                            />

                                            {item.srno}
                                        </TableCell>
                                        <TableCell>{item.mac}</TableCell>
                                        <TableCell>{item.version}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                    <StyledButton
                        variant="contained"
                        sx={{ backgroundColor: '#0F3F34' }}
                        onClick={handlerefresh}
                    >
                        REFRESH
                    </StyledButton>

                    <StyledButton
                        variant="contained"
                        sx={{ backgroundColor: '#0F3F34',marginLeft: '8px' }}
                        onClick={handlepushfota}
                    >
                        PUSHFOTA
                    </StyledButton>
                </Box>

            </div>
        </div>
    );
}
