import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const EntryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeData=(index)=>{
    let arr = data;
    arr.splice(index,1)
    setData([...arr]);
  }

  return (
    // Form section
    <>
      <div
        style={{
          textAlign: "Center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} variant="outlined">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data */}
      <div className="data">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((element, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {element.name}
                  </TableCell>
                  <TableCell align="right">{element.email}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={()=>removeData(index)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default EntryForm;
