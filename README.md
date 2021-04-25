# Depolying a node express app in AWS EC2 using AWS CodeDeploy

## Usage

To run the project locally, clone the repo and then

```bash
npm i
npm start
```

## Make sure your ec2 (we are using amazon-linux) has the below start script and IAM role attached.

```bash
#!/bin/bash
sudo yum update -y
sudo yum install -y gcc gcc-c++ make openssl-devel git
sudo yum install ruby
sudo yum install wget

cd /home/ec2-user
wget https://bucket-name.s3.region-identifier.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo service codedeploy-agent start

curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install -y nodejs
sudo npm install pm2@latest -g
```

## Refrences
[github actions for ci cd with ec2 codedeploy and s3](https://medium.com/codemonday/github-actions-for-ci-cd-with-ec2-codedeploy-and-s3-e93e75bf1ce0)
