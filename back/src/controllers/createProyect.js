const Proyect = require("../models/proyects");
const AWS = require("aws-sdk");

const acces_aws = process.env.AWS_ACCESS_KEY;
const region_aws = process.env.AWS_REGION;
const secret_aws = process.env.AWS_SECRET_KEY;
module.exports = async (req, res) => {
  const { title, description, skills, video } = req.body;

  try {
    const files = req.files;
    if (!files || files.length === 0) {
      throw new Error("no tiene imagenes del producto");
    }
    //load s3 service
    const s3 = new AWS.S3({
      signatureVersion: "v4",
      accessKeyId: acces_aws,
      secretAccessKey: secret_aws,
      region: region_aws,
    });
    //update files at s3
    const uploadPromises = files.map(async (files) => {
      const params = {
        Bucket: "awsimages-medicamentos",
        Key: `${Date.now()}_${files.originalname}`,
        Body: files.buffer,
        ContentType: files.mimetype,
        ACL: "public-read",
      };

      const result = await s3.upload(params).promise();

      return { url: result.Location };
    });
    //all promises
    const images = await Promise.all(uploadPromises);

    const newProyect = await Proyect.create({
      title,
      description,
      skills,
      video,
      photos: images,
    });
    res.status(201).json(newProyect);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};
