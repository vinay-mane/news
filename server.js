const express = require('express')
const app = express()
const port = process.env.PORT || 80;

app.use(express.static('public'));

const jsondata = {
  data:[
    {
      'image':'/img4.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img5.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img3.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img5.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img4.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img6.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img1.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img2.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img3.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img4.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img5.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    },
    {
      'image':'/img6.jpg',
      'head':'Heading',
      'data':'Jist of news, some explanation, date, author'
    }
  ]
}

app.get('/news',(req,res)=>{
  res.send(jsondata)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

