//배포 후 환경이라면 환경변수를 mongo_uri로 설정해준다.
module.exports = {
  mongoURI: process.env.MONGO_URI,
};
