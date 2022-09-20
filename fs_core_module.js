// FS_CORE_MODULE::~

//1)readFile:
var fs = require ('fs')
fs.readFile("abc.txt" ,'utf8',
             (err,msg)=>{
                if(err){
                    console.log(err);
                    return;
                }
              console.log(msg)
              }
             )
// Ans=hello word  from "NODE"             

// 2)exists:
var fs =require('fs')
fs.exists("abc.txt",(isExists)=>{console.log(isExists)})
// Ans=true

var fs =require('fs')
fs.stat("abc.txt",(err,msg)=>
               {if(err){
                  console.log(err);return;
                }
                console.log(msg)
            }
            )

//   Ans= Stats {
//   dev: 3225346784,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: 4096,
//   ino: 6755399441114243,
//   size: 23,
//   blocks: 0,
//   atimeMs: 1663603759368.4624,
//   mtimeMs: 1663597538042.8396,
//   ctimeMs: 1663597538042.8396,
//   birthtimeMs: 1663596504165.105,
//   atime: 2022-09-19T16:09:19.368Z,
//   mtime: 2022-09-19T14:25:38.043Z,
//   ctime: 2022-09-19T14:25:38.043Z,
//   birthtime: 2022-09-19T14:08:24.165Z
// }

// 3)appendFile:
var fs = require('fs')
fs.appendFile("abc.txt",'THIS IS MY UPDATED TEXT 3000',
                (err,msg)=>{
                    if(err)
                    {console.log(err);
                    return;}
                console.log(msg) 
               }
               )
// Ans= hello word  from "NODE" THIS IS MY UPDATED TEXT 3000   

// 4)open:
// w for writing 
var fs = require('fs')
fs.open("abc.txt",'w',
            (err,msg)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                  console.log(msg)
                  // saved!!
                  }
                 )
// Ans: 3   or // saved!!  

// 5)close:
var fs = require('fs')
fs.open("abc.txt",
            (err,msg)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                  console.log(msg)
                  // saved!!
                  }
                 )
//Ans= file discriptor:3

// 6)stat:
var fs= require('fs')
fs.stat("abc.txt",(err,stat)=>{
    if(err){
        console.log(err);
        return;
    }
  console.log(stat)
  // saved!!
  }
 )

 //Ans=Stats {
//   dev: 3225346784,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: 4096,
//   ino: 6755399441114243,
//   size: 52,
//   blocks: 0,
//   atimeMs: 1663655991747.8218,
//   mtimeMs: 1663606001716.0227,
//   ctimeMs: 1663606001716.0227,
//   birthtimeMs: 1663596504165.105,
//   atime: 2022-09-20T06:39:51.748Z,
//   mtime: 2022-09-19T16:46:41.716Z,
//   ctime: 2022-09-19T16:46:41.716Z,
//   birthtime: 2022-09-19T14:08:24.165Z
// }