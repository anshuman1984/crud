import React, { useEffect, useState } from 'react'
import { Paper, TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Button, Stack, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import { GetAllCompany, CreateCompany } from '../Redux/ActionCreator';
import { connect, useDispatch, useSelector } from 'react-redux';


const Company = (props) => {
    const [open, setOpen] = useState(false);
    const [id, idChange] = useState(0);
    const [name, nameChange] = useState('');
    const [mail, mailChange] = useState('');
    const [phone, phoneChange] = useState('');
    const [address, addressChange] = useState('');
    const [type, typeChange] = useState('');
    const [agree, agreeChange] = useState(false);

    const dispatch = useDispatch();

    const column = [
        { id: "id", name: "Id" },
        { id: "name", name: "Name" },
        { id: "mail", name: "Mail" },
        { id: "phone", name: "Phone" },
        { id: "address", name: "Address" },
        { id: "type", name: "Type" },
        { id: "action", name: "Action" }
    ]
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        nameChange('');
        mailChange('')
        phoneChange('')
        addressChange('')
        typeChange('')
        agreeChange(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const _obj = { id, name, mail, phone, address, type }
        dispatch(CreateCompany(_obj))
        handleClose()
    }
    useEffect(() => {
        props.loadCompany()
    }, [])
    return (
        <div>
            <Paper sx={{ margin: '1%' }}>
                <div style={{ margin: '1%' }}>
                    <Button variant="contained" onClick={handleOpen}>Add+</Button>
                </div>
                <div style={{ margin: '1%' }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow style={{ backgroundColor: "blue" }}>
                                    {column.map((value) => <TableCell key={value.id} align='center' style={{ color: "white" }}>{value.name}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.companyState.companyList &&
                                    props.companyState.companyList.map((row, i) => {
                                        return (
                                            <TableRow key={i}>
                                                <TableCell align='center'>{row.id}</TableCell>
                                                <TableCell align='center'>{row.name}</TableCell>
                                                <TableCell align='center'>{row.mail}</TableCell>
                                                <TableCell align='center'>{row.phone}</TableCell>
                                                <TableCell align='center'>{row.address}</TableCell>
                                                <TableCell align='center'>{row.type}</TableCell>
                                                <TableCell align='center'>
                                                    <Button variant="contained" color="primary">Edit</Button>
                                                    <Button variant="contained" color="error">Delete</Button>

                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Paper>

            <Dialog open={open} fullWidth maxWidth="sm">
                <DialogTitle>Company Detail</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Stack margin={2} spacing={2}>
                            <TextField
                                autoFocus
                                required
                                error={name.length == 0}
                                id="name"
                                label={column[1].name}
                                type="text"
                                variant="outlined"
                                value={name}
                                onChange={e => nameChange(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                required
                                error={mail.length == 0}
                                id="mail"
                                label={column[2].name}
                                type="email"
                                variant="outlined"
                                value={mail}
                                onChange={e => mailChange(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                required
                                error={phone.length == 0}
                                id="phone"
                                label={column[3].name}
                                type="text"
                                variant="outlined"
                                value={phone}
                                onChange={e => phoneChange(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                required
                                error={phone.length == 0}
                                id="address"
                                label={column[4].name}
                                type="text"
                                variant="outlined"
                                value={address}
                                onChange={e => addressChange(e.target.value)}
                            />
                            <RadioGroup
                                value={type}
                                onChange={e => typeChange(e.target.value)} row>
                                <FormControlLabel value="MNC" control={<Radio color="primary" />} label="MNC" />
                                <FormControlLabel value="Domestic" control={<Radio color="primary" />} label="Domestic" />
                            </RadioGroup>
                            <FormControlLabel checked={agree} onChange={e => agreeChange(e.target.checked)} control={<Checkbox></Checkbox>} label="I agree the term and condition!" />
                        </Stack>
                        <DialogActions>
                            <Button disabled={!agree} variant="contained" color="primary" type='submit'>Submit</Button>
                            <Button variant="outlined" color="primary" onClick={handleClose}>Cancel</Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        companyState: state.company
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        loadCompany: () => dispatch(GetAllCompany())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Company)