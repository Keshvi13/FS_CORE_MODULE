//CHILD PROCESS CORE MODULE:

const child_process=require('child_process')
const { stdout, stdin } = require('process')
child_process.exec('dir',
                   (err,stdout,stdin)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log(stdout);
                   })

//Ans= Volume in drive C is OS
//  Volume Serial Number is C03E-E2E0

//  Directory of C:\Users\ASUS\Documents\SEM_3\WEB_TECNOLOGY\NODE_PROJECTS\FS_CORE_MODULE

// 20-09-2022  12:20    <DIR>          .
// 19-09-2022  19:32    <DIR>          ..
// 20-09-2022  12:16                52 abc.txt
// 20-09-2022  12:24               385 child_process_core_module.js
// 20-09-2022  12:16             2,950 fs_core_module.js
// 19-09-2022  20:09    <DIR>          node_modules
// 19-09-2022  20:15            26,168 package-lock.json
// 19-09-2022  20:09                57 package.json
//                5 File(s)         29,612 bytes
//                3 Dir(s)  35,309,461,504 bytes free                   