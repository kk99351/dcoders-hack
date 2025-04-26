import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Checkbox, IconButton, ListItemButton, Toolbar } from '@mui/material';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function APTPlayground() {
  const [checked, setChecked] = React.useState(-1);
  const [questions,setQuestions]= React.useState([])
  const [currentQuestion,setCurrentQuestion] = React.useState(-1)

  React.useEffect(() => {
    setQuestions([
      {
        statement: 'What is the output of the following code?',
        options: [
          "Level Order Traversal of a Binary Tree",
          "Nth Root of a Number using Binary Search",
          "Kth Missing Positive Number",
          "Allocate Minimum Number of Pages"
        ],
        codeText: `console.log("dd");
        console.log("dd");
        let x=5`,
        imageUrl: "https://i.insider.com/5a4bdbd41cbadd4b008b456b?width=800&format=jpeg&auto=webp",
        ans: -1
      },
      {
        statement: 'What is the output of the following code?',
        options: [
          "Level Order Traversal of a Binary Tree",
          "Nth Root of a Number using Binary Search",
          "Kth Missing Positive Number",
          "Allocate Minimum Number of Pages"
        ],
        codeText: null,
        imageUrl: null,
        ans: -1
      }
    ])
    setCurrentQuestion(0)
  },[])

  const handleToggle = (value,currentQuestion) => () => {
    setChecked(value);
  };

  const code = `console.log("dd");
console.log("dd");
let x=5`;
  return (
    <div style={{backgroundColor: '#141414', width: '100%', minHeight: '100vh'}}>
        <Box sx={{margin: 'auto 10%', padding: '3rem', paddingBottom: '6rem'}}>
            <Toolbar />
            <div>
                <div style={{
                  zIndex: '1',
                  width:'100%',
                  display:'flex', 
                  justifyContent: 'center', 
                  gap:'1rem', 
                  position: 'fixed',
                  left: '0', 
                  bottom: '0',
                  backgroundColor: '#141414',
                  padding:'1rem'
                }}
                >
                    <IconButton style={{backgroundColor:'#fff', margin:'0px 3rem'}} onClick={() => {
                      setCurrentQuestion(currentQuestion-1);
                    }} disabled={currentQuestion<=0}>
                      <ChevronLeftIcon />
                    </IconButton>
                    <div>
                      <Button elevation={0} className='timer inlineTabs' sx={{padding: '0.5rem', marginRight:'1rem'}}>
                          <TimerOutlinedIcon style={{marginRight: '0.5rem'}}/>00 : 00 : 27
                      </Button>
                      <Button elevation={0} className='timer inlineTabs' sx={{padding: '0.5rem'}}>
                          Submit
                      </Button> 
                    </div>
                    <IconButton style={{backgroundColor:'#fff', margin:'0px 3rem'}} onClick={() => {
                      setCurrentQuestion(currentQuestion+1);
                    }} disabled={currentQuestion>=questions.length-1}>
                      <ChevronRightIcon />
                    </IconButton>
                </div> 
                {
                  currentQuestion !==-1 &&
                  <Paper elevation={0} style={{padding: '1rem', marginTop: '1rem', backgroundColor: '#1f1f1f', color: '#fff'}}>
                    <Typography variant="body1" style={{marginBottom: '1rem'}}>Problem Statement</Typography>
                    <Typography variant="body1" style={{marginBottom: '1rem', color: '#bbbbbb'}}>{questions[currentQuestion].statement}</Typography>
                    {
                      questions[currentQuestion].codeText !== null &&
                        <CodeMirror
                        style={{color:'black'}}
                        value={code}
                        height="200px"
                        readOnly={true}
                        extensions={[StreamLanguage.define(shell)]}
                      />
                    }
                    {questions[currentQuestion].imageUrl !== null && 
                      <Paper elevation={1} style={{padding: '1rem', marginTop: '1rem', backgroundColor: '#1f1f1f', color: '#fff',}}>
                      <img style={{maxHeight:'300px',margin:'auto'}} src={questions[currentQuestion].imageUrl} alt=""/>
                      </Paper>
                    }
                    <Typography variant="body1" style={{margin: '1rem'}}>Options</Typography>
                    <List sx={{ width: '100%', padding: '1rem'}}>
                      {questions[currentQuestion].options.map((value, index) => {
                          const labelId = `checkbox-list-secondary-label-${index}`;
                          return (
                            <ListItemButton
                              sx={{padding: '0.5rem 1rem'}}
                              key={value}
                              style={{
                                border: checked == index? '0.1rem solid #fff': 'none',
                                padding: checked == index && '0.4rem 1rem'
                              }}
                              disableGutters
                              onClick={handleToggle(index,currentQuestion)}
                            >
                              <ListItemText style={{color: '#bbbbbb'}} >
                              <Checkbox
                                sx={{
                                  color: '#ffffff',
                                  '&.Mui-checked': {
                                    color: '#ffffff',
                                  },
                                }}
                                edge="start"
                                onChange={handleToggle(index)}
                                checked={checked == index}
                                inputProps={{ 'aria-labelledby': labelId }}
                              />
                                <span style={{marginLeft: '1rem'}}>{value}</span>
                              </ListItemText>
                            </ListItemButton>
                          )
                        })}
                    </List>
                </Paper>
                }
            </div>
        </Box>
    </div>
  );
}