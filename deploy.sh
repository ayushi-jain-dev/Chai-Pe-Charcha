npm run build

export AWS_PROFILE=akshay-mobilads

aws s3 cp build/ s3://blogs-website --recursive


