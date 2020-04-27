const fs = require("fs")
const S3 = require("aws-sdk/clients/s3")

require("dotenv").config({
  path: ".env",
})

const {
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  S3_BUCKET_NAME,
} = process.env

if (
  !AWS_REGION ||
  !AWS_ACCESS_KEY_ID ||
  !AWS_SECRET_ACCESS_KEY ||
  !S3_BUCKET_NAME
) {
  throw new Error("Missing required ENV vars")
}

const s3 = new S3({
  apiVersion: "2006-03-01",
  region: AWS_REGION,
})

const walkSync = (currentDirPath, callback) => {
  fs.readdirSync(currentDirPath).forEach(function(name) {
    var filePath = path.join(currentDirPath, name)
    var stat = fs.statSync(filePath)
    if (stat.isFile()) {
      callback(filePath, stat)
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback)
    }
  })
}

const uploadDir = (s3Path, bucketName) => {
  walkSync(s3Path, (filePath, stat) => {
    let bucketPath = filePath.substring(s3Path.length + 1)
    let params = {
      Bucket: bucketName,
      Key: bucketPath,
      Body: fs.readFileSync(filePath),
      ACL: "public-read",
    }
    s3.putObject(params, err => {
      if (err) {
        console.log(err)
      } else {
        console.log("Successfully uploaded " + bucketPath + " to " + bucketName)
      }
    })
  })
}

const uploadBundle = async () => {
  const path = `public/`

  uploadDir("public/", S3_BUCKET_NAME)
}

uploadBundle()
