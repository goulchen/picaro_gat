# script to install on the remote server looking for vimeo changes
run :
sh install.sh 

if you plan to run it into a docker, to get the outputs of the python script you can add the following to your run command :
docker run --name <docker_name> -a stdin -a stdout -a stderr cron 