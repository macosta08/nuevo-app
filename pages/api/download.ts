import s3 from 'lib/aws-config';

export default async function handler(req, res) {
  const { bucketName, fileName } = req.query;

  const params = {
    Bucket: bucketName,
    Key: fileName,
  };

  try {
    const data = await s3.getObject(params).promise();
    // res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-Type', data.ContentType);
    res.send(data.Body);
  } catch (error) {
    res
      .status(500)
      .json({ error: ` Error downloading file ${error?.message} ` });
  }
}
