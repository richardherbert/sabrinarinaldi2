require('dotenv').config();
const ftp = require("basic-ftp")

upload()

async function upload() {
  const client = new ftp.Client()
  client.ftp.verbose = true
  try {
    await client.access({
      host: process.env.FTP_HOST_EN,
      user: process.env.FTP_USER_EN,
      password: process.env.FTP_PASSWORD,
      port: process.env.FTP_DEFAULT_PORT,
      secure: true,
      secureOptions: {
        rejectUnauthorized: false
      }
    })
    console.log(await client.list())
    await client.ensureDir("")
    await client.clearWorkingDir()
    await client.uploadFromDir("public")
  }
  catch(err) {
    console.log(err)
  }
  client.close()
}
