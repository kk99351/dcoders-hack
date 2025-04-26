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
import { IconButton, ListItemButton, Toolbar } from '@mui/material';
import CellTowerIcon from '@mui/icons-material/CellTower';
import ShareIcon from '@mui/icons-material/Share';
import PointIcon from '@mui/icons-material/MonetizationOn';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LinkIcon from '@mui/icons-material/Link';
import { io } from 'socket.io-client';
import { useEffect } from 'react';

const SOCKET_URL = "http://localhost:3999";
export const socket = io(SOCKET_URL, {
    transports: ['websocket'],
});


export default function CodingPlayground() {
  useEffect(() => {
    socket.on('message', (data) => {
    });

    return () => {
      socket.emit('message', 'message');
    };
  }, []);

  const openProblem = (link) => {
    if (socket.readyState === WebSocket.OPEN) {
      console.log(link)
      socket.send(link);
    }
  }
  return (
    <div style={{backgroundColor: '#141414', width: '100%', minHeight: '100vh'}}>
        <Box sx={{margin: 'auto 10%', padding: '3rem'}}>
            <Toolbar />
            <div>
                <div style={{display:'flex', justifyContent: 'center', gap:'1rem'}}>
                    <Button elevation={0} className='timer inlineTabs' sx={{padding: '0.5rem'}}>
                        <TimerOutlinedIcon style={{marginRight: '0.5rem'}}/>00 : 00 : 27
                    </Button>
                    <Button elevation={0} className='timer inlineTabs' sx={{padding: '0.5rem'}}>
                        End
                    </Button> 
                </div> 
                <Paper elevation={0} style={{padding: '1rem', marginTop: '1rem', backgroundColor: '#1f1f1f', color: '#fff'}}>
                    <Typography variant="body1" style={{marginBottom: '1rem'}}>Problems</Typography>
                    <List sx={{ width: '100%' }}>
                      {[{
                          id: 1, 
                          data: "1. Level Order Traversal of a Binary Tree",
                          link: "https://www.geeksforgeeks.org/problems/level-order-traversal/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article"
                        },
                        {
                          id: 2, 
                          data: "2. Nth Root of a Number using Binary Search",
                          link: "https://www.naukri.com/code360/problems/nth-root-of-m_1062679"
                        },
                        {
                          id: 3, 
                          data: "3. Kth Missing Positive Number", 
                          link: "https://leetcode.com/problems/kth-missing-positive-number/description/"
                        },
                        {
                          id: 4, 
                          data: "4. Allocate Minimum Number of Pages",
                          link: "https://www.naukri.com/code360/problems/allocate-books_1090540"
                        },
                        {
                          id: 5, 
                          data: "5. Count Number of Nodes in a Binary Tree",
                          link: "https://leetcode.com/problems/count-complete-tree-nodes/description/"
                        }
                      ].map((value) => (
                        <ListItemButton
                          sx={{padding: '0.5rem 1rem'}}
                          key={value.id}
                          disableGutters
                          onClick={() => {
                            openProblem(value.link)
                          }}
                        >
                          <ListItemText style={{color: '#bbbbbb'}} >
                            <IconButton aria-label="comment" style={{backgroundColor: '#fff'}}>
                              <LinkIcon />
                            </IconButton>
                            <span style={{marginLeft: '1rem'}}>{value.data}</span>
                          </ListItemText>
                        </ListItemButton>
                      ))}
                    </List>
                </Paper>
            </div>
        </Box>
    </div>
  );
}