
@echo off
"C:\Program Files\WinRAR\winrar.exe" a -afzip -s -m5 -r blabla.zip .   -x/node_modules -x/.git -x/dns/.git

@echo on

scp -i %USERPROFILE%\desktop\sshtunn\aws-console\macchina_eu-west-2.pem blabla.zip ubuntu@3.8.211.3:~/upload.kikass`date+"%d-%m-%Y"`
