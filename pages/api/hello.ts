const hello = (_: any, res: any) => {
  res.status(200).json({ name: "Nasim Uddin" });
};
export default hello;
