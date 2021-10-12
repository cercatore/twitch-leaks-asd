import {exec } from 'child_process'
import arg from 'arg';


export function cli(args) {

    // const args = arg(
    //     {
    //         '--git': Boolean
    //     },
    //     {
    //         rawArgv.slice(2)
    //     }
    // )
    /*  local vars
    *   
    *
    * *********************************************************/
    let tempname = "blabla.zip"
    let rarExec = "C:/Program Files/WinRAR/winrar.exe"
    let credentials = "%USERPROFILE%/desktop/sshtunn/aws-console/claudio_boeba.pem" // args.credentials
    let sshConString = "ubuntu@rairadio.app" //agrs.sshconnect
    const commandLines = [
        `\"${rarExec}\" a -afzip -s -m5 -r ${tempname} .   -x/node_modules -x/.git -x/dns/.git`,
        `ssh -i ${credentials} ${sshConString} "ls -la" `,
        "uid"
    ]
    commandLines.push()
    exec( commandLines[0] , ( error, stdout, stderr)=>{
        if (error) console.log(error)

        console.log(stdout)
    })

    console.log(args);
}