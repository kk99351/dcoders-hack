import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import codeStudio from '../assets/images/Coding-Ninjas-Logo.jpg'
import hackerRank from '../assets/images/800px-HackerRank_Icon-1000px.png'
import gfg from '../assets/images/unnamed (2).jpg'
import leetcode from '../assets/images/leetcode.png'

export default function QuickLinkCard() {
  const links = [
    {
      'name': 'CodeStudio',
      'img': codeStudio,
      'link': 'https://www.naukri.com/code360/problem-of-the-day'
    },
    {
      'name': 'GeeksForGeeks',
      'img': gfg,
      'link': 'https://www.geeksforgeeks.org/problem-of-the-day'
    },
    {
      'name': 'HackerRank',
      'img': hackerRank,
      'link': 'https://www.hackerrank.com/domains/algorithms'
    },
    {
      'name': 'LeetCode',
      'img': leetcode,
      'link': 'https://leetcode.com/problemset/'
    },
  ]
  return (
    <>
    {links.map((single) => {
        return <Card sx={{ maxWidth: 200}} key={single.name} onClick={() => {
          window.open(single.link, '_blank')
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={single.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {single.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Solve Now
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      })}
    </>
  )
}
