import userRoutes from './User/user.routes';

export default app => {
  app.use('/nodeapi/v1/users', userRoutes);
  console.log('in spiroutes');
}
