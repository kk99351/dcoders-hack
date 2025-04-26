import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Toolbar } from '@mui/material';
import CellTowerIcon from '@mui/icons-material/CellTower';
import ShareIcon from '@mui/icons-material/Share';
import PointIcon from '@mui/icons-material/MonetizationOn';
import { useNavigate } from 'react-router-dom';


export default function ContestsSpecificPage() {
    const navigate = useNavigate()
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            textAlign: 'center'
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
          textAlign: 'center'
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    const rows = [
        {
            'problems': 15,
            'exp': <IconButton aria-label="points" sx={{fontSize: '16px'}} >
                        <PointIcon style={{
                            fontSize: '20px',
                            verticalAlign: 'sub',
                            color: '#ffc147'
                          }} /> 23
                    </IconButton>,
            'startTime': "01-Jan-24",
            'endTime': "12-Jan-24",
            'duration': "30 mins"
        },
      ];

  return (
    <div style={{backgroundColor: '#f5f6fb', width: '100%'}}>
        <Box sx={{margin: 'auto 10%', padding: '3rem'}}>
            <Toolbar />
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <Typography variant="caption" >Special Contest</Typography>
                    <Typography variant="h5">Scholarship Test 1st to 12th Jan</Typography>
                    <Button className='eventRegisterBt eventRegisterMdBig' onClick={() => {
                      navigate('/codingPlayground/contestId/ab12')
                    }}>Go to Contest Now</Button>
                    <ShareIcon style={{marginLeft: '1rem'}}></ShareIcon>
                </div>
                <div>
                    <div style={{ backgroundColor: '#e8f3e8', padding:'0.9rem 1.5rem', borderRadius: '20px'}}>
                        <span style={{fontSize: '0.8rem'}}>Contest is</span>
                        <br></br>
                        <IconButton 
                            style={{
                                backgroundColor: '#65b168', 
                                borderRadius: '10px', 
                                color:'#fff',
                                fontSize: '1.2rem',
                                padding: '0.5rem 3rem'
                                }}>
                            <CellTowerIcon/> <span style={{marginLeft: '1rem'}}>Live Now</span>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div>
                <Paper elevation={0} style={{padding: '1rem', marginTop: '1rem'}}>
                    <Typography variant="body1" style={{marginBottom: '1rem'}}>Scholarship details</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Total Problems</StyledTableCell>
                              <StyledTableCell align="right">Total Exp</StyledTableCell>
                              <StyledTableCell align="right">Start Time</StyledTableCell>
                              <StyledTableCell align="right">End Time</StyledTableCell>
                              <StyledTableCell align="right">Duration</StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <StyledTableRow key={row.problems}>
                                <StyledTableCell component="th" scope="row">
                                  {row.problems}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.exp}</StyledTableCell>
                                <StyledTableCell align="right">{row.startTime}</StyledTableCell>
                                <StyledTableCell align="right">{row.endTime}</StyledTableCell>
                                <StyledTableCell align="right">{row.duration}</StyledTableCell>
                              </StyledTableRow>
                            ))}
                          </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography variant="body2" style={{margin: '1rem', marginTop:'2rem', color:'#707070'}}>
                      Hey you, aspiring coder! Want to make your coding dreams a reality without breaking the bank? Well, have no fear, because Coding Ninjas is here! We're offering a Scholarship Test where you can win up to 100% scholarship on all our courses! And don't worry, everyone gets a minimum of 5% scholarship, so you're already a winner just by registering!
                    </Typography>
                    <Typography variant="body2" style={{margin: '1rem', color:'#707070'}}>
                      The test is only 30 mins long, and if you score in the top 50%, you'll get a whopping 15% scholarship! But wait, it gets even better - if you manage to secure a place in the top 10, you'll receive a 100% scholarship on all our courses! And even if you don't make it to the top 10, you can still snag some exciting scholarship options.
                    </Typography>
                    <Typography variant="body2" style={{margin: '1rem', color:'#707070'}}>
                    So why wait? Register now and take your first step towards coding greatness! Plus, once you complete our courses, you'll get an industry-recognized training certificate to show off to all your friends. We take it seriously and want to make sure everyone has an equal shot at success. So let's do this!
                    </Typography>
                </Paper>
                <Paper elevation={0} style={{padding: '1rem', marginTop: '1rem'}}>
                    <Typography variant="body1" style={{marginBottom: '1rem'}}>Rules</Typography>
                    <ul style={{color:'#707070', listStyle:'initial', fontSize:'0.9rem', padding:'0rem 1rem'}}>
                      <li>
                        You can submit solutions as many times as you'd like, there are no penalties for incorrect submissions. Only your best correct submission will be considered.
                      </li>
                      <li>
                        Those who achieve the score first will be placed higher in the ranklist in case of a tie.
                      </li>
                      <li>
                        Discussing Coding Ninjas Studio contest problems or any aspect of the problem, on any other platform on the web, on identification, could lead to disabling of respective account and banning from the community.
                      </li>
                      <li>
                        Please do not discuss strategy, suggestions, or tips in the comments during a live contest. Posting questions clarifying the problem statement is ok. If you are unsure, feel free email us at ravi.kumar@codingninjas.com
                      </li>
                    </ul>
                    <Paper elevation={0} sx={{padding: '1rem', margin: '1rem', backgroundColor: '#f2f5fd'}}>
                      <Typography variant='body2' sx={{color: "#707070"}}>
                        For any issues and inquiries mail us at
                      </Typography>
                      <Typography variant='body1'>
                        support@codingninjas.com
                      </Typography>
                    </Paper>
                </Paper>
            </div>
        </Box>
    </div>
  );
}